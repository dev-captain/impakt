import { Icon, IconProps } from '@chakra-ui/react';

const BackIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="10px"
    height="16px"
    fill="none"
    viewBox="0 0 10 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.262 13.725L3.537 8l5.725-5.737L7.5.5 0 8l7.5 7.5 1.762-1.775z"
    />
  </Icon>
);

export default BackIcon;
