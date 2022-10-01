import { Day } from 'dayspan';
import { CalendarDtoV1, CalendarEventDtoV1Response } from '../lib/redux/slices/calendar/types';

export const horizontalScrollBy = (ref: any, size = 0) => {
  ref?.current?.scrollBy({
    top: 0,
    behavior: 'smooth',
    left: size,
  });
};

export const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

export const parsePathname = (pathname: string) => {
  const path = pathname.split('/');

  return {
    path: path[1],
  };
};

export const parseUrlQueryParamsToKeyValuePairs = (queryString: string) => {
  return queryString
    .split(/[?&]/)
    .filter((x) => x.includes('='))
    .map((x) => x.split(/=/))
    .reduce<{ [key: string]: any }>((p, c) => ({ ...p, [c[0]]: c[1] }), {});
};
export function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export const getImageFromS3AsUrl = (currentCoverImageSource: string) => {
  const sourceBaseUrl =
    // eslint-disable-next-line no-constant-condition
    process.env.NODE_ENV === 'development' || 'test'
      ? 'https://impakt-upload-file-data-dev.s3.amazonaws.com/'
      : '';
  const imageUrl = `${sourceBaseUrl}${currentCoverImageSource}`;

  return imageUrl;
};

export const normalizeCalendarDataMap = (data: CalendarDtoV1) => {
  const convertEventDataToStringfy = data.Events.map((c) => {
    return {
      ...c,
      schedule: {
        ...c.schedule,
        duration: 0,
        on: c.schedule.start,
        times: [Day.fromString(c.schedule.start), Day.fromString(c.schedule.end)],
      },
      data: JSON.stringify(c.data),
    };
  });

  const outPutData = { ...data, Events: convertEventDataToStringfy };

  return outPutData;
};

export const normalizeCalendarData = (data: CalendarEventDtoV1Response) => {
  const output = {
    ...data,
    schedule: {
      ...data.schedule,
      duration: 0,
      on: data.schedule.start,
      times: [Day.fromString(data.schedule.start), Day.fromString(data.schedule.end)],
    },
    data: JSON.stringify(data.data),
  };

  return output;
};

export default {};
