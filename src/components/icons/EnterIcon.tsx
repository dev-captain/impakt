import * as React from 'react';

import { SVGProps } from 'react';

const EnterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M25.3333 4H6.66667C5.18667 4 4 5.18667 4 6.66667V14.6666H16.8933L13.44 11.2133L15.3333 9.33329L22 16L15.3333 22.6666L13.44 20.7733L16.8933 17.3333H4V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V6.66667C28 5.95942 27.719 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3333 4Z"
      fill="currentColor"
    />
  </svg>
);

export default EnterIcon;
