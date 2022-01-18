import { Text, VStack, SimpleGrid, Image, Stack, GridItem, Button, HStack } from '@chakra-ui/react';
import GradientCard from 'components/core/GradientCard';
import Icons from 'components/icons';
import HeroLayout from 'components/layouts/HeroLayout';
import { memo } from 'react';
import { layoutPadding } from 'theme';

const backgroundImage =
  "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 20%, #282A2E 110%), url('assets/images/firstherobg.jpeg')";

const ImpaktGamesHero = () => {
  return (
    <HeroLayout
      showNavbar
      addSpacer
      hideBlur
      spacing={10}
      justify="center"
      align="space-around"
      bgImage={backgroundImage}
    >
      <SimpleGrid
        columns={4}
        alignItems="center"
        justifyContent="center"
        columnGap={{ base: '0px', md: '200px' }}
      >
        <GridItem
          colSpan={{
            base: 4,
            md: 2,
          }}
          px={layoutPadding}
        >
          <Stack
            align={{
              base: 'center',
              md: 'flex-start',
            }}
          >
            <GradientCard
              title="Burn and Earn!"
              maxW={{ base: 'full', md: '352px' }}
              minW={{ base: 'full', md: '400px' }}
              image="assets/images/burntoearn.png"
              subtitle="Let’s start with us be happy"
              // @ts-ignore
              ThirdComponent={memo(() => (
                <HStack align="center" justify="center">
                  <Icons.Play />
                  <Text
                    zIndex={100}
                    fontWeight="600"
                    bgClip="text"
                    fontSize="14px"
                    bgGradient="linear(to-r, #DC143C, #B22222)"
                  >
                    Play video
                  </Text>
                </HStack>
              ))}
            />
            <VStack align={{ base: 'left', md: 'flex-start' }} paddingY="36px" spacing={4}>
              <Text textStyle="TitleBold72" textAlign="left">
                Impakt
                <Text textStyle="TitleBold72">Games</Text>
              </Text>
              <Text
                opacity={0.6}
                fontSize={{ base: '18px', md: '20px' }}
                paddingTop={{ base: '16px', md: '16px' }}
                textAlign={{ base: 'left', md: 'left' }}
              >
                Connect together and have fun while
                <br />
                experiencing gamified fitness
              </Text>
            </VStack>
            <VStack spacing="24px">
              <Image
                maxW="320px"
                objectFit="contain"
                src="assets/images/macbook-mobile.png"
                display={{ base: 'flex', md: 'none' }}
              />
              <Button
                px="80px"
                py="32px"
                borderRadius="20px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="600"
                w={{ base: 'fit-content', md: 'auto' }}
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              >
                Get started
              </Button>
            </VStack>
          </Stack>
        </GridItem>
        <GridItem
          alignItems="flex-end"
          justifyContent="flex-end"
          display={{ base: 'none', md: 'flex' }}
          colSpan={{
            base: 3,
            md: 2,
          }}
        >
          <Image
            w="fit-content"
            h="fit-content"
            objectFit="cover"
            src="assets/images/macbook.png"
          />
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

export default ImpaktGamesHero;
