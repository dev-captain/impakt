import { Box, Button, Text, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import AnimationInWhenVisible from 'components/common/AnimationInWhenVisible';
import HeroLayout from 'components/layouts/HeroLayout';
import { Socials } from 'data';

const JoinOurCommunity = () => {
  return (
    <AnimationInWhenVisible animationType="fade">
      <HeroLayout minH="70vh">
        <VStack w="full" color="white">
          <VStack px="16px" maxW="1232px" w="full">
            <VStack
              w="full"
              h="612px"
              maxH="612px"
              bgSize="cover"
              borderRadius="28px"
              bgRepeat="no-repeat"
              bgPosition="center"
              overflow="hidden"
              pos="relative"
              bgImage={Images.joinOurCommunity}
            >
              <VStack
                pos="absolute"
                w="full"
                h="612px"
                zIndex={0}
                bg="linear-gradient(90deg, rgba(31, 32, 36, 0.8624) 50%, rgba(31, 32, 36, 0.78364) 63.01%, rgba(31, 32, 36, 0.6688) 72.58%, rgba(31, 32, 36, 0) 100%)"
              />
              <Box
                pos="absolute"
                width="967px"
                height="472px"
                left="-307px"
                top="-204px"
                opacity="0.49"
                zIndex={1}
                bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
              />
              <VStack
                w="full"
                h="full"
                spacing="18px"
                justify="center"
                align="flex-start"
                zIndex={10}
                pl={{ base: '32px', md: '120px' }}
              >
                <VStack spacing="4px" align="flex-start">
                  <Text textStyle={{ base: 'bold6', md: 'bold5' }} maxW="340px">
                    Join our community
                  </Text>
                  <Text textStyle={{ base: 'regular3', md: 'regular4' }} maxW="340px" opacity={0.6}>
                    Keep in touch with us on Discord
                  </Text>
                </VStack>
                <Button
                  as="a"
                  variant="discord"
                  target="_blank"
                  _focus={{}}
                  cursor="pointer"
                  href={Socials.discord}
                >
                  <Text textStyle="semiBold3" color="white">
                    Join Discord
                  </Text>
                </Button>
              </VStack>
            </VStack>
          </VStack>
        </VStack>
      </HeroLayout>
    </AnimationInWhenVisible>
  );
};

export default JoinOurCommunity;
