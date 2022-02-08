import React, { Suspense } from 'react';
import {
  Text,
  VStack,
  SimpleGrid,
  Image,
  Stack,
  GridItem,
  Box,
  useMediaQuery,
  useBreakpointValue,
  Button,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';
import { Play } from 'components/core/VideoModal';
import Images from 'assets/images';
import useModalStore from 'hooks/store/useModalStore';

const ScreenVideo = React.lazy(() => import('./ScreenVideo'));

const ImpaktGamesHero = () => {
  const { setImpaktGames } = useModalStore((state) => state);

  const mode = useColorMode();
  const text = useColorModeValue('glass.100', 'glass.700');
  const [isLessThan1272] = useMediaQuery('(max-width: 1272px)');
  const [isMoreThan1097] = useMediaQuery('(min-width: 1097px)');
  const isSpecificWidth = isLessThan1272 && isMoreThan1097;
  const val = useBreakpointValue({
    base: 'base',
    sm: 'sm',
    md: 'md',
    xl: 'xl',
    '2xl': '2xl',
  });
  const bgImage = useColorModeValue(
    Images.impaktGames.Header(val as any),
    Images.impaktGames.light,
  );

  const gridCommonProps: any = {
    colSpan: {
      base: 3,
      md: 2,
    },
    pos: 'relative',
    overflow: 'hidden',
    onClick: setImpaktGames,
  };

  const stackCommonProps: any = {
    align: 'center',
    justify: 'center',
    ...gridCommonProps,
  };

  return (
    <HeroLayout
      showNavbar
      addSpacer
      minH="70vh"
      pos="relative"
      spacing={10}
      justify="center"
      align="space-around"
      bgImage={bgImage}
    >
      <SimpleGrid
        columns={4}
        color={text}
        alignItems="flex-start"
        justifyContent="center"
        columnGap={{ base: '0px', md: '100px', xl: '200px' }}
      >
        <GridItem
          colSpan={{
            base: 4,
            md: 2,
          }}
          h="full"
          w="full"
          px={layoutPadding}
        >
          <Stack
            pt={0}
            w="full"
            h="full"
            spacing="24px"
            align="center"
            justify="center"
            alignItems={{ base: 'center', md: 'flex-start' }}
          >
            <VStack
              justify="center"
              spacing={{ base: '16px', md: '0px', xl: '16px' }}
              align={{ base: 'left', sm: 'flex-start', md: 'flex-start' }}
            >
              <Text
                textStyle="TitleBold72"
                fontSize={{ base: '64px', md: '90px' }}
                lineHeight={{ base: '64px', md: '90px' }}
                textAlign={{ base: 'center', md: 'left' }}
                paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
              >
                Social. Fitness. Gamified.
              </Text>
            </VStack>
            <VStack
              align="flex-start"
              alignItems={{ base: 'center', sm: 'left' }}
              cursor="pointer"
              spacing={{ base: '24px', sm: '24px', md: 0, xl: '0px' }}
            >
              <VStack {...stackCommonProps} display={{ base: 'flex', sm: 'none' }}>
                <Play
                  onClick={() => {
                    setImpaktGames(true);
                  }}
                />
                <Image
                  maxW="320px"
                  marginTop="30px"
                  objectFit="contain"
                  marginBottom="16px"
                  src="assets/images/macbook-mobile.png"
                />
                <Suspense
                  fallback={
                    <Play
                      onClick={() => {
                        setImpaktGames(true);
                      }}
                    />
                  }
                >
                  <ScreenVideo isSpecificWidth={isSpecificWidth} />
                </Suspense>
              </VStack>
              <Button
                variant="accent"
                onClick={() => {
                  setImpaktGames(true);
                }}
                display={{ base: 'none', md: 'flex' }}
              >
                <Text textStyle="semiBold16" color="glass.100">
                  Download Tutorial
                </Text>
              </Button>
              <VStack
                h="full"
                cursor="pointer"
                {...stackCommonProps}
                display={{ base: 'none', sm: 'flex', md: 'none' }}
              >
                <Play
                  onClick={() => {
                    setImpaktGames(true);
                  }}
                />
                <Image objectFit="contain" src="assets/images/macbook-tablet.png" />
                <Suspense
                  fallback={
                    <Play
                      onClick={() => {
                        setImpaktGames(true);
                      }}
                    />
                  }
                >
                  <ScreenVideo isSpecificWidth={isSpecificWidth} />
                </Suspense>
              </VStack>
              <>
                <Box m={24} />
                <Button
                  variant="accent"
                  onClick={() => {
                    setImpaktGames(true);
                  }}
                  display={{ base: 'flex', md: 'none' }}
                >
                  <Text textStyle="semiBold16">Download Tutorial</Text>
                </Button>
                <Box m={24} />
              </>
            </VStack>
          </Stack>
        </GridItem>
        <GridItem
          colSpan={{
            base: 3,
            md: 2,
          }}
          {...gridCommonProps}
          alignItems="flex-end"
          justifyContent="flex-end"
          cursor="pointer"
          mt={{ base: 'auto', md: '48px' }}
          display={{ base: 'none', xl: 'flex' }}
        >
          <Image
            w="100%"
            h="100%"
            maxH="850px"
            objectFit="contain"
            src="assets/images/macbook.png"
          />
          <Play
            onClick={() => {
              setImpaktGames(true);
            }}
          />
          <Suspense
            fallback={
              <Play
                onClick={() => {
                  setImpaktGames(true);
                }}
              />
            }
          >
            <ScreenVideo isSpecificWidth={isSpecificWidth} />
          </Suspense>
        </GridItem>
        <GridItem
          colSpan={{
            base: 3,
            md: 2,
          }}
          {...gridCommonProps}
          display={{ base: 'none', sm: 'none', md: 'flex', xl: 'none' }}
        >
          <Image w="500px" objectFit="fill" src="assets/images/macbook-tablet.png" />
          <Play />
          <Suspense fallback={<Play />}>
            <ScreenVideo isSpecificWidth={isSpecificWidth} />
          </Suspense>
        </GridItem>
      </SimpleGrid>
      {mode.colorMode === 'light' && (
        <Box
          w="full"
          bottom={0}
          zIndex={100}
          height="100px"
          position="absolute"
          bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, glass.900 100%)"
        />
      )}
    </HeroLayout>
  );
};

export default ImpaktGamesHero;
