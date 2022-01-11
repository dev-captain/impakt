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
      bgImage={backgroundImage}
    >
      <SimpleGrid
        columns={3}
        alignItems="center"
        justifyContent="center"
        px={[4, 8, 12, 16, 40]}
        pr={[4, 8, 12, 16, 30]}
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
            <VStack align="flex-start" paddingY="32px" spacing={4}>
              <Heading
                fontWeight="extrabold"
                fontSize={{ base: '75px', md: '120px' }}
                lineHeight={{ base: '80px', md: '120px' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Impakt
                <Text fontSize={{ base: '75px', md: '120px' }} fontWeight="extrabold">
                  games
                </Text>
              </Heading>
              <Text
                opacity={0.6}
                fontSize={{ base: '18px', md: '20px' }}
                paddingTop={{ base: '16px', md: '32px' }}
                textAlign={{ base: 'center', md: 'left' }}
              >
                Connect together and have a fun while
                <br />
                experiencing gamified fitness
              </Text>
            </VStack>
            <Button
              px="80px"
              py="32px"
              borderRadius="10px"
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
