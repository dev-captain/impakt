import { Icon, IconProps } from '@chakra-ui/react';

const SoundOffIcon = (props: IconProps) => (
  <Icon
    xmlns="http://www.w3.org/2000/svg"
    width="39px"
    height="32px"
    fill="none"
    viewBox="0 0 39 32"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3.29"
      d="M36.59 21.25l-10.377-10.5m10.377 0l-10.377 10.5"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3.29"
      d="M2 21.178V10.82C2 9.816 2.775 9 3.73 9H9.93a1.678 1.678 0 001.223-.534l5.189-5.929c1.089-1.148 2.952-.334 2.952 1.288v24.35c0 1.635-1.886 2.441-2.968 1.27l-5.171-5.895A1.694 1.694 0 009.917 23H3.73C2.775 23 2 22.185 2 21.178z"
    />
  </Icon>
);

export default SoundOffIcon;
