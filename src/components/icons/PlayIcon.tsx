import * as React from 'react';
import { SVGProps } from 'react';

const PlayIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={10} height={12} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M9 4.268c1.333.77 1.333 2.694 0 3.464l-6 3.464c-1.333.77-3-.192-3-1.732V2.536C0 .996 1.667.034 3 .804l6 3.464Z"
      fill="url(#a)"
    />
    <defs>
      <linearGradient
        id="a"
        x1={12}
        y1={5.167}
        x2={1.189}
        y2={13.085}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DC143C" />
        <stop offset={1} stopColor="#B22222" />
      </linearGradient>
    </defs>
  </svg>
);

export default PlayIcon;
