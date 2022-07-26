import { Box, HStack, Skeleton, Text, VStack } from '@chakra-ui/react';
import * as React from 'react';
import Excercise from '../ExerciseAndHowToWL/Exercise';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';

const Statistics: React.FC = () => {
  const [isLoaded] = React.useState(true);
  // TODO fetch data
  // TODO while fetching data show skeleton by isLoaded
  // TODO Statistics Section UI

  return (
    <Skeleton w="full" isLoaded={isLoaded}>
      <Box w="full" as="section" id="statistics-section">
        <MemberDashboardSectionHeadlineText title="Exercise Statistics" />

        <HStack
          columnGap="24px"
          rowGap="24px"
          justifyContent="flex-start"
          alignItems="flex-start"
          w="full"
          flexWrap={{ base: 'wrap', lg: 'nowrap' }}
        >
          <VStack
            maxW="708px"
            w="50%"
            justifyContent="flex-start"
            alignItems="flex-start"
            rowGap="24px"
          >
            <Excercise />
          </VStack>
        </HStack>
      </Box>
    </Skeleton>
  );
};
export default Statistics;
