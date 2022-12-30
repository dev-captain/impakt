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
  IsWhitelistedRes,
  HttpExceptionSchema,
  GetUserRes,
  UserControllerGetUsersParams,
  PostUserReq,
  PatchUserReq,
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

export const userControllerIsWhitelisted = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<IsWhitelistedRes>(
    { url: `/api/v1/iam/user/is-whitelisted`, method: 'get', signal },
    options,
  );
};

export const getUserControllerIsWhitelistedQueryKey = () => [`/api/v1/iam/user/is-whitelisted`];

export type UserControllerIsWhitelistedQueryResult = NonNullable<
  Awaited<ReturnType<typeof userControllerIsWhitelisted>>
>;
export type UserControllerIsWhitelistedQueryError = ErrorType<HttpExceptionSchema>;

export const useUserControllerIsWhitelisted = <
  TData = Awaited<ReturnType<typeof userControllerIsWhitelisted>>,
  TError = ErrorType<HttpExceptionSchema>,
>(options?: {
  query?: UseQueryOptions<Awaited<ReturnType<typeof userControllerIsWhitelisted>>, TError, TData>;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUserControllerIsWhitelistedQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof userControllerIsWhitelisted>>> = ({
    signal,
  }) => userControllerIsWhitelisted(requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof userControllerIsWhitelisted>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions,
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const userControllerGetUsers = (
  params?: UserControllerGetUsersParams,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetUserRes[]>(
    { url: `/api/v1/iam/user`, method: 'get', params, signal },
    options,
  );
};

export const getUserControllerGetUsersQueryKey = (params?: UserControllerGetUsersParams) => [
  `/api/v1/iam/user`,
  ...(params ? [params] : []),
];

export type UserControllerGetUsersQueryResult = NonNullable<
  Awaited<ReturnType<typeof userControllerGetUsers>>
>;
export type UserControllerGetUsersQueryError = ErrorType<HttpExceptionSchema>;

export const useUserControllerGetUsers = <
  TData = Awaited<ReturnType<typeof userControllerGetUsers>>,
  TError = ErrorType<HttpExceptionSchema>,
>(
  params?: UserControllerGetUsersParams,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof userControllerGetUsers>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUserControllerGetUsersQueryKey(params);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof userControllerGetUsers>>> = ({ signal }) =>
    userControllerGetUsers(params, requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof userControllerGetUsers>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions,
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const userControllerCreate = (
  postUserReq: PostUserReq,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetUserRes>(
    {
      url: `/api/v1/iam/user`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: postUserReq,
    },
    options,
  );
};

export type UserControllerCreateMutationResult = NonNullable<
  Awaited<ReturnType<typeof userControllerCreate>>
>;
export type UserControllerCreateMutationBody = PostUserReq;
export type UserControllerCreateMutationError = ErrorType<HttpExceptionSchema>;

export const useUserControllerCreate = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof userControllerCreate>>,
    TError,
    { data: PostUserReq },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof userControllerCreate>>,
    { data: PostUserReq }
  > = (props) => {
    const { data } = props ?? {};

    return userControllerCreate(data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof userControllerCreate>>,
    TError,
    { data: PostUserReq },
    TContext
  >(mutationFn, mutationOptions);
};
export const userControllerGetUser = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetUserRes>(
    { url: `/api/v1/iam/user/${id}`, method: 'get', signal },
    options,
  );
};

export const getUserControllerGetUserQueryKey = (id: number) => [`/api/v1/iam/user/${id}`];

export type UserControllerGetUserQueryResult = NonNullable<
  Awaited<ReturnType<typeof userControllerGetUser>>
>;
export type UserControllerGetUserQueryError = ErrorType<HttpExceptionSchema>;

export const useUserControllerGetUser = <
  TData = Awaited<ReturnType<typeof userControllerGetUser>>,
  TError = ErrorType<HttpExceptionSchema>,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof userControllerGetUser>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUserControllerGetUserQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof userControllerGetUser>>> = ({ signal }) =>
    userControllerGetUser(id, requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof userControllerGetUser>>, TError, TData>(
    queryKey,
    queryFn,
    { enabled: !!id, ...queryOptions },
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const userControllerPatchOne = (
  id: number,
  patchUserReq: PatchUserReq,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetUserRes>(
    {
      url: `/api/v1/iam/user/${id}`,
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
      data: patchUserReq,
    },
    options,
  );
};

export type UserControllerPatchOneMutationResult = NonNullable<
  Awaited<ReturnType<typeof userControllerPatchOne>>
>;
export type UserControllerPatchOneMutationBody = PatchUserReq;
export type UserControllerPatchOneMutationError = ErrorType<HttpExceptionSchema>;

export const useUserControllerPatchOne = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof userControllerPatchOne>>,
    TError,
    { id: number; data: PatchUserReq },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof userControllerPatchOne>>,
    { id: number; data: PatchUserReq }
  > = (props) => {
    const { id, data } = props ?? {};

    return userControllerPatchOne(id, data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof userControllerPatchOne>>,
    TError,
    { id: number; data: PatchUserReq },
    TContext
  >(mutationFn, mutationOptions);
};
export const userControllerGetUserInfo = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetUserRes>(
    { url: `/api/v1/iam/user/user-info/${id}`, method: 'get', signal },
    options,
  );
};

export const getUserControllerGetUserInfoQueryKey = (id: number) => [
  `/api/v1/iam/user/user-info/${id}`,
];

export type UserControllerGetUserInfoQueryResult = NonNullable<
  Awaited<ReturnType<typeof userControllerGetUserInfo>>
>;
export type UserControllerGetUserInfoQueryError = ErrorType<HttpExceptionSchema>;

export const useUserControllerGetUserInfo = <
  TData = Awaited<ReturnType<typeof userControllerGetUserInfo>>,
  TError = ErrorType<HttpExceptionSchema>,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<Awaited<ReturnType<typeof userControllerGetUserInfo>>, TError, TData>;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUserControllerGetUserInfoQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof userControllerGetUserInfo>>> = ({
    signal,
  }) => userControllerGetUserInfo(id, requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof userControllerGetUserInfo>>, TError, TData>(
    queryKey,
    queryFn,
    { enabled: !!id, ...queryOptions },
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};
