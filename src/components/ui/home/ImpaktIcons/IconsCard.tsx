import { Box, Image, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';

const { Twitter, TwitterLight, Tiktok, Instagram, TiktokDark, InstagramDark } = Images.Common;
const { UserIcon } = Images.impaktIcons;

const IconsCard = ({
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
  const [twitterImg, setTwitterImg] = useState(Twitter);
  const [tiktokImg, setTiktokImg] = useState(Tiktok);
  const [instagramImg, setInstagramImg] = useState(Instagram);
  // const bgColor = useColorModeValue('glass.800', 'glass.200');
  const handleOnMouseOverIcons = (
    e: React.MouseEvent<HTMLDivElement>,
    socialImage: any,
    hoverType: string,
  ) => {
    if (hoverType === 'Twitter') setTwitterImg(socialImage);
    if (hoverType === 'Tiktok') setTiktokImg(socialImage);
    if (hoverType === 'Instagram') setInstagramImg(socialImage);
  };
  const handleOnMouseLeaveIcons = (
    e: React.MouseEvent<HTMLDivElement>,
    socialImage: any,
    hoverType: string,
  ) => {
    if (hoverType === 'Twitter') setTwitterImg(socialImage);
    if (hoverType === 'Tiktok') setTiktokImg(socialImage);
    if (hoverType === 'Instagram') setInstagramImg(socialImage);
  };
  const { t } = useTranslation().i18n;
  return (
    <VStack
      pl="24px"
      pr="24px"
      pb="24px"
      width={{ base: '343px', sm: '288px', md: '288px' }}
      h="422px"
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
              sx={{ filter: name !== '???' ? 'blur(7px)' : 'blur(0px)' }}
            />
            {name === '???' && (
              <Image
                rounded="lg"
                objectFit="cover"
                src={UserIcon}
                boxSizing="border-box"
                pos="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                opacity="0.3"
              />
            )}
          </Box>
          <Box>{/* <UserIcon /> */}</Box>
        </Box>
      </VStack>

      <VStack align="center" justify="center" mb="0px !important">
        <Text
          textStyle="bold5"
          pb="5px"
          align="center"
          color={name === '???' ? 'rgba(255,255,255,0.4)' : '#FFF'}
          sx={{ filter: name !== '???' ? 'blur(7px)' : 'blur(0px)' }}
        >
          {name}
        </Text>
      </VStack>
      <VStack
        w="full"
        spacing={5}
        justify={{ base: 'center', md: 'center' }}
        mt="0px !important"
        mb="14px !important"
      >
        <Text textStyle="semiBold16" color="#FEC417">
          {' '}
          {title}
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
        {name !== '???' ? (
          // <Box position="relative" data-group> // To allow the flip feature
          <Box position="relative" w="100%">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.04)"
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
                height="168px"
                padding="8px 12px 8px 12px"
                box-sizing="border-box"
                borderRadius="8px"
                color="rgba(255, 255, 255, 0.75)"
                whiteSpace="pre-line"
                dangerouslySetInnerHTML={{ __html: subtitle }}
                sx={{ filter: name !== '???' ? 'blur(4px)' : 'blur(0px)' }}
              />
            </Box>
            <Box
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.01)"
              padding="16px 16px"
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
                onMouseMove={(e) => handleOnMouseOverIcons(e, InstagramDark, 'Instagram')}
                onMouseLeave={(e) => handleOnMouseLeaveIcons(e, Instagram, 'Instagram')}
                _hover={{ backgroundColor: '#FFF', color: '#000' }}
              >
                <Image
                  maxW="20px"
                  minW="20px"
                  h="32px"
                  opacity={0.6}
                  objectFit="contain"
                  src={instagramImg}
                  me="8px"
                />
                <Text>{t(keys.impaktIcons.instagram)}</Text>
              </Box>
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
                onMouseMove={(e) => handleOnMouseOverIcons(e, TiktokDark, 'Tiktok')}
                onMouseLeave={(e) => handleOnMouseLeaveIcons(e, Tiktok, 'Tiktok')}
                _hover={{ backgroundColor: '#FFF', color: '#000' }}
              >
                <Image
                  maxW="20px"
                  minW="20px"
                  h="32px"
                  opacity={0.6}
                  objectFit="contain"
                  src={tiktokImg}
                  me="8px"
                />
                <Text>{t(keys.impaktIcons.tiktok)}</Text>
              </Box>
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
                onMouseMove={(e) => handleOnMouseOverIcons(e, TwitterLight, 'Twitter')}
                onMouseLeave={(e) => handleOnMouseLeaveIcons(e, Twitter, 'Twitter')}
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
                <Text>{t(keys.impaktIcons.twitter)}</Text>
              </Box>
            </Box>
          </Box>
        ) : (
          <Box position="relative" w="100%">
            <Box
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.04)"
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
                height="168px"
                padding="8px 12px 8px 12px"
                box-sizing="border-box"
                borderRadius="8px"
                color="rgba(255, 255, 255, 0.75)"
                whiteSpace="pre-line"
                dangerouslySetInnerHTML={{ __html: subtitle }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              />
            </Box>
          </Box>
        )}
      </VStack>
    </VStack>
  );
};
export default IconsCard;
