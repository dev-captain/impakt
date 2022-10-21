import { Text } from '@chakra-ui/react';
import { FC } from 'react';

const HeroVideoText: FC = () => {
  return (
    <Text
      fontSize={{ base: '50px', lg: '80px' }}
      fontWeight="700"
      letterSpacing="-2px"
      color="white"
      textAlign="center"
    >
      Impakt Fitness World
    </Text>
  );
};

export default HeroVideoText;
