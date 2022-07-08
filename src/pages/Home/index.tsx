import { Box, Text, Container } from '@chakra-ui/react';
import {
  ImpaktNFT,
  Advisor,
  Founder,
  ImpaktCreed,
  ImpaktFooter,
  HeroSection,
  EarnCrypto,
} from 'components/ui/home';
import { useEffect } from 'react';
import LoadingIcon from '../../components/icons/LoadingIcon';

import useAppSelector from '../../hooks/useAppSelector';

const HomePage = () => {
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
  const isVideoLoaded = useAppSelector((state) => state.stateReducer.heroVideo.isLoaded);

  useEffect(() => {
    // force to scroll x:0 y:0 as initial
    window.scrollTo(0, 0);
  }, []);

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
          <LoadingIcon />
          <Text color="rgba(255, 255, 255, 0.5)" textStyle="bold5">
            Loading...
          </Text>
        </Box>
      )}
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
      <HeroSection />

      {isAnimated && (
        <>
          <div>
            <EarnCrypto />
          </div>

          <div>
            <ImpaktNFT />
          </div>
          <div>
            <ImpaktCreed />
          </div>
          <div>
            <Founder />
          </div>
          <div>
            <Advisor />
          </div>
          <div>
            <ImpaktFooter />
          </div>
        </>
      )}
      {/* <div>
        <CardFounder />
      </div> */}

      {/* <div id="status-quo">
        <StatusQuoHero />
      </div>
      <div id="status-quo">
        <StatusQuoHero />
      </div>

      <div id="join-challange">
        <LeaderBoard />
      </div>
      <div id="computer-vision">
        <ComputerVisionHero />
      </div>

      <div id="burnAndEarn">
        <BurnAndEarn />
      </div>

      <div id="roadmap">
        <RoadMap />
      </div>

      <div id="impakt-laptop">
        <ImpaktLaptopHero />
      </div>

      <div id="partner-and-investor">
        <PartnerAndInvestorHero />
      </div>

      <div id="partner-and-investor">
        <JoinOurCommunity />
      </div>

      <div id="contact">
        <Contact />
      </div>  */}
      {/* <Footer /> */}
    </Container>
  );
};

export default HomePage;
