import { GraphQLClient as GraphQLClientDefault } from "graphql-request";

export const GraphQLClient = new GraphQLClientDefault(process.env.GRAPHQL_HOST!);