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
      authorization: `Bearer 773c162c2dc66014d079f86f13e8c85e16c11cdc7a064e2a7aab7a01757eb6aa5f960d7e89901b139558ca797e30297be08abe2cf6544c261770f9882566b46ad90d20b8a85888f329a818dc0b09f5f17467ac55f770a700ccb7c5d9544409e012cfe94e9921d3829eb8cc45a15fc3f307e637b81b2d3007250383e7b06720ae`,
    },
  });

  return forward(operation);
});

// <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: concat(authMiddleware, httpLink.create({ uri: "https://content.hanfapex.de/graphql" })),
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