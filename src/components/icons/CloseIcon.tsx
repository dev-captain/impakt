import { Icon, IconProps } from '@chakra-ui/react';

const CloseIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="32px"
    height="32px"
    fill="currentColor"
    viewBox="0 0 32 32"
    {...props}
  >
    <path d="M6.572 23.54l16.97-16.97 1.886 1.885-16.97 16.97-1.886-1.885z" />
    <path d="M16 14.666h.01v2.667H16v-2.666z" />
    <path d="M8.457 6.57l16.97 16.97-1.885 1.886-16.97-16.97L8.456 6.57z" />
  </Icon>
);

export default CloseIcon;
