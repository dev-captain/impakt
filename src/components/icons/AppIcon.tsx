import { SVGProps } from 'react';

const AppIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 32 32"
    {...props}
  >
    <rect width="32" height="32" fill="#E6FAF6" rx="16" />
    <path
      fill="#53E0C2"
      d="M21 24h-4v-4h4v4zm-6 0h-4v-4h4v4zm6-6h-4v-4h4v4zm-6 0h-4v-4h4v4zm6-6h-4V8h4v4zm-6 0h-4V8h4v4z"
    />
  </svg>
);

export default AppIcon;
