import { VStack, Collapse } from '@chakra-ui/react';
import NavbarLinkItem from './NavbarLinkItem';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const CollapseMenu = ({ isOpen, onClose }: Props) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <VStack spacing={0} paddingBottom={8} bg="rgba(31, 32, 36, 1)" h="100vh">
        <NavbarLinkItem title="Impakt Games" isActive hide href="/" onClose={onClose} />
        <NavbarLinkItem title="Tokenomics" hide href="#tokenomics" onClose={onClose} />
        <NavbarLinkItem title="Roadmap" hide href="#road-map" onClose={onClose} />
        <NavbarLinkItem title="How to sign up" hide href="#how-to-sign-up" onClose={onClose} />
        <NavbarLinkItem title="NFT Marketplace" hide href="#nft-marketplace" onClose={onClose} />
      </VStack>
    </Collapse>
  );
};

export default CollapseMenu;
