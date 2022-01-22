import * as React from 'react';
import { SVGProps } from 'react';

const LeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M3.957 8a.99.99 0 0 1 .291-.702l6.098-6.097a.993.993 0 1 1 1.405 1.404L6.355 8.001l5.395 5.395a.993.993 0 0 1-1.404 1.404L4.248 8.703A.99.99 0 0 1 3.958 8Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="rotate(90 7.09 8)" d="M0 0h14.182v14.182H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default LeftIcon;
