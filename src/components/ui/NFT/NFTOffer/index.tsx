import { memo } from 'react';
// import { useTranslation } from 'react-i18next';
// import Keys from 'i18n/types';

import {
  VStack,
  HStack,
  useColorModeValue,
  Box,
  Text,
  Image,
  useMediaQuery,
} from '@chakra-ui/react';
import Images from 'assets/images';
import { C } from 'components';
import OfferCard from './offerCard';

const NFTOffer = () => {
  // const navigate = useNavigate();
  const bgImage = useColorModeValue(Images.nft.nftOfferBg, Images.nft.nftOfferBg);
  //   const { t } = useTranslation(`default`).i18n;
  const [isLessThan1040] = useMediaQuery('(max-width: 991px)');

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
            rowGap={{ base: '30px' }}
            alignItems="center"
            w="full"
            p={{ base: '0px', md: '40px' }}
            borderRadius="32px"
            backgroundImage={isLessThan1040 ? 'none' : bgImage}
            backgroundPosition="right"
            backgroundRepeat="no-repeat"
            backgroundColor={isLessThan1040 ? 'none' : '#1C1C28'}
          >
            <VStack
              align="flex-start"
              spacing="22px"
              w="100%"
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
              gap="7px"
              display={isLessThan1040 ? 'none' : 'flex'}
            >
              <Box width={{ base: '100%', md: '425px' }} marginStart="0px !important">
                <HStack flexDir={{ base: 'column' }} gap="16px" width="100%">
                  <OfferCard bRadius="16px" h="84px" tStyle="semibold20" justifyC="center">
                    Access to exclusive NFTs
                  </OfferCard>
                  <OfferCard bRadius="16px" h="84px" tStyle="semibold20" justifyC="center">
                    Access to exclusive alpha/invest
                  </OfferCard>
                  <OfferCard bRadius="16px" h="84px" tStyle="semibold20" justifyC="center">
                    Access to exclusive IRL/Virtual Event
                  </OfferCard>
                </HStack>
              </Box>
              <Box
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
                  <Box marginStart="0px !important">
                    <Image src={Images.nft.nftOffer} />
                  </Box>
                  <OfferCard
                    bRadius="8px"
                    h="auto"
                    pTop="14px"
                    pBottom="14px"
                    tStyle="semibold20"
                    justifyC="center"
                  >
                    Free Avadroid NFT
                  </OfferCard>
                </HStack>
              </Box>
              <Box width={{ base: '100%', md: '425px' }} marginTop="0px !important">
                <HStack flexDir={{ base: 'column' }} gap="16px" width="100%">
                  <OfferCard bRadius="16px" h="84px" tStyle="semibold20" justifyC="center">
                    Higher earngings
                  </OfferCard>
                  <OfferCard bRadius="16px" h="84px" tStyle="semibold20" justifyC="center">
                    Free NFT air drops
                  </OfferCard>
                  <OfferCard bRadius="16px" h="84px" tStyle="semibold20" justifyC="center">
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
