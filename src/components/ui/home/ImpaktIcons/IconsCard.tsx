import { Box, Image, ListItem, Text, UnorderedList, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import { I, Common } from 'components';
import PersonalSocialMediaWrapper from '../../../common/PersonalSocialMediaWrapper';

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
  socialMedia: any;
}) => {
  return (
    <VStack
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
              width="160px"
              height="160px"
            />
            {name === '???' && title === '???' && (
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
        </Box>
      </VStack>

      <VStack
        mt="0 !important"
        w="full"
        rowGap="12px"
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
          <Common.FlipCardBox isFlippable={!!socialMedia}>
            <Box
              className="flipWebkit"
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
                zIndex: '0',
                backfaceVisibility: 'visible',
              }}
              display="flex"
              justifyContent={!subtitle ? 'center' : 'flex-start'}
              alignItems={!subtitle ? 'center' : 'flex-start'}
            >
              {subtitle && subtitle.length > 0 ? (
                <UnorderedList px="10px" type="dot">
                  {subtitle.map((titleItem: string) => (
                    <ListItem color="rgba(255, 255, 255, 0.75)" textStyle="semiBold5">
                      {titleItem}
                    </ListItem>
                  ))}
                </UnorderedList>
              ) : (
                <Text
                  textTransform="uppercase"
                  fontSize="16px"
                  lineHeight="16px"
                  letterSpacing="2px"
                  fontWeight="500"
                >
                  Revealing...
                </Text>
              )}
            </Box>
            <Box
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
              <PersonalSocialMediaWrapper socialMedia={socialMedia} />
            </Box>
          </Common.FlipCardBox>
        </Box>
      </VStack>
    </VStack>
  );
};
export default IconsCard;
