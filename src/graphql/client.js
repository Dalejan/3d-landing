import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const server = "http://192.168.0.14:8080/";

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: `${server}graphql`,
  }),
});
