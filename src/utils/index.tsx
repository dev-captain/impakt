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
export default {};
