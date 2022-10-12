import { SVGProps } from 'react';

const NotifyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.265 3.193A1.497 1.497 0 0012 2.5c-.83 0-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2v-4.148A5.379 5.379 0 0112.126 6.5a5.35 5.35 0 011.14-3.307zM14 20a2 2 0 11-4 0h4z"
      clipRule="evenodd"
    />
    <path
      fill="#F04153"
      d="M21 6.5c0 1.93-1.57 3.5-3.5 3.5S14 8.43 14 6.5 15.57 3 17.5 3 21 4.57 21 6.5z"
    />
  </svg>
);

export default NotifyIcon;
