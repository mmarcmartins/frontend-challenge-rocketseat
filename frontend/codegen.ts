
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
  }
};

export default config;
