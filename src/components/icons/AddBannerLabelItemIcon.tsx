import { Icon, IconProps } from '@chakra-ui/react';

const AddBannerLabelItemIcon = (props: IconProps) => (
  <Icon
    width="40px"
    height="40px"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    color="white"
    {...props}
  >
    <rect width="40" height="40" rx="4" fill="#F04153" fillOpacity="0.1" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22 10H18V18L10 18V22H18V30H22V22H30V18L22 18V10Z"
      fill="url(#paint0_linear_7469_23164)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_7469_23164"
        x1="10"
        y1="20"
        x2="30"
        y2="20"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F04153" />
        <stop offset="1" stopColor="#F27961" />
      </linearGradient>
    </defs>
  </Icon>
);

export default AddBannerLabelItemIcon;
