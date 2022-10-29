import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { ErrorType } from './custom-instance';
import { HttpExceptionSchema } from './react-query/types';

export const getDefaultQueryOptions = <T>() => {
  const query: UseQueryOptions<T, ErrorType<HttpExceptionSchema>, T, QueryKey> = {};

  query.refetchOnWindowFocus = false;

  return query;
};
