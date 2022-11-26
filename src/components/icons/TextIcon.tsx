import { Icon, IconProps } from '@chakra-ui/react';

const TextIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#728BA3"
      d="M4.167 4.583c0 .692.558 1.25 1.25 1.25H8.75v8.75c0 .692.559 1.25 1.25 1.25.692 0 1.25-.558 1.25-1.25v-8.75h3.334c.691 0 1.25-.558 1.25-1.25 0-.691-.559-1.25-1.25-1.25H5.417c-.692 0-1.25.559-1.25 1.25z"
    />
  </Icon>
);

export default TextIcon;
