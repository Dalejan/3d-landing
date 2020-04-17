import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const server = "http://localhost:8080/";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${server}graphql`,
  }),
});
