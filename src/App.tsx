import { Container } from "@chakra-ui/layout";
import ImpaktGamesHero from "components/ui/home/ImpaktGamesHero";
import SingleTeamHero from "components/ui/home/SingleTeamHero";
import MotionCaptureHero from "components/ui/home/MotionCaptureHero";
import BurnToEarnHero from "components/ui/home/BurnToEarnHero";
import EarningsHero from "components/ui/home/EarningsHero";
import HowToSignUpHero from "components/ui/home/HowToSignupHero";
import NFTMarketPlaceHero from "components/ui/home/NFTMarketPlaceHero";
import { useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";

const App = () => {
  const { setColorMode } = useColorMode();

  useEffect(() => {
    setColorMode("dark");
  }, []);
  return (
    <Container spacing={0} p={0} minW="full">
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
    </Container>
  );
};

export default App;
