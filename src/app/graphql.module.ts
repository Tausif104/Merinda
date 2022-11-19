import { InjectionToken, NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  concat,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { makeStateKey, TransferState } from '@angular/platform-browser';

const APOLLO_CACHE = new InjectionToken<InMemoryCache>('apollo-cache');
const STATE_KEY = makeStateKey<any>('apollo.state');

const timeStartLink = new ApolloLink((operation, forward) => {
  operation.setContext({ start: performance.now() })
  return forward(operation)
});

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhZ2hhbmd1bmF5QGdtYWlsLmNvbSIsImlhdCI6MTY2ODE2NjcxMSwiZXhwIjoxNjY4MjAyNzExfQ.6cXrQWKMcAuEq870pAFhYVVosZaCR4B3SPvQ5Ss_dAU`,
    },
  });

  return forward(operation).map(data => {
    if (environment.debug) {
      const time = performance.now() - operation.getContext()['start'];
      console.log(`operation ${operation.operationName} took ${time / 1000} s to complete`)
    }

    return data
  });
});

// <-- add the URL of the GraphQL server here
export function createApollo(
  httpLink: HttpLink,
  cache: InMemoryCache,
  transferState: TransferState
): ApolloClientOptions<any> {

  const isBrowser = transferState.hasKey<any>(STATE_KEY);

  if (isBrowser) {
    const state = transferState.get<any>(STATE_KEY, null);
    cache.restore(state);
  } else {
    transferState.onSerialize(STATE_KEY, () => {
      return cache.extract();
    });
    // Reset cache after extraction to avoid sharing between requests
    cache.reset();
  }
  
  return {
    link: concat(timeStartLink.concat(authMiddleware), httpLink.create({ uri: "http://localhost:3000/graphql" })),
    cache,
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
      deps: [HttpLink, APOLLO_CACHE, TransferState],
    },
  ],
})
export class GraphQLModule {}