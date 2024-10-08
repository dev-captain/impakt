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
  GetChallengeLikesRes,
  HttpExceptionSchema,
  GetLikeRes,
  CreateLikeReq,
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

export const likeControllerGetChallengeLikes = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetChallengeLikesRes>(
    { url: `/api/v1/likes/challenge/${id}`, method: 'get', signal },
    options,
  );
};

export const getLikeControllerGetChallengeLikesQueryKey = (id: number) => [
  `/api/v1/likes/challenge/${id}`,
];

export type LikeControllerGetChallengeLikesQueryResult = NonNullable<
  Awaited<ReturnType<typeof likeControllerGetChallengeLikes>>
>;
export type LikeControllerGetChallengeLikesQueryError = ErrorType<HttpExceptionSchema>;

export const useLikeControllerGetChallengeLikes = <
  TData = Awaited<ReturnType<typeof likeControllerGetChallengeLikes>>,
  TError = ErrorType<HttpExceptionSchema>,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof likeControllerGetChallengeLikes>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getLikeControllerGetChallengeLikesQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof likeControllerGetChallengeLikes>>> = ({
    signal,
  }) => likeControllerGetChallengeLikes(id, requestOptions, signal);

  const query = useQuery<
    Awaited<ReturnType<typeof likeControllerGetChallengeLikes>>,
    TError,
    TData
  >(queryKey, queryFn, { enabled: !!id, ...queryOptions }) as UseQueryResult<TData, TError> & {
    queryKey: QueryKey;
  };

  query.queryKey = queryKey;

  return query;
};

export const likeControllerCreateChallengeLike = (
  createLikeReq: CreateLikeReq,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetLikeRes>(
    {
      url: `/api/v1/likes/challenge`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createLikeReq,
    },
    options,
  );
};

export type LikeControllerCreateChallengeLikeMutationResult = NonNullable<
  Awaited<ReturnType<typeof likeControllerCreateChallengeLike>>
>;
export type LikeControllerCreateChallengeLikeMutationBody = CreateLikeReq;
export type LikeControllerCreateChallengeLikeMutationError = ErrorType<HttpExceptionSchema>;

export const useLikeControllerCreateChallengeLike = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof likeControllerCreateChallengeLike>>,
    TError,
    { data: CreateLikeReq },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof likeControllerCreateChallengeLike>>,
    { data: CreateLikeReq }
  > = (props) => {
    const { data } = props ?? {};

    return likeControllerCreateChallengeLike(data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof likeControllerCreateChallengeLike>>,
    TError,
    { data: CreateLikeReq },
    TContext
  >(mutationFn, mutationOptions);
};
export const likeControllerCreatePostLike = (
  createLikeReq: CreateLikeReq,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetLikeRes>(
    {
      url: `/api/v1/likes/post`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createLikeReq,
    },
    options,
  );
};

export type LikeControllerCreatePostLikeMutationResult = NonNullable<
  Awaited<ReturnType<typeof likeControllerCreatePostLike>>
>;
export type LikeControllerCreatePostLikeMutationBody = CreateLikeReq;
export type LikeControllerCreatePostLikeMutationError = ErrorType<HttpExceptionSchema>;

export const useLikeControllerCreatePostLike = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof likeControllerCreatePostLike>>,
    TError,
    { data: CreateLikeReq },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof likeControllerCreatePostLike>>,
    { data: CreateLikeReq }
  > = (props) => {
    const { data } = props ?? {};

    return likeControllerCreatePostLike(data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof likeControllerCreatePostLike>>,
    TError,
    { data: CreateLikeReq },
    TContext
  >(mutationFn, mutationOptions);
};
