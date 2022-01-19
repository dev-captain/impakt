/* eslint-disable no-dupe-keys */
import { Container } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/react';
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
import Contact from 'components/ui/home/Contact';

import { useEffect } from 'react';

const App = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);

  return (
    <Container spacing={0} p={0} minW="full" m={0}>
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
      <div id="join-us">
        <Contact />
      </div>
      <Footer />
    </Container>
  );
};

export default App;
