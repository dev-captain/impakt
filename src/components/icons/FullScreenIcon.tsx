import { SVGProps } from 'react';

const FullScreenIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    fill="none"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      fill="#B0C3D6"
      d="M6.5 10.09l1.41 1.41-4.5 4.5H7v2H0v-7h2v3.59l4.5-4.5zM7.91 6.5L6.5 7.91 2 3.41V7H0V0h7v2H3.41l4.5 4.5zm3.59 3.59l4.5 4.5V11h2v7h-7v-2h3.59l-4.5-4.5 1.41-1.41zM10.09 6.5l4.5-4.5H11V0h7v7h-2V3.41l-4.5 4.5-1.41-1.41z"
    />
  </svg>
);

export default FullScreenIcon;
