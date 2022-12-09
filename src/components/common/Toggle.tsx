import React from 'react';
import { Button, HStack, Text } from '@chakra-ui/react';

interface TogglePropsI {
  on: boolean;
  leftTitle: string;
  rightTitle: string;
  onToggle: () => void;
}

const Toggle: React.FC<TogglePropsI> = ({ on, leftTitle, rightTitle, onToggle }) => {
  return (
    <HStack id="toggle-stack" p="4px" bg="white" spacing="0" boxShadow="lightM" borderRadius="12px">
      <Button
        color={on ? 'white' : 'fg1'}
        bg={on ? 'fg-1' : 'white'}
        _hover={{
          backgroundColor: !on ? 'transparent' : 'fg-1',
          color: !on ? 'darkOrange' : 'none',
        }}
        _focus={{ boxShadow: 'none', color: 'white', backgroundColor: 'fg-1' }}
        w="120px"
        h="38px"
        borderRadius="8px"
        onClick={onToggle}
      >
        <Text textStyle="semiBold6">{leftTitle}</Text>
      </Button>
      <Button
        color={!on ? 'white' : 'fg1'}
        bg={!on ? 'fg-1' : 'white'}
        _hover={{
          backgroundColor: on ? 'transparent' : 'fg-1',
          color: on ? 'darkOrange' : 'none',
        }}
        _focus={{ boxShadow: 'none', color: 'white', backgroundColor: 'fg-1' }}
        w="120px"
        h="38px"
        borderRadius="8px"
        onClick={onToggle}
      >
        <Text textStyle="semiBold6">{rightTitle}</Text>
      </Button>
    </HStack>
  );
};
export default Toggle;
