import { SVGProps } from 'react';

const GleamIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fill="#fff" fillOpacity="0.6" d="M24 7.03v9.94l-.32.032-11.566-4.859L12 12l12-4.97z" />
    <path
      fill="#fff"
      fillOpacity="0.7"
      d="M24 16.97L16.97 24l-.107-.083L11.96 12.33 12 12l12 4.97z"
    />
    <path fill="#fff" fillOpacity="0.9" d="M12 12l-.265.182-4.747 11.616.042.202h9.94L12 12z" />
    <path fill="#fff" d="M0 16.97l.298-.23 11.437-4.782L12 12 7.03 24 0 16.97z" />
    <path fill="#fff" fillOpacity="0.9" d="M0 7.03l.298-.02 11.537 4.731L12 12 0 16.97V7.03z" />
    <path fill="#fff" fillOpacity="0.8" d="M7.03 0L0 7.03 12 12l.021-.305L7.546.284 7.03 0z" />
    <path fill="#fff" fillOpacity="0.6" d="M7.03 0h9.94L12 12 7.03 0z" />
  </svg>
);

export default GleamIcon;
