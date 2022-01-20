import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type Props = {
  isOpen: boolean;
  onToggle: () => void;
  isLessThan1040: boolean;
};

const CollapseMenuController = ({ isLessThan1040, onToggle, isOpen }: Props) => {
  return (
    <IconButton
      zIndex={100}
      variant="ghost"
      onClick={onToggle}
      aria-label="Toggle Navigation"
      display={['flex', 'flex', 'flex', isLessThan1040 ? 'flex' : 'none', 'none']}
      icon={
        isOpen ? (
          <CloseIcon w={3} h={3} color="#FD4857" boxSize="24px" />
        ) : (
          <HamburgerIcon w={5} h={5} color="#FD4857" boxSize="32px" />
        )
      }
    />
  );
};

export default CollapseMenuController;
