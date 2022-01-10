import * as React from "react";
import { SVGProps } from "react";

const GoogleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g opacity={props.opacity || 0.6} clipPath="url(#a)" fill="#fff">
      <path d="M4.437 7.542 1.031 5.575a9.944 9.944 0 0 0 .014 8.843l3.392-1.959a6.042 6.042 0 0 1 0-4.917ZM16.56 2.452A9.961 9.961 0 0 0 9.992 0a10.013 10.013 0 0 0-8.308 4.446l3.409 1.969A6.077 6.077 0 0 1 10 3.913c1.468 0 2.814.525 3.865 1.395a.647.647 0 0 0 .87-.043l1.857-1.857a.655.655 0 0 0-.032-.956ZM19.931 8.843a.656.656 0 0 0-.65-.582h-8.194a.652.652 0 0 0-.652.652v2.607c0 .36.292.652.652.652h4.591a6.134 6.134 0 0 1-2.092 2.734l1.95 3.379a10.213 10.213 0 0 0 4.113-5.716 9.626 9.626 0 0 0 .282-3.726ZM12.458 15.562a6.024 6.024 0 0 1-2.458.525 6.075 6.075 0 0 1-4.907-2.501L1.7 15.546C3.486 18.208 6.52 20 10 20c1.573 0 3.07-.385 4.41-1.058l-1.952-3.38Z" />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default GoogleIcon;
