import { SVGProps } from 'react';

const CalenderIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width="32" height="32" fill="#E7ECFF" rx="16" />
    <path
      fill="#5C7FFF"
      d="M21.833 8.5H21V6.833h-1.667V8.5h-6.666V6.833H11V8.5h-.833a1.66 1.66 0 00-1.659 1.667L8.5 21.834a1.667 1.667 0 001.667 1.666h11.666c.917 0 1.667-.75 1.667-1.666V10.167c0-.917-.75-1.667-1.667-1.667zm0 13.334H10.167v-9.167h11.666v9.167zm-10-7.5H16V18.5h-4.167v-4.166z"
    />
  </svg>
);

export default CalenderIcon;
