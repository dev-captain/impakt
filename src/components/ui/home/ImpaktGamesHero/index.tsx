import { Box, useDimensions } from '@chakra-ui/react';
import * as React from 'react';
import Images from '../../../../assets/images';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { setBorderX } from '../../../../lib/redux/slices/state/stateSlice';
import YourBody from '../YourBody';
import ExerciseCard from './ExerciseCard';
import HeroVideo from './HeroVideo';
import SocialFitnessGamified from './SocialFitnessGamified';
import StarsVideo from './StarsVideo';

export const HeroSection: React.FC = () => {
  const dispatch = useAppDispatch();
  const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);

  const [isMovedToYourBodySection, setIsMovedToYourBodySection] = React.useState(false);

  const impaktGameHeroRef = React.useRef<HTMLDivElement | null>(null);
  const mirrorRef = React.useRef<HTMLDivElement | null>(null);
  const heroVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const heroVideoScreenRef = React.useRef<HTMLDivElement | null>(null);
  const exerciseCardRef = React.useRef<HTMLDivElement | null>(null);
  const yourBodySectionRef = React.useRef<HTMLDivElement | null>(null);

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
        heroVideoRef.current.style.left = `${mirrorRef.current.offsetLeft + 40}px`;
      }
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  React.useEffect(() => {
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

  React.useEffect(() => {
    if (!isAnimated) {
      document.body.style.overflow = 'hidden';
    }

    if (isAnimated && isMovedToYourBodySection) {
      document.body.style.overflow = 'unset';
    }
  }, [isAnimated, isMovedToYourBodySection]);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (mirrorRef.current && heroVideoScreenRef.current && exerciseCardRef.current) {
      heroVideoScreenRef.current.style.left = `${mirrorRef.current.offsetLeft}px`;
      exerciseCardRef.current.style.left = `${mirrorRef.current.offsetLeft + 500}px`;
      dispatch(setBorderX({ borderX: mirrorRef.current.offsetLeft }));
    }
  }, []);

  return (
    <>
      <div ref={impaktGameHeroRef} id="impakt-game-hero">
        <SocialFitnessGamified moveToYourBodySection={moveToYourBodySection} />
      </div>
      <div id="impakt-your-body" ref={yourBodySectionRef}>
        <YourBody />
      </div>

      <Box left="75vw" ref={exerciseCardRef} zIndex={99999} top={borderY + 100} position="absolute">
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
    </>
  );
};

export default HeroSection;
