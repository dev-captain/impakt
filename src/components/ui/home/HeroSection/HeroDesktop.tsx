import { Box, HStack } from '@chakra-ui/react';
import * as React from 'react';

import Images from '../../../../assets/images';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { setBorderX, setBorderY } from '../../../../lib/redux/slices/state/stateSlice';
import MirrorAndStarsVideo from '../MirrorAndStarsVideo';
import ScrollIconComponent from '../ScrollIconComponent';
import YourBody from '../YourBody';
import ExerciseCard from './ExerciseCard';
import HeroVideo from './HeroVideo';
import SocialFitnessGamified from './SocialFitnessGamified';

export const HeroDesktop: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
  const isScrolling = useAppSelector((state) => state.stateReducer.heroVideo.isScrolling);
  const isScrolled = React.useRef(false);

  const [isMovedToYourBodySection, setIsMovedToYourBodySection] = React.useState(false);

  const impaktGameHeroRef = React.useRef<HTMLDivElement | null>(null);
  const mirrorRef = React.useRef<HTMLDivElement | null>(null);
  const heroVideoRef = React.useRef<HTMLVideoElement | null>(null);
  const heroVideoScreenRef = React.useRef<HTMLDivElement | null>(null);
  const heroRightSideRef = React.useRef<HTMLDivElement | null>(null);
  const exerciseCardRef = React.useRef<HTMLDivElement | null>(null);
  const yourBodySectionRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    function updateSize() {
      if (
        mirrorRef.current &&
        heroVideoScreenRef.current &&
        heroVideoRef.current &&
        heroRightSideRef.current
      ) {
        mirrorRef.current.style.left = `${heroRightSideRef.current.getBoundingClientRect().x}px`;
        if (!isAnimated) {
          dispatch(setBorderX({ borderX: heroVideoScreenRef.current.getBoundingClientRect().x }));
          dispatch(
            setBorderY({ borderY: heroVideoScreenRef.current.getBoundingClientRect().y + 28 }),
          );
        }
        if (isScrolling && isAnimated) {
          heroVideoRef.current.style.left = `${
            heroVideoScreenRef.current.getBoundingClientRect().x
          }px`;

          heroVideoRef.current.style.top = `${
            heroVideoScreenRef.current.getBoundingClientRect().y + 28 + window.scrollY
          }px`;
        }
      }
    }

    window.addEventListener('resize', updateSize);

    return () => window.removeEventListener('resize', updateSize);
  }, [isScrolling, isAnimated]);

  const moveToYourBodySection = (e: React.WheelEvent<HTMLDivElement>) => {
    e.stopPropagation();

    if (isScrolled.current) return;
    if (!impaktGameHeroRef.current) return;
    if (isAnimated) {
      isScrolled.current = true;
      window.scrollTo(0, impaktGameHeroRef.current.clientHeight - 200);
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
        yourBodySectionRef.current &&
        window.scrollY < yourBodySectionRef.current.offsetTop - 200 &&
        heroVideoScreenRef.current &&
        isAnimated
      ) {
        mirrorRef.current.style.top = `${window.scrollY + 150}px`;
        heroVideoRef.current.style.top = `${
          window.scrollY + heroVideoScreenRef.current.getBoundingClientRect().y + 28
        }px`;
      }
    }

    window.addEventListener('scroll', checkOffSet);

    return () => window.removeEventListener('scroll', checkOffSet);
  }, [isAnimated, mirrorRef, heroVideoRef, yourBodySectionRef]);

  React.useEffect(() => {
    if (!isAnimated || isMovedToYourBodySection) {
      document.body.style.overflow = 'hidden';
    }

    if (isMovedToYourBodySection) {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isAnimated, isMovedToYourBodySection]);

  React.useEffect(() => {
    if (mirrorRef.current && heroVideoScreenRef.current && heroRightSideRef.current) {
      mirrorRef.current.style.top = `${heroRightSideRef.current.getBoundingClientRect().y - 24}px`;
      mirrorRef.current.style.left = `${heroRightSideRef.current.getBoundingClientRect().x}px`;
      dispatch(setBorderX({ borderX: heroVideoScreenRef.current.getBoundingClientRect().x }));
      dispatch(setBorderY({ borderY: heroVideoScreenRef.current.getBoundingClientRect().y + 28 }));
    }
  }, []);

  return (
    <div
      onWheel={(e) => moveToYourBodySection(e)}
      style={{ backgroundColor: '#121117', position: 'relative' }}
      id="stick"
    >
      <div ref={impaktGameHeroRef} id="impakt-game-hero">
        <SocialFitnessGamified>
          <HStack
            ref={heroRightSideRef}
            height={{ base: '89.962962962963vh', lgx: '788px' }}
            minH={{ base: '89.962962962963vh', lgx: '788px' }}
            width={{ base: '38.250vw', lgx: '600px' }}
            minW={{ base: '38.250vw', lgx: '600px' }}
            id="right"
            w="full"
            margin="0 !important"
          >
            <Box height="72.962962962963vh" />
          </HStack>
        </SocialFitnessGamified>
      </div>
      {isScrolling && (
        <div id="impakt-your-body" ref={yourBodySectionRef}>
          <YourBody>
            <HStack id="right" w="full">
              <Box />
            </HStack>
          </YourBody>
        </div>
      )}

      <MirrorAndStarsVideo
        id="starsvideo"
        position="absolute"
        left="49vw"
        top="158px"
        ref={mirrorRef}
        height={{ base: '80.962962962963vh', lgx: '788px' }}
        width={{ base: '40.250vw', lgx: '600px' }}
      >
        <Box
          right={{ lg: '-3.1vw', lgx: '-7.9vw' }}
          top="90px"
          id="exercise-card"
          ref={exerciseCardRef}
          zIndex={99999}
          position="absolute"
        >
          <ExerciseCard />
        </Box>
        <ScrollIconComponent
          width="80"
          height="80"
          isVisible={isAnimated}
          position="absolute"
          zIndex="1"
          left="43%"
        />

        <Box
          display="flex"
          w="640px"
          h="388px"
          top="33%"
          zIndex="5"
          left="40px"
          position="absolute"
          ref={heroVideoScreenRef}
        >
          <img width="100%" height="100%" src={Images.Common.Window} alt="_" />
        </Box>
      </MirrorAndStarsVideo>
      <React.Suspense fallback={null}>
        <HeroVideo ref={heroVideoRef} />
      </React.Suspense>
      <ScrollIconComponent
        width="80"
        height="80"
        isVisible={!isScrolling}
        zIndex="999999"
        position="fixed"
        left="48%"
      />
    </div>
  );
};

export default HeroDesktop;
