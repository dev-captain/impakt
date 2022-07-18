import {
  InputLeftElement,
  Input,
  InputGroup as ChakraInputGroup,
  FormLabel,
  Box,
  VStack,
  InputRightElement,
} from '@chakra-ui/react';
import * as React from 'react';

interface InputGroupPropsI {
  leftIcon?: Element;
  rightIcon?: Element;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  helpText?: {
    onClick: () => void;
    text: string;
  };
}

const InputGroup: React.FC<InputGroupPropsI> = ({
  leftIcon,
  rightIcon,
  placeholder,
  onChange,
  type,
  label,
  helpText,
}) => {
  const [isFocus, setIsFocus] = React.useState(false);
  const [isHover, setIsHover] = React.useState(false);

  return (
    <Box minH="60px" justifyContent="flex-start" alignItems="flex-start">
      {label && (
        <FormLabel
          justifyContent="space-between"
          display="flex"
          w="full"
          textStyle="semiBold6"
          lineHeight="120%"
        >
          <Box>{label}:</Box>
          {helpText && (
            <Box cursor="pointer" onClick={helpText.onClick} color="impaktRed">
              {helpText.text}
            </Box>
          )}
        </FormLabel>
      )}
      <ChakraInputGroup
        _hover={{ color: '#fff' }}
        transition="all .2s ease-in"
        color="rgba(255, 255, 255, 0.5)"
        h="100% !important"
        border="none"
        background="#121216"
        borderRadius="12px"
      >
        {leftIcon && (
          <InputLeftElement
            pointerEvents="none"
            minW="60px"
            h="full"
            _focus={{ color: 'red' }}
            // color="rgba(255, 255, 255, 0.5)"
            borderEnd="1px solid rgba(255, 255, 255, 0.1)"
            marginRight="16px"
          >
            {leftIcon}
          </InputLeftElement>
        )}
        <Input
          h="100%"
          border="none"
          _focus={{ border: '2px solid rgba(240, 65, 83, 1)' }}
          minH="60px"
          type={type}
          pl="80px"
          minWidth={{ base: '100%', md: '503px' }}
          placeholder={placeholder}
          textStyle="regular201"
          _placeholder={{ color: 'rgba(255, 255, 255, 0.4)' }}
          borderRadius="12px"
          onChange={onChange}
        />
        {rightIcon && (
          <InputRightElement marginRight="3px" pointerEvents="none" h="full">
            {rightIcon}
          </InputRightElement>
        )}
      </ChakraInputGroup>
    </Box>
  );
};
export default InputGroup;
