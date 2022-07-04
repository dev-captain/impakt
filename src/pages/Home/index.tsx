import { useRef, useState } from 'react';
import { Container } from '@chakra-ui/layout';
import { ImpaktGamesHero, ImpaktNFT, Founders } from 'components/ui/home';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';

import YourBody from '../../components/ui/home/YourBody';

const HomePage = () => {
  const containerRef = useRef(null);
  const [isMovedToYourBodySection, setIsMovedToYourBodySection] = useState(false);

  const yourBodySectionRef = useRef<HTMLDivElement | null>(null);
  const moveToYourBodySection = () => {
    if (yourBodySectionRef && yourBodySectionRef.current && !isMovedToYourBodySection) {
      setIsMovedToYourBodySection(true);
      window.scrollTo(0, yourBodySectionRef.current.offsetTop - 300);
    }
  };

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
      >
        <div ref={containerRef} id="stick">
          <ImpaktGamesHero moveToYourBodySection={moveToYourBodySection} />
          <div id="impakt-your-body" ref={yourBodySectionRef}>
            <YourBody />
          </div>
        </div>
      </LocomotiveScrollProvider>

      <div>
        <Founders />
      </div>
      {/* <div>
        <CardFounder />
      </div> */}
      <div>
        <ImpaktNFT />
      </div>

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
