import { GraphQLClient as GraphQLClientDefault } from "graphql-request";

export const GraphQLClient = new GraphQLClientDefault(process.env.NEXT_PUBLIC_GRAPHQL_HOST!);