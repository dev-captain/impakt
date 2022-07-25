import * as React from 'react';
import { SVGProps } from 'react';

const HelpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity="0.75"
      d="M7.2 10.797h1.2v1.2H7.2v-1.2zM8 3.96c2.16.088 3.095 2.263 1.824 3.887-.336.4-.872.664-1.144 1.008-.28.344-.28.744-.28 1.144H7.2c0-.68 0-1.248.28-1.648.264-.4.8-.64 1.136-.904.984-.904.728-2.175-.616-2.28-.656 0-1.2.537-1.2 1.208H5.6A2.41 2.41 0 018 3.96zM8 0c-.4 0-.8.152-1.128.472L.474 6.87a1.579 1.579 0 000 2.256l6.398 6.398a1.579 1.579 0 002.256 0l6.398-6.398a1.579 1.579 0 000-2.256L9.128.472A1.601 1.601 0 008 0zm0 1.6l6.398 6.398L8 14.396 1.602 7.998 8 1.6z"
    />
  </svg>
);

export default HelpIcon;
