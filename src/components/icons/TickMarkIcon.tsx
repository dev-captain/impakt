import { Icon, IconProps } from '@chakra-ui/react';

const TickMarkIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="none"
    viewBox="0 0 28 28"
    {...props}
  >
    <path
      fill="#1C1C28"
      d="M14 27.333C6.64 27.325.675 21.36.667 14v-.267C.814 6.406 6.847.57 14.175.668c7.328.097 13.204 6.09 13.156 13.419-.048 7.329-6.002 13.245-13.33 13.246zm-6.12-13.88L6 15.333l5.334 5.333L22 10l-1.88-1.893-8.786 8.786-3.454-3.44z"
    />
  </Icon>
);

export default TickMarkIcon;
