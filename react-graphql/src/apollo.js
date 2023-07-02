import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:8080/query', // Replace with your GraphQL server URL
  cache: new InMemoryCache({
    dataIdFromObject: o => (o._id ? `${o.__typename}:${o._id}`: null),
  })
});

export default client;
