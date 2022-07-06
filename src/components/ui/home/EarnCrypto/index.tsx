import { Box, HStack, Image, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import AnimationInWhenVisible from 'components/common/AnimationInWhenVisible';
import HeroLayout from 'components/layouts/HeroLayout';
import StarsVideo from '../ImpaktGamesHero/StarsVideo';
// import { StatusQuoBlurs } from './StatusQuoBlurs';

const EarnCrypto = () => {
  const bgImage = useColorModeValue(Images.impaktGames.Header2, Images.impaktGames.light);

  return (
    <HeroLayout
      customPadding={0}
      showNavbar
      pos="relative"
      bgImage={bgImage}
      align="flex-start"
      justify="flex-start"
    >
      <VStack w="full">
        <VStack id="general" alignItems="flex-start" maxW={{ base: '100%', lg: '1200px' }} w="full">
          <HStack>
            <Box id="mirror">
              <Box position="relative" height="788px" width="600px">
                <StarsVideo />
                <div
                  className="shadow"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    boxShadow: 'inset 0px 0px 20px rgba(232, 219, 202, 0.5)',
                    top: '0',
                    left: '0',
                    borderRadius: '150px 150px 0px 0',
                  }}
                />
              </Box>
            </Box>
            <Box />
          </HStack>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default EarnCrypto;
