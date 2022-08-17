import { SVGProps } from 'react';

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="10"
    fill="none"
    viewBox="0 0 12 10"
    {...props}
  >
    <path fill="#1C1C28" d="M12 1.667l-8 8L.335 6l.94-.94 2.727 2.72L11.06.727l.94.94z" />
  </svg>
);

export default CheckIcon;
