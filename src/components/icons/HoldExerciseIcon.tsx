import { Icon, IconProps } from '@chakra-ui/react';

const HoldExerciseIcon = (props: IconProps) => {
  return (
    <Icon
      width="25px"
      height="24px"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.44272 3.58579C4.06765 3.96086 3.85693 4.46957 3.85693 5V19C3.85693 19.5304 4.06765 20.0391 4.44272 20.4142C4.81779 20.7893 5.3265 21 5.85693 21H19.8569C20.3874 21 20.8961 20.7893 21.2711 20.4142C21.6462 20.0391 21.8569 19.5304 21.8569 19V5C21.8569 4.46957 21.6462 3.96086 21.2711 3.58579C20.8961 3.21071 20.3874 3 19.8569 3H5.85693C5.3265 3 4.81779 3.21071 4.44272 3.58579ZM11.8569 7.00001H9.85693V17H11.8569V13H13.8569V17H15.8569V7.00001H13.8569V11H11.8569V7.00001Z"
        fill="#F27961"
      />
    </Icon>
  );
};

export default HoldExerciseIcon;
