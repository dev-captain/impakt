import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={31}
    fill="none"
    viewBox="0 0 31 31"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 26.067S1.667 7.317 6.667.5L15 2.167l-1.667 5.15H10V19.25h1.667c3.333-5.117 10.233-6.983 14.4-5.117 5.5 2.55 5 10.234 0 13.634C22.067 30.5 10 32.883 0 26.067Z"
      fill="#fff"
    />
  </svg>
);

export default SvgComponent;
