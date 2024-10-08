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
import IconsCard from './IconsCard';

const ImpaktIcons = () => {
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const Icons = [keys.impaktIcons];

  return (
    <C.HeroLayout
      bgColor="#09090B"
      pos="relative"
      customPadding={{
        base: '16px',
        md: '32px',
        lg: '200px',
      }}
      minH="70vh"
    >
      <Image
        src={Images.backgrounds.impaktIcongBg}
        objectFit="cover"
        minW="100%"
        bottom="65px"
        zIndex="0"
        position="absolute"
      />
      <VStack
        spacing="0px"
        zIndex="1"
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
                {keys.impaktIcons.influential}
              </Text>
            </VStack>
            <VStack
              width={{ base: '100%', lg: '100%', xl: '1232px' }}
              textAlign="center"
              spacing={5}
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: 0, md: 0, xl: '24px' }}
            >
              <Box maxW={{ base: '100%', lg: '800px' }}>
                <Text textStyle="TitleBold48">{keys.impaktIcons.Title}</Text>
              </Box>
            </VStack>
            <VStack
              width={{ base: '100%', lg: '100%' }}
              textAlign="center"
              justify={{ base: 'center', md: 'center' }}
              mt={{ base: '8px !important', md: '8px', xl: '24px' }}
              mb="72px !important"
            >
              <Box maxW={{ base: '100%', lg: '600px' }}>
                <Text
                  textStyle={{ base: 'regular16', md: 'regular18' }}
                  color="rgba(255, 255, 255, 0.75);"
                >
                  {keys.impaktIcons.description}
                </Text>
              </Box>
            </VStack>
            <SimpleGrid
              w="full"
              columns={{ base: 1, md: 2, lg: 4 }}
              alignContent="center"
              alignItems="center"
              columnGap={{ base: '8px', sm: '16px', md: '16px ' }}
              rowGap={{ base: '99px', sm: '99px', md: '115px', xl: '16px' }}
            >
              {Icons.map((icon: any) => {
                return (
                  <GridItem key={icon.name} w="full">
                    <HStack w="full" align="center" justify="center">
                      <IconsCard {...icon} />
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

export default ImpaktIcons;
