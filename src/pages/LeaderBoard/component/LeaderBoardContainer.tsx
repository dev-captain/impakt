import { Flex } from '@chakra-ui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const LeaderBoardContainer: FC<Props> = ({ children }) => {
  return (
    <Flex
      w="full"
      flexDir="column"
      align="flex-start"
      overflowX="scroll"
      borderRadius="24px"
      bg="rgba(255, 255, 255, 0.04)"
      pl={{ base: '16px', md: '32px' }}
      pr={{ base: '16px', md: '32px' }}
    >
      {children}
    </Flex>
  );
};

export default LeaderBoardContainer;
