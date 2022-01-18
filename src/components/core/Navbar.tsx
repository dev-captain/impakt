import { useEffect } from 'react';
import {
  Box,
  Collapse,
  Container,
  Flex,
  HStack,
  IconButton,
  Text,
  useBreakpointValue,
  useDisclosure,
  VStack,
  Link,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import GradientButton from './GradientButton';
import SmallLogo from './SmallLogo';

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
  const hide = useBreakpointValue({
    base: false,
    md: false,
    lg: true,
  });

  useEffect(() => {
    if (hide) {
      onClose();
    }
  }, [hide, onClose]);

  return (
    <Box pos="absolute" zIndex="100" w="full">
      <Flex
        px={{
          base: '16px',
          md: '48px',
          xl: '120px',
          '2xl': '240px',
        }}
        h="100px"
        overflow="hidden"
        position="relative"
        bg="blackAlpha.500"
        color="rgba(255,255,255, 0.3)"
        minW="full"
        flexDir="row"
        alignItems="center"
      >
        <HStack w="full" justify="space-between">
          <SmallLogo />
          <HStack
            display={['none', 'none', 'none', 'flex']}
            spacing={[0, 0, 3, 5, 8, 12]}
            justify="flex-end"
          >
            <NavbarLinkItem title="Impakt Games" isActive href="#" />
            <NavbarLinkItem title="Tokenomics" href="#" />
            <NavbarLinkItem title="Roadmap" href="#motion-capture" />
            <NavbarLinkItem title="NFT Marketplace" href="#nft-marketplace" />
            <GradientButton title="Sign In" icon="ProfileUser" />
          </HStack>
          <HStack
            flex={{ base: 1, md: 'auto' }}
            display={['flex', 'flex', 'flex', 'none']}
            justify="flex-end"
          >
            <IconButton
              onClick={onToggle}
              icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
              variant="ghost"
              aria-label="Toggle Navigation"
            />
          </HStack>
        </HStack>
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <VStack spacing={0} bg="blackAlpha.900" paddingBottom={8}>
          <NavbarLinkItem title="Impakt Games" isActive hide href="#" onClose={onClose} />
          <NavbarLinkItem title="Tokenomics" hide href="#" onClose={onClose} />
          <NavbarLinkItem title="Roadmap" hide href="#motion-capture" onClose={onClose} />
          <NavbarLinkItem title="NFT Marketplace" hide href="#nft-marketplace" onClose={onClose} />
          <GradientButton title="Sign in" icon="ProfileUser" />
        </VStack>
      </Collapse>
    </Box>
  );
};

export default Navbar;
