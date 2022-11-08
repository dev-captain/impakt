import { Icon, IconProps } from '@chakra-ui/react';

const DashboardIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="12"
    fill="none"
    viewBox="0 0 14 12"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="1"
      d="M5.667 11.333v-4h2.667v4h3.333V6h2L7 0 .333 6h2v5.333h3.334z"
    />
  </Icon>
);

export default DashboardIcon;
