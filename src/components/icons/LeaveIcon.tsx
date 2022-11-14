import { IconProps } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';

const LeaveIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M21.333 0A2.667 2.667 0 0124 2.667V12l-6.667-6.667-1.893 1.88 3.453 3.454H6v2.666h12.893l-3.453 3.454 1.893 1.88L24 12v9.333A2.667 2.667 0 0121.333 24H2.667A2.667 2.667 0 010 21.333V2.667A2.657 2.657 0 012.667 0h18.666z"
      clipRule="evenodd"
    />
  </Icon>
);

export default LeaveIcon;
