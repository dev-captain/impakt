import * as React from 'react';
import { Text, Box } from '@chakra-ui/react';
import { isMobile } from 'react-device-detect';

interface FitnessJourneyCardProps {
  video: string;
  title: string;
}

const FitnessJourneyCard: React.FC<FitnessJourneyCardProps> = ({ video, title, children }) => {
  const videoRef = React.useRef<null | (HTMLVideoElement & HTMLDivElement)>(null);
  const handleVideoStart = () => {
    videoRef.current?.play();
  };
  const handleVideoStop = () => {
    videoRef.current?.pause();
  };

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <Box
      onMouseOver={isMobile ? () => null : handleVideoStart}
      onMouseLeave={isMobile ? () => null : handleVideoStop}
      as="a"
      target="_blank"
      href="https://vsports.me/"
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
        ref={videoRef}
        top="0"
        left="0"
        w="100%"
        height="30vh"
        borderRadius="20px"
        autoPlay={isMobile}
        loop
        muted
        playsInline
        boxShadow="dark"
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
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default FitnessJourneyCard;
