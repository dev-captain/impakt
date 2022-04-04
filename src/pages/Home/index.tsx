import { Container } from '@chakra-ui/layout';
import { Footer, ImpaktGamesHero, PartnerAndInvestorHero } from 'components/ui/home';
import Contact from 'components/ui/home/Contact';
import Seo from 'components/core/Seo';
import VideoModal from 'components/core/VideoModal';
import RoadMap from 'components/ui/home/Roadmap/RoadmapSection';
import StatusQuoHero from 'components/ui/home/StatusQuoHero';
import LeaderBoard from 'pages/LeaderBoard';
import ComputerVisionHero from 'components/ui/home/ComputerVision';
import BurnAndEarn from 'components/ui/home/BurnAndEarnHero';
import ImpaktLaptopHero from 'components/ui/home/ImpaktLaptopHero';
import JoinOurCommunity from 'components/ui/home/JoinOurCommunity';

const HomePage = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <VideoModal />
      <Seo />

      <div id="impakt-games">
        <ImpaktGamesHero />
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
      </div>
      <Footer />
    </Container>
  );
};

export default HomePage;
