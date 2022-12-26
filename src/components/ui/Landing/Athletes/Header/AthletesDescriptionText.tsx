import * as React from 'react';
import { Text } from '@chakra-ui/react';

const AthletesDescriptionText: React.FC = () => {
  return (
    <Text
      color="#1C1C28"
      fontSize={{ md: '18px', base: '15px' }}
      lineHeight="inherit"
      fontWeight="500"
      textStyle="TitleBold48"
      maxWidth="670px"
      margin="auto"
      mb={{ lg: '97px', base: '40px' }}
    >
      The best athletes are making an Impakt.
    </Text>
  );
};
export default AthletesDescriptionText;
