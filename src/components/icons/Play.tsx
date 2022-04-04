import { SVGProps } from 'react';

const Play = (props: SVGProps<SVGSVGElement>) => (
  <svg width={65} height={65} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M23.758 21.157v22.555c0 1.918 1.332 2.568 2.892 1.658l18.33-11.115c1.593-1.008 1.593-2.568 0-3.478L26.65 19.663c-.487-.326-.91-.423-1.332-.423-.91-.162-1.56.585-1.56 1.918ZM65 32.5C65 50.44 50.44 65 32.5 65 14.56 65 0 50.44 0 32.5 0 14.56 14.56 0 32.5 0 50.44 0 65 14.56 65 32.5Z"
      fill="#F8FAFC"
    />
  </svg>
);

export default Play;
