import { Box, HStack } from '@chakra-ui/react';
import React from 'react';
import { Common } from '../..';

type Props = {
  href: string;
  title: string;
  hide?: boolean;
  isActive?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
};

const SidebarMenuItem = ({ title, href, isActive, hide = false, onClick, children }: Props) => {
  return (
    <HStack
      display="flex"
      cursor="pointer"
      padding="16px 18px"
      bg={isActive ? 'softOrange' : 'transparent'}
      h="60px"
      w={hide ? 'auto' : 'full'}
      alignItems="center"
      columnGap="1.5em"
      justifyContent="flex-start"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) {
          onClick();
        }
      }}
      transition="width 5s linear"
      as="a"
      href={href}
      title={title}
    >
      {children}
      {!hide && (
        <Common.LinkItem
          margin="0 !important"
          titleTextStyle="semiBold6"
          titleActiveColor="darkOrange"
          titlePassiveColor={isActive ? 'darkOrange' : 'fg-1'}
          title={title}
          isDisabled
        />
      )}
    </HStack>
  );
};

export default SidebarMenuItem;
