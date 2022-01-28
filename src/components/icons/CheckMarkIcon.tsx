import { SVGProps } from 'react';

const CheckMarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={9} height={6} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth={0.7}
      d="M7.824.425a.417.417 0 0 0-.532.046L2.9 4.833 1.009 2.969a.417.417 0 0 0-.587 0 .41.41 0 0 0 0 .583l2.186 2.155L7.824.425Z"
    />
  </svg>
);

export default CheckMarkIcon;
