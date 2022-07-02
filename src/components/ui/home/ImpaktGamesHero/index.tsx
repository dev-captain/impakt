/* eslint-disable jsx-a11y/media-has-caption */
import { memo, useEffect, useLayoutEffect, useRef } from 'react';
import { VStack, HStack, useColorModeValue, Box, Text } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import Images from 'assets/images';
import HeroVideo from './HeroVideo';
import InfoCard from '../../../core/InfoCard';
import YoutubeIcon from '../../../icons/YoutubeIcon';
import StarsVideo from './StarsVideo';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import { setBorderX, setBorderY } from '../../../../lib/redux/slices/state/stateSlice';
import ExerciseCard from './ExerciseCard';
import useAppSelector from '../../../../hooks/useAppSelector';

const ImpaktGamesHero = () => {
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
  const mirrorRef = useRef() as any;
  const dispatch = useAppDispatch();
  const borderX = useAppSelector((state) => state.stateReducer.heroVideo.borderX);
  const borderY = useAppSelector((state) => state.stateReducer.heroVideo.borderY);

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
    <HeroLayout
      showNavbar
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack id="general" maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack columnGap="48px" alignItems="flex-start" w="full">
            <VStack w="full" rowGap="32px" justifyContent="flex-start" alignItems="flex-start">
              <Box
                id="hero-headline-box"
                backgroundClip="text"
                css={{
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
                background="linear-gradient(302.56deg, rgba(140, 48, 155, 0.44) 3.86%, rgba(140, 48, 155, 0) 52.18%), linear-gradient(57.44deg, rgba(56, 4, 193, 0.55) -14.75%, rgba(56, 4, 193, 0) 32.81%), #FFFFFF;"
              >
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  Social
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  Fitness.
                </Text>
                <Text letterSpacing="-4px" textStyle="TitleBold73">
                  Gamified.
                </Text>
              </Box>
              <Box
                ml="7px !important"
                mt="0 !important"
                id="hero-headline-description"
                backgroundClip="text"
              >
                <Text color="rgba(255, 255, 255, 0.85);" textStyle="regular20">
                  Work out! Get fit! Get paid!
                </Text>
              </Box>
              <Box ml="7px !important" maxW="500px" w="full" id="hero-info-card-box">
                <InfoCard isShowTooltip LeftLogo={<YoutubeIcon />}>
                  <VStack alignItems="flex-start" color="white">
                    <Text textStyle="regular201">Start earning CRYPTO now!</Text>
                    <Text color="gold" fontWeight="bold" textStyle="regular201">
                      1000 GODL BONUS
                    </Text>
                    <Text textStyle="semiBold14" color="whiteAlpha.400">
                      *for new accounts
                    </Text>
                  </VStack>
                </InfoCard>
              </Box>
            </VStack>
            <HStack w="full">
              <Box left={borderX + 485} top={borderY - 150} zIndex={9999} position="absolute">
                <ExerciseCard />
              </Box>
              <Box ref={mirrorRef} position="relative" height="788px" width="600px">
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
            </HStack>
          </HStack>
        </VStack>
      </VStack>
      <HeroVideo />
    </HeroLayout>
  );
};

export default memo(ImpaktGamesHero);
