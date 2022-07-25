import { SVGProps } from 'react';

const EthIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 0L6.25 16.3902L16 22.2439L25.75 16.3902L16 0ZM6.25 18.3415L16 32L25.75 18.3415L16 24.1951L6.25 18.3415Z"
      fill="currentColor"
    />
  </svg>
);

export default EthIcon;
