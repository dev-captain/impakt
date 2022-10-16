import { useState } from 'react';
import { Text, VStack, useColorModeValue, Box, HStack } from '@chakra-ui/react';
import { C, Common } from 'components';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Card from './Card';

const ImpaktTeam = () => {
  const navigate = useNavigate();
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const { t } = useTranslation().i18n;
  let leadership = useState<object[]>();
  let advisorTeam = useState<object[]>();
  // let Team = useState<object[]>();
  leadership = t('leadershipData.data', { returnObjects: true });
  advisorTeam = t('advisorData.data', { returnObjects: true });
  // Team = t('teamData.data', { returnObjects: true });

  return (
    <>
      <C.HeroLayout
        bgImage="linear-gradient(180deg, #DEE9F6 44.79%, #C2D5EC 100%)"
        bgColor="#C2D5EC"
        pos="relative"
        customPadding={{
          base: '16px',
          md: '32px',
          xl: '100px',
          '2xl': '0px',
        }}
        minH="70vh"
      >
        <VStack spacing="0px" px="16px" maxW="100%" width="100%" color={textColor}>
          <VStack width="100%">
            <VStack
              width="100%"
              spacing="24px"
              align={{ base: 'flex-start', md: 'auto' }}
              justifyContent="center"
              maxW={{ base: '100%', lg: '1232px' }}
              pb="16px"
            >
              <VStack
                w="full"
                spacing={5}
                justify={{ base: 'center', md: 'center' }}
                mt={{ base: 0, md: 0, xl: '64px' }}
              >
                <Box textAlign="center">
                  <Text
                    color="#1C1C28"
                    fontSize={{ base: '30px', md: '50px' }}
                    textStyle="semiBold17"
                    fontWeight="700"
                    lineHeight="inherit"
                  >
                    {t(keys.impaktGamesHero.impaktTeamTitle)}
                  </Text>
                  <Box height="1px" background="#000" width="152px" margin="24px auto" />
                  <Text
                    color="#1C1C28"
                    fontSize="18px"
                    lineHeight="inherit"
                    fontWeight="500"
                    textStyle="TitleBold48"
                    maxWidth="519px"
                    margin="auto"
                    mb="37px"
                  >
                    {t(keys.impaktGamesHero.impaktTeamDescription)}
                  </Text>
                </Box>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
        <Box display="flex" width="100%" padding={{ lgx: '0 188px', lg: '0 50px', base: '0 16px' }}>
          <Box
            width="100%"
            maxW="1544px"
            display="flex"
            justifyContent="center"
            flexDirection="column"
          >
            <Box
              width="100%"
              display="flex"
              flexWrap="wrap"
              maxW="1911px"
              gap={{ md: '40px', base: '20px' }}
              alignItems="flex-end"
              justifyContent="center"
            >
              <Text
                width="100%"
                color="#35485a"
                fontSize="36px"
                fontWeight="700"
                textTransform="uppercase"
                textAlign="center"
              >
                Founders
              </Text>
              {leadership.map((d: any) => (
                <Box width={{ lg: '31%', md: '30%', base: '100%' }}>
                  <Card
                    company={d.company}
                    title={d.job}
                    fname={d.fname}
                    lname={d.lname}
                    post={d.post}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
        <VStack
          width="100%"
          padding={{ lgx: '0 188px', lg: '0 50px', base: '0 16px' }}
          mt="50px !important"
        >
          <Box
            maxW="1544px"
            width="100%"
            alignItems="flex-end"
            display="flex"
            flexWrap="wrap"
            gap={{ md: '40px', base: '20px' }}
          >
            <Text
              width="100%"
              color="#35485a"
              fontSize="36px"
              fontWeight="700"
              textTransform="uppercase"
              textAlign="center"
            >
              Advisors
            </Text>
            {advisorTeam.map((d: any) => (
              <Box width={{ lg: '31%', md: '30%', base: '100%' }}>
                <Card
                  company={d.company}
                  title={d.job}
                  fname={d.fname}
                  lname={d.lname}
                  post={d.post}
                />
              </Box>
            ))}
          </Box>
        </VStack>
        {/* <VStack
          width="100%"
          padding={{ lgx: '0 188px', lg: '0 50px', base: '0 16px' }}
          mt="50px !important"
        >
          <Text
            width="100%"
            color="#728BA3"
            fontSize="21px"
            fontWeight="700"
            textTransform="uppercase"
          >
            Team
          </Text>
          <Box
            width="100%"
            display="flex"
            flexWrap="wrap"
            gap={{ md: '40px', base: '20px' }}
            justifyContent="flex-start"
            alignItems="flex-start"
          >
            {Team.map((d: any) => (
              <Card img={d.img} title={d.title} name={d.name} post={d.post} />
            ))}
          </Box>
        </VStack> */}
      </C.HeroLayout>
      <Box bgColor="#F0F7FF" textAlign="center" padding={{ md: '126px 16px', base: '70px 16px' }}>
        <Text
          fontSize={{ base: '28px', md: '32px' }}
          fontWeight="500"
          lineHeight="120%"
          mb="40px"
          color="#1C1C28"
        >
          Become part of the Impakt family.
        </Text>
        <Common.ImpaktButton
          color="#ffffff"
          bg="#000000"
          height="50px"
          w={{ md: '300px', base: '170px' }}
          gap="8px"
          padding="10px 14px"
          _hover={{ bg: '#000', color: '#fff' }}
          onClick={() => navigate('/register')}
        >
          Join Now
        </Common.ImpaktButton>
      </Box>
    </>
  );
};

export default ImpaktTeam;
