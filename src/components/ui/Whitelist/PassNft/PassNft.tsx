import { memo } from 'react';
import { VStack, HStack, useColorModeValue, Box, Text } from '@chakra-ui/react';
import Images from '@/assets/images';
import { C } from '@/components';
import OfferCard from '@/components/ui/NFT/NFTOffer/offerCard';

const PassNft = () => {
  const bgImage = useColorModeValue(Images.whitelist.nftpass, Images.whitelist.nftpass);

  return (
    <C.HeroLayout
      minH="70vh"
      spacing={10}
      pos="relative"
      align="center"
      justify="center"
      backgroundSize="auto"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      bgColor="#0A0A0B"
      removeBottomPadding
    >
      <VStack w="full" px="16px">
        <VStack position="relative" maxW="1200px" w="full">
          <HStack
            flexDir={{ base: 'column' }}
            columnGap="auto"
            rowGap={{ base: '30px' }}
            alignItems="center"
            w="full"
            p={{ base: '20px', md: '40px' }}
            borderRadius="32px"
            backgroundImage={bgImage}
            backgroundSize={{ base: 'cover', lg: 'contain' }}
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            backgroundColor="#1C1C28"
            zIndex="1"
            position="relative"
            top={{ base: '0', lg: '-230px' }}
          >
            <VStack align="flex-start" spacing="22px" w="100%" paddingX={{ base: '0' }}>
              <Box
                bgClip="text"
                color="white"
                marginBottom={{ base: '0px', md: '0' }}
                width={{ base: '100%', md: '727px' }}
              >
                <Text
                  textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                  textAlign="left"
                  marginTop="0 !important"
                  paddingTop={{ base: '20px', sm: '10px', md: '0px' }}
                  paddingLeft={{ base: '20px', sm: '10px', md: '0px' }}
                  fontSize={{ base: '25px', md: '32px' }}
                >
                  The Impakt Pass NFT!
                </Text>
              </Box>
            </VStack>
            <VStack
              flexDir={{ base: 'column', md: 'row' }}
              marginStart="0px !important"
              marginTop="30px"
              width="100%"
              gap="7px"
              display="flex"
            >
              <Box width={{ base: '100%', md: '496px' }} marginStart="0px !important">
                <HStack flexDir={{ base: 'column' }} gap="8px" width="100%">
                  <OfferCard
                    p="12px 16px"
                    justifyContent="flex-start"
                    bgColor="rgba(255, 255, 255, 0.04)"
                    tStyle="regular20"
                  >
                    <Text fontSize={{ base: '16px', md: '20px' }}>
                      First 10,000 will be a{' '}
                      <Box as="span" color="#FEC417">
                        free mint!
                      </Box>
                    </Text>
                  </OfferCard>

                  <OfferCard
                    justifyContent="flex-start"
                    p="12px 16px"
                    bgColor="rgba(255, 255, 255, 0.04)"
                    tStyle="regular20"
                  >
                    <Text fontSize={{ base: '16px', md: '20px' }}>
                      First 10,000 act as{' '}
                      <Box as="span" color="#FEC417">
                        whitelist spots
                      </Box>{' '}
                      for the Impakt Genesis Mint!
                    </Text>
                  </OfferCard>
                  <OfferCard
                    justifyContent="flex-start"
                    p="12px 16px"
                    bgColor="rgba(255, 255, 255, 0.04)"
                    tStyle="regular20"
                  >
                    <Text fontSize={{ base: '16px', md: '20px' }}>
                      <Box as="span" color="#FEC417">
                        Permanent{' '}
                      </Box>
                      utility:{' '}
                      <Box as="span" color="#FEC417">
                        3x{' '}
                      </Box>
                      higher earn rate in the Impakt app (vs. non NFT holders).
                    </Text>
                  </OfferCard>
                  <OfferCard
                    p="12px 16px"
                    justifyContent="flex-start"
                    bgColor="rgba(255, 255, 255, 0.04)"
                    tStyle="regular20"
                  >
                    <Text fontSize={{ base: '16px', md: '20px' }}>
                      <Box as="span" color="#FEC417">
                        Unlimited{' '}
                      </Box>
                      supply after Impakt Genesis Mint.
                    </Text>
                  </OfferCard>
                  <OfferCard
                    justifyContent="flex-start"
                    p="12px 16px"
                    bgColor="rgba(255, 255, 255, 0.04)"
                    tStyle="regular20"
                  >
                    <Text fontSize={{ base: '16px', md: '20px' }}>
                      Mint price{' '}
                      <Box as="span" color="#FEC417">
                        after{' '}
                      </Box>
                      first 10,000: 0.3 ETH.
                    </Text>
                  </OfferCard>
                </HStack>
              </Box>
            </VStack>
          </HStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default memo(PassNft);
