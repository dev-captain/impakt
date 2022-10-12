import { Box, Image, Text, VStack } from '@chakra-ui/react';
// import React, { useState } from 'react';
// import Images from 'assets/images';

// import colors from 'theme/colors';

// const { Twitter, Facebook, LinkedIn } = Images.Common;

const TeamCard = ({
  image,
  name,
  title,
  followers,
  data,
}: {
  image: string;
  name: string;
  title: string;
  followers: string;
  data: any;
}) => {
  // const [twitterImg, setTwitterImg] = useState(Twitter);
  // const [facebookImg, setFacebookImg] = useState(Facebook);
  // const [linkedinImg, setLinkedinImg] = useState(LinkedIn);
  // const bgColor = useColorModeValue('glass.800', 'glass.200');
  // const handleOnMouseOverTeamSocial = (
  //   e: React.MouseEvent<HTMLDivElement>,
  //   socialImage: any,
  //   hoverType: string,
  // ) => {
  //   if (hoverType === 'Twitter') setTwitterImg(socialImage);
  //   if (hoverType === 'Facebook') setFacebookImg(socialImage);
  //   if (hoverType === 'LinkedIn') setLinkedinImg(socialImage);
  // };
  // const handleOnMouseLeaveTeamSocial = (
  //   e: React.MouseEvent<HTMLDivElement>,
  //   socialImage: any,
  //   hoverType: string,
  // ) => {
  //   if (hoverType === 'Twitter') setTwitterImg(socialImage);
  //   if (hoverType === 'Facebook') setFacebookImg(socialImage);
  //   if (hoverType === 'LinkedIn') setLinkedinImg(socialImage);
  // };

  return (
    <VStack>
      <VStack pos="relative" zIndex={1}>
        <Box role="group" maxW="330px" w="full" boxShadow="sm" rounded="lg">
          <Box>
            <Image
              rounded="lg"
              objectFit="cover"
              src={image}
              width={{ md: 'auto', base: '130px' }}
              boxSizing="border-box"
              borderRadius="24px"
            />
          </Box>
        </Box>
      </VStack>
      <VStack
        align="center"
        justify="center"
        mt="0 !important"
        fontWeight="600"
        mb="10px !important"
      >
        <Text
          align="center"
          mt="20px"
          fontSize={{ lg: '36px', base: '26px' }}
          color="#1C1C28"
          lineHeight="100%"
        >
          {name}
        </Text>
      </VStack>
      <VStack
        w="full"
        spacing={5}
        justify={{ base: 'center', md: 'center' }}
        mt={{ base: 0, md: 0, xl: '64px' }}
      >
        <Text
          color="#1c1c2899"
          fontSize={{ lg: '24px', base: '20px' }}
          fontWeight="500"
          lineHeight="100%"
          mb="21px"
        >
          {' '}
          {followers}
        </Text>
      </VStack>
      <Box height="1px" background="#000" width="152px" margin="24px auto" />
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
              className="flipWebkit"
              borderRadius="8px"
              w="100%"
              style={{ backfaceVisibility: 'hidden' }}
              position="relative"
              zIndex="10"
              padding="12px 16px 12px 16px"
              box-sizing="border-box"
              transform="rotateX(0deg)"
              transitionDuration="0.2s"
              transitionProperty="transform, opacity"
              mt="2px"
              // _groupHover={{
              //   transform: 'rotateX(180deg)',
              //   opacity: '0',
              //   zIndex: '0',
              //   backfaceVisibility: 'visible',
              // }}
            >
              {data.map((d: any) => (
                <Box display="flex">
                  <Box
                    backgroundColor="#4E6070"
                    width="5px"
                    height="5px"
                    marginRight="10px"
                    borderRadius="50%"
                    mt="8px"
                  />
                  <Text
                    textStyle="semiBold5"
                    margin="0 !important"
                    color=" #4E6070"
                    whiteSpace="pre-line"
                    dangerouslySetInnerHTML={{ __html: d }}
                    mt="20px"
                    textAlign="start"
                    fontSize={{ md: '16px', base: '14px' }}
                    mb={{ md: '16px !important', base: '4px !impotant' }}
                  />
                </Box>
              ))}
              {/* <Text
                textStyle="semiBold5"
                marginTop="6px !important"
                color=" rgba(255, 255, 255, 0.75)"
                whiteSpace="pre-line"
                dangerouslySetInnerHTML={{ __html: subtitle2 }}
              />
              <Text
                textStyle="semiBold5"
                marginTop="6px !important"
                color=" rgba(255, 255, 255, 0.75)"
                whiteSpace="pre-line"
                dangerouslySetInnerHTML={{ __html: subtitle3 }}
              /> */}
            </Box>
            {/* <Box
              className="flipWebkit"
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.04)"
              padding="20px 16px"
              transitionDuration="0.2s"
              transitionProperty="transform, opacity"
              position="absolute"
              opacity="0"
              zIndex="-1"
              top="0px"
              left="0px"
              style={{ backfaceVisibility: 'hidden' }}
              transform="rotateX(-180deg)"
              _groupHover={{
                opacity: '1',
                zIndex: '10',
                transform: 'rotateX(0deg)',
                backfaceVisibility: 'visible',
              }}
            >
              {twitterLink && (
                <Box
                  borderRadius="8px"
                  display="flex"
                  paddingY="5px"
                  marginBottom="5px"
                  justifyContent="center"
                  backdropFilter="blur(40px)"
                  backgroundColor="rgba(255, 255, 255, 0.1)"
                  alignItems="center"
                  transition="0.2s"
                  cursor="pointer"
                  onMouseMove={(e) => handleOnMouseOverTeamSocial(e, TwitterLight, 'Twitter')}
                  onMouseLeave={(e) => handleOnMouseLeaveTeamSocial(e, Twitter, 'Twitter')}
                  _hover={{ backgroundColor: '#FFF', color: '#000' }}
                >
                  <Link
                    href={twitterLink}
                    target="_blank"
                    width="100%"
                    height="100%"
                    _focus={{ boxShadow: 'none' }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    // pointerEvents="none"
                    _hover={{ textDecoration: 'none' }}
                    //
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
                  </Link>
                </Box>
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
                    transition="0.2s"
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
                    transition="0.2s"
                    backdropFilter="blur(40px)"
                    backgroundColor="rgba(255, 255, 255, 0.1)"
                    onMouseMove={(e: any) =>
                      handleOnMouseOverTeamSocial(e, LinkedInDark, 'LinkedIn')
                    }
                    onMouseLeave={(e: any) => handleOnMouseLeaveTeamSocial(e, LinkedIn, 'LinkedIn')}
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
            </Box> */}
          </Box>
        ) : (
          <Box position="relative">
            <Box
              borderRadius="8px"
              w="100%"
              padding="12px 16px 12px 16px"
              box-sizing="border-box"
              transitionTimingFunction="cubic-bezier(.175, .885, .32, 1.275)"
              transform="rotateX(0deg)"
              transitionDuration="0.2s"
              transitionProperty="transform, opacity"
              _groupHover={{
                transform: 'rotateX(180deg)',
                opacity: '0',
              }}
              mt="2px"
            >
              {/* <Text
                textStyle="semiBold5"
                margin="0 !important"
                color=" #4E6070"
                whiteSpace="pre-line"
                dangerouslySetInnerHTML={{ __html: subtitle }}
                textAlign="start"
              />
              <Text
                textStyle="semiBold5"
                marginTop="6px !important"
                color=" #4E6070"
                whiteSpace="pre-line"
                dangerouslySetInnerHTML={{ __html: subtitle1 }}
                textAlign="start"
              /> */}
              {data.map((d: any) => (
                <Box display="flex">
                  <Box
                    backgroundColor="#4E6070"
                    width="5px"
                    height="5px"
                    marginRight="10px"
                    borderRadius="50%"
                    mt="8px"
                  />
                  <Text
                    textStyle="semiBold5"
                    margin="0 !important"
                    color=" #4E6070"
                    whiteSpace="pre-line"
                    dangerouslySetInnerHTML={{ __html: d }}
                    mt="20px"
                    textAlign="start"
                    fontSize={{ md: '16px', base: '14px' }}
                    mb={{ md: '16px !important', base: '4px !impotant' }}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </VStack>
    </VStack>
  );
};
export default TeamCard;
