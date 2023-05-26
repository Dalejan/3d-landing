import { ApolloClient, InMemoryCache } from "@apollo/client";

export const server = "https://3d-backend.vercel.app";

export const client = new ApolloClient({
  uri: `${server}/graphql`,
  cache: new InMemoryCache(),
});
