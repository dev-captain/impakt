import * as React from 'react';
import { SVGProps } from 'react';

function MobileIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="30"
      fill="none"
      viewBox="0 0 20 30"
      {...props}
    >
      <path
        fill="#fff"
        fillOpacity="0.5"
        d="M16.666.347L3.333.333A2.663 2.663 0 00.68 3v24a2.663 2.663 0 002.653 2.667h13.333c1.467 0 2.667-1.2 2.667-2.667V3c0-1.467-1.2-2.653-2.667-2.653zm0 23.986H3.333V5.667h13.333v18.666z"
      />
    </svg>
  );
}

export default MobileIcon;
