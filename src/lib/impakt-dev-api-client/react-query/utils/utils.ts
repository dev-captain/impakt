/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery } from '@tanstack/react-query';
import type {
  UseQueryOptions,
  QueryFunction,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import type {
  CheckFieldResV1,
  UtilsControllerV1CheckFreeFieldsParams,
  CheckFieldResV2,
  UtilsControllerV2CheckFreeFieldsParams,
} from '../types';
import { customInstance } from '../../custom-instance';
import type { ErrorType } from '../../custom-instance';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const utilsControllerV1CheckFreeFields = (
  params?: UtilsControllerV1CheckFreeFieldsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<CheckFieldResV1>(
    { url: `/api/v1/iam/utils/check-free-fields`, method: 'get', params, signal },
    options,
  );
};

export const getUtilsControllerV1CheckFreeFieldsQueryKey = (
  params?: UtilsControllerV1CheckFreeFieldsParams,
) => [`/api/v1/iam/utils/check-free-fields`, ...(params ? [params] : [])];

export type UtilsControllerV1CheckFreeFieldsQueryResult = NonNullable<
  Awaited<ReturnType<typeof utilsControllerV1CheckFreeFields>>
>;
export type UtilsControllerV1CheckFreeFieldsQueryError = ErrorType<unknown>;

export const useUtilsControllerV1CheckFreeFields = <
  TData = Awaited<ReturnType<typeof utilsControllerV1CheckFreeFields>>,
  TError = ErrorType<unknown>,
>(
  params?: UtilsControllerV1CheckFreeFieldsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof utilsControllerV1CheckFreeFields>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUtilsControllerV1CheckFreeFieldsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof utilsControllerV1CheckFreeFields>>> = ({
    signal,
  }) => utilsControllerV1CheckFreeFields(params, requestOptions, signal);

  const query = useQuery<
    Awaited<ReturnType<typeof utilsControllerV1CheckFreeFields>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const utilsControllerV2CheckFreeFields = (
  params?: UtilsControllerV2CheckFreeFieldsParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<CheckFieldResV2>(
    { url: `/api/v2/iam/utils/check-free-fields`, method: 'get', params, signal },
    options,
  );
};

export const getUtilsControllerV2CheckFreeFieldsQueryKey = (
  params?: UtilsControllerV2CheckFreeFieldsParams,
) => [`/api/v2/iam/utils/check-free-fields`, ...(params ? [params] : [])];

export type UtilsControllerV2CheckFreeFieldsQueryResult = NonNullable<
  Awaited<ReturnType<typeof utilsControllerV2CheckFreeFields>>
>;
export type UtilsControllerV2CheckFreeFieldsQueryError = ErrorType<unknown>;

export const useUtilsControllerV2CheckFreeFields = <
  TData = Awaited<ReturnType<typeof utilsControllerV2CheckFreeFields>>,
  TError = ErrorType<unknown>,
>(
  params?: UtilsControllerV2CheckFreeFieldsParams,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof utilsControllerV2CheckFreeFields>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUtilsControllerV2CheckFreeFieldsQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof utilsControllerV2CheckFreeFields>>> = ({
    signal,
  }) => utilsControllerV2CheckFreeFields(params, requestOptions, signal);

  const query = useQuery<
    Awaited<ReturnType<typeof utilsControllerV2CheckFreeFields>>,
    TError,
    TData
  >(queryKey, queryFn, queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};
