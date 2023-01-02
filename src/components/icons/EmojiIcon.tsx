import { SVGProps } from 'react';

const EmojiIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10 0C4.47 0 0 4.5 0 10A10 10 0 1010 0zm3.5 6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-7 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm3.5 9.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.81 2.04-2.78 3.5-5.11 3.5z"
    />
  </svg>
);

export default EmojiIcon;
