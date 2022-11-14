import { Icon, IconProps } from '@chakra-ui/react';

const MenuIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/Icon"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#728BA3"
      d="M16.667 9.167H3.333A.836.836 0 002.5 10c0 .458.375.833.833.833h13.334A.836.836 0 0017.5 10a.836.836 0 00-.833-.833zM3.333 15h8.334a.836.836 0 00.833-.833.836.836 0 00-.833-.834H3.333a.836.836 0 00-.833.834c0 .458.375.833.833.833zM16.667 5H3.333a.836.836 0 00-.833.833v.009c0 .458.375.833.833.833h13.334a.836.836 0 00.833-.833v-.009A.836.836 0 0016.667 5z"
    />
  </Icon>
);

export default MenuIcon;
