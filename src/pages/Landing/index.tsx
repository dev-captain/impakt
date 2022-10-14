import { Box, Container, Image } from '@chakra-ui/react';
import Images from 'assets/images';
import { S } from 'components';
import { useAppSelector } from 'hooks';

const LandingPage = () => {
  const isVideoLoaded = useAppSelector((state) => state.stateReducer.heroVideo.isLoaded);

  // const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      {!isVideoLoaded && (
        <Box
        // bgColor="#000"
        // top="0"
        // left="0"
        // zIndex="999999999"
        // position="fixed"
        // height="100vh"
        // width="100vw"
        // display="flex"
        // alignItems="center"
        // justifyContent="center"
        // flexDir="column"
        >
          <Image
            // rounded="lg"
            // objectFit="cover"
            src={Images.home.HomeImage}
            // width={{ md: '189px', base: '130px' }}
            // height={{ md: '189px', base: '130px' }}
            // boxSizing="border-box"
            // borderRadius="50%"
          />
        </Box>
      )}
      <S.VideoSection />
    </Container>
  );
};

export default LandingPage;
