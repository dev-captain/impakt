import { SVGProps } from 'react';

const ClockIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    fill="none"
    viewBox="0 0 14 14"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M.334 7a6.667 6.667 0 006.667 6.667A6.674 6.674 0 0013.667 7 6.667 6.667 0 10.334 7zm6 .667h4V6.333H7.667V3.667H6.334v4z"
      clipRule="evenodd"
    />
  </svg>
);

export default ClockIcon;
