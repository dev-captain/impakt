import { SVGProps } from 'react';

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="27"
    fill="none"
    viewBox="0 0 22 27"
    {...props}
  >
    <path
      fill="currentColor"
      d="M11 26.333c1.466 0 2.666-1.2 2.666-2.666H8.333A2.667 2.667 0 0011 26.333zm8-8v-6.666c0-4.094-2.187-7.52-6-8.427v-.907c0-1.106-.894-2-2-2-1.107 0-2 .894-2 2v.907c-3.827.907-6 4.32-6 8.427v6.666L.333 21v1.333h21.333V21L19 18.333z"
    />
  </svg>
);

export default NotificationIcon;
