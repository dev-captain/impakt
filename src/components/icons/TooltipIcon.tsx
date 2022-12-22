import { Icon, IconProps } from '@chakra-ui/react';

const TooltipIcon = (props: IconProps) => (
  <Icon
    width="32px"
    height="32px"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 16C0 7.16344 7.16344 0 16 0C24.8366 0 32 7.16344 32 16C32 24.8366 24.8366 32 16 32C7.16344 32 0 24.8366 0 16Z"
      fill="currentColor"
      fillOpacity="0.1"
    />
    <path
      d="M14.334 10.9998H17.6673V7.6665H14.334V10.9998ZM14.334 24.3332H17.6673V14.3332H14.334V24.3332Z"
      fill="currentColor"
      fillOpacity="0.75"
    />
  </Icon>
);

export default TooltipIcon;
