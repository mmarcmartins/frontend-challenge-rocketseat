
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3333",
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
