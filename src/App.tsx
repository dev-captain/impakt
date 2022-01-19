/* eslint-disable no-dupe-keys */
import { Container } from '@chakra-ui/layout';
import { useColorMode, Circle, Text } from '@chakra-ui/react';
import {
  RoadMapHero,
  Footer,
  ImpaktGamesHero,
  SingleTeamHero,
  MotionCaptureHero,
  BurnToEarnHero,
  EarningsHero,
  HowToSignUpHero,
  NFTMarketPlaceHero,
  BeAnInfluencerHero,
  JoinAndCollectHero,
  OurCommunityHero,
  TokenomicsHero,
  PartnerAndInvestorHero,
  JoinUsHero,
} from 'components/ui/home';

import { useEffect } from 'react';

const App = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);

  return (
    <Container spacing={0} p={0} minW="full" m={0}>
      <Circle
        size="100px"
        // @ts-ignore
        sx={{ position: '-webkit-sticky', /* Safari */ position: 'sticky', top: '0' }}
        bgColor="red.900"
        alignSelf="flex-end"
        zIndex={1000}
      >
        <Text d={{ base: 'flex', sm: 'none' }}>base</Text>
        <Text d={{ base: 'none', sm: 'flex', md: 'none' }}>sm</Text>
        <Text d={{ base: 'none', sm: 'none', md: 'flex', xl: 'none' }}>md</Text>
        <Text d={{ base: 'none', md: 'none', xl: 'flex', '2xl': 'none' }}>xl</Text>
        <Text d={{ base: 'none', md: 'none', xl: 'none', '2xl': 'flex' }}>2xl</Text>
      </Circle>
      <div id="impakt-games">
        <ImpaktGamesHero />
      </div>

      <div id="single-team">
        <SingleTeamHero />
      </div>

      <div id="motion-capture">
        <MotionCaptureHero />
      </div>

      <div id="burn-to-earn">
        <BurnToEarnHero />
      </div>

      <div id="earnings">
        <EarningsHero />
      </div>

      <div id="how-to-sign-up">
        <HowToSignUpHero />
      </div>

      <div id="nft-marketplace">
        <NFTMarketPlaceHero />
      </div>

      <div id="be-an-influencer">
        <BeAnInfluencerHero />
      </div>

      <div id="join-and-collect">
        <JoinAndCollectHero />
      </div>

      <div id="our-community-hero">
        <OurCommunityHero />
      </div>

      <div id="tokenomics">
        <TokenomicsHero />
      </div>

      <div id="partner-and-investor">
        <PartnerAndInvestorHero />
      </div>

      <div id="road-map">
        <RoadMapHero />
      </div>

      <div id="join-us">
        <JoinUsHero />
      </div>
      <Footer />
    </Container>
  );
};

export default App;
