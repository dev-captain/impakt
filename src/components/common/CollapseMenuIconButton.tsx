import React from 'react';
import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

type CollapseMenuIconButtonProps = {
  isOpen: boolean;
};

const CollapseMenuIconButton: React.FC<CollapseMenuIconButtonProps & IconButtonProps> = ({
  isOpen,
  ...props
}) => {
  return (
    <IconButton
      zIndex={100}
      variant="ghost"
      backdropFilter="blur(40px)"
      background={isOpen ? '#fff' : 'rgba(255, 255, 255, 0.1)'}
      display="flex"
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
          <HamburgerIcon w={5} h={5} color="#000" boxSize="22px" />
        )
      }
      {...props}
    />
  );
};

export default CollapseMenuIconButton;
