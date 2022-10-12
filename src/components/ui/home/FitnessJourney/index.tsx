import { Text, VStack, useColorModeValue, Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { C, Common, I } from 'components';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { journeyData } from 'data';
import FitnessJourneyCard from './FitnessJourneyCard';

const FitnessJourney = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;
  const navigate = useNavigate();

  return (
    <C.HeroLayout
      bgColor="#F0F7FF"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '146px',
        xl: '127px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <VStack spacing="0px" px="16px" maxW="100%" w="full" color={textColor}>
        <VStack width="100%" p={{ lgx: '0 145px', lg: '0 50px' }}>
          <VStack
            spacing="24px"
            align={{ base: 'flex-start', md: 'auto' }}
            justifyContent="center"
            maxWidth="100%"
            pb="16px"
            width="100%"
          >
            <VStack
              width="100%"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '64px' }}
            >
              <Box width="100%">
                <Box
                  display={{ base: 'block', md: 'flex' }}
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Box display={{ base: 'block', md: 'flex' }}>
                    <Text
                      color="#1C1C28"
                      fontSize={{ lgx: '54px', lg: '44px', md: '37px', base: '30px' }}
                      textStyle="semiBold17"
                      fontWeight="700"
                      lineHeight={{ lgx: '64px', lg: '45px', base: '42px' }}
                      letterSpacing="-2px"
                      maxW={{ lgx: '265px', lg: '220px', md: '180px', base: 'initial' }}
                      margin="auto"
                      textAlign={{ base: 'center', md: 'start' }}
                    >
                      {t(keys.impaktGamesHero.fitnessJourneyTitle)}
                    </Text>
                    <Box
                      height={{ md: '112px', base: '1px' }}
                      background="#000"
                      width={{ md: '1px', base: '112px' }}
                      margin={{ base: '30px auto', md: 'auto 48px auto 9px' }}
                    />
                    <Text
                      margin="auto"
                      color="#1C1C28"
                      fontSize={{ lg: '16px', base: '14px' }}
                      lineHeight="inherit"
                      fontWeight="500"
                      textStyle="TitleBold48"
                      maxWidth={{ lg: '632px', md: '482px', base: '730px' }}
                      textAlign={{ base: 'center', md: 'start' }}
                    >
                      {t(keys.impaktGamesHero.fitnessJourneyDescription)}
                    </Text>
                  </Box>
                  <Common.ImpaktButton
                    color="#ffffff"
                    bg="#000000"
                    height={{ lgx: '75px', lg: '60px' }}
                    w={{ lgx: '280px', lg: '240px' }}
                    borderRadius="10px"
                    gap="8px"
                    _hover={{ bg: '#000', color: '#fff' }}
                    fontSize={{ lgx: '22px', lg: '18px' }}
                    display="flex"
                    justifyContent="center"
                    width="100%"
                    margin={{ base: 'auto', md: 'initial' }}
                    mt={{ base: '30px', md: '0' }}
                    onClick={() => navigate('/download')}
                  >
                    <I.DownloadIcon />
                    Get The App
                  </Common.ImpaktButton>
                </Box>
                <Box
                  display={{ base: 'block', md: 'flex' }}
                  justifyContent="space-between"
                  gap={{ lg: '35px', base: '22px' }}
                  mt="40px"
                >
                  {journeyData.map((data) => (
                    <FitnessJourneyCard
                      img={data.img}
                      title={data.title}
                      description={data.description}
                    />
                  ))}
                </Box>
              </Box>
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default FitnessJourney;
