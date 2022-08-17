import { SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M9.5.5h-3v6h-6v3h6v6h3v-6h6v-3h-6v-6z"
      clipRule="evenodd"
    />
  </svg>
);

export default UnionIcon;
