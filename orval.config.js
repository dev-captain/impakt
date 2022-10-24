module.exports = {
  impakt: {
    output: {
      mode: 'tags-split',
      target: 'src/lib/impakt-dev-api-client/react-query/client.ts',
      schemas: 'src/lib/impakt-dev-api-client/react-query/types',
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
    hooks: {
      afterAllFilesWrite: ['yarn format'],
    },
  },
};
