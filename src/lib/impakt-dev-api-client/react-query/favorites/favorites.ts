/**
 * Generated by orval v6.10.2 🍺
 * Do not edit manually.
 * Impakt API
 * OpenAPI spec version: 1.0.0
 */
import { useQuery, useMutation } from '@tanstack/react-query';
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey,
} from '@tanstack/react-query';
import type {
  GetFavoriteRes,
  HttpExceptionSchema,
  FavoriteControllerV1GetManyParams,
  CreateFavoriteDto,
  DeleteFavoriteRes,
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

export const favoriteControllerV1GetMany = (
  referenceType: unknown,
  referenceId: number,
  params?: FavoriteControllerV1GetManyParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetFavoriteRes[]>(
    { url: `/api/v1/favorites/${referenceType}/${referenceId}`, method: 'get', params, signal },
    options,
  );
};

export const getFavoriteControllerV1GetManyQueryKey = (
  referenceType: unknown,
  referenceId: number,
  params?: FavoriteControllerV1GetManyParams,
) => [`/api/v1/favorites/${referenceType}/${referenceId}`, ...(params ? [params] : [])];

export type FavoriteControllerV1GetManyQueryResult = NonNullable<
  Awaited<ReturnType<typeof favoriteControllerV1GetMany>>
>;
export type FavoriteControllerV1GetManyQueryError = ErrorType<HttpExceptionSchema>;

export const useFavoriteControllerV1GetMany = <
  TData = Awaited<ReturnType<typeof favoriteControllerV1GetMany>>,
  TError = ErrorType<HttpExceptionSchema>,
>(
  referenceType: unknown,
  referenceId: number,
  params?: FavoriteControllerV1GetManyParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof favoriteControllerV1GetMany>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getFavoriteControllerV1GetManyQueryKey(referenceType, referenceId, params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof favoriteControllerV1GetMany>>> = ({
    signal,
  }) => favoriteControllerV1GetMany(referenceType, referenceId, params, requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof favoriteControllerV1GetMany>>, TError, TData>(
    queryKey,
    queryFn,
    { enabled: !!(referenceType && referenceId), ...queryOptions },
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const favoriteControllerV1CreateOne = (
  referenceType: unknown,
  referenceId: number,
  createFavoriteDto: CreateFavoriteDto,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetFavoriteRes>(
    {
      url: `/api/v1/favorites/${referenceType}/${referenceId}`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createFavoriteDto,
    },
    options,
  );
};

export type FavoriteControllerV1CreateOneMutationResult = NonNullable<
  Awaited<ReturnType<typeof favoriteControllerV1CreateOne>>
>;
export type FavoriteControllerV1CreateOneMutationBody = CreateFavoriteDto;
export type FavoriteControllerV1CreateOneMutationError = ErrorType<HttpExceptionSchema>;

export const useFavoriteControllerV1CreateOne = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof favoriteControllerV1CreateOne>>,
    TError,
    { referenceType: unknown; referenceId: number; data: CreateFavoriteDto },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof favoriteControllerV1CreateOne>>,
    { referenceType: unknown; referenceId: number; data: CreateFavoriteDto }
  > = (props) => {
    const { referenceType, referenceId, data } = props ?? {};

    return favoriteControllerV1CreateOne(referenceType, referenceId, data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof favoriteControllerV1CreateOne>>,
    TError,
    { referenceType: unknown; referenceId: number; data: CreateFavoriteDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const favoriteControllerV1GetOne = (
  referenceType: unknown,
  referenceId: number,
  favoriteId: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetFavoriteRes>(
    {
      url: `/api/v1/favorites/${referenceType}/${referenceId}/${favoriteId}`,
      method: 'get',
      signal,
    },
    options,
  );
};

export const getFavoriteControllerV1GetOneQueryKey = (
  referenceType: unknown,
  referenceId: number,
  favoriteId: number,
) => [`/api/v1/favorites/${referenceType}/${referenceId}/${favoriteId}`];

export type FavoriteControllerV1GetOneQueryResult = NonNullable<
  Awaited<ReturnType<typeof favoriteControllerV1GetOne>>
>;
export type FavoriteControllerV1GetOneQueryError = ErrorType<HttpExceptionSchema>;

export const useFavoriteControllerV1GetOne = <
  TData = Awaited<ReturnType<typeof favoriteControllerV1GetOne>>,
  TError = ErrorType<HttpExceptionSchema>,
>(
  referenceType: unknown,
  referenceId: number,
  favoriteId: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof favoriteControllerV1GetOne>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey =
    queryOptions?.queryKey ??
    getFavoriteControllerV1GetOneQueryKey(referenceType, referenceId, favoriteId);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof favoriteControllerV1GetOne>>> = ({
    signal,
  }) => favoriteControllerV1GetOne(referenceType, referenceId, favoriteId, requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof favoriteControllerV1GetOne>>, TError, TData>(
    queryKey,
    queryFn,
    { enabled: !!(referenceType && referenceId && favoriteId), ...queryOptions },
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const favoriteControllerV1DeleteOne = (
  referenceType: unknown,
  referenceId: number,
  favoriteId: number,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<DeleteFavoriteRes>(
    { url: `/api/v1/favorites/${referenceType}/${referenceId}/${favoriteId}`, method: 'delete' },
    options,
  );
};

export type FavoriteControllerV1DeleteOneMutationResult = NonNullable<
  Awaited<ReturnType<typeof favoriteControllerV1DeleteOne>>
>;

export type FavoriteControllerV1DeleteOneMutationError = ErrorType<HttpExceptionSchema>;

export const useFavoriteControllerV1DeleteOne = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof favoriteControllerV1DeleteOne>>,
    TError,
    { referenceType: unknown; referenceId: number; favoriteId: number },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof favoriteControllerV1DeleteOne>>,
    { referenceType: unknown; referenceId: number; favoriteId: number }
  > = (props) => {
    const { referenceType, referenceId, favoriteId } = props ?? {};

    return favoriteControllerV1DeleteOne(referenceType, referenceId, favoriteId, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof favoriteControllerV1DeleteOne>>,
    TError,
    { referenceType: unknown; referenceId: number; favoriteId: number },
    TContext
  >(mutationFn, mutationOptions);
};
