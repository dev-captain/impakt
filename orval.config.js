module.exports = {
  impakt: {
    output: {
      mode: 'tags-split',
      target: 'src/lib/impakt-dev-api-client/client.ts',
      schemas: 'src/lib/impakt-dev-api-client/model',
      client: 'react-query',
      mock: true,
      override: {
        mutator: {
          path: 'src/lib/impakt-dev-api-client/custom-instance.ts',
          name: 'customInstance',
        },
      },
    },
    input: {
      target: './node_modules/@impakt-dev/api-client/dist/openapi-spec.json',
    },
  },
};
