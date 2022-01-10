import * as React from "react";
import { SVGProps } from "react";

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 19.766c5.393 0 9.766-4.373 9.766-9.766S15.393.234 10 .234.234 4.607.234 10 4.607 19.766 10 19.766ZM6.562 8.226H8.59V6.488c0-2.016 1.231-3.114 3.03-3.114.607-.002 1.214.029 1.818.093v2.108h-1.24c-.98 0-1.169.465-1.169 1.148v1.505h2.34l-.305 2.363H11.03v6.037H8.59V10.59H6.563V8.227Z"
      fill="#fff"
      opacity={props.opacity || 0.6}
    />
  </svg>
);

export default FacebookIcon;
