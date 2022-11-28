import * as React from 'react';
import { Text, Box, Image } from '@chakra-ui/react';

interface FitnessJourneyCardProps {
  img: string;
  title: string;
  description: string;
}

const FitnessJourneyCard: React.FC<FitnessJourneyCardProps> = ({ img, title, description }) => {
  return (
    <Box
      width={{ md: 'auto', base: '100%' }}
      display="flex"
      backgroundColor="#fff"
      borderRadius="14px"
      flexDirection="column"
      mt={{ md: '0', base: '20px' }}
      boxShadow="0px 8px 15px -4px rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(40px)"
    >
      <Image
        src={img}
        objectFit="cover"
        zIndex="0"
        padding={{ base: '12px', md: '28px' }}
        pb="21px"
      />
      <Box padding={{ lgx: '16px', base: '12px' }}>
        <Box>
          <Text
            as="h1"
            textStyle="TitleBold64"
            fontSize={{ lgx: '25px', base: '16px' }}
            color="#1C1C28"
            marginBottom="22px"
          >
            {title}
          </Text>
          <Text color="#1C1C28" maxWidth="280px">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FitnessJourneyCard;
