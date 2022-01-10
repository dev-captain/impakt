import * as React from "react";
import { SVGProps } from "react";

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="#fff"
      opacity={props.opacity || 0.6}
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.277 4.882a6.972 6.972 0 0 1-2.002.562 3.498 3.498 0 0 0 1.53-1.937 7.03 7.03 0 0 1-2.214.855c-.642-.7-1.546-1.107-2.571-1.107a3.487 3.487 0 0 0-3.475 3.49c0 .278.033.546.09.798A9.923 9.923 0 0 1 2.44 3.898a3.454 3.454 0 0 0-.472 1.75c0 1.212.61 2.286 1.555 2.896a3.452 3.452 0 0 1-1.587-.407v.025a3.494 3.494 0 0 0 2.799 3.426c-.512.14-1.05.16-1.57.057A3.482 3.482 0 0 0 6.42 14.07a6.934 6.934 0 0 1-4.337 1.497c-.276 0-.553-.016-.83-.049a9.882 9.882 0 0 0 5.355 1.57c6.412 0 9.936-5.321 9.936-9.935 0-.155 0-.301-.009-.456a6.976 6.976 0 0 0 1.742-1.815Z"
    />
  </svg>
);

export default TwitterIcon;
