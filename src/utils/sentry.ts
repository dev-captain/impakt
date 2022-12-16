import * as Sentry from '@sentry/react';
import { AxiosError } from 'axios';
import { GetUserRes } from '../lib/impakt-dev-api-client/react-query/types';

function getExceptionType(
  err: AxiosError | Error,
): 'Client Exception' | 'Server Exception' | 'Runtime Exception' {
  if (err instanceof AxiosError) {
    return 'Server Exception';
  }

  return 'Client Exception';
}

export function sendExceptionToSentry(
  err: AxiosError | Error,
  member?: GetUserRes | null,
  body?: any,
) {
  if (member) {
    Sentry.setUser({
      id: member.id.toString(),
      email: member.email ?? '',
      isEmailVerified: member.emailVerified,
      username: member.username,
    });
  }
  Sentry.setTag('Exception Type', getExceptionType(err));
  Sentry.captureException(err);
  Sentry.setExtras({ body });
}
