import * as React from 'react';
import { Text } from '@chakra-ui/react';

interface PropsI {}
const AthletesTitleText: React.FC<PropsI> = () => {
  return (
    <Text
      color="#1C1C28"
      fontSize={{ base: '30px', md: '50px' }}
      textStyle="semiBold17"
      fontWeight="700"
      margin="auto"
      lineHeight="100%"
      maxWidth="600px"
    >
      Impakt ICONs
    </Text>
  );
};
export default AthletesTitleText;
