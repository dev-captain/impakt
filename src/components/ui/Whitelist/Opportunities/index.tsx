import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import Keys from 'i18n/types';
import Images from 'assets/images';

import { VStack, HStack, Box, Text, GridItem, Grid, useColorModeValue } from '@chakra-ui/react';
import { C, I } from 'components';
import OpportunitiesCard from './opportunitiesCard';

const Opportunities = () => {
  const bgImage = useColorModeValue(
    Images.whitelist.opportunitiesBg,
    Images.whitelist.opportunitiesBg,
  );
  // const navigate = useNavigate();
  //   const { t } = useTranslation(`default`).i18n;
  //   const [isLessThan1040] = useMediaQuery('(max-width: 991px)');
  return (
    <C.HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="center"
      justify="center"
      backgroundSize="auto"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
    >
      <VStack w="full">
        <VStack
          maxW="1200px"
          w="full"
          px="16px"
          bgColor="rgba(28, 28, 40, 0.65)"
          borderRadius="32px"
        >
          <HStack
            flexDir={{ base: 'column' }}
            columnGap="auto"
            rowGap={{ base: '30px' }}
            alignItems="center"
            w="full"
            p={{ base: '0px', md: '40px' }}
            borderRadius="32px"
          >
            <VStack
              align="flex-start"
              spacing="22px"
              w="100%"
              paddingX={{ base: '0' }}

              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                bgClip="text"
                color="white"
                marginBottom={{ base: '0px', md: '0' }}
                width={{ base: '100%', md: '727px' }}
              >
                <Text
                  textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                  textAlign="left"
                  marginTop="0 !important"
                  marginBottom="24px"
                  paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                >
                  Other whitelist Opportunities
                </Text>
                <Text fontSize="20px" fontWeight="400" color="rgba(255, 255, 255, 0.75);">
                  Not used to sweating for a whitelist? We have something for everyone! Whitelist
                  opportunities will be ongoing on Twitter, Discord and Gleam!
                </Text>
              </Box>
            </VStack>
            <VStack
              flexDir={{ base: 'column', md: 'row' }}
              marginStart="0px !important"
              marginTop="30px"
              width="100%"
              gap="7px"
              display="flex"
            >
              <Grid templateColumns="repeat(3, 1fr)" gap={3}>
                <GridItem>
                  <OpportunitiesCard
                    icon={<I.GleamIcon />}
                    iconText="Whitelist via Gleam"
                    href={`${process.env.REACT_APP_API_BASE_URL}/api/v1/iam/auth/discord/login`}
                    mBottom="16px"
                  >
                    Join our Gleam campaign for a chance at one of the{' '}
                    <Box as="span" color="#FEC417">
                      2,000
                    </Box>{' '}
                    whitelist spots!
                  </OpportunitiesCard>
                </GridItem>
                <GridItem>
                  <OpportunitiesCard
                    icon={<I.TwitterIcon />}
                    iconText="Whitelist via Twitter"
                    href={`${process.env.REACT_APP_API_BASE_URL}/api/v1/iam/auth/discord/login`}
                    mBottom="46px"
                  >
                    <Box as="span" color="#FEC417">
                      Notifications on!
                    </Box>{' '}
                    Flash whitelist giveaways will appear!
                  </OpportunitiesCard>
                </GridItem>
                <GridItem>
                  <OpportunitiesCard
                    icon={<I.DiscordIcon />}
                    iconText="Whitelist via Discord"
                    href={`${process.env.REACT_APP_API_BASE_URL}/api/v1/iam/auth/discord/login`}
                    mBottom="16px"
                  >
                    Don&apos;t miss our Discord games & giveaways, all for those
                    <Box as="span" color="#FEC417">
                      {' '}
                      whitelist
                    </Box>{' '}
                    spots!
                  </OpportunitiesCard>
                </GridItem>
              </Grid>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
      {/* <VStack w="full">
        <VStack
          maxW="1200px"
          w="full"
          px="16px"
          bgColor="rgba(28, 28, 40, 0.65)"
          borderRadius="32px"
        >
          <HStack
            flexDir={{ base: 'column' }}
            columnGap="auto"
            rowGap={{ base: '30px' }}
            alignItems="center"
            w="full"
            p={{ base: '0px', md: '40px' }}
            borderRadius="32px"
          >
            <VStack
              align="center"
              spacing="22px"
              w="100%"
              paddingX={{ base: '0' }}

              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box bgClip="text" color="white" marginBottom={{ base: '0px', md: '0' }}>
                <Text
                  textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                  marginTop="0 !important"
                  //   marginBottom="32px"
                  paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                >
                  ETA July 8th 2022
                </Text>
              </Box>
            </VStack>
            <VStack
              flexDir={{ base: 'column', md: 'row' }}
              marginStart="0px !important"
              marginTop="30px"
              width="100%"
              gap="7px"
              display={isLessThan1040 ? 'none' : 'flex'}
            >
              <Box>
                  <Text>32</Text>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </VStack> */}
    </C.HeroLayout>
  );
};
export default memo(Opportunities);
