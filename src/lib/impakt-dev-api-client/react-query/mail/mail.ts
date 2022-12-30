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
  GetMailingListRes,
  HttpExceptionSchema,
  CreateMailingListDto,
  UpdateMailingListDto,
  GetMailingListContactRes,
  CreateMailingListContactDto,
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

export const mailingListControllerV1CreateOne = (
  createMailingListDto: CreateMailingListDto,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetMailingListRes>(
    {
      url: `/api/v1/mail/mailing-list`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createMailingListDto,
    },
    options,
  );
};

export type MailingListControllerV1CreateOneMutationResult = NonNullable<
  Awaited<ReturnType<typeof mailingListControllerV1CreateOne>>
>;
export type MailingListControllerV1CreateOneMutationBody = CreateMailingListDto;
export type MailingListControllerV1CreateOneMutationError = ErrorType<HttpExceptionSchema>;

export const useMailingListControllerV1CreateOne = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof mailingListControllerV1CreateOne>>,
    TError,
    { data: CreateMailingListDto },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof mailingListControllerV1CreateOne>>,
    { data: CreateMailingListDto }
  > = (props) => {
    const { data } = props ?? {};

    return mailingListControllerV1CreateOne(data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof mailingListControllerV1CreateOne>>,
    TError,
    { data: CreateMailingListDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const mailingListControllerV1GetMany = (
  options?: SecondParameter<typeof customInstance>,
  signal?: AbortSignal,
) => {
  return customInstance<GetMailingListRes[]>(
    { url: `/api/v1/mail/mailing-list`, method: 'get', signal },
    options,
  );
};

export const getMailingListControllerV1GetManyQueryKey = () => [`/api/v1/mail/mailing-list`];

export type MailingListControllerV1GetManyQueryResult = NonNullable<
  Awaited<ReturnType<typeof mailingListControllerV1GetMany>>
>;
export type MailingListControllerV1GetManyQueryError = ErrorType<HttpExceptionSchema>;

export const useMailingListControllerV1GetMany = <
  TData = Awaited<ReturnType<typeof mailingListControllerV1GetMany>>,
  TError = ErrorType<HttpExceptionSchema>,
>(options?: {
  query?: UseQueryOptions<
    Awaited<ReturnType<typeof mailingListControllerV1GetMany>>,
    TError,
    TData
  >;
  request?: SecondParameter<typeof customInstance>;
}): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {
  const { query: queryOptions, request: requestOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getMailingListControllerV1GetManyQueryKey();

  const queryFn: QueryFunction<Awaited<ReturnType<typeof mailingListControllerV1GetMany>>> = ({
    signal,
  }) => mailingListControllerV1GetMany(requestOptions, signal);

  const query = useQuery<Awaited<ReturnType<typeof mailingListControllerV1GetMany>>, TError, TData>(
    queryKey,
    queryFn,
    queryOptions,
  ) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryKey;

  return query;
};

export const mailingListControllerV1PatchOne = (
  mailingListId: string,
  updateMailingListDto: UpdateMailingListDto,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetMailingListRes>(
    {
      url: `/api/v1/mail/mailing-list/${mailingListId}`,
      method: 'patch',
      headers: { 'Content-Type': 'application/json' },
      data: updateMailingListDto,
    },
    options,
  );
};

export type MailingListControllerV1PatchOneMutationResult = NonNullable<
  Awaited<ReturnType<typeof mailingListControllerV1PatchOne>>
>;
export type MailingListControllerV1PatchOneMutationBody = UpdateMailingListDto;
export type MailingListControllerV1PatchOneMutationError = ErrorType<HttpExceptionSchema>;

export const useMailingListControllerV1PatchOne = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof mailingListControllerV1PatchOne>>,
    TError,
    { mailingListId: string; data: UpdateMailingListDto },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof mailingListControllerV1PatchOne>>,
    { mailingListId: string; data: UpdateMailingListDto }
  > = (props) => {
    const { mailingListId, data } = props ?? {};

    return mailingListControllerV1PatchOne(mailingListId, data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof mailingListControllerV1PatchOne>>,
    TError,
    { mailingListId: string; data: UpdateMailingListDto },
    TContext
  >(mutationFn, mutationOptions);
};
export const mailingListContactControllerV1AddContact = (
  createMailingListContactDto: CreateMailingListContactDto,
  options?: SecondParameter<typeof customInstance>,
) => {
  return customInstance<GetMailingListContactRes>(
    {
      url: `/api/v1/mail/mailing-list/add-contact`,
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      data: createMailingListContactDto,
    },
    options,
  );
};

export type MailingListContactControllerV1AddContactMutationResult = NonNullable<
  Awaited<ReturnType<typeof mailingListContactControllerV1AddContact>>
>;
export type MailingListContactControllerV1AddContactMutationBody = CreateMailingListContactDto;
export type MailingListContactControllerV1AddContactMutationError = ErrorType<HttpExceptionSchema>;

export const useMailingListContactControllerV1AddContact = <
  TError = ErrorType<HttpExceptionSchema>,
  TContext = unknown,
>(options?: {
  mutation?: UseMutationOptions<
    Awaited<ReturnType<typeof mailingListContactControllerV1AddContact>>,
    TError,
    { data: CreateMailingListContactDto },
    TContext
  >;
  request?: SecondParameter<typeof customInstance>;
}) => {
  const { mutation: mutationOptions, request: requestOptions } = options ?? {};

  const mutationFn: MutationFunction<
    Awaited<ReturnType<typeof mailingListContactControllerV1AddContact>>,
    { data: CreateMailingListContactDto }
  > = (props) => {
    const { data } = props ?? {};

    return mailingListContactControllerV1AddContact(data, requestOptions);
  };

  return useMutation<
    Awaited<ReturnType<typeof mailingListContactControllerV1AddContact>>,
    TError,
    { data: CreateMailingListContactDto },
    TContext
  >(mutationFn, mutationOptions);
};
