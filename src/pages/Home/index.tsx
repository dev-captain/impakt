import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Container } from '@chakra-ui/layout';
import { ImpaktGamesHero, ImpaktNFT, Founders } from 'components/ui/home';
import { Box } from '@chakra-ui/react';
import styled, { css, keyframes } from 'styled-components';

import YourBody from '../../components/ui/home/YourBody';
import ExerciseCard from '../../components/ui/home/ImpaktGamesHero/ExerciseCard';
import StarsVideo from '../../components/ui/home/ImpaktGamesHero/StarsVideo';
import useAppSelector from '../../hooks/useAppSelector';
import useAppDispatch from '../../hooks/useAppDispatch';
import { setBorderX, setBorderY } from '../../lib/redux/slices/state/stateSlice';
import HeroVideo from '../../components/ui/home/ImpaktGamesHero/HeroVideo';

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mirrorRef = useRef<HTMLDivElement | null>(null);

  const dispatch = useAppDispatch();

  const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);

  const [isMovedToYourBodySection, setIsMovedToYourBodySection] = useState(false);

  const yourBodySectionRef = useRef<HTMLDivElement | null>(null);
  const moveToYourBodySection = () => {
    if (
      yourBodySectionRef &&
      yourBodySectionRef.current &&
      !isMovedToYourBodySection &&
      isAnimated
    ) {
      setIsMovedToYourBodySection(true);
      window.scrollTo(0, yourBodySectionRef.current.offsetTop - 100);
    }
  };

  useLayoutEffect(() => {
    function updateSize() {
      if (mirrorRef.current) {
        dispatch(setBorderX({ borderX: mirrorRef.current.offsetLeft }));
        dispatch(setBorderY({ borderY: mirrorRef.current.offsetTop }));
      }
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  useEffect(() => {
    if (mirrorRef.current) {
      dispatch(setBorderX({ borderX: mirrorRef.current.offsetLeft }));
      dispatch(setBorderY({ borderY: mirrorRef.current.offsetTop }));
    }
  }, []);

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <div ref={containerRef} id="stick">
        <ImpaktGamesHero moveToYourBodySection={moveToYourBodySection} />
        <div id="impakt-your-body" ref={yourBodySectionRef}>
          <YourBody />
        </div>

        <Box left="80vw" top={borderY - 150} zIndex={9999} position="fixed">
          <ExerciseCard />
        </Box>
        <Box
          ref={mirrorRef}
          position={isMovedToYourBodySection ? 'absolute' : 'fixed'}
          left="900px"
          top="100px"
        >
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
        <HeroVideo />
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
