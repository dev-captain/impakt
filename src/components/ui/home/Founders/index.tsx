import { useState } from 'react';
import {
  GridItem,
  HStack,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
  Box,
  Image,
} from '@chakra-ui/react';
import { C } from '@/components';
import keys from '@/i18n/translations/en';
import Images from '@/assets/images';
import TeamCard from './TeamCard';

const Founder = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const Team = [keys.Founder];

  return (
    <C.HeroLayout
      // showNavbar

      bgColor="#09090B"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '32px',
        xl: '100px',
        '2xl': '0px',
      }}
      minH="70vh"
    >
      <Image
        src={Images.backgrounds.teamBg}
        objectFit="cover"
        minW="100%"
        bottom="65px"
        zIndex="0"
        position="absolute"
      />
      <VStack
        spacing="0px"
        px="16px"
        maxW={{ base: '100%', lg: '1232px' }}
        w="full"
        color={textColor}
      >
        <VStack>
          <VStack
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
              <Text color="#F04153" textTransform="uppercase" textStyle="semiBold17">
                {keys.Founder.builders}
              </Text>
            </VStack>
            <VStack
              width={{ base: '100%', lg: '100%', xl: '1232px' }}
              textAlign="center"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '24px' }}
              mb="72px !important"
            >
              <Box maxW={{ base: '100%', lg: '800px' }}>
                <Text textStyle="TitleBold48">{keys.Founder.Title}</Text>
              </Box>
            </VStack>
            <SimpleGrid
              w="full"
              columns={{ base: 1, md: 2, lg: 3 }}
              alignContent="center"
              alignItems="center"
              columnGap={{ base: '8px', sm: '16px', md: '50px !important', xl: '24px' }}
              rowGap={{ base: '99px', sm: '99px', md: '115px', xl: '16px' }}
            >
              {Team.map((advisor: any) => {
                return (
                  <GridItem key={advisor.name} w="full">
                    <HStack w="full" align="center" justify="center">
                      <TeamCard {...advisor} />
                    </HStack>
                  </GridItem>
                );
              })}
            </SimpleGrid>
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default Founder;
