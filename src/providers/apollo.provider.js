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
    uri: 'https://0951-190-93-143-72.ngrok.io/graphql',
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
    fetchOptions: {
        mode: 'no-cors',
    }
});

export default client;