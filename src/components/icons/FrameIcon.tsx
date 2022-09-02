import { Icon, IconProps } from '@chakra-ui/react';

const FrameIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="24"
    fill="none"
    viewBox="0 0 30 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M27 0H3C1.666 0 .333 1.333.333 2.667v18.666A2.667 2.667 0 003 24h24c1.333 0 2.666-1.333 2.666-2.667V2.667C29.666 1.333 28.333 0 27 0zM5.666 18.667l4.667-6 3.333 4 4.667-6 6 8H5.666z"
    />
  </Icon>
);

export default FrameIcon;
