import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React, { useRef } from 'react';

const TeamCard = ({
  image,
  name,
  title,
  subtitle,
  subtitle1,
}: {
  image: string;
  name: string;
  title: string;
  subtitle: string;
  subtitle1: string;
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
        <Text textStyle="semiBold5" color="#F04153">
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
        mb="0px !important"
      >
        <Box
          backgroundColor="rgba(255, 255, 255, 0.04)"
          borderRadius="8px"
          w="100%"
          height={{ base: 'auto', md: '178px' }}
          padding="12px 16px 12px 16px"
          box-sizing="border-box"
          border="2px solid rgba(255, 255, 255, 0.04)"
        >
          <Text
            textStyle="semiBold5"
            margin="0 !important"
            color=" rgba(255, 255, 255, 0.75)"
            whiteSpace="pre-line"
            dangerouslySetInnerHTML={{ __html: subtitle }}
          />
          <Text
            textStyle="semiBold5"
            marginTop="6px !important"
            color=" rgba(255, 255, 255, 0.75)"
            whiteSpace="pre-line"
            dangerouslySetInnerHTML={{ __html: subtitle1 }}
          />
        </Box>
      </VStack>
    </VStack>
  );
};
export default TeamCard;

// Component with Flip effect without Animation ---- Start

// import { Box, Image, Text, VStack } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import Images from 'assets/images';

// const { Twitter, TwitterLight, Facebook, Instagram, FacebookDark, InstagramDark } = Images.Common;

// const TeamCard = ({
//   image,
//   name,
//   title,
//   subtitle,
// }: {
//   image: string;
//   name: string;
//   title: string;
//   subtitle: string;
// }) => {
//   const [twitterImg, setTwitterImg] = useState(Twitter);
//   const [facebookImg, setFacebookImg] = useState(Facebook);
//   const [instagramImg, setInstagramImg] = useState(Instagram);
//   // const bgColor = useColorModeValue('glass.800', 'glass.200');
//   const handleOnMouseOverTeamSocial = (
//     e: React.MouseEvent<HTMLDivElement>,
//     socialImage: any,
//     hoverType: string,
//   ) => {
//     if (hoverType === 'Twitter') setTwitterImg(socialImage);
//     if (hoverType === 'Facebook') setFacebookImg(socialImage);
//     if (hoverType === 'Instagram') setInstagramImg(socialImage);
//   };
//   const handleOnMouseLeaveTeamSocial = (
//     e: React.MouseEvent<HTMLDivElement>,
//     socialImage: any,
//     hoverType: string,
//   ) => {
//     if (hoverType === 'Twitter') setTwitterImg(socialImage);
//     if (hoverType === 'Facebook') setFacebookImg(socialImage);
//     if (hoverType === 'Instagram') setInstagramImg(socialImage);
//   };

