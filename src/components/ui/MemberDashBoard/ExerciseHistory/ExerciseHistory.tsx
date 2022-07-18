import { VStack, HStack, Box, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';
import Exercises from './Exercises';

const ExerciseHistory: React.FC = () => {
  return (
    <VStack
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1200px"
      w="full"
      rowGap="97px"
      mt="5.125em"
    >
      <HStack
        flexDir={{ base: 'column', lg: 'row' }}
        justifyContent="center"
        alignItems="center"
        w="100%"
        rowGap="32px"
        columnGap="32px"
        // columns={{ base: 1, md: 2 }}
      >
        <VStack
          rowGap="37px"
          id="member-dasboard-whitelist-referrals-card"
          px={{ base: '10px' }}
          flexDir={{ base: 'column', md: 'row' }}
          w={{ base: '100%', md: '720px' }}
        >
          <SimpleGrid columns={{ base: 1 }} gap={5}>
            <Box marginLeft="0 !important">
              <Exercises />
            </Box>
          </SimpleGrid>
        </VStack>
      </HStack>
    </VStack>
  );
};
export default ExerciseHistory;
