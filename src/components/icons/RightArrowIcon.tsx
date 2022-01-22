import * as React from 'react';
import { SVGProps } from 'react';

const RightArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M12.042 8a.99.99 0 0 1-.291.702l-6.098 6.097a.993.993 0 1 1-1.405-1.404l5.396-5.396L4.25 2.604A.993.993 0 0 1 5.653 1.2l6.098 6.097a.99.99 0 0 1 .29.702Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="rotate(-90 8 7.09)" d="M0 0h14.182v14.182H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default RightArrowIcon;
