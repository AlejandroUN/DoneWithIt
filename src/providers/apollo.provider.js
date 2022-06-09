import {
    ApolloClient,
    InMemoryCache
} from "@apollo/client";

const defaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore',
      mode: "no-cors"
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
      mode: "no-cors"
    },
  }

const client = new ApolloClient({
    uri: 'https://meddit-ag-3fafemp3rq-uc.a.run.app/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    fetchOptions: {
        mode: 'no-cors',
    }
});

export default client;