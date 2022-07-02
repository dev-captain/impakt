import {
  Box,
  CircularProgress,
  CircularProgressLabel,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import gsap, { Power2 } from 'gsap';
import * as React from 'react';
import useAppSelector from '../../../../hooks/useAppSelector';
import AnimationInWhenVisible from '../../../common/AnimationInWhenVisible';
import AccelerationIcon from '../../../icons/AccelerationIcon';

const ExerciseCard: React.FC = () => {
  const [circularProgressValue, setCircularProgressValue] = React.useState(20);
  const [displayValue, setDisplayValue] = React.useState(12);
  const isAnimated = useAppSelector((state) => state.stateReducer.heroVideo.isAnimated);
  const accentRedtextColor = useColorModeValue('accentR1', 'accentR1');
  const boxRef = React.useRef() as any;
  // eslint-disable-next-line consistent-return
  React.useEffect(() => {
    if (isAnimated) {
      const interval = setInterval(() => {
        setDisplayValue((prevState) => {
          if (prevState === 20) {
            return 10;
          }

          return prevState + 1;
        });

        setCircularProgressValue((prevState) => {
          if (prevState === 100) {
            return 0;
          }

          return prevState + 10;
        });
      }, 1950);

      return () => clearInterval(interval);
    }
  }, [isAnimated]);

  const handleMouseOver = (e: any) => {
    const rotateX = -(e.clientY - window.innerHeight / 3.6) * 0.09;
    const rotateY = (e.clientX - window.innerWidth / 1.36) * 0.09;
    gsap.to(boxRef.current, {
      duration: 0.5,
      ease: Power2.easeOut,
      rotationX: rotateX,
      rotationY: rotateY,
    });
  };

  return !isAnimated ? null : (
    <AnimationInWhenVisible animationType="move" xValue={50}>
      <VStack
        ref={boxRef}
        zIndex={99999}
        onMouseOver={handleMouseOver}
        w="234px"
        h="294px"
        borderRadius="24px"
        backdropFilter="blur(60px)"
        border="2px solid rgba(0, 2, 10, 0.14);"
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
            EXERCISE
          </Text>
        </Box>
        <HStack columnGap="10px" mt="0 !important" id="exercise-card-activity-description">
          <AccelerationIcon />
          <Text color="#FFFFFF" textStyle="normal5">
            SQUATS
          </Text>
        </HStack>
        <Box mt="0 !important" id="exercise-cardprogress-bar-box">
          <CircularProgress
            trackColor={accentRedtextColor}
            size="160px"
            color="rgba(0, 0, 0, 1)"
            value={circularProgressValue}
            thickness="13"
            stroke="transparent !important"
          >
            <CircularProgressLabel
              letterSpacing="1px"
              fontWeight={500}
              lineHeight="100%"
              fontSize="56px"
              color="#FFFFFF"
            >
              {displayValue}
            </CircularProgressLabel>
          </CircularProgress>
        </Box>
      </VStack>
    </AnimationInWhenVisible>
  );
};

export default ExerciseCard;
