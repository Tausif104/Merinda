import { InjectionToken, NgModule, Inject } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  concat,
  InMemoryCache,
  RequestHandler,
} from '@apollo/client/core';
import { onError } from '@apollo/client/link/error';
import { SubscriptionClient } from 'subscriptions-transport-ws'
import { HttpLink } from 'apollo-angular/http';
import { WebSocketLink } from '@apollo/client/link/ws'
import { environment } from 'src/environments/environment';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { TransferStateService } from './service/transfer-state.service';
import { responseHasError } from './utils/graphql';

const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
const STATE_KEY = makeStateKey<any>('apollo.state');

const timeStartLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: performance.now() })
  return forward(operation)
});

export let ws: any;

const logoutLink = onError((response) => {
  if (location && responseHasError(response)) {
    if (location.pathname !== '/login') {
      localStorage.removeItem('AUTH_TOKEN');
      location.href = '/login';
    }
  }
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  console.log('HEADER');

  const token = localStorage.getItem('AUTH_TOKEN');

  operation.setContext({
    headers: {
      authorization: `Bearer ${token}`,
    },
    authorization: `Bearer ${token}`,
  });

  return forward(operation).map(data => {
    if (environment.debug) {
      const time = performance.now() - operation.getContext()['start'];
      console.log(`operation ${operation.operationName} took ${time / 1000} s to complete`)
    }

    return data;
  });
});

// <-- add the URL of the GraphQL server here
export function createApollo(
  httpLink: HttpLink,
  cache: InMemoryCache,
  transferState: TransferState,
  transferStateService: TransferStateService,
): ApolloClientOptions<any> {
  const isServer = transferStateService.isServer();
  let link;

  if (!isServer) {
    // const state = transferState.get<any>(STATE_KEY, null);
    // cache.restore(state);
    ws = new SubscriptionClient(`${environment.apiWSUrl}/graphql`, {
      reconnect: true,
      connectionParams: () => {
        const token = localStorage.getItem('AUTH_TOKEN');
        const authorization = `Bearer ${token}`;
        return authorization ? { authorization, headers: { authorization } } : {}
      },
    });
    link = new WebSocketLink(ws)
  } else {
    link = httpLink.create({ uri: `${environment.apiUrl}/graphql` });
    transferState.onSerialize(STATE_KEY, () => {
      return cache.extract();
    });
    // Reset cache after extraction to avoid sharing between requests
    cache.reset();
  }

  return {
    link: concat(timeStartLink.concat(authMiddleware.concat(logoutLink)), link),
    cache,
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_CACHE,
      useValue: new InMemoryCache(),
    },
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, APOLLO_CACHE, TransferState, TransferStateService],
    },
  ],
})
export class GraphQLModule { }