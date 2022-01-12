import {
  Text,
  VStack,
  SimpleGrid,
  Image,
  Stack,
  GridItem,
  Button,
  Heading,
} from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import BurnToEarnCard from 'components/ui/home/BurnToEarnCard';

const backgroundImage =
  "linear-gradient(180deg, rgba(0, 0, 0, 0.7) 20%, #282A2E 110%), url('assets/images/firstherobg.jpeg')";

const ImpaktGamesHero = () => {
  return (
    <HeroLayout
      showNavbar
      addSpacer
      spacing={10}
      justify="center"
      align="space-around"
      hideBlur
      bgImage={backgroundImage}
    >
      <SimpleGrid
        columns={3}
        alignItems="center"
        justifyContent="center"
        px={[4, 8, 12, 16, 40]}
        pr={[4, 8, 12, 16, 40, 0]}
      >
        <GridItem
          colSpan={{
            base: 3,
            md: 2,
          }}
        >
          <Stack
            align={{
              base: 'center',
              md: 'flex-start',
            }}
          >
            <BurnToEarnCard />
            <VStack align={{ base: 'center', md: 'flex-start' }} paddingY="36px" spacing={4}>
              <Heading
                fontWeight="900"
                fontSize={{ base: '75px', md: '120px' }}
                lineHeight={{ base: '80px', md: '120px' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Impakt
                <Text fontSize={{ base: '75px', md: '120px' }} fontWeight="900">
                  Games
                </Text>
              </Heading>
              <Text
                opacity={0.6}
                fontSize={{ base: '18px', md: '20px' }}
                paddingTop={{ base: '16px', md: '16px' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Connect together and have fun while
                <br />
                experiencing gamified fitness
              </Text>
            </VStack>
            <Button
              px="80px"
              py="32px"
              borderRadius="20px"
              fontSize="16px"
              lineHeight="24px"
              fontWeight="600"
              bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
            >
              Get started
            </Button>
          </Stack>
        </GridItem>
        <GridItem
          alignItems="flex-end"
          justifyContent="space-around"
          display={{ base: 'none', md: 'flex' }}
        >
          <Image w={400} src="assets/images/iphone13.png" />
        </GridItem>
      </SimpleGrid>
    </HeroLayout>
  );
};

export default ImpaktGamesHero;
