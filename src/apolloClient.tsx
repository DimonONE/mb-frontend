import * as React from 'react';
import fetch from 'cross-fetch';
import {
  ApolloClient,
  ApolloLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { createUploadLink } from 'apollo-upload-client';

type GetApolloClientArg = {
  headers?: Record<string, string>
};
type GetApolloClient = (arg?: GetApolloClientArg) => ApolloClient<unknown>;
export const getApolloClient: GetApolloClient = arg => new ApolloClient({
  ssrMode: typeof window === 'undefined',
  link: ApolloLink.from([
    createUploadLink({
      fetch: typeof window === 'undefined' ? fetch : undefined,
      uri: typeof window === 'undefined'
       ? process.env.GRAPH_ENDPOINT
       : '/api/graph',
      credentials: 'same-origin',
      headers: arg?.headers,
    })
  ]),
  cache: new InMemoryCache().restore(
    typeof window === 'undefined'
      ? {}
      : window.__APOLLO_STATE__
  )
});
export const withApolloHooksProvider = <T extends {}>(Component: React.ComponentType<T>) => (
  (props: T) => (
    <ApolloProvider client={getApolloClient()}>
      <Component {...props} />
    </ApolloProvider>
  )
);