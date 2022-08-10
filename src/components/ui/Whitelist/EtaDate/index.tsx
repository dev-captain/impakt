import { memo } from 'react';
import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import { C } from 'components';
import moment from 'moment';

const EtaDate = () => {
  const date = moment('07/08/2022').format('MMMM Do YYYY');

  return (
    <C.HeroLayout
      showNavbar
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
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  border="2px solid #4C2E54"
                  width="80px"
                  height="85px"
                  justifyContent="center"
                  background="#121216"
                  borderRadius="10px"
                >
                  <Text fontSize={{ base: '35px', md: '48px' }} color="white">
                    32
                  </Text>
                  <Text fontSize="12px" color="#717173" marginTop={{ base: '-8px', md: '-14px' }}>
                    DAYS
                  </Text>
                </Box>
                <Box
                  justifyContent="center"
                  display="flex"
                  alignItems="center"
                  width="80px"
                  height="85px"
                  flexDirection="column"
                  border="2px solid #4C2E54"
                  background="#121216"
                  borderRadius="10px"
                >
                  <Text fontSize={{ base: '35px', md: '48px' }} color="white">
                    10
                  </Text>
                  <Text fontSize="12px" color="#717173" marginTop={{ base: '-8px', md: '-14px' }}>
                    HRS
                  </Text>
                </Box>
                <Box
                  display="flex"
                  alignItems="center"
                  flexDirection="column"
                  border="2px solid #4C2E54"
                  background="#121216"
                  width="80px"
                  height="85px"
                  justifyContent="center"
                  borderRadius="10px"
                >
                  <Text fontSize={{ base: '35px', md: '48px' }} color="white">
                    24
                  </Text>
                  <Text fontSize="12px" color="#717173" marginTop={{ base: '-8px', md: '-14px' }}>
                    MINS
                  </Text>
                </Box>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(EtaDate);
