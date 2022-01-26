import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/layout';
import { useColorMode } from '@chakra-ui/react';

const BurnToEarnHero = lazy(() => import('components/ui/home/BurnToEarnHero'));
const ImpaktGamesHero = lazy(() => import('components/ui/home/ImpaktGamesHero'));
const MotionCaptureHero = lazy(() => import('components/ui/home/MotionCaptureHero'));
const PartnerAndInvestorHero = lazy(() => import('components/ui/home/PartnersAndInvestorHero'));
const Footer = lazy(() => import('components/core/Footer'));
const Contact = lazy(() => import('components/ui/home/Contact'));

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

      <Suspense fallback={<div />}>
        <div id="motion-capture">
          <MotionCaptureHero />
        </div>
      </Suspense>

      <Suspense fallback={<div />}>
        <div id="burn-to-earn">
          <BurnToEarnHero />
        </div>
      </Suspense>
      <Suspense fallback={<div />}>
        <div id="partner-and-investor">
          <PartnerAndInvestorHero />
        </div>
      </Suspense>
      <Suspense fallback={<div />}>
        <div id="contact">
          <Contact />
        </div>
      </Suspense>
      <Suspense fallback={<div />}>
        <Footer />
      </Suspense>
    </Container>
  );
};

export default HomePage;
