
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: process.env.GRAPHQL_HOST,
  documents: "queries/**",
  ignoreNoDocuments: true,
  generates: {
    'gql/': {
      preset: "client",
      plugins: []
    }
  },
  config: {
      // Needed to support the updated React Query 5 API
      reactQueryVersion: 5,
      legacyMode: false,
      exposeFetcher: true,
      exposeQueryKeys: true,
      addSuspenseQuery: true,
      // Allows us to specify a custom fetcher function that will leverage
      // Next.js caching fetaures within our generated query hooks.
      fetcher: "./fetcher#fetcher",
    }
};

export default config;
