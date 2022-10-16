import { Box, Text, Container, useMediaQuery } from '@chakra-ui/react';
import { S, I } from 'components';
import { useAppSelector } from 'hooks';

const HomePage = () => {
  // const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
  // const isVideoLoaded = useAppSelector((state) => state.stateReducer.heroVideo.isLoaded);

  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      {/* {!isVideoLoaded && !isLessThan1280 && (
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
      )} */}
      <Box
        background="linear-gradient(180deg, rgba(18, 18, 22, 0.95) 6%, rgba(18, 18, 22, 0) 100%);"
        zIndex="99999"
        w="full"
        justifyContent="center"
        position="fixed"
        top="0"
        left="0"
        height="23%"
      />
      {/* <S.HeroSection /> */}

      {/* {(isAnimated || isLessThan1280) && (
        <>
          <div>
            <S.EarnCrypto />
          </div>

          <div>
            <S.ImpaktNFT />
          </div>
          <div>
            <S.ImpaktCreed />
          </div>
          <div>
            <S.Founder />
          </div>
          <div>
            <S.Advisor />
          </div>
          <div>
            <S.ImpaktIcons />
          </div>
          <div>
            <S.ImpaktFooter />
          </div>
        </>
      )} */}

      {/* <div id="join-challange">
        <LeaderBoard />
      </div> */}
    </Container>
  );
};

export default HomePage;
