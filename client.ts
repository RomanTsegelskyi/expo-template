import { GraphQLClient } from "graphql-request";

const API_ENDPOINT = "https://qg37bb3opc.execute-api.eu-central-1.amazonaws.com/test/graphql"

export const graphQLClient = new GraphQLClient(API_ENDPOINT, {
    headers: {
      "x-werz-client": `werz-mobile-admin`,
    },
})
