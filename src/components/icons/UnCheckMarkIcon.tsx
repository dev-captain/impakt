import { SVGProps } from 'react';

const UnCheckMarkIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={32} height={32} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M8 1H24V-1H8V1ZM31 8V24H33V8H31ZM24 31H8V33H24V31ZM1 24V8H-1V24H1ZM8 31C4.13401 31 1 27.866 1 24H-1C-1 28.9706 3.02944 33 8 33V31ZM31 24C31 27.866 27.866 31 24 31V33C28.9706 33 33 28.9706 33 24H31ZM24 1C27.866 1 31 4.13401 31 8H33C33 3.02944 28.9706 -1 24 -1V1ZM8 -1C3.02944 -1 -1 3.02944 -1 8H1C1 4.13401 4.13401 1 8 1V-1Z"
      fill="#E4EAF1"
    />
  </svg>
);

export default UnCheckMarkIcon;
