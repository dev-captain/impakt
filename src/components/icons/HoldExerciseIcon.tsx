import { Icon, IconProps } from '@chakra-ui/react';

const HoldExerciseIcon = (props: IconProps) => {
  return (
    <Icon
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.781048 0.781048C0.280951 1.28115 0 1.95942 0 2.66667V21.3333C0 22.0406 0.280951 22.7189 0.781048 23.219C1.28115 23.719 1.95942 24 2.66667 24H21.3333C22.0406 24 22.7189 23.719 23.219 23.219C23.719 22.7189 24 22.0406 24 21.3333V2.66667C24 1.95942 23.719 1.28115 23.219 0.781048C22.7189 0.280951 22.0406 0 21.3333 0H2.66667C1.95942 0 1.28115 0.280951 0.781048 0.781048ZM10.6667 5.33334H8V18.6667H10.6667V13.3333H13.3333V18.6667H16V5.33334H13.3333V10.6667H10.6667V5.33334Z"
        fill="url(#paint0_linear_7633_34647)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_7633_34647"
          x1="1.11759e-08"
          y1="12"
          x2="24"
          y2="12"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F27961" />
          <stop offset="1" stopColor="#FFCC66" />
        </linearGradient>
      </defs>
    </Icon>
  );
};

export default HoldExerciseIcon;
