import { Icon, IconProps } from '@chakra-ui/react';

const ChallengeIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="currentColor"
      d="M2.5 4.167v11.666A1.666 1.666 0 004.167 17.5h5v-15h-5A1.667 1.667 0 002.5 4.167zM15.833 2.5h-5v6.667H17.5v-5c0-.917-.75-1.667-1.667-1.667zm-5 15h5c.917 0 1.667-.75 1.667-1.667v-5h-6.667V17.5z"
    />
  </Icon>
);

export default ChallengeIcon;
