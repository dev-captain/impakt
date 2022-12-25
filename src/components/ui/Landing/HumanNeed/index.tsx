import { Text, VStack, useColorModeValue, Box } from '@chakra-ui/react';
import { C, Common } from '@/components';
import keys from '@/i18n/types';
import Images from '@/assets/images';

const HumanNeed = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <>
      <C.HeroLayout
        bgImage={Images.background}
        pos="relative"
        customPadding={{
          base: '16px',
          md: '32px',
          xl: '100px',
          '2xl': '0px',
        }}
        removeTopPadding
        minH="70vh"
      >
        <VStack spacing="0px" px="16px" maxW="100%" w="full" color={textColor}>
          <VStack width="100%">
            <VStack
              spacing="24px"
              align={{ base: 'flex-start', md: 'auto' }}
              justifyContent="center"
              maxW="100%"
              pb="16px"
            >
              <VStack
                w="full"
                spacing={5}
                justify={{ base: 'center', md: 'center' }}
                mt={{ base: 0, md: 0, xl: '64px' }}
              >
                <Box
                  textAlign="center"
                  mt={{ lg: '130px !important', md: '80px !important', base: '50px !important' }}
                  mb={{ lg: '630px !important', md: '480px !important', base: '340px !important' }}
                >
                  <Text
                    color="#1C1C28"
                    fontSize={{ base: '30px', md: '50px' }}
                    textStyle="semiBold17"
                    fontWeight="700"
                    lineHeight="100%"
                    maxWidth="742px"
                  >
                    {keys.impaktGamesHero.humanTitle}
                  </Text>
                  <Box
                    height="1px"
                    background="#000"
                    width="152px"
                    margin={{ md: '48px auto 24px auto', base: '22px auto 22px auto' }}
                  />
                  <Text
                    color="#1C1C28"
                    fontSize={{ md: '18px', base: '13px' }}
                    lineHeight="inherit"
                    fontWeight="500"
                    textStyle="TitleBold48"
                    maxWidth="643px"
                    margin="auto"
                  >
                    {keys.impaktGamesHero.humanDescription}
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </C.HeroLayout>
      <Box backgroundColor="#DEDEDC">
        <Box display="flex" alignItems="center" flexDirection="column">
          <Text
            fontSize={{ base: '20px', md: '32px' }}
            fontWeight="500"
            lineHeight="120%"
            mb={{ md: '40px', base: '20px' }}
            color="#1C1C28"
            textAlign="center"
          >
            Be part of our community!
          </Text>
          <Common.ImpaktButton
            color="#ffffff"
            bg="#000000"
            height={{ md: '75px', base: '55px' }}
            w={{ md: '300px', base: '170px' }}
            gap="8px"
            mb={{ lg: '112px', base: '40px' }}
            padding="10px 14px"
            _hover={{ bg: '#000', color: '#fff' }}
            disabled
          >
            Explore
          </Common.ImpaktButton>
        </Box>
      </Box>
    </>
  );
};

export default HumanNeed;
