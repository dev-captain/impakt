/* eslint-disable prettier/prettier */

import { GridItem, SimpleGrid, Text, VStack, Image, useDisclosure } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import VideoModal from 'components/core/VideoModal';
import HeroLayout from 'components/layouts/HeroLayout';
import { Videos } from 'data';
import { layoutPadding } from 'theme';

const commonProps: any = {
  textAlign: { base: 'left', md: 'left' },
  alignItems: { base: 'left', md: 'flex-start' },
};

const JoinUsHero = () => {
  const disclosure = useDisclosure();

  return (
    <HeroLayout hideBlur>
      <VideoModal showPlayer={false} {...disclosure} path={Videos.impaktGames} />
      <VStack px={layoutPadding} w="full" py={{ base: 16, md: 0 }}>
        <SimpleGrid
          w="full"
          columns={5}
          justifyContent={{ base: 'flex-start', md: 'center' }}
          alignItems={{ base: 'flex-start', md: 'center' }}
          columnGap={{
            base: '4',
            sm: '8',
            md: '12',
            xl: '20',
          }}
        >
          <GridItem
            colSpan={{
              base: 5,
              md: 2,
            }}
            zIndex={2}
            {...commonProps}
          >
            <VStack spacing="52px">
              <VStack spacing="36px" alignItems={{ base: 'center', md: 'flex-start' }}>
                <Text
                  display="flex"
                  fontSize={{ base: '40px', md: '56px' }}
                  lineHeight={{ base: '44px', md: '60px' }}
                  flexDir="row"
                  fontWeight="700"
                >
                  <Text>Join</Text>
                  <Text
                    fontSize={{ base: '40px', md: '56px' }}
                    fontWeight="300"
                    lineHeight={{ base: '44px', md: '60px' }}
                    marginLeft="8px"
                  >
                    us
                  </Text>
                </Text>
                <Text fontSize="20px" fontWeight="400" lineHeight="32px" opacity="0.6">
                  And do fitness with your friends! Be successful!
                </Text>
                <Image src="assets/images/joinus-hero.png" display={{ base: 'flex', md: 'none' }} />
              </VStack>
              <GradientButton
                title="Download Tutorial"
                onClick={disclosure.onOpen}
                w={{ base: 'full', md: 'auto' }}
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              />
            </VStack>
          </GridItem>
          <GridItem display={{ base: 'none', md: 'flex' }} zIndex={1} colSpan={3}>
            <Image src="assets/images/joinus-hero.png" />
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default JoinUsHero;
