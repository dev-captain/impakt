import { useEffect, useRef, useState } from 'react';
import { Container } from '@chakra-ui/layout';
import { ImpaktGamesHero, ImpaktNFT, Founders } from 'components/ui/home';
import { Box, useDimensions } from '@chakra-ui/react';

import YourBody from '../../components/ui/home/YourBody';
import ExerciseCard from '../../components/ui/home/ImpaktGamesHero/ExerciseCard';
import StarsVideo from '../../components/ui/home/ImpaktGamesHero/StarsVideo';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import HeroVideo from '../../components/ui/home/ImpaktGamesHero/HeroVideo';
import Images from '../../assets/images';
import { setBorderX } from '../../lib/redux/slices/state/stateSlice';

const HomePage = () => {
  const impaktGameHeroRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mirrorRef = useRef<HTMLDivElement | null>(null);
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);
  const heroVideoScreenRef = useRef<HTMLDivElement | null>(null);
  const exerciseCardRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();
  const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);

  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);

  const [isMovedToYourBodySection, setIsMovedToYourBodySection] = useState(false);

  const yourBodySectionRef = useRef<HTMLDivElement | null>(null);
  const yourBodySectionDimension = useDimensions(yourBodySectionRef);
  const imapktGameHeroDimension = useDimensions(impaktGameHeroRef);

  const moveToYourBodySection = () => {
    if (
      !isMovedToYourBodySection &&
      yourBodySectionDimension &&
      yourBodySectionRef &&
      imapktGameHeroDimension
    ) {
      setIsMovedToYourBodySection(true);
      window.scrollTo(0, imapktGameHeroDimension.contentBox.bottom - 200);
    }
  };

  useEffect(() => {
    function updateSize() {
      if (
        mirrorRef.current &&
        heroVideoScreenRef.current &&
        exerciseCardRef.current &&
        heroVideoRef.current
      ) {
        heroVideoScreenRef.current.style.left = `${mirrorRef.current.offsetLeft}px`;
        exerciseCardRef.current.style.left = `${mirrorRef.current.offsetLeft + 500}px`;
        heroVideoRef.current.style.left = `${mirrorRef.current.offsetLeft + 40}px`;
      }
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    function checkOffSet() {
      if (
        mirrorRef.current &&
        heroVideoRef.current &&
        heroVideoScreenRef.current &&
        exerciseCardRef.current &&
        yourBodySectionDimension &&
        isAnimated &&
        window.scrollY < yourBodySectionDimension.contentBox.top - 100
      ) {
        mirrorRef.current.style.top = `${window.scrollY + 100}px`;
        heroVideoRef.current.style.top = `${window.scrollY + 100 + 260}px`;
        heroVideoScreenRef.current.style.top = `${window.scrollY + 100 + 210}px`;
        exerciseCardRef.current.style.top = `${window.scrollY + 200}px`;
      }
    }

    window.addEventListener('scroll', checkOffSet);

    return () => window.removeEventListener('scroll', checkOffSet);
  }, [isAnimated]);

  useEffect(() => {
    if (!isAnimated) {
      document.body.style.overflow = 'hidden';
    }

    if (isAnimated && isMovedToYourBodySection) {
      document.body.style.overflow = 'unset';
    }
  }, [isAnimated, isMovedToYourBodySection]);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (mirrorRef.current && heroVideoScreenRef.current && exerciseCardRef.current) {
      heroVideoScreenRef.current.style.left = `${mirrorRef.current.offsetLeft}px`;
      exerciseCardRef.current.style.left = `${mirrorRef.current.offsetLeft + 500}px`;
      dispatch(setBorderX({ borderX: mirrorRef.current.offsetLeft }));
    }
  }, []);

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <div
        style={{ backgroundColor: '#121117', position: 'relative' }}
        ref={containerRef}
        id="stick"
      >
        <div ref={impaktGameHeroRef} id="impakt-game-hero">
          <ImpaktGamesHero moveToYourBodySection={moveToYourBodySection} />
        </div>
        <div id="impakt-your-body" ref={yourBodySectionRef}>
          <YourBody />
        </div>

        <Box
          left="75vw"
          ref={exerciseCardRef}
          zIndex={99999}
          top={borderY + 100}
          position="absolute"
        >
          <ExerciseCard />
        </Box>
        <Box ref={mirrorRef} id="mirror" position="absolute" left="49vw" top={borderY}>
          <Box position="relative" height="788px" width="600px">
            <StarsVideo />
            <div
              className="shadow"
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                boxShadow: 'inset 0px 0px 20px rgba(232, 219, 202, 0.5)',
                top: '0',
                left: '0',
                borderRadius: '150px 150px 0px 0',
              }}
            />
          </Box>
        </Box>
        <HeroVideo ref={heroVideoRef} />
        <Box
          display="flex"
          ref={heroVideoScreenRef}
          w="717.1px"
          zIndex="0"
          position="absolute"
          top={borderY + 210}
        >
          <img width="100%" height="100%" src={Images.Common.window} alt="_" />
        </Box>
      </div>

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
