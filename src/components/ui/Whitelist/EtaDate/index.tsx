import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import { C } from '@/components';
import { Day, Month } from 'dayspan';
import CounterItem from '../CounterItem';

const EtaDate = () => {
  const date = Day.build(2022, Month.JULY, 11).format('MMMM Do YYYY');

  return (
    <C.HeroLayout
      minH="unset"
      spacing={10}
      pos="relative"
      align="center"
      justify="center"
      backgroundSize="auto"
      bgColor="transparent"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      customTopPadding="0px"
    >
      <VStack w="full">
        <VStack maxW="1200px" w="full" pt="48px">
          <HStack
            flexDir={{ base: 'column' }}
            columnGap="auto"
            rowGap={{ base: '30px' }}
            alignItems="center"
            w="full"
            p={{ base: '0px', md: '40px' }}
            borderRadius="32px"
            backgroundSize="contain"
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            backgroundColor="rgba(28, 28, 40, 0.65)"
          >
            <VStack align="flex-start" spacing="22px" w="100%" paddingX={{ base: '0' }}>
              <Box
                bgClip="text"
                color="white"
                marginBottom={{ base: '0px', md: '0' }}
                width={{ base: '100%' }}
              >
                <Text
                  textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                  textAlign="center"
                  marginTop="0 !important"
                  paddingTop={{ base: '20px', sm: '10px', md: '0px' }}
                  paddingLeft={{ base: '20px', sm: '10px', md: '0px' }}
                  fontSize={{ base: '25px', md: '48px' }}
                  background="-webkit-linear-gradient(0deg, #9000CA80 0%, #ffffff 50%, #FF1C9980 100%);"
                  backgroundClip="text"
                  color="transparent"
                >
                  ETA {date}
                </Text>
              </Box>
              <Box
                display="flex"
                margin="auto"
                width="100%"
                justifyContent="center"
                gap="12px"
                paddingBottom="20px"
              >
                <CounterItem value="32" label="DAYS" />
                <CounterItem value="10" label="HRS" />
                <CounterItem value="24" label="MINS" />
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default EtaDate;
