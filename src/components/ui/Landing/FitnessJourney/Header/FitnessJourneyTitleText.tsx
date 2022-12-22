import * as React from 'react';
import { Text } from '@chakra-ui/react';

const FitnessJourneyTitleText: React.FC = () => {
  return (
    <Text
      color="#1C1C28"
      fontSize={{ lgx: '54px', lg: '44px', md: '37px', base: '30px' }}
      textStyle="semiBold17"
      fontWeight="700"
      lineHeight={{ lgx: '64px', lg: '45px', base: '42px' }}
      letterSpacing="-2px"
      maxW={{ lgx: '265px', lg: '220px', md: '180px', base: 'initial' }}
      margin="auto"
      textAlign={{ base: 'center', md: 'start' }}
    >
      Own your Journey
    </Text>
  );
};
export default FitnessJourneyTitleText;
