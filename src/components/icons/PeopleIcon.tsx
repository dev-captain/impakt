import React from 'react';
import { Icon, IconProps } from '@chakra-ui/react';

const PeopleIcon: React.FC<IconProps & { isActive?: boolean }> = (props) => {
  if (props.isActive)
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.2266 17.5067C24.0532 18.7467 25.3332 20.4267 25.3332 22.6667V26.6667H28.6666C29.7711 26.6667 30.6666 25.7712 30.6666 24.6667V22.6667C30.6666 19.76 25.9066 18.04 22.2266 17.5067Z"
          fill="url(#paint0_linear_8448_23532)"
        />
        <path
          d="M12.0013 16.0002C14.9468 16.0002 17.3346 13.6123 17.3346 10.6668C17.3346 7.72131 14.9468 5.3335 12.0013 5.3335C9.05578 5.3335 6.66797 7.72131 6.66797 10.6668C6.66797 13.6123 9.05578 16.0002 12.0013 16.0002Z"
          fill="url(#paint1_linear_8448_23532)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.9987 16.0002C22.9454 16.0002 25.332 13.6135 25.332 10.6668C25.332 7.72016 22.9454 5.3335 19.9987 5.3335C19.372 5.3335 18.7854 5.46683 18.2254 5.6535C19.3727 7.07245 19.9987 8.84203 19.9987 10.6668C19.9987 12.4916 19.3727 14.2612 18.2254 15.6802C18.7854 15.8668 19.372 16.0002 19.9987 16.0002ZM11.9987 17.3335C8.4387 17.3335 1.33203 19.1202 1.33203 22.6668V24.6668C1.33203 25.7714 2.22746 26.6668 3.33203 26.6668H20.6654C21.7699 26.6668 22.6654 25.7714 22.6654 24.6668V22.6668C22.6654 19.1202 15.5587 17.3335 11.9987 17.3335Z"
          fill="url(#paint2_linear_8448_23532)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_8448_23532"
            x1="22.2266"
            y1="22.0867"
            x2="30.6666"
            y2="22.0867"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F04153" />
            <stop offset="1" stopColor="#F27961" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_8448_23532"
            x1="6.66797"
            y1="10.6668"
            x2="17.3346"
            y2="10.6668"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F04153" />
            <stop offset="1" stopColor="#F27961" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_8448_23532"
            x1="1.33203"
            y1="16.0002"
            x2="25.332"
            y2="16.0002"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F04153" />
            <stop offset="1" stopColor="#F27961" />
          </linearGradient>
        </defs>
      </Icon>
    );

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2266 17.5068C24.0532 18.7468 25.3332 20.4268 25.3332 22.6668V26.6668H28.6666C29.7711 26.6668 30.6666 25.7714 30.6666 24.6668V22.6668C30.6666 19.7602 25.9066 18.0402 22.2266 17.5068Z"
        fill="currentColor"
      />
      <path
        d="M12.0013 16.0002C14.9468 16.0002 17.3346 13.6123 17.3346 10.6668C17.3346 7.72131 14.9468 5.3335 12.0013 5.3335C9.05578 5.3335 6.66797 7.72131 6.66797 10.6668C6.66797 13.6123 9.05578 16.0002 12.0013 16.0002Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9987 16.0002C22.9454 16.0002 25.332 13.6135 25.332 10.6668C25.332 7.72016 22.9454 5.3335 19.9987 5.3335C19.372 5.3335 18.7854 5.46683 18.2254 5.6535C19.3727 7.07245 19.9987 8.84203 19.9987 10.6668C19.9987 12.4916 19.3727 14.2612 18.2254 15.6802C18.7854 15.8668 19.372 16.0002 19.9987 16.0002ZM11.9987 17.3335C8.4387 17.3335 1.33203 19.1202 1.33203 22.6668V24.6668C1.33203 25.7714 2.22746 26.6668 3.33203 26.6668H20.6654C21.7699 26.6668 22.6654 25.7714 22.6654 24.6668V22.6668C22.6654 19.1202 15.5587 17.3335 11.9987 17.3335Z"
        // fill="#91A8BD"
        fill="currentColor"
      />
    </Icon>
  );
};
export default PeopleIcon;
