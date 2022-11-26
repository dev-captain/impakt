import { SVGProps } from 'react';

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="11"
    height="12"
    fill="none"
    viewBox="0 0 11 12"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.5 8.667h4v-4h2.667L5.5 0 .833 4.667H3.5v4zM.833 10h9.334v1.333H.833V10z"
    />
  </svg>
);

export default UploadIcon;
