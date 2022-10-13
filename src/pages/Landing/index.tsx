import { Box, Container, Text } from '@chakra-ui/react';
import { I, S } from 'components';
import { useAppSelector } from 'hooks';

const LandingPage = () => {
  const isVideoLoaded = useAppSelector((state) => state.stateReducer.heroVideo.isLoaded);

  // const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      {!isVideoLoaded && (
        <Box
          bgColor="#000"
          top="0"
          left="0"
          zIndex="999999999"
          position="fixed"
          height="100vh"
          width="100vw"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDir="column"
        >
          <I.LoadingIcon />
          <Text color="rgba(255, 255, 255, 0.5)" textStyle="bold5">
            Loading...
          </Text>
        </Box>
      )}
      <S.VideoSection />
    </Container>
  );
};

export default LandingPage;
