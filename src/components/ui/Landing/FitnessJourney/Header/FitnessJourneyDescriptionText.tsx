import * as React from 'react';
import { Text } from '@chakra-ui/react';

const FitnessJourneyDescriptionText: React.FC = () => {
  return (
    <Text
      margin="auto"
      color="#1C1C28"
      fontSize={{ lg: '16px', base: '14px' }}
      lineHeight="inherit"
      fontWeight="500"
      textStyle="TitleBold48"
      maxWidth={{ lg: '632px', md: '482px', base: '730px' }}
      textAlign={{ base: 'center', md: 'start' }}
    >
      It&apos;s your body and your goals. Do fitness as you want. Whether you want to get fit while
      playing games, or hang out with friends doing yoga in a virtual studio. Maybe you just want to
      chat on the phone while you magically get fit. At Impakt, it&apos;s your choice.
    </Text>
  );
};
export default FitnessJourneyDescriptionText;
