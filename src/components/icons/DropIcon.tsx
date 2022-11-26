import { SVGProps } from 'react';

const DropIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.5 9L12 16.5L19.5 9H4.5Z" fill="currentColor" fillOpacity="1" />
  </svg>
);

export default DropIcon;
