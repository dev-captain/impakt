import * as React from 'react';
import { Text } from '@chakra-ui/react';

const MyBodyHeadlineText: React.FC = () => {
  return (
    <Text
      color="#1C1C28"
      fontSize={{ base: '30px', md: '40px' }}
      letterSpacing="-2px"
      fontWeight="700"
      lineHeight="100%"
    >
      Enter a virtual world of virtual sports.
    </Text>
  );
};
export default MyBodyHeadlineText;
