import * as React from 'react';
import { SVGProps } from 'react';

const RewardIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="#fff"
      fillOpacity="1"
      d="M22 .667c-1.2 0-2.666 1.333-2.666 2.666H8.667C8.667 2 7.2.667 6 .667H.667v12C.667 14 2 15.333 3.334 15.333h2.933c.533 2.667 2.267 4.934 6.4 5.334v2.773c-4 .613-4 3.893-4 3.893h10.667s0-3.28-4-3.893v-2.773c4.133-.4 5.866-2.667 6.4-5.334h2.933c1.333 0 2.667-1.333 2.667-2.666v-12H22zm-16 12H3.334V3.333H6v9.334zm18.667 0H22V3.333h2.667v9.334z"
    />
  </svg>
);

export default RewardIcon;
