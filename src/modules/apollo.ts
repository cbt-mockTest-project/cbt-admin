import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import React from 'react';
import { isServer } from '../lib/utils/utils';

let _apolloClient: ApolloClient<NormalizedCacheObject> | null = null;

const httpLink = createHttpLink({
  uri: 'http://localhost:80/graphql/',
  credentials: 'include',
});

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__';

export const createApolloClient = (cookie: string) => {
  const authLink = setContext(() => ({
    headers: { Cookie: cookie },
  }));
  return new ApolloClient({
    ssrMode: isServer(),
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const initializeApollo = (initialState = {}, token: string) => {
  const client = _apolloClient ?? createApolloClient(token);

  if (initialState) {
    const existCache = client.extract();
    client.cache.restore({ ...existCache, ...initialState });
  }

  // for server side rendering(or generation) always create a new apollo client
  if (isServer()) {
    return client;
  }

  // create apollo client only once.
  if (!_apolloClient) {
    _apolloClient = client;
  }

  return _apolloClient;
};

export const useApollo = (
  initialState: NormalizedCacheObject,
  token: string
) => {
  const store = React.useMemo(
    () => initializeApollo(initialState, token),
    [initialState, token]
  );
  return store;
};

export const addApolloState = (
  client: ApolloClient<NormalizedCacheObject>,
  pageProps: any
) => {
  if (pageProps?.props) {
    pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract();
  }

  return pageProps;
};
