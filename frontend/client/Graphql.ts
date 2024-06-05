import { GraphQLClient as GraphQLClientDefault } from "graphql-request";

export const GraphQLClient = new GraphQLClientDefault(process.env.GRAPHQL_HOST!, {fetch, next: { revalidate: 3600 }});