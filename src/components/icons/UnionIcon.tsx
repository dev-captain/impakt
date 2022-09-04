import { Icon, IconProps } from '@chakra-ui/react';

const UnionIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="16px"
    height="16px"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M9.5.5h-3v6h-6v3h6v6h3v-6h6v-3h-6v-6z"
      clipRule="evenodd"
    />
  </Icon>
);

export default UnionIcon;
