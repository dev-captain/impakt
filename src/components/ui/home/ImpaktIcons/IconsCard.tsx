import { Box, Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import FlipCardBox from '../../../common/FlipCard';
import { I } from '../../..';

const { UserIcon } = Images.impaktIcons;

const IconsCard = ({
  image,
  name,
  title,
  subtitle,
  socialMedia,
}: {
  image: string;
  name: string;
  title: string;
  subtitle?: string[];
  socialMedia?: { platform: string; href: string }[];
}) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  const imageBoxRef = React.useRef<HTMLDivElement>(null);
  const nameBoxRef = React.useRef<HTMLDivElement>(null);

  // const bgColor = useColorModeValue('glass.800', 'glass.200');
  const { t } = useTranslation().i18n;

  return (
    <VStack
      ref={cardRef}
      minW="288px"
      minH="418px"
      align="center"
      transitionDuration="150ms"
      bgColor="rgba(28, 28, 40, 0.65)"
      position="relative"
      borderRadius="32px"
      backdropFilter="blur(40px)"
      rowGap="24px"
      filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16))"
    >
      <VStack pos="relative" zIndex={1} top="-19px" height="100px">
        <Box ref={imageBoxRef} role="group" maxW="330px" w="full" boxShadow="sm" rounded="lg">
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

      <VStack
        mt="0 !important"
        w="full"
        rowGap="12px"
        ref={nameBoxRef}
        align="center"
        justify="center"
        mb="0px !important"
        px="24px"
      >
        <Box mt="0 !important">
          <Text
            fontSize="28px"
            fontWeight="700"
            lineHeight="100%"
            userSelect="none"
            color={name === '???' ? 'rgba(255,255,255,0.4)' : '#FFF'}
          >
            {name}
          </Text>
        </Box>
        <Box mb="12px !important" mt="0 !important">
          <Text
            fontSize="18px"
            fontWeight="700"
            letterSpacing="2px"
            lineHeight="100%"
            color="#FEC417"
            textTransform="uppercase"
          >
            {title}
          </Text>
        </Box>

        <Box w="full" maxW="240px">
          <FlipCardBox isFlippable={!!socialMedia}>
            <Box
              minH="168px"
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              border="2px solid rgba(255, 255, 255, 0.04)"
              transitionTimingFunction="cubic-bezier(.175, .885, .32, 1.275)"
              transform="rotateX(0deg)"
              transitionDuration="1s"
              px="8px"
              py="8px"
              transitionProperty="transform, opacity"
              _groupHover={{
                transform: 'rotateX(180deg)',
                opacity: '0',
              }}
              display="flex"
              justifyContent={!subtitle ? 'center' : 'flex-start'}
              alignItems={!subtitle ? 'center' : 'flex-start'}
            >
              {subtitle ? (
                <UnorderedList px="10px" type="dot">
                  {subtitle.map((titleItem: string) => (
                    <ListItem color="rgba(255, 255, 255, 0.75)" textStyle="semiBold5">
                      {titleItem}
                    </ListItem>
                  ))}
                </UnorderedList>
              ) : (
                <Text fontSize="16px" lineHeight="16px" letterSpacing="2px" fontWeight="500">
                  Revealing...
                </Text>
              )}
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
              {socialMedia &&
                socialMedia.map(({ platform, href }) => (
                  <Box
                    as="a"
                    href={href}
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
                    _hover={{ backgroundColor: '#FFF', color: '#000' }}
                    rowGap="8px"
                    columnGap="8px"
                  >
                    <Box>
                      {platform === 'Instagram' && <I.IGIcon width="20px" />}
                      {platform === 'TikTok' && <I.TikTokIcon width="20px" />}
                      {platform === 'Facebook' && <I.FBIcon width="20px" />}
                      {platform === 'Website' && <I.WebIcon width="20px" />}
                      {platform === 'Twitter' && <I.WebIcon width="20px" />}
                    </Box>
                    <Box>
                      <Text>{platform}</Text>
                    </Box>
                  </Box>
                ))}
            </Box>
          </FlipCardBox>
        </Box>
      </VStack>
    </VStack>
  );
};
export default IconsCard;
