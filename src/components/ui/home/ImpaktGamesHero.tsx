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
  ButtonProps,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { layoutPadding } from 'theme';
import VideoModal, { Play } from 'components/core/VideoModal';
import { Videos } from 'data';

const backgroundImage =
  "url('https://ucarecdn.com/da10a19a-951f-40b9-8fe9-c90d0f488fbe/-/preview/-/quality/smart/')";

const ImpaktGamesHero = () => {
  const disclosure = useDisclosure();
  const [isLessThan1272] = useMediaQuery('(max-width: 1272px)');
  const [isMoreThan1097] = useMediaQuery('(min-width: 1097px)');
  const isSpecificWidth = isLessThan1272 && isMoreThan1097;

  return (
    <HeroLayout
      showNavbar
      addSpacer
      minH="70vh"
      pos="relative"
      spacing={10}
      justify="center"
      align="space-around"
      bgImage={backgroundImage}
      hideBlur={!disclosure.isOpen}
    >
      <VideoModal {...disclosure} path={Videos.impaktGames} />
      <SimpleGrid
        columns={4}
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
            w="full"
            h="full"
            alignItems={{ base: 'center', md: 'flex-start' }}
            pt={0}
            spacing="24px"
            align="center"
            justify="center"
          >
            <VStack
              align={{ base: 'left', sm: 'flex-start', md: 'flex-start' }}
              spacing={{ base: '16px', md: '0px', xl: '16px' }}
              justify="center"
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
              spacing={{ base: '24px', sm: '24px', md: 0, xl: '0px' }}
            >
              <VStack
                pos="relative"
                overflow="hidden"
                align="center"
                justify="center"
                onClick={disclosure.onOpen}
                display={{ base: 'flex', sm: 'none' }}
              >
                <Play onClick={disclosure.onOpen} />
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
                  bgImage="https://ucarecdn.com/9fa46e2c-bb22-4ea2-b5ea-32b6c214ce54/"
                  backgroundSize={{ base: 'contain', md: 'center', xl: 'fill' }}
                  minH={{ base: '140px', sm: '80%', md: '17vw', xl: '24vw', '2xl': '24vw' }}
                  minW={{ base: '240px', sm: '74%', md: '30vw', xl: '35vw', '2xl': '38vw' }}
                />
              </VStack>
              <DownloadTutorialButton
                disclosure={disclosure}
                display={{ base: 'none', md: 'flex' }}
              />
              <VStack
                h="full"
                overflow="hidden"
                pos="relative"
                align="center"
                justify="center"
                onClick={disclosure.onOpen}
                display={{ base: 'none', sm: 'flex', md: 'none' }}
              >
                <Play onClick={disclosure.onOpen} />
                <Image objectFit="contain" src="assets/images/macbook-tablet.png" />
                <Box
                  top="8px"
                  pos="absolute"
                  mx="8vw"
                  opacity="0.6"
                  borderRadius="2px"
                  backgroundPosition="center"
                  bgImage="https://ucarecdn.com/9fa46e2c-bb22-4ea2-b5ea-32b6c214ce54/"
                  backgroundSize={{ base: 'fill', md: 'center', xl: 'fill' }}
                  minH={{ base: '20vw', sm: '80%', md: '17vw', xl: '24vw', '2xl': '24vw' }}
                  minW={{ base: '60vw', sm: '74%', md: '30vw', xl: '35vw', '2xl': '38vw' }}
                />
              </VStack>
              <>
                <Box m={24} />
                <DownloadTutorialButton
                  disclosure={disclosure}
                  display={{ base: 'flex', md: 'none' }}
                />
                <Box m={24} />
              </>
            </VStack>
          </Stack>
        </GridItem>
        <GridItem
          // h="full"
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
          <Play onClick={disclosure.onOpen} />
          <Box
            right="16px"
            maxH="550px"
            opacity="0.6"
            pos="absolute"
            borderRadius="4px"
            backgroundSize="cover"
            backgroundPosition="center"
            bgImage="https://ucarecdn.com/9fa46e2c-bb22-4ea2-b5ea-32b6c214ce54/"
            top={{ base: '64px', xl: '32px', '2xl': '64px' }}
            minH={{ base: '24vw', md: '', xl: '24vw', '2xl': '24vw' }}
            minW={{ base: '38vw', md: '', xl: '35vw', '2xl': '38vw' }}
          />
        </GridItem>
        <GridItem
          // h="full"
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
          <Play onClick={disclosure.onOpen} />
          <Box
            top="32px"
            maxH="550px"
            pos="absolute"
            mx={isSpecificWidth ? '5vw' : '8vw'}
            opacity="0.6"
            borderRadius="2px"
            backgroundPosition="center"
            bgImage="https://ucarecdn.com/9fa46e2c-bb22-4ea2-b5ea-32b6c214ce54/"
            backgroundSize={{ base: 'fill', md: 'center', xl: 'fill' }}
            minH={{ base: '17vw', md: '17vw', xl: '24vw', '2xl': '24vw' }}
            minW={{ base: '30vw', md: '30vw', xl: '35vw', '2xl': '38vw' }}
          />
        </GridItem>
      </SimpleGrid>
      <Box
        height="100px"
        w="full"
        bottom={0}
        zIndex={100}
        position="absolute"
        bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #282A2E 100%)"
      />
    </HeroLayout>
  );
};

interface DownloadTutorialButtonProps extends ButtonProps {
  disclosure: ReturnType<typeof useDisclosure>;
}
const DownloadTutorialButton = ({ disclosure, ...buttonProps }: DownloadTutorialButtonProps) => (
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
    {...buttonProps}
  >
    Download Tutorial
  </Button>
);

export default ImpaktGamesHero;
