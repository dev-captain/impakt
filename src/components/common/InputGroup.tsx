import {
  InputLeftElement,
  Input,
  InputGroup as ChakraInputGroup,
  FormLabel,
  Box,
  InputRightElement,
  Text,
  As,
} from '@chakra-ui/react';
import * as React from 'react';

export interface InputGroupPropsI {
  name: string;
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  helpText?: {
    onClick?: () => void;
    text: string;
    as?: As<any>;
    href?: string;
  };
  errorMsg?: string;
}

const InputGroup: React.FC<InputGroupPropsI> = ({
  name,
  leftIcon,
  rightIcon,
  placeholder,
  onChange,
  type,
  label,
  helpText,
  errorMsg,
}) => {
  return (
    <Box width="full" minH="60px" justifyContent="flex-start" alignItems="flex-start">
      {label && (
        <FormLabel
          justifyContent="space-between"
          display="flex"
          w="full"
          color="rgba(255, 255, 255, 0.85)"
          textStyle="semiBold6"
          lineHeight="120%"
        >
          <Box>{label}:</Box>
          {helpText && (
            <Box
              cursor="pointer"
              href={helpText.href}
              as={helpText.as}
              onClick={helpText.onClick}
              color="impaktRed"
            >
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
          name={name}
          id={name}
          h="100%"
          border="none"
          _focus={{ border: '2px solid rgba(240, 65, 83, 1)' }}
          minH="60px"
          type={type}
          pl={leftIcon ? '80px' : '20px'}
          minWidth={{ base: '100%', md: '503px' }}
          placeholder={placeholder}
          textStyle="regular201"
          isInvalid={!!errorMsg}
          borderRadius="12px"
          onChange={onChange}
          _autofill={{
            textFillColor: '#c6c6c6',
            boxShadow: '0 0 0px 1000px #121216 inset',
            transition: 'background-color 5000s ease-in-out 0s',
          }}
        />
        {rightIcon && (
          <InputRightElement cursor="pointer" marginRight="3px" h="full">
            {rightIcon}
          </InputRightElement>
        )}
      </ChakraInputGroup>

      {errorMsg && (
        <Box w="full" mt="5px" ml="10px">
          <Text
            bgClip="text"
            textStyle="regular12"
            bgGradient="linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))"
          >
            {errorMsg}
          </Text>
        </Box>
      )}
    </Box>
  );
};
export default InputGroup;
