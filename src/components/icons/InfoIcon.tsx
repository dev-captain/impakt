import { SVGProps } from 'react';

const InfoIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="1"
      d="M11 7H9V5h2v2zm0 8H9V9h2v6zM10 0a10 10 0 100 20 10 10 0 000-20z"
    />
  </svg>
);

export default InfoIcon;
