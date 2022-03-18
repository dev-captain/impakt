import { Box } from '@chakra-ui/react';
import { FC } from 'react';

type Props = {
  size: number | string;
  isHorizontal?: boolean;
};

const Spacer: FC<Props> = ({ size, isHorizontal }) => {
  return <Box w={isHorizontal ? size : 0} h={isHorizontal ? 0 : size} />;
};

export default Spacer;
