import { IconProps } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';

const CheckIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="12px"
    height="10px"
    fill="none"
    viewBox="0 0 12 10"
    {...props}
  >
    <path fill="currentColor" d="M12 1.667l-8 8L.335 6l.94-.94 2.727 2.72L11.06.727l.94.94z" />
  </Icon>
);

export default CheckIcon;
