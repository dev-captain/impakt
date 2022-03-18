import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import HeroLayout from 'components/layouts/HeroLayout';
import { StatusQuoBlurs } from './StatusQuoBlurs';
import StatusQuoCard from './StatusQuoCard';

const StatusQuoHero = () => {
  return (
    <HeroLayout minH="70vh">
      <VStack
        w="full"
        color="white"
        align="center"
        justify="center"
        pt={{ base: '120px', md: '0px' }}
      >
        <Text textStyle="bold7" maxW={{ base: '400px', md: '100%' }} align="center">
          Changing the status quo
        </Text>
        <VStack
          w="full"
          px="16px"
          maxW="1232px"
          pos="relative"
          align="center"
          spacing="32px"
          justify={{ base: 'center', md: 'space-between' }}
          pt={{ base: '16px', lg: '45px' }}
        >
          <Image
            zIndex={10}
            maxH="358px"
            d={{ base: 'flex', lg: 'none' }}
            src={Images.Common.blitzChallenge}
          />
          <HStack w="full" align="center" justify={{ base: 'center', lg: 'space-between' }}>
            <StatusQuoCard />
            <StatusQuoBlurs />
            <Image
              zIndex={10}
              maxH="358px"
              d={{ base: 'none', lg: 'flex' }}
              src={Images.Common.blitzChallenge}
            />
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default StatusQuoHero;
