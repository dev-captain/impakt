import { SVGProps } from 'react';

const CoolIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="14"
    fill="none"
    viewBox="0 0 15 14"
    {...props}
  >
    <path
      fillRule="evenodd"
      fill="currentColor"
      d="M7.5 13.667A6.674 6.674 0 01.835 7v-.133a6.667 6.667 0 116.667 6.8zm-3.06-6.94l-.94.94 2.667 2.666L11.501 5l-.94-.947-4.394 4.394-1.726-1.72z"
    />
  </svg>
);

export default CoolIcon;