//   return (
//     <VStack
//       // onMouseMove={handleOnMouseOverTeamCard}
//       // onMouseLeave={handleOnMouseLeaveTeamCard}
//       // ref={teamCardRef}
//       pl="32px"
//       pr="32px"
//       pb="32px"
//       w="368px"
//       h="436px"
//       align="center"
//       transitionDuration="150ms"
//       justify="space-between"
//       bgColor="rgba(28, 28, 40, 0.65)"
//       position="relative"
//       borderRadius="32px"
//       backdropFilter="blur(40px)"
//       filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
//     >
//       <VStack pos="relative" zIndex={1} top="-19px" height="100px">
//         <Box role="group" maxW="330px" w="full" boxShadow="sm" rounded="lg">
//           <Box
//             rounded="lg"
//             mt={-12}
//             pos="relative"
//             _after={{
//               transition: 'all .3s ease',
//               content: '""',
//               w: 'full',
//               h: '110px',
//               pos: 'absolute',
//               top: '54px',
//               left: 0,
//               backgroundImage: `url(${image})`,
//               filter: 'blur(15px)',
//               zIndex: -1,
//             }}
//           >
//             <Image
//               rounded="lg"
//               objectFit="cover"
//               src={image}
//               boxSizing="border-box"
//               borderRadius="24px"
//             />
//           </Box>
//         </Box>
//       </VStack>
//       <VStack
//         w="full"
//         spacing={5}
//         justify={{ base: 'center', md: 'center' }}
//         mt={{ base: 0, md: 0, xl: '64px' }}
//       >
//         <Text textStyle="semiBold16" color="#F04153">
//           {' '}
//           {title}
//         </Text>
//       </VStack>
//       <VStack align="center" justify="center" mb="24px !important">
//         <Text textStyle="bold5" pb="5px" align="center">
//           {name}
//         </Text>
//       </VStack>
//       <VStack
//         width="100%"
//         maxWidth="100%"
//         align="center"
//         justify="center"
//         mt="0px !important"
//         mb="10px !important"
//       >
//         <Box position="relative" data-group>
//           <Box
//             backgroundColor="rgba(255, 255, 255, 0.04)"
//             borderRadius="8px"
//             w="100%"
//             border="2px solid rgba(255, 255, 255, 0.04)"
//             transitionTimingFunction="cubic-bezier(.175, .885, .32, 1.275)"
//             transform="rotateX(0deg)"
//             transitionDuration="1s"
//             transitionProperty="transform, opacity"
//             _groupHover={{
//               transform: 'rotateX(180deg)',
//               opacity: '0',
//             }}
//           >
//             <Text
//               textStyle="regular3"
//               margin="0 !important"
//               height="168px"
//               padding="8px 16px 8px 16px"
//               box-sizing="border-box"
//               borderRadius="8px"
//               color="#9fa4af"
//               whiteSpace="pre-line"
//               dangerouslySetInnerHTML={{ __html: subtitle }}
//             />
//           </Box>
//           <Box
//             backgroundColor="rgba(255, 255, 255, 0.04)"
//             borderRadius="8px"
//             w="100%"
//             border="2px solid rgba(255, 255, 255, 0.04)"
//             padding="20px 16px"
//             transitionTimingFunction="cubic-bezier(.175, .885, .32, 1.275)"
//             transitionDuration="1s"
//             transitionProperty="transform, opacity"
//             position="absolute"
//             opacity="0"
//             top="0px"
//             left="0px"
//             transform="rotateX(-180deg)"
//             _groupHover={{
//               opacity: '1',
//               transform: 'rotateX(0deg)',
//             }}
//           >
//             <Box
//               borderRadius="8px"
//               display="flex"
//               paddingY="5px"
//               marginBottom="5px"
//               justifyContent="center"
//               backdropFilter="blur(40px)"
//               backgroundColor="rgba(255, 255, 255, 0.1)"
//               alignItems="center"
//               transition="0.5s"
//               cursor="pointer"
//               onMouseMove={(e) => handleOnMouseOverTeamSocial(e, TwitterLight, 'Twitter')}
//               onMouseLeave={(e) => handleOnMouseLeaveTeamSocial(e, Twitter, 'Twitter')}
//               _hover={{ backgroundColor: '#FFF', color: '#000' }}
//             >
//               <Image
//                 maxW="24px"
//                 minW="19px"
//                 h="32px"
//                 opacity={0.6}
//                 objectFit="contain"
//                 src={twitterImg}
//                 me="8px"
//               />
//               <Text>Twitter</Text>
//             </Box>
//             <Box
//               borderRadius="8px"
//               display="flex"
//               justifyContent="center"
//               paddingY="5px"
//               marginBottom="5px"
//               backdropFilter="blur(40px)"
//               backgroundColor="rgba(255, 255, 255, 0.1)"
//               alignItems="center"
//               cursor="pointer"
//               transition="0.5s"
//               onMouseMove={(e) => handleOnMouseOverTeamSocial(e, FacebookDark, 'Facebook')}
//               onMouseLeave={(e) => handleOnMouseLeaveTeamSocial(e, Facebook, 'Facebook')}
//               _hover={{ backgroundColor: '#FFF', color: '#000' }}
//             >
//               <Image
//                 maxW="20px"
//                 minW="20px"
//                 h="32px"
//                 opacity={0.6}
//                 objectFit="contain"
//                 src={facebookImg}
//                 me="8px"
//               />
//               <Text>Facebook</Text>
//             </Box>
//             <Box
//               borderRadius="8px"
//               display="flex"
//               justifyContent="center"
//               paddingY="5px"
//               marginBottom="5px"
//               cursor="pointer"
//               alignItems="center"
//               transition="0.5s"
//               backdropFilter="blur(40px)"
//               backgroundColor="rgba(255, 255, 255, 0.1)"
//               onMouseMove={(e) => handleOnMouseOverTeamSocial(e, InstagramDark, 'Instagram')}
//               onMouseLeave={(e) => handleOnMouseLeaveTeamSocial(e, Instagram, 'Instagram')}
//               _hover={{ backgroundColor: '#FFF', color: '#000' }}
//             >
//               <Image
//                 maxW="20px"
//                 minW="20px"
//                 h="32px"
//                 opacity={0.6}
//                 objectFit="contain"
//                 src={instagramImg}
//                 me="8px"
//               />
//               <Text>Instagram</Text>
//             </Box>
//           </Box>
//         </Box>
//       </VStack>
//     </VStack>
//   );
// };
// export default TeamCard;

// Component with Flip effect without Animation ---- End
