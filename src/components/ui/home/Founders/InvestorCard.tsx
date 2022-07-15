import { Box, Image, Text, VStack, useColorModeValue } from '@chakra-ui/react';
import AnimationAlways from 'components/common/AnimationAlways';
// import gsap, { Power2 } from 'gsap';
import * as React from 'react';
import useParallax from '../../../../hooks/useParallax';

const InvestorCard = ({ image, name, title }: { image: string; name: string; title: string }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const imageBoxRef = React.useRef<HTMLDivElement>(null);
  const nameBoxRef = React.useRef<HTMLDivElement>(null);
  const positionBoxRef = React.useRef<HTMLDivElement>(null);
  useParallax(cardRef, [imageBoxRef, nameBoxRef, positionBoxRef], { range: 25 });
  // const bgColor = useColorModeValue('glass.800', 'glass.200');
  const subTitleColor = useColorModeValue('electric.100', 'glass.700');
  // const boxRef = React.useRef() as any;
  // const handleMouseOver = (e: any) => {
  //   const rotateX = -(e.clientY - window.innerHeight / 3.6) * 0.04;
  //   const rotateY = (e.clientX - window.innerWidth / 1.36) * 0.04;
  //   gsap.to(boxRef.current, {
  //     duration: 0.5,
  //     ease: Power2.easeOut,
  //     rotationX: rotateX,
  //     rotationY: rotateY,
  //   });
  // };

  return (
    <AnimationAlways animationType="move" xValue={100}>
      <VStack
        ref={cardRef}
        // onMouseOver={handleMouseOver}
        pl="32px"
        pr="32px"
        pb="32px"
        w={{ base: '348px', md: '368px' }}
        h="280px"
        align="center"
        justify="space-between"
        bgColor="rgba(28, 28, 40, 0.65)"
        position="relative"
        borderRadius="32px"
        backdropFilter="blur(40px)"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
      >
        <VStack pos="relative" zIndex={1} top="-19px" height="100px">
          <Box role="group" maxW="330px" w="full" boxShadow="sm" rounded="lg">
            <Box
              rounded="lg"
              mt={-12}
              ref={imageBoxRef}
              pos="relative"
              _after={{
                transition: 'all .3s ease',
                content: '""',
                w: 'full',
                h: '110px',
                pos: 'absolute',
                top: '54px',
                left: 0,
                backgroundImage: `url(${image})`,
                filter: 'blur(15px)',
                zIndex: -1,
              }}
            >
              <Image
                rounded="lg"
                objectFit="cover"
                src={image}
                boxSizing="border-box"
                borderRadius="24px"
              />
            </Box>
          </Box>
        </VStack>
        <VStack ref={nameBoxRef} align="center" justify="center">
          <Text textStyle="bold5" pb="5px" align="center">
            {name}
          </Text>
        </VStack>
        <VStack
          width="100%"
          maxWidth="100%"
          align="center"
          justify="center"
          mt="0px !important"
          mb="10px !important"
          ref={positionBoxRef}
        >
          <Box backgroundColor="rgba(255, 255, 255, 0.04)" borderRadius="8px" w="100%">
            <Text
              textStyle="regular3"
              margin="0 !important"
              opacity="0.6"
              align="center"
              padding="10px 15px 9px 16px"
              box-sizing="border-box"
              borderRadius="8px"
              border="2px solid rgba(255, 255, 255, 0.04)"
              color={subTitleColor}
            >
              {title}
            </Text>
          </Box>
        </VStack>
      </VStack>
    </AnimationAlways>
  );
};

export default InvestorCard;
