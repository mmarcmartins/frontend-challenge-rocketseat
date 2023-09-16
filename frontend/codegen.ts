
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:3333",
  documents: "graphql/**",
  generates: {
    'gql/': {
      preset: "client",
      plugins: []
    }
  },
  config: {
    documentMode: 'string',
  },
};

export default config;
