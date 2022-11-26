import { Icon, IconProps } from '@chakra-ui/react';

const HandIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2 12.227S2.667 4.727 4.667 2L8 2.667l-.667 2.06H6V9.5h.667C8 7.453 10.76 6.707 12.427 7.453c2.2 1.02 2 4.094 0 5.454C10.827 14 6 14.953 2 12.227z"
    />
  </Icon>
);

export default HandIcon;
