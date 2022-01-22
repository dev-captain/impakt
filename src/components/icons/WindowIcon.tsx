import { SVGProps } from 'react';

const WindowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 88 88"
    style={{
      width: 14,
      height: 14,
      display: 'block',
      fill: 'currentColor',
      flexShrink: 0,
      marginRight: 8,
    }}
    className="windowsLogo"
    {...props}
  >
    <path d="m0 12.402 35.687-4.86.016 34.423-35.67.203zm35.67 33.529.028 34.453L.028 75.48.026 45.7zm4.326-39.025L87.314 0v41.527l-47.318.376zm47.33 39.349-.012 41.34-47.318-6.678-.066-34.74z" />
  </svg>
);

export default WindowIcon;
