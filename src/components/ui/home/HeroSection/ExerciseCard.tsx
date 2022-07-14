import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

import useAppSelector from '../../../../hooks/useAppSelector';
import useParallax from '../../../../hooks/useParallax';
import AnimationAlways from '../../../common/AnimationAlways';
import AccelerationIcon from '../../../icons/AccelerationIcon';
import SegmentedProgress from '../../../icons/SegmentedProgress';

const ExerciseCard: React.FC = () => {
  const { t } = useTranslation(`default`).i18n;
  const [circularProgressValue, setCircularProgressValue] = React.useState(4.16666666667);
  const [displayValue, setDisplayValue] = React.useState(10);
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
  const accentRedtextColor = useColorModeValue('accentR1', 'accentR1');
  const boxRef = React.useRef<HTMLDivElement | null>(null);
  const { handleMouseOver } = useParallax(boxRef);
  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (isAnimated) {
      const interval = setInterval(() => {
        setDisplayValue((prevState) => {
          if (prevState >= 20) {
            return 10;
          }

          return prevState + 0.45454545;
        });

        setCircularProgressValue((prevState) => {
          if (prevState >= 100) {
            return 4.16666666667;
          }

          return prevState + 4.16666666667;
        });
      }, 1950);

      return () => clearInterval(interval);
    }
  }, [isAnimated]);

  return !isAnimated ? null : (
    <AnimationAlways animationType="move" xValue={50}>
      <VStack
        ref={boxRef}
        zIndex={99999}
        onMouseOver={handleMouseOver}
        w="234px"
        h="294px"
        borderRadius="24px"
        backdropFilter="blur(60px)"
        background="rgba(0, 2, 10, 0.4)"
        rowGap="25px"
        justifyContent="flex-start"
      >
        <Box
          background="linear-gradient(90deg, #F04153 0%, rgba(240, 65, 83, 0) 100%)"
          padding="4px"
          borderRadius="24px 24px 0px 0"
          w="full"
          id="exercise-card-header"
          textAlign="center"
          justifyContent="center"
        >
          <Text
            fontSize="14.61px"
            color="rgba(255, 255, 255, 0.8)"
            fontWeight={700}
            lineHeight="135%"
          >
            {t(Keys.impaktGamesHero.excercise)}
          </Text>
        </Box>
        <HStack columnGap="10px" mt="0 !important" id="exercise-card-activity-description">
          <AccelerationIcon />
          <Text color="#FFFFFF" textStyle="normal5">
            {t(Keys.impaktGamesHero.squats)}
          </Text>
        </HStack>
        <Box mt="0 !important" id="exercise-cardprogress-bar-box">
          <Box position="relative">
            <CircularProgress
              trackColor="rgba(240, 65, 83, 0.35)"
              size="150px"
              color={accentRedtextColor}
              value={circularProgressValue}
              thickness="9.5"
            >
              <CircularProgressLabel
                letterSpacing="1px"
                fontWeight={500}
                lineHeight="100%"
                fontSize="56px"
                color="#FFFFFF"
              >
                {Math.floor(displayValue)}
              </CircularProgressLabel>
            </CircularProgress>
            <Box position="absolute" left="2px" top="2.4px">
              <SegmentedProgress />
            </Box>
          </Box>{' '}
        </Box>{' '}
      </VStack>{' '}
    </AnimationAlways>
  );
};

export default ExerciseCard;
