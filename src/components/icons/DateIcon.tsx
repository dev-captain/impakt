import { SVGProps } from 'react';

const DateIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16px"
    height="16px"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#728BA3"
      d="M15.833 2.5H15V.833h-1.667V2.5H6.667V.833H5V2.5h-.833a1.66 1.66 0 00-1.659 1.667L2.5 15.833A1.667 1.667 0 004.167 17.5h11.666c.917 0 1.667-.75 1.667-1.667V4.167c0-.917-.75-1.667-1.667-1.667zm0 13.333H4.167V6.667h11.666v9.166zm-10-7.5H10V12.5H5.833V8.333z"
    />
  </svg>
);

export default DateIcon;
