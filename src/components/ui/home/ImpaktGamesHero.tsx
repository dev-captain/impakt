/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import {
  Text,
  VStack,
  SimpleGrid,
  Image,
  Stack,
  GridItem,
  Button,
  Box,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';
import VideoModal from 'components/core/VideoModal';
import { Videos } from 'data';

const backgroundImage = "url('assets/images/firstherobg.png')";

const ImpaktGamesHero = () => {
  const disclosure = useDisclosure();
  const [isLessThan1272] = useMediaQuery('(max-width: 1272px)');
  const [isMoreThan1097] = useMediaQuery('(min-width: 1097px)');
  const isSpecificWidth = isLessThan1272 && isMoreThan1097;

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
            pt={{ base: '0px', md: '16px', xl: '40px', '2xl': '107px' }}
          >
            <VStack
              align={{ base: 'left', sm: 'flex-start', md: 'flex-start' }}
              paddingY={{ base: '0px', sm: '8px', md: '36px' }}
              spacing={{ base: '16px', md: '0px', xl: '16px' }}
            >
              <Text textStyle="TitleBold72" textAlign="left">
                Impakt
              </Text>
              <Text
                textAlign="left"
                fontSize={{ base: '18px', md: '60px' }}
                paddingTop={{ base: '0px', sm: '0px', md: '16px' }}
              >
                Social. Fitness. Gamified.
              </Text>
            </VStack>
            <VStack spacing={{ base: '24px', sm: '24px', md: 0, xl: '24px' }} align="flex-start">
              <VStack
                display={{ base: 'flex', sm: 'none' }}
                pos="relative"
                overflow="hidden"
                align="center"
                justify="center"
                onClick={disclosure.onOpen}
              >
                <VideoModal {...disclosure} path={Videos.impaktGames} />
                <Image
                  maxW="320px"
                  objectFit="contain"
                  marginTop="30px"
                  marginBottom="16px"
                  src="assets/images/macbook-mobile.png"
                />
                <Box
                  top="16px"
                  opacity="0.6"
                  pos="absolute"
                  borderRadius="2px"
                  backgroundPosition="center"
                  bgImage="assets/images/video.gif"
                  backgroundSize={{ base: 'contain', md: 'center', xl: 'fill' }}
                  minH={{ base: '140px', sm: '80%', md: '17vw', xl: '24vw', '2xl': '24vw' }}
                  minW={{ base: '240px', sm: '74%', md: '30vw', xl: '35vw', '2xl': '38vw' }}
                />
              </VStack>
              <Button
                px="80px"
                py="32px"
                fontSize="16px"
                lineHeight="24px"
                fontWeight="600"
                borderRadius="20px"
                onClick={disclosure.onOpen}
                w={{ base: 'full', sm: 'fit-content', md: 'auto' }}
                boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15), 0px 4px 14px rgba(0, 0, 0, 0.16)"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              >
                Sneak Peak
              </Button>
              <VStack
                overflow="hidden"
                pos="relative"
                align="center"
                justify="center"
                onClick={disclosure.onOpen}
                display={{ base: 'none', sm: 'flex', md: 'none' }}
              >
                <VideoModal {...disclosure} path={Videos.impaktGames} />
                <Image objectFit="contain" src="assets/images/macbook-tablet.png" />
                <Box
                  top="8px"
                  pos="absolute"
                  mx="8vw"
                  opacity="0.6"
                  borderRadius="2px"
                  backgroundPosition="center"
                  bgImage="assets/images/video.gif"
                  backgroundSize={{ base: 'fill', md: 'center', xl: 'fill' }}
                  minH={{ base: '20vw', sm: '80%', md: '17vw', xl: '24vw', '2xl': '24vw' }}
                  minW={{ base: '60vw', sm: '74%', md: '30vw', xl: '35vw', '2xl': '38vw' }}
                />
              </VStack>
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
          pos="relative"
          overflow="hidden"
          onClick={disclosure.onOpen}
          mt={{ base: 'auto', md: '48px' }}
        >
          <Image
            maxH="850px"
            w="100%"
            h="100%"
            objectFit="contain"
            src="assets/images/macbook.png"
          />
          <VideoModal {...disclosure} path={Videos.impaktGames} />
          <Box
            right="16px"
            maxH="550px"
            opacity="0.6"
            pos="absolute"
            borderRadius="4px"
            backgroundSize="cover"
            backgroundPosition="center"
            bgImage="assets/images/video.gif"
            top={{ base: '64px', xl: '32px', '2xl': '64px' }}
            minH={{ base: '24vw', md: '', xl: '24vw', '2xl': '24vw' }}
            minW={{ base: '38vw', md: '', xl: '35vw', '2xl': '38vw' }}
          />
        </GridItem>
        <GridItem
          display={{ base: 'none', sm: 'none', md: 'flex', xl: 'none' }}
          colSpan={{
            base: 3,
            md: 2,
          }}
          pos="relative"
          overflow="hidden"
          onClick={disclosure.onOpen}
        >
          <Image w="500px" objectFit="fill" src="assets/images/macbook-tablet.png" />
          <VideoModal {...disclosure} path={Videos.impaktGames} />
          <Box
            top="32px"
            maxH="550px"
            pos="absolute"
            mx={isSpecificWidth ? '5vw' : '8vw'}
            opacity="0.6"
            borderRadius="2px"
            backgroundPosition="center"
            bgImage="assets/images/video.gif"
            backgroundSize={{ base: 'fill', md: 'center', xl: 'fill' }}
            minH={{ base: '17vw', md: '17vw', xl: '24vw', '2xl': '24vw' }}
            minW={{ base: '30vw', md: '30vw', xl: '35vw', '2xl': '38vw' }}
          />
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

export default ImpaktGamesHero;
