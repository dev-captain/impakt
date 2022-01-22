import { Circle } from '@chakra-ui/react';
import Icons from 'components/icons';

type Props = {
  isActive?: boolean;
  direction?: 'left' | 'right';
};

const SliderControl = ({ isActive, direction = 'left' }: Props) => {
  return (
    <Circle
      size="52px"
      background="linear-gradient(180deg, #FD4884 0%, #FD4857 100%)"
      opacity={isActive ? 1 : 0.4}
    >
      {direction === 'left' && <Icons.LeftArrow />}
      {direction === 'right' && <Icons.RightArrow />}
    </Circle>
  );
};

export default SliderControl;
