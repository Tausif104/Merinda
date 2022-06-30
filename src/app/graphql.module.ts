import { NgModule } from '@angular/core';
import { APOLLO_OPTIONS } from 'apollo-angular';
import {
  ApolloClientOptions,
  ApolloLink,
  concat,
  InMemoryCache,
} from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';

const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      authorization: `Bearer 2280ae7fa06323d4c64872a4081ad922df6ff23fec5e7365b8ef9bc7fd009434c3fcd5789b4f4157ea61bf2322cc3177b937b3c3e12010c163a29dd2aa4651615618c6ed51fe1e01f04d385aa24809c493e856e1a2c5470e692bccc6f70a68cd47c27c77ed95ff1537be76b02b673b91169770b00d0d8b1133165c74bda490fa`,
    },
  });

  return forward(operation);
});

// <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: concat(authMiddleware, httpLink.create({ uri: "https://apexyz.de/graphql" })),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}