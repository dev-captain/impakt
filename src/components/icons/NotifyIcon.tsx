import { Icon, IconProps } from '@chakra-ui/react';

const NotifyIcon = (props: IconProps) => (
  <Icon
    width="36px"
    height="36px"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.9987 29.333C17.4654 29.333 18.6654 28.133 18.6654 26.6663H13.332C13.332 27.3736 13.613 28.0519 14.1131 28.552C14.6132 29.0521 15.2915 29.333 15.9987 29.333ZM23.9987 21.333V14.6663C23.9987 10.573 21.812 7.14634 17.9987 6.23967V5.33301C17.9987 4.22634 17.1054 3.33301 15.9987 3.33301C14.892 3.33301 13.9987 4.22634 13.9987 5.33301V6.23967C10.172 7.14634 7.9987 10.5597 7.9987 14.6663V21.333L5.33203 23.9997V25.333H26.6654V23.9997L23.9987 21.333Z"
      fill="currentColor"
    />
  </Icon>
);

export default NotifyIcon;
