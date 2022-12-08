import { Icon, IconProps } from '@chakra-ui/react';

const DropIcon = (props: IconProps) => (
  <Icon
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4.5 9L12 16.5L19.5 9H4.5Z" fill="currentColor" fillOpacity="1" />
  </Icon>
);

export default DropIcon;
