import { useEffect } from 'react';
import {
  Box,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useDisclosure,
  VStack,
  Link,
  useMediaQuery,
  Image,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { layoutPadding } from 'theme';
import GradientButton from './GradientButton';

const SelectedNavbarLinkBorder = () => {
  return (
    <Container height="20px" w="140px" pos="absolute" bottom={0} centerContent>
      <Container
        height="120px"
        filter="blur(64px)"
        opacity="0.31"
        pos="absolute"
        top={10}
        bgGradient="radial-gradient(50% 50% at 50% 50%, #FA1F31 58.11%, #FF7A00 100%)"
      />
      <Container
        bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
        height="4px"
        position="absolute"
        bottom="-2px"
        w="140px"
      />
    </Container>
  );
};

const NavbarLinkItem = ({
  title,
  href,
  isActive,
  hide = false,
  onClose,
}: {
  title: string;
  isActive?: boolean;
  hide?: boolean;
  href: string;
  onClose?: () => void;
}) => {
  return (
    <VStack justifyContent="center" h="100px" onClick={onClose}>
      <Link href={href}>
        <Text fontSize="md" color={isActive ? 'white' : 'rgba(255,255,255, 0.3)'} pos="relative">
          {title}
        </Text>
      </Link>

      {isActive && !hide && <SelectedNavbarLinkBorder />}
    </VStack>
  );
};

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
        overflow="hidden"
        position="relative"
        color="rgba(255,255,255, 0.3)"
        minW="full"
        flexDir="row"
        alignItems="center"
        bgColor={isOpen ? 'rgba(31, 32, 36, 1)' : 'blackAlpha.500'}
      >
        <HStack w="full" justify="space-between" px={layoutPadding}>
          <IconButton
            zIndex={100}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color="#FD4857" boxSize="24px" />
              ) : (
                <HamburgerIcon w={5} h={5} color="#FD4857" boxSize="32px" />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
          <Box as="a" href="/" zIndex={100}>
            <Image src="assets/images/logo.png" />
          </Box>
          <HStack
            display={['none', 'none', 'none', isLessThan1040 ? 'none' : 'flex', 'flex']}
            spacing={[0, 0, 3, 5, 8, 12]}
            justify="flex-end"
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
            flex={{ base: 1, md: 'auto' }}
            display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
            justify="flex-end"
            align="center"
            spacing="44px"
          >
            {!isOpen && (
              <GradientButton
                title="Sign In"
                icon="ProfileUser"
                minW="120px"
                px="21px"
                radius="24px"
              />
            )}
          </HStack>
        </HStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack spacing={0} paddingBottom={8} bg="rgba(31, 32, 36, 1)" h="100vh">
          <NavbarLinkItem title="Impakt Games" isActive hide href="/" onClose={onClose} />
          <NavbarLinkItem title="Tokenomics" hide href="#tokenomics" onClose={onClose} />
          <NavbarLinkItem title="Roadmap" hide href="#road-map" onClose={onClose} />
          <NavbarLinkItem title="How to sign up" hide href="#how-to-sign-up" onClose={onClose} />
          <NavbarLinkItem title="NFT Marketplace" hide href="#nft-marketplace" onClose={onClose} />
        </VStack>
      </Collapse>
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
