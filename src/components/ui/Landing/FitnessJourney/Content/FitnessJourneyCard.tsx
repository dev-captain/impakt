import * as React from 'react';
import { Text, Box } from '@chakra-ui/react';

interface FitnessJourneyCardProps {
  video: string;
  title: string;
  description: string;
}

const FitnessJourneyCard: React.FC<FitnessJourneyCardProps> = ({ video, title, description }) => {
  return (
    <Box
      w="full"
      display="flex"
      backgroundColor="#fff"
      borderRadius="14px"
      flexDirection="column"
      mt={{ md: '0', base: '20px' }}
      boxShadow="0px 8px 15px -4px rgba(0, 0, 0, 0.8)"
      backdropFilter="blur(40px)"
      p="1em"
    >
      <Box
        objectFit="cover"
        as="video"
        // ref={videoRef}
        top="0"
        left="0"
        w="100%"
        height="300px"
        borderRadius="20px"
        filter="contrast(120%) brightness(120%)"
        autoPlay
        loop
        muted
        playsInline
        src={video}
      >
        <source src={video} type="video/mp4" />
      </Box>
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
