import { SVGProps } from 'react';

const PinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="15"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M3.833 7.15l-2 .337 6.153-6.154-.336 2m.85 7.921l-.514 1.362 5.129-5.128L11.754 8m-1.203 2.052L14.5 14l-3.949-3.948zm-7.693-3.59l4.103-4.103.157.227a34.81 34.81 0 004.918 5.679l.156.145-3.282 3.282-.146-.156A34.812 34.812 0 003.086 6.62l-.226-.157h-.002z"
    />
    <path
      stroke="#4E6070"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3.833 7.15l-2 .337 6.153-6.154-.336 2m.85 7.921l-.514 1.362 5.129-5.128L11.754 8m-1.203 2.052L14.5 14M2.858 6.462l4.103-4.103.157.227a34.81 34.81 0 004.918 5.679l.156.145-3.282 3.282-.146-.156A34.812 34.812 0 003.086 6.62l-.226-.157h-.002z"
    />
  </svg>
);

export default PinIcon;
