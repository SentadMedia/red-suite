import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

// import fetch from "node-fetch";

declare global {
  interface Window {
    __APOLLO_STATE__?: any;
  }
}

const GRAPHQL_URI =
  process.env.NODE_ENV === 'production'
    ? 'http://api.sentad.com/graphql'
    : 'http://localhost:8000/graphql';

const httpLink = new HttpLink({
  uri: GRAPHQL_URI,
  //   fetch: fetch,
  credentials: 'include'
});

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      'X-CSRFToken': null
      // 'Authorization': 'Token '.concat(localStorage.getItem('id_token') || null) // TODO enforce authentication
    }
  });
  return forward(operation);
});

// Error handler
const errorLink = onError(({ networkError, graphQLErrors }) => {
  if (graphQLErrors && graphQLErrors.length > 0) {
    const [error] = graphQLErrors;

    if (error.message === 'Login required') {
      window.location.reload();
    }
  }

  if (networkError) {
    console.error('NetworkError');
  }
});

const httpLinkWithMiddleware = authMiddleware.concat(
  errorLink.concat(httpLink)
);

const client = new ApolloClient({
  link: httpLinkWithMiddleware,
  //   cache: new InMemoryCache()
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__)
});

export default client;
