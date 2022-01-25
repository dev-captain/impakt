import { useEffect } from 'react';
import { Box, Flex, Image, HStack, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { layoutPadding } from 'theme';
import { Socials } from 'data';
import Images from 'assets/images';
import { useNavigate } from 'react-router-dom';
import NavbarLinkItem from './NavbarLinkItem';
import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';

const Navbar = () => {
  const navigate = useNavigate();
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1040] = useMediaQuery('(max-width: 1040px)');

  useEffect(() => {
    if (!isLessThan1040) {
      onClose();
    }
  }, [isLessThan1040, onClose]);

  return (
    <Box pos="absolute" zIndex="100" w="full" boxShadow="0px 4px 26px rgba(0, 0, 0, 0.25)">
      {isOpen && <Gradient />}
      <Flex
        h="100px"
        minW="full"
        flexDir="row"
        overflow="hidden"
        position="relative"
        alignItems="center"
        color="rgba(255,255,255, 0.3)"
        bgColor={isOpen ? 'rgba(31, 32, 36, 1)' : 'blackAlpha.200'}
      >
        <HStack w="full" justify="space-between" px={layoutPadding}>
          <CollapseMenuController
            isOpen={isOpen}
            onToggle={onToggle}
            isLessThan1040={isLessThan1040}
          />
          <Box onClick={() => navigate('/')} zIndex={100}>
            <Image src={Images.Common.Logo} />
          </Box>
          <HStack
            justify="flex-end"
            align="center"
            w="full"
            spacing={[0, 0, 3, 5, 8, 12]}
            display={['none', 'none', 'none', isLessThan1040 ? 'none' : 'flex', 'flex']}
          >
            <HStack w="full" align="space-between" justify="space-between">
              <HStack spacing={[0, 0, 3, 5, 8, 12]} pl="40px">
                <NavbarLinkItem title="Impakt Games" isActive href="/" />
                <NavbarLinkItem title="White Paper" href="https://joker-5.gitbook.io/impakt/" />
              </HStack>
              <HStack justify={{ base: 'center', md: 'flex-end' }} spacing="32px" pl="64px">
                <Box as="a" target="_blank" href={Socials.twitter}>
                  <Image
                    w="35px"
                    h="35px"
                    opacity={0.6}
                    objectFit="contain"
                    src={Images.Common.Twitter}
                  />
                </Box>
                <Box as="a" target="_blank" href={Socials.discord}>
                  <Image
                    w="32px"
                    h="32px"
                    opacity={0.6}
                    objectFit="contain"
                    src={Images.Common.Discord}
                  />
                </Box>
              </HStack>
            </HStack>
          </HStack>
          <HStack
            align="center"
            spacing="44px"
            justify="flex-end"
            flex={{ base: 1, md: 'auto' }}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
          >
            <HStack
              pl={{ base: 0, md: '64px' }}
              spacing={{ base: '16px', md: '32px' }}
              justify={{ base: 'center', md: 'flex-end' }}
            >
              <Box as="a" target="_blank" href={Socials.twitter}>
                <Image
                  w="35px"
                  h="35px"
                  opacity={0.6}
                  objectFit="contain"
                  src={Images.Common.Twitter}
                />
              </Box>
              <Box as="a" target="_blank" href={Socials.discord}>
                <Image
                  w="32px"
                  h="32px"
                  opacity={0.6}
                  objectFit="contain"
                  src={Images.Common.Discord}
                />
              </Box>
            </HStack>
          </HStack>
        </HStack>
      </Flex>
      <CollapseMenu isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default Navbar;

const Gradient = () => {
  return (
    <Box
      zIndex={10}
      bg="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
      opacity="0.4"
      pos="absolute"
      w="967px"
      h="472px"
      left="-637px"
      top="-314px"
    />
  );
};
