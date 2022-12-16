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
import type { GuestV1Dto, HttpExceptionSchema, UpdateGuestV1Dto, CreateGuestV1Dto } from '../types';
import { customInstance } from '../../custom-instance';
import type { ErrorType } from '../../custom-instance';

// eslint-disable-next-line
type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;

export const guestV1ControllerGetGuestById = (
  id: number,
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GuestV1Dto>({ url: `/api/v1/guest/${id}`, method: 'get', signal }, options);
};

export const getGuestV1ControllerGetGuestByIdQueryKey = (id: number) => [`/api/v1/guest/${id}`];

export type GuestV1ControllerGetGuestByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof guestV1ControllerGetGuestById>>
>;
export type GuestV1ControllerGetGuestByIdQueryError = ErrorType<HttpExceptionSchema>;

export const useGuestV1ControllerGetGuestById = <
  TData = Awaited<ReturnType<typeof guestV1ControllerGetGuestById>>,
  TError = ErrorType<HttpExceptionSchema>,
>(
  id: number,
  options?: {
    query?: UseQueryOptions<
      Awaited<ReturnType<typeof guestV1ControllerGetGuestById>>,
      TError,
      TData
    >;
    request?: SecondParameter<typeof customInstance>;
  },
): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getGuestV1ControllerGetGuestByIdQueryKey(id);

  const queryFn: QueryFunction<Awaited<ReturnType<typeof guestV1ControllerGetGuestById>>> = ({
    signal,
  }) => guestV1ControllerGetGuestById(id, requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof guestV1ControllerGetGuestById>>, TError, TData>(
    queryKey,
    queryFn,
    { enabled: !!id, ...queryOptions },
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const guestV1ControllerUpdateGuestById = (
  id: number,
  updateGuestV1Dto: UpdateGuestV1Dto,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GuestV1Dto>(
    {
      url: `/api/v1/guest/${id}`,
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
      data: updateGuestV1Dto,
    },
    options,
  );
};

export type GuestV1ControllerUpdateGuestByIdMutationResult = NonNullable<
  Awaited<ReturnType<typeof guestV1ControllerUpdateGuestById>>
>;
export type GuestV1ControllerUpdateGuestByIdMutationBody = UpdateGuestV1Dto;
export type GuestV1ControllerUpdateGuestByIdMutationError = ErrorType<HttpExceptionSchema>;

export const useGuestV1ControllerUpdateGuestById = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof guestV1ControllerUpdateGuestById>>,
    TError,
    { id: number; data: UpdateGuestV1Dto },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof guestV1ControllerUpdateGuestById>>,
    { id: number; data: UpdateGuestV1Dto }
  > = (props) => {
    const { id, data } = props ?? {};

    return guestV1ControllerUpdateGuestById(id, data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof guestV1ControllerUpdateGuestById>>,
    TError,
    { id: number; data: UpdateGuestV1Dto },
    TContext
  >(mutationFn, mutationOptions);
};
export const guestV1ControllerCreateGuest = (
  createGuestV1Dto: CreateGuestV1Dto,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GuestV1Dto>(
    {
      url: `/api/v1/guest`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createGuestV1Dto,
    },
    options,
  );
};

export type GuestV1ControllerCreateGuestMutationResult = NonNullable<
  Awaited<ReturnType<typeof guestV1ControllerCreateGuest>>
>;
export type GuestV1ControllerCreateGuestMutationBody = CreateGuestV1Dto;
export type GuestV1ControllerCreateGuestMutationError = ErrorType<unknown>;

export const useGuestV1ControllerCreateGuest = <
  TError = ErrorType<unknown>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof guestV1ControllerCreateGuest>>,
    TError,
    { data: CreateGuestV1Dto },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof guestV1ControllerCreateGuest>>,
    { data: CreateGuestV1Dto }
  > = (props) => {
    const { data } = props ?? {};

    return guestV1ControllerCreateGuest(data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof guestV1ControllerCreateGuest>>,
    TError,
    { data: CreateGuestV1Dto },
    TContext
  >(mutationFn, mutationOptions);
};
