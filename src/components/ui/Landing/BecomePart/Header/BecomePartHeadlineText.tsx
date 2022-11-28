import * as React from 'react';
import { Text } from '@chakra-ui/react';

const BecomePartHeadlineText: React.FC = () => {
  return (
    <Text
      fontSize={{ base: '28px', md: '32px' }}
      fontWeight="500"
      lineHeight="120%"
      mb="40px"
      color="#1C1C28"
    >
      Become part of the Impakt family.
    </Text>
  );
};
export default BecomePartHeadlineText;
