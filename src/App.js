import React from "react";

import { client } from "./graphql/client";
import { ApolloProvider } from "@apollo/client";
import Layout from "./containers/Layout/Layout";

function App() {
  return (
    <ApolloProvider client={client}>
      <Layout></Layout>
    </ApolloProvider>
  );
}

export default App;
