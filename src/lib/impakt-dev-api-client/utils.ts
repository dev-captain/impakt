import { QueryKey, UseQueryOptions } from '@tanstack/react-query';
import { ErrorType } from './custom-instance';
import {
  ExploreGroupRes,
  GetGroupMemberResWithGroupRes,
  HttpExceptionSchema,
} from './react-query/types';

export const getDefaultQueryOptions = <T>() => {
  const query: UseQueryOptions<T, ErrorType<HttpExceptionSchema>, T, QueryKey> = {};

  query.refetchOnWindowFocus = false;
  query.refetchOnMount = false;
  query.retry = 0;

  return query;
};

export const exploreGroupToMyGroupsTransformation = (
  exploreGroup: ExploreGroupRes,
  userId?: number,
) => {
  const obj = { ...exploreGroup } as Partial<ExploreGroupRes>;
  delete obj.Request;

  const transformedObj = {
    groupId: obj.id,
    userId,
    bannedAt: null,
    leftAt: null,
    joinedAt: new Date().toISOString(),
    Group: { ...obj },
  } as GetGroupMemberResWithGroupRes;

  return transformedObj;
};
