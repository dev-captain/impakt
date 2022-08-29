import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  isLessThan1280: boolean;
  isVersion2: boolean;
};

const CollapseMenuController = ({ isLessThan1280, onToggle, isOpen, isVersion2 }: Props) => {
  return (
    <IconButton
      zIndex={100}
      variant="ghost"
      onClick={onToggle}
      aria-label="Toggle Navigation"
      backdropFilter="blur(40px)"
      background={isOpen ? '#fff' : 'rgba(255, 255, 255, 0.1)'}
      display={['flex', 'flex', 'flex', isLessThan1280 ? 'flex' : 'none', 'none']}
      _hover={{
        backgroundColor: isOpen ? '#FFF' : 'rgba(255, 255, 255, 0.1)',
      }}
      _focus={{
        outline: 'none',
      }}
      icon={
        isOpen ? (
          <CloseIcon w={3} h={3} color="#1C1C28" boxSize="15px" />
        ) : (
          <HamburgerIcon w={5} h={5} color={isVersion2 ? '#000' : '#fff'} boxSize="22px" />
        )
      }
    />
  );
};

export default CollapseMenuController;
