import { Box, Image, Text, VStack, Link } from '@chakra-ui/react';
import React, { useState } from 'react';
import Images from 'assets/images';

const { Twitter, TwitterLight, Facebook, FacebookDark, LinkedIn, LinkedInDark } = Images.Common;

const TeamCard = ({
  image,
  name,
  title,
  subtitle,
  subtitle1,
  twitterLink,
  linkedInLink,
  facebookLink,
}: {
  image: string;
  name: string;
  title: string;
  subtitle: string;
  subtitle1: string;
  twitterLink: string;
  linkedInLink: string;
  facebookLink: string;
}) => {
  const [twitterImg, setTwitterImg] = useState(Twitter);
  const [facebookImg, setFacebookImg] = useState(Facebook);
  const [linkedinImg, setLinkedinImg] = useState(LinkedIn);
  // const bgColor = useColorModeValue('glass.800', 'glass.200');
  const handleOnMouseOverTeamSocial = (
    e: React.MouseEvent<HTMLDivElement>,
    socialImage: any,
    hoverType: string,
  ) => {
    if (hoverType === 'Twitter') setTwitterImg(socialImage);
    if (hoverType === 'Facebook') setFacebookImg(socialImage);
    if (hoverType === 'LinkedIn') setLinkedinImg(socialImage);
  };
  const handleOnMouseLeaveTeamSocial = (
    e: React.MouseEvent<HTMLDivElement>,
    socialImage: any,
    hoverType: string,
  ) => {
    if (hoverType === 'Twitter') setTwitterImg(socialImage);
    if (hoverType === 'Facebook') setFacebookImg(socialImage);
    if (hoverType === 'LinkedIn') setLinkedinImg(socialImage);
  };

  return (
    <VStack
      // onMouseMove={handleOnMouseOverTeamCard}
      // onMouseLeave={handleOnMouseLeaveTeamCard}
      // ref={teamCardRef}
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
        {title !== 'CTO' ? (
          <Box position="relative" data-group>
            <Box
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.04)"
              height={{ base: 'auto', md: '178px' }}
              padding="12px 16px 12px 16px"
              box-sizing="border-box"
              transitionTimingFunction="cubic-bezier(.175, .885, .32, 1.275)"
              transform="rotateX(0deg)"
              transitionDuration="1s"
              transitionProperty="transform, opacity"
              _groupHover={{
                transform: 'rotateX(180deg)',
                opacity: '0',
              }}
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
            <Box
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.04)"
              padding="20px 16px"
              transitionTimingFunction="cubic-bezier(.175, .885, .32, 1.275)"
              transitionDuration="1s"
              transitionProperty="transform, opacity"
              position="absolute"
              opacity="0"
              top="0px"
              left="0px"
              transform="rotateX(-180deg)"
              _groupHover={{
                opacity: '1',
                transform: 'rotateX(0deg)',
              }}
            >
              {twitterLink && (
                <Link
                  href={twitterLink}
                  target="_blank"
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    borderRadius="8px"
                    display="flex"
                    paddingY="5px"
                    marginBottom="5px"
                    justifyContent="center"
                    backdropFilter="blur(40px)"
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    alignItems="center"
                    transition="0.5s"
                    cursor="pointer"
                    onMouseMove={(e) => handleOnMouseOverTeamSocial(e, TwitterLight, 'Twitter')}
                    onMouseLeave={(e) => handleOnMouseLeaveTeamSocial(e, Twitter, 'Twitter')}
                    _hover={{ backgroundColor: '#FFF', color: '#000' }}
                  >
                    <Image
                      maxW="24px"
                      minW="19px"
                      h="32px"
                      opacity={0.6}
                      objectFit="contain"
                      src={twitterImg}
                      me="8px"
                    />
                    <Text textStyle="semiBold17">Twitter</Text>
                  </Box>
                </Link>
              )}
              {facebookLink && (
                <Link
                  href={facebookLink}
                  target="_blank"
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    borderRadius="8px"
                    display="flex"
                    justifyContent="center"
                    paddingY="5px"
                    marginBottom="5px"
                    backdropFilter="blur(40px)"
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    alignItems="center"
                    cursor="pointer"
                    transition="0.5s"
                    onMouseMove={(e) => handleOnMouseOverTeamSocial(e, FacebookDark, 'Facebook')}
                    onMouseLeave={(e) => handleOnMouseLeaveTeamSocial(e, Facebook, 'Facebook')}
                    _hover={{ backgroundColor: '#FFF', color: '#000' }}
                  >
                    <Image
                      maxW="20px"
                      minW="20px"
                      h="32px"
                      opacity={0.6}
                      objectFit="contain"
                      src={facebookImg}
                      me="8px"
                    />
                    <Text textStyle="semiBold17">Facebook</Text>
                  </Box>
                </Link>
              )}
              {linkedInLink && (
                <Link
                  href={linkedInLink}
                  target="_blank"
                  _focus={{ boxShadow: 'none' }}
                  _hover={{ textDecoration: 'none' }}
                >
                  <Box
                    borderRadius="8px"
                    display="flex"
                    justifyContent="center"
                    paddingY="5px"
                    marginBottom="5px"
                    cursor="pointer"
                    alignItems="center"
                    transition="0.5s"
                    backdropFilter="blur(40px)"
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    onMouseMove={(e) => handleOnMouseOverTeamSocial(e, LinkedInDark, 'LinkedIn')}
                    onMouseLeave={(e) => handleOnMouseLeaveTeamSocial(e, LinkedIn, 'LinkedIn')}
                    _hover={{ backgroundColor: '#FFF', color: '#000' }}
                  >
                    <Image
                      maxW="20px"
                      minW="20px"
                      h="32px"
                      opacity={0.6}
                      objectFit="contain"
                      src={linkedinImg}
                      me="8px"
                    />
                    <Text textStyle="semiBold17">LinkedIn</Text>
                  </Box>
                </Link>
              )}
            </Box>
          </Box>
        ) : (
          <Box position="relative">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.04)"
              height={{ base: 'auto', md: '178px' }}
              padding="12px 16px 12px 16px"
              box-sizing="border-box"
              transitionTimingFunction="cubic-bezier(.175, .885, .32, 1.275)"
              transform="rotateX(0deg)"
              transitionDuration="1s"
              transitionProperty="transform, opacity"
              _groupHover={{
                transform: 'rotateX(180deg)',
                opacity: '0',
              }}
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
          </Box>
        )}
      </VStack>
    </VStack>
  );
};
export default TeamCard;
