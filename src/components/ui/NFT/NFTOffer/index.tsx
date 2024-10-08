import { memo } from 'react';
// import Keys from '@/i18n/translations/en';

import { VStack, HStack, useColorModeValue, Box, Text, Image } from '@chakra-ui/react';
import Images from '@/assets/images';
import { C } from '@/components';
import OfferCard from './offerCard';

const NFTOffer = () => {
  // const navigate = useNavigate();
  const bgImage = useColorModeValue(Images.nft.nftOfferBg, Images.nft.nftOfferBg);

  return (
    <C.HeroLayout
      showNavbar
      minH="70vh"
      spacing={10}
      pos="relative"
      //   bgImage={bgImage}
      removeTopPadding
      justify="flex-start"
      align="flex-start"
      backgroundSize="auto"
      backgroungRepeat="no-repeat"
      backgroundBlendMode="lighten"
      bgColor="#121216"
    >
      <VStack px={{ base: '1em', lg: '0' }} w="full">
        <VStack maxW="1200px" w="full">
          <HStack
            flexDir={{ base: 'column' }}
            columnGap="auto"
            id="bg"
            rowGap={{ base: '30px' }}
            alignItems="center"
            border="2px solid rgba(255,255,255,0.1)"
            w="full"
            p="40px"
            bgColor="#1C1C28"
            borderRadius="32px"
            backgroundImage={bgImage}
            bgSize={{ base: 'cover', md: 'auto' }}
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            position="relative"
          >
            <Box
              w="35%"
              display={{ base: 'block', md: 'none' }}
              h="100%"
              left="-1"
              top="0"
              zIndex="0"
              margin="0 !important"
              position="absolute"
              borderRadius="32px"
              bg="radial-gradient(100% 129.69% at 0% 0%, #1C1C28 0%, rgba(28, 28, 40, 0) 100%), linear-gradient(90deg, #1C1C28 0%, rgba(28, 28, 40, 0.05) 44.09%)"
            />
            <VStack
              align="flex-start"
              spacing="22px"
              w="100%"
              zIndex="1"
              paddingX={{ base: '0' }}

              // flexDirection={{ base: 'column-reverse', sm: 'column-reverse', md: 'row' }}
            >
              <Box
                bgClip="text"
                color="white"
                marginBottom={{ base: '0px', md: '16px' }}
                width={{ base: '100%', md: '727px' }}
              >
                <Text
                  textStyle={{ base: 'bold5', md: 'TitleBold48' }}
                  textAlign="left"
                  marginTop="0 !important"
                  paddingTop={{ base: '0px', sm: '0px', md: '0px' }}
                >
                  So what does NFTs Offer you?
                </Text>
                <Text
                  textStyle={{ base: 'semibold18', md: 'semiBold20' }}
                  textAlign="left"
                  marginTop="16px"
                  color="#fff"
                  //   dangerouslySetInnerHTML={{ __html: t(Keys.DynamicNFT.description) }}
                >
                  Is it all about earning rates?
                </Text>
                <Text
                  marginTop="7px"
                  textStyle={{ base: 'semiBold5', md: 'regular18' }}
                  color="rgba(255, 255, 255, 0.85)"
                >
                  No, earning rates are just the tip of the iceberg! Impakt is more than a fitness
                  app! And we&apos;re making it our mission to take care of our holders!
                </Text>
                <Text
                  marginTop="7px"
                  color="#FEC417"
                  textStyle={{ base: 'semibold18', md: 'semiBold20' }}
                >
                  {' '}
                  Let’s compare them side by side
                </Text>
              </Box>
            </VStack>
            <VStack
              flexDir={{ base: 'column', md: 'row' }}
              marginStart="0px !important"
              marginTop="30px"
              width="100%"
              id="yo"
              gap="7px"
            >
              <Box
                order={{ base: '3', md: 'unset' }}
                width={{ base: '100%', md: '425px' }}
                marginStart="0px !important"
              >
                <HStack flexDir={{ base: 'column' }} gap="16px" width="100%">
                  <OfferCard pl={{ base: '25px', lg: '0' }}>Access to exclusive NFTs</OfferCard>
                  <OfferCard pl={{ base: '25px', lg: '0' }}>
                    Access to exclusive alpha/invest
                  </OfferCard>
                  <OfferCard pl={{ base: '25px', lg: '0' }}>
                    Access to exclusive IRL/Virtual Event
                  </OfferCard>
                </HStack>
              </Box>
              <Box
                order={{ base: '1', md: 'unset' }}
                width={{ base: '100%', md: '273px' }}
                padding="24px"
                backgroundColor="rgba(28, 28, 40, 0.65)"
                backdropFilter=" blur(40px)"
                border="1px solid rgba(255, 255, 255, 0.2)"
                borderRadius="16px"
                marginStart="0px !important"
                marginTop="0px !important"
                height="283px"
              >
                <HStack flexDir={{ base: 'column' }} gap="16px" width="100%">
                  <Box marginStart="0px !important" minW="230px" maxH="171px">
                    <Image w="100%" src={Images.nft.nftOffer} />
                  </Box>
                  <OfferCard
                    bgColor="transparent"
                    backdropFilter="0"
                    borderRadius="0.5em"
                    h="auto"
                    pt="14px"
                    pb="14px"
                  >
                    Free Avadroid NFT
                  </OfferCard>
                </HStack>
              </Box>
              <Box
                order={{ base: '2', md: 'unset' }}
                width={{ base: '100%', md: '425px' }}
                marginTop="0px !important"
              >
                <HStack flexDir={{ base: 'column' }} gap="16px" width="100%">
                  <OfferCard>Higher earngings</OfferCard>
                  <OfferCard>Free NFT air drops</OfferCard>
                  <OfferCard pl={{ base: '25px', lg: '0' }}>
                    Access to impakt exclusive experience
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

export default memo(NFTOffer);
