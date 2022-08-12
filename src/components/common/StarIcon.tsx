import { Icon, IconProps } from '@chakra-ui/react';
import React from 'react';

const StarIcon: React.FC<IconProps> = (props) => {
  return (
    <Icon
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.0003 23.0267L24.2403 28.0001L22.0537 18.6267L29.3337 12.3201L19.747 11.4934L16.0003 2.66675L12.2537 11.4934L2.66699 12.3201L9.93366 18.6267L7.76033 28.0001L16.0003 23.0267Z"
        fill="currentColor"
      />
    </Icon>
  );
};

export default StarIcon;
