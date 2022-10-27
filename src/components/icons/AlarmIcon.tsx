import { Icon, IconProps } from '@chakra-ui/react';

const AlarmIcon = (props: IconProps) => (
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
      d="M9 1h6v2H9V1zm10.03 6.39l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42A8.962 8.962 0 0012 4a9 9 0 00-9 9c0 4.97 4.02 9 9 9a8.995 8.995 0 007.03-14.61zM13 14h-2V8h2v6z"
    />
  </Icon>
);

export default AlarmIcon;
