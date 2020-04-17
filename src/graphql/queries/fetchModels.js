import gql from "graphql-tag";

export const GET_MODELS = gql`
  query getModels {
    models {
      name
      description
      file
    }
  }
`;
