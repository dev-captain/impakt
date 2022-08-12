import { Box, Image, Text, VStack } from '@chakra-ui/react';
import PersonalSocialMediaWrapper from '../../../common/PersonalSocialMediaWrapper';

// import colors from 'theme/colors';

const TeamCard = ({
  image,
  name,
  title,
  subtitle,
  subtitle1,
  socialMedia,
}: {
  image: string;
  name: string;
  title: string;
  subtitle: string;
  subtitle1: string;
  socialMedia: any;
}) => {
  // const bgColor = useColorModeValue('glass.800', 'glass.200');

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
              transition: 'all .0.2s ease',
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
              className="flipWebkit"
              backgroundColor="rgba(255, 255, 255, 0.04)"
              borderRadius="8px"
              w="100%"
              style={{ backfaceVisibility: 'hidden' }}
              position="relative"
              zIndex="10"
              border="2px solid rgba(255, 255, 255, 0.04)"
              height={{ base: 'auto', md: '178px' }}
              padding="12px 16px 12px 16px"
              box-sizing="border-box"
              transform="rotateX(0deg)"
              transitionDuration="0.2s"
              transitionProperty="transform, opacity"
              _groupHover={{
                transform: 'rotateX(180deg)',
                opacity: '0',
                zIndex: '0',
                backfaceVisibility: 'visible',
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
              transitionDuration="0.2s"
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
