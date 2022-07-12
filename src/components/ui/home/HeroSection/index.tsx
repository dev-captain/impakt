/* eslint-disable react/jsx-no-useless-fragment */
import { Box, useMediaQuery } from '@chakra-ui/react';
import * as React from 'react';

import Images from '../../../../assets/images';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { setBorderX } from '../../../../lib/redux/slices/state/stateSlice';
import YourBody from '../YourBody';
import ExerciseCard from './ExerciseCard';
import MirrorAndStarsVideo from '../MirrorAndStarsVideo';
import ScrollIconComponent from '../ScrollIconComponent';
import SocialFitnessGamified from './SocialFitnessGamified';

const HeroVideo = React.lazy(() => import('./HeroVideo'));

export const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
  const isScrolling = useAppSelector((state) => state.stateReducer.heroVideo.isScrolling);
  const isScrolled = React.useRef(false);
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  const [isMovedToYourBodySection, setIsMovedToYourBodySection] = React.useState(false);

  const impaktGameHeroRef = React.useRef<HTMLDivElement | null>(null);
  const mirrorRef = React.useRef<HTMLDivElement | null>(null);
  const heroVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const heroVideoScreenRef = React.useRef<HTMLDivElement | null>(null);
  const exerciseCardRef = React.useRef<HTMLDivElement | null>(null);
  const yourBodySectionRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function updateSize() {
      if (
        mirrorRef.current &&
        heroVideoScreenRef.current &&
        exerciseCardRef.current &&
        heroVideoRef.current
      ) {
        heroVideoScreenRef.current.style.left = `${mirrorRef.current.offsetLeft}px`;
        exerciseCardRef.current.style.left = `${mirrorRef.current.offsetLeft + 500}px`;
        if (!isAnimated) {
          heroVideoRef.current.style.left = `${mirrorRef.current.offsetLeft}`;
        }
        if (isScrolling && isAnimated) {
          heroVideoRef.current.style.left = `${mirrorRef.current.offsetLeft + 40}px`;
        }
      }
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [isScrolling, isAnimated]);

  React.useEffect(() => {
    if (isScrolling && heroVideoRef.current && mirrorRef.current) {
      heroVideoRef.current.style.left = `${mirrorRef.current.offsetLeft + 40}px`;
    }
  }, [isScrolling]);

  const moveToYourBodySection = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (isScrolled.current) return;
    if (!impaktGameHeroRef.current) return;
    if (isAnimated || isLessThan1280) {
      isScrolled.current = true;
      window.scrollTo(0, impaktGameHeroRef.current.clientHeight - 100);
      setTimeout(() => {
        setIsMovedToYourBodySection((prev) => !prev);
      }, 200);
    }
  };
  // eslint-disable-next-line consistent-return

  React.useEffect(() => {
    function checkOffSet() {
      if (
        mirrorRef.current &&
        heroVideoRef.current &&
        heroVideoScreenRef.current &&
        exerciseCardRef.current &&
        yourBodySectionRef.current &&
        window.scrollY < yourBodySectionRef.current.offsetTop - 100 &&
        isAnimated
      ) {
        mirrorRef.current.style.top = `${window.scrollY + 100}px`;
        heroVideoRef.current.style.top = `${window.scrollY + 100 + 260}px`;
        heroVideoScreenRef.current.style.top = `${window.scrollY + 100 + 210}px`;
        exerciseCardRef.current.style.top = `${window.scrollY + 200}px`;
      }
    }

    window.addEventListener('scroll', checkOffSet);

    return () => window.removeEventListener('scroll', checkOffSet);
  }, [
    isAnimated,
    mirrorRef,
    heroVideoRef,
    heroVideoScreenRef,
    exerciseCardRef,
    yourBodySectionRef,
  ]);

  React.useEffect(() => {
    if ((!isAnimated || isMovedToYourBodySection) && !isLessThan1280) {
      document.body.style.overflow = 'hidden';
    }

    if (isMovedToYourBodySection || isLessThan1280) {
      document.body.style.overflow = 'unset';
    }
  }, [isAnimated, isMovedToYourBodySection]);

  React.useEffect(() => {
    if (mirrorRef.current && heroVideoScreenRef.current && exerciseCardRef.current) {
      heroVideoScreenRef.current.style.left = `${mirrorRef.current.offsetLeft}px`;
      exerciseCardRef.current.style.left = `${mirrorRef.current.offsetLeft + 500}px`;
      dispatch(setBorderX({ borderX: mirrorRef.current.offsetLeft }));
    }
  }, []);

  return (
    <div
      onWheel={(e) => (isLessThan1280 ? null : moveToYourBodySection(e))}
      style={{ backgroundColor: '#121117', position: 'relative' }}
      id="stick"
    >
      <div ref={impaktGameHeroRef} id="impakt-game-hero">
        <SocialFitnessGamified />
      </div>
      {(isScrolling || isLessThan1280) && (
        <div id="impakt-your-body" ref={yourBodySectionRef}>
          <YourBody />
        </div>
      )}

      <Box left="75vw" ref={exerciseCardRef} zIndex={99999} top={borderY + 100} position="absolute">
        <ExerciseCard />
      </Box>
      {!isLessThan1280 && (
        <>
          <MirrorAndStarsVideo
            id="starsvideo"
            position="absolute"
            left="49vw"
            top={borderY}
            ref={mirrorRef}
            height="788px"
            width="600px"
          >
            <ScrollIconComponent isVisible={isAnimated} position="absolute" zIndex="1" left="43%" />
          </MirrorAndStarsVideo>
          <React.Suspense fallback={null}>
            <HeroVideo ref={heroVideoRef} />
          </React.Suspense>
        </>
      )}
      <ScrollIconComponent
        isVisible={!isScrolling && !isLessThan1280}
        zIndex="999999"
        position="fixed"
        left="48%"
      />

      {!isLessThan1280 && (
        <Box
          display="flex"
          ref={heroVideoScreenRef}
          w="717.1px"
          zIndex="0"
          position="absolute"
          top={borderY + 210}
        >
          <img width="100%" height="100%" src={Images.Common.Window} alt="_" />
        </Box>
      )}
      <></>
    </div>
  );
};

export default HeroSection;
