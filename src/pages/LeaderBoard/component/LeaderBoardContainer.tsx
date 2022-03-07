import { VStack } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const LeaderBoardContainer: FC<Props> = ({ children }) => {
  return (
    <VStack spacing={0} bg="rgba(255, 255, 255, 0.04)" borderRadius="24px" px="40px" py="16px">
      {children}
    </VStack>
  );
};

export default LeaderBoardContainer;
