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
        columnGap={{ base: '0px', md: '100px', xl: '200px' }}
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
              sm: 'flex-start',
            }}
            pt={{ base: '32px', md: '80px', xl: '40px', '2xl': '107px' }}
          >
            <GradientCard
              title="Burn and Earn!"
              image="assets/images/burntoearn.png"
              subtitle="Let’s start with us be happy"
              maxW={{ base: 'full', sm: '328px', md: '352px' }}
              minW={{ base: 'full', sm: '328px', md: '400px' }}
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
            <VStack
              align={{ base: 'left', sm: 'flex-start', md: 'flex-start' }}
              paddingY={{ base: '0px', sm: '8px', md: '36px' }}
              spacing={{ base: '16px', md: '0px', xl: '16px' }}
            >
              <Text textStyle="TitleBold72" textAlign="left">
                Impakt
                <Text textStyle="TitleBold72">Games</Text>
              </Text>
              <Text
                opacity={0.6}
                textAlign="left"
                fontSize={{ base: '18px', md: '20px' }}
                paddingTop={{ base: '0px', sm: '0px', md: '16px' }}
              >
                Connect together and have fun while
                <br />
                experiencing gamified fitness
              </Text>
            </VStack>
            <VStack spacing={{ base: '24px', sm: '24px', md: 0, xl: '24px' }} align="flex-start">
              <Image
                maxW="320px"
                objectFit="contain"
                src="assets/images/macbook-mobile.png"
                display={{ base: 'flex', sm: 'none' }}
              />
              <Button
                px="80px"
                py="32px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="600"
                borderRadius="20px"
                w={{ base: 'full', sm: 'fit-content', md: 'auto' }}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 14px rgba(0, 0, 0, 0.16)"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              >
                Get started
              </Button>
              <Image
                objectFit="contain"
                src="assets/images/macbook-tablet.png"
                display={{ base: 'none', sm: 'flex', md: 'none' }}
              />
            </VStack>
          </Stack>
        </GridItem>
        <GridItem
          alignItems="flex-end"
          justifyContent="flex-end"
          display={{ base: 'none', xl: 'flex' }}
          colSpan={{
            base: 3,
            md: 2,
          }}
        >
          <Image
            w="fit-content"
            h="fit-content"
            objectFit="cover"
            maxH="550px"
            src="assets/images/macbook.png"
          />
        </GridItem>
        <GridItem
          display={{ base: 'none', sm: 'none', md: 'flex', xl: 'none' }}
          colSpan={{
            base: 3,
            md: 2,
          }}
        >
          <Image w="500px" objectFit="fill" src="assets/images/macbook-tablet.png" />
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

export default ImpaktGamesHero;
