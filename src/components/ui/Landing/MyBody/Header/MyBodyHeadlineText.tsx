import * as React from 'react';
import { Text } from '@chakra-ui/react';

const MyBodyHeadlineText: React.FC = () => {
  return (
    <Text
      color="#1C1C28"
      fontSize={{ base: '30px', md: '80px' }}
      letterSpacing="-2px"
      fontWeight="700"
      lineHeight="100%"
    >
      My body.
      <br />
      My controller.
    </Text>
  );
};
export default MyBodyHeadlineText;
