import * as React from 'react';
import { Text, Box } from '@chakra-ui/react';

interface FitnessJourneyCardProps {
  video: string;
  title: string;
  description: string;
  link: string;
}

const FitnessJourneyCard: React.FC<FitnessJourneyCardProps> = ({
  video,
  title,
  link,
  description,
}) => {
  return (
    <Box
      as="a"
      target="_blank"
      href={link}
      title="vSports Fitness World"
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
        as="video"
        objectFit="fill"
        // ref={videoRef}
        top="0"
        left="0"
        w="100%"
        height={{ base: '200px', md: '17.5vw' }}
        borderRadius="20px"
        autoPlay
        loop
        muted
        playsInline
        boxShadow="dark"
        src={video}
      >
        <source src={video} type="video/mp4" />
      </Box>
      <Box padding={{ lgx: '16px', base: '12px' }} pt={{ lgx: '25px', base: '25px' }}>
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
          <Text color="#1C1C28" maxWidth="300">
            {description}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default FitnessJourneyCard;
