import * as React from 'react';
import { SVGProps } from 'react';

function LogOutIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <path
        fill="currentColor"
        d="M7.387 8.393l1.726-1.726H2.667V5.333h6.446L7.387 3.607l.946-.94L11.667 6 8.333 9.333l-.946-.94zM10.667 0A1.333 1.333 0 0112 1.333v3.114l-1.333-1.334v-1.78H1.333v9.334h9.334v-1.78L12 7.553v3.114A1.334 1.334 0 0110.667 12H1.333A1.334 1.334 0 010 10.667V1.333C0 .593.593 0 1.333 0h9.334z"
      />
    </svg>
  );
}

export default LogOutIcon;
