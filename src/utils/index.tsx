import { createStandaloneToast, ToastId } from '@chakra-ui/react';

import theme, { toastDarkLayout, toastLayout } from '../theme';

const toast = createStandaloneToast({ theme });

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

export const padTo2Digits = (num: number) => {
  return num.toString().padStart(2, '0');
};

export const convertMsToHM = (milliseconds: number) => {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  // 👇️ If you don't want to roll hours over, e.g. 24 to 00
  // 👇️ comment (or remove) the line below
  // commenting next line gets you `24:00:00` instead of `00:00:00`
  // or `36:15:31` instead of `12:15:31`, etc.
  // hours %= 24;

  return { h: padTo2Digits(hours), m: padTo2Digits(minutes), s: padTo2Digits(seconds) };
};

let toastCounter = 0;
let previousMode = '';
let previousToastId: ToastId | undefined = '';

export function renderToast(
  type: 'error' | 'success',
  description: string,
  whiteOrDarkMode: 'white' | 'dark' | undefined = 'white',
) {
  if (toastCounter === 3) {
    // display max 3 toast together
    toastCounter = 0;
    toast.closeAll();
  }

  if (whiteOrDarkMode === 'white' && previousMode === 'dark' && previousToastId) {
    toast.close(previousToastId);
  }

  const toastWillBeDisplayed = toast({
    title: type === 'error' ? 'Error' : 'Success',
    description,
    isClosable: true,
    duration: 8000,
    status: type,
    position: 'top-right',
    variant: 'glass',
    containerStyle: whiteOrDarkMode === 'white' ? toastLayout : toastDarkLayout,
  });

  previousToastId = toastWillBeDisplayed;
  previousMode = whiteOrDarkMode;
  toastCounter += 1;

  return toastWillBeDisplayed;
}

export default {};
