import { useEffect } from 'react';
import { Box, Flex, Image, HStack, useDisclosure, useMediaQuery } from '@chakra-ui/react';
import { layoutPadding } from 'theme';
import NavbarLinkItem from './NavbarLinkItem';
import GradientButton from '../GradientButton';
import CollapseMenu from './CollapseMenu';
import CollapseMenuController from './CollapseMenuController';

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [isLessThan1040] = useMediaQuery('(max-width: 1040px)');

  useEffect(() => {
    if (!isLessThan1040) {
      onClose();
    }
  }, [isLessThan1040, onClose]);

  return (
    <Box pos="absolute" zIndex="100" w="full">
      {isOpen && <Gradient />}
      <Flex
        h="100px"
        minW="full"
        flexDir="row"
        overflow="hidden"
        position="relative"
        alignItems="center"
        color="rgba(255,255,255, 0.3)"
        bgColor={isOpen ? 'rgba(31, 32, 36, 1)' : 'blackAlpha.500'}
      >
        <HStack w="full" justify="space-between" px={layoutPadding}>
          <CollapseMenuController
            isOpen={isOpen}
            onToggle={onToggle}
            isLessThan1040={isLessThan1040}
          />
          <Box as="a" href="/" zIndex={100}>
            <Image src="assets/images/logo.png" />
          </Box>
          <HStack
            justify="flex-end"
            spacing={[0, 0, 3, 5, 8, 12]}
            display={['none', 'none', 'none', isLessThan1040 ? 'none' : 'flex', 'flex']}
          >
            <NavbarLinkItem title="Impakt Games" isActive href="/" />
            <NavbarLinkItem title="Tokenomics" href="#tokenomics" />
            <NavbarLinkItem title="Roadmap" href="#road-map" />
            <NavbarLinkItem title="How to sign up" href="#how-to-sign-up" />
            <NavbarLinkItem title="NFT Marketplace" href="#nft-marketplace" />
            <GradientButton
              title="Sign In"
              icon="ProfileUser"
              minW="160px"
              px="21px"
              radius="24px"
            />
          </HStack>
          <HStack
            align="center"
            spacing="44px"
            justify="flex-end"
            flex={{ base: 1, md: 'auto' }}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
          >
            {!isOpen && (
              <GradientButton
                px="21px"
                minW="120px"
                radius="24px"
                title="Sign In"
                icon="ProfileUser"
              />
            )}
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
