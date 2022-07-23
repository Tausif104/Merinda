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
      authorization: `Bearer 2280ae7fa06323d4c64872a4081ad922df6ff23fec5e7365b8ef9bc7fd009434c3fcd5789b4f4157ea61bf2322cc3177b937b3c3e12010c163a29dd2aa4651615618c6ed51fe1e01f04d385aa24809c493e856e1a2c5470e692bccc6f70a68cd47c27c77ed95ff1537be76b02b673b91169770b00d0d8b1133165c74bda490fa`,
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
    link: concat(timeStartLink.concat(authMiddleware), httpLink.create({ uri: "https://apexyz.de/graphql" })),
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