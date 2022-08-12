import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import Keys from 'i18n/types';
import Images from 'assets/images';

import { VStack, HStack, Box, Text, GridItem, Grid, useColorModeValue } from '@chakra-ui/react';
import { S, C, I } from 'components';
import OpportunitiesCard from './OpportunitiesCard';

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
      minH="70vh"
      spacing={10}
      pos="relative"
      bgImage={bgImage}
      align="center"
      justify="center"
      backgroundSize="auto"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      customTopPadding={{ base: '50px', md: '100px' }}
      bgColor="#0A0A0B"
    >
      <VStack w="full" p="0 12px">
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
            <VStack align="flex-start" spacing="22px" w="100%" paddingX={{ base: '0' }}>
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
                  paddingTop={{ base: '20px', sm: '20px', md: '0px' }}
                  paddingleft={{ base: '20px', sm: '20px', md: '0px' }}
                  fontSize={{ base: '25px', md: '32px' }}
                >
                  Other whitelist Opportunities
                </Text>
                <Text
                  fontSize={{ base: '16px', md: '20px' }}
                  fontWeight="400"
                  color="rgba(255, 255, 255, 0.75);"
                >
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
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  mb: 'repeat(2, 1fr)',
                  md: 'repeat(3, 1fr)',
                }}
                gap={3}
              >
                <GridItem>
                  <OpportunitiesCard
                    icon={<I.GleamIcon />}
                    iconText="Whitelist via Gleam"
                    href={`${process.env.REACT_APP_API_BASE_URL}/api/v1/iam/auth/discord/login`}
                    mBottom="16px"
                  >
                    <Text
                      fontSize={{ base: '16px', md: '20px' }}
                      height={{ base: '72px', md: '90px' }}
                    >
                      Join our Gleam campaign for a chance at one of the{' '}
                      <Box as="span" color="#FEC417">
                        2,000
                      </Box>{' '}
                      whitelist spots!
                    </Text>
                  </OpportunitiesCard>
                </GridItem>
                <GridItem>
                  <OpportunitiesCard
                    icon={<I.TwitterIcon />}
                    iconText="Whitelist via Twitter"
                    href={`${process.env.REACT_APP_API_BASE_URL}/api/v1/iam/auth/discord/login`}
                    mBottom="16px"
                  >
                    <Text
                      fontSize={{ base: '16px', md: '20px' }}
                      height={{ base: '72px', md: '90px' }}
                    >
                      <Box as="span" color="#FEC417">
                        Notifications on!
                      </Box>{' '}
                      Flash whitelist giveaways will appear!
                    </Text>
                  </OpportunitiesCard>
                </GridItem>
                <GridItem>
                  <OpportunitiesCard
                    icon={<I.DiscordIcon />}
                    iconText="Whitelist via Discord"
                    href={`${process.env.REACT_APP_API_BASE_URL}/api/v1/iam/auth/discord/login`}
                    mBottom="16px"
                  >
                    <Text
                      fontSize={{ base: '16px', md: '20px' }}
                      height={{ base: '72px', md: '90px' }}
                    >
                      Don&apos;t miss our Discord games & giveaways, all for those
                      <Box as="span" color="#FEC417">
                        {' '}
                        whitelist
                      </Box>{' '}
                      spots!
                    </Text>
                  </OpportunitiesCard>
                </GridItem>
              </Grid>
            </VStack>
          </HStack>
        </VStack>
        <S.EtaDate />
      </VStack>
    </C.HeroLayout>
  );
};
export default memo(Opportunities);
