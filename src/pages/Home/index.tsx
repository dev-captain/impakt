import { Container } from '@chakra-ui/layout';
import {
  Footer,
  BurnToEarnHero,
  ImpaktGamesHero,
  MotionCaptureHero,
  PartnerAndInvestorHero,
} from 'components/ui/home';
import Contact from 'components/ui/home/Contact';
import Seo from 'components/core/Seo';

const HomePage = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <Seo />
      <div id="impakt-games">
        <ImpaktGamesHero />
      </div>

      <div id="motion-capture">
        <MotionCaptureHero />
      </div>

      <div id="burn-to-earn">
        <BurnToEarnHero />
      </div>

      <div id="partner-and-investor">
        <PartnerAndInvestorHero />
      </div>

      <div id="contact">
        <Contact />
      </div>

      <Footer />
    </Container>
  );
};

export default HomePage;
