import { Container } from '@chakra-ui/layout';
import {
  ImpaktNFT,
  Advisor,
  Founder,
  ImpaktCreed,
  ImpaktFooter,
  HeroSection,
} from 'components/ui/home';

const HomePage = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <HeroSection />

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
