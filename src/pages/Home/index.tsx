import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/react';
import {
  Footer,
  BurnToEarnHero,
  MotionCaptureHero,
  PartnerAndInvestorHero,
} from 'components/ui/home';
import Contact from 'components/ui/home/Contact';

const ImpaktGamesHero = lazy(() => import('components/ui/home/ImpaktGamesHero'));

const HomePage = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode('dark');
  }, [setColorMode]);

  return (
    <Container spacing={0} p={0} minW="full" m={0}>
      <Suspense fallback={<div />}>
        <div id="impakt-games">
          <ImpaktGamesHero />
        </div>
      </Suspense>

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
