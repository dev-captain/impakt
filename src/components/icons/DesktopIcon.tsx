import * as React from 'react';
import { SVGProps } from 'react';

function DesktopIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="28"
      fill="none"
      viewBox="0 0 30 28"
      {...props}
    >
      <path
        fill="#fff"
        fillOpacity="0.5"
        d="M27 .667H3A2.675 2.675 0 00.333 3.333v16C.333 20.8 1.533 22 3 22h9.333v2.667H11c-.734 0-1.334.6-1.334 1.333s.6 1.333 1.334 1.333h8c.733 0 1.333-.6 1.333-1.333s-.6-1.333-1.333-1.333h-1.334V22H27c1.466 0 2.666-1.2 2.666-2.667v-16c0-1.466-1.2-2.666-2.666-2.666zm-1.334 18.666H4.333C3.6 19.333 3 18.733 3 18V4.667c0-.734.6-1.334 1.333-1.334h21.333c.734 0 1.334.6 1.334 1.334V18c0 .733-.6 1.333-1.334 1.333z"
      />
    </svg>
  );
}

export default DesktopIcon;
