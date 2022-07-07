import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React, { useRef } from 'react';

const TeamCard = ({
  image,
  name,
  title,
  subtitle,
}: {
  image: string;
  name: string;
  title: string;
  subtitle: string;
}) => {
  // const bgColor = useColorModeValue('glass.800', 'glass.200');
  const teamCardRef = useRef<HTMLDivElement | null>(null);
  const handleOnMouseOverTeamCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!teamCardRef.current) return;
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const bound = teamCardRef.current.getBoundingClientRect();
    const leftX = mouseX - bound.x;
    const topY = mouseY - bound.y;
    const center = {
      x: leftX - bound.width / 2,
      y: topY - bound.height / 2,
    };
    const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
    teamCardRef.current.style.transform = `
      scale3d(1.07, 1.07, 1.07)
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * 5}deg
      )
    `;
  };
  const handleOnMouseLeaveTeamCard = () => {
    if (!teamCardRef.current) return;
    teamCardRef.current.style.transform = '';
    teamCardRef.current.style.background = '';
  };
  return (
    <VStack
      id="card"
      onMouseMove={handleOnMouseOverTeamCard}
      onMouseLeave={handleOnMouseLeaveTeamCard}
      ref={teamCardRef}
      zIndex={99999}
      pl="32px"
      pr="32px"
      pb="32px"
      w="368px"
      h="436px"
      align="center"
      transitionDuration="150ms"
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
      <VStack
        w="full"
        spacing={5}
        justify={{ base: 'center', md: 'center' }}
        mt={{ base: 0, md: 0, xl: '64px' }}
      >
        <Text textStyle="semiBold16" color="#F04153">
          {' '}
          {title}
        </Text>
      </VStack>
      <VStack align="center" justify="center" mb="24px !important">
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
      >
        <Box backgroundColor="rgba(255, 255, 255, 0.04)" borderRadius="8px" w="100%">
          <Text
            textStyle="regular3"
            margin="0 !important"
            height="168px"
            padding="8px 16px 8px 16px"
            box-sizing="border-box"
            borderRadius="8px"
            border="2px solid rgba(255, 255, 255, 0.04)"
            color="#9fa4af"
            whiteSpace="pre-line"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
        </Box>
      </VStack>
    </VStack>
  );
};
export default TeamCard;
