import {
  InputLeftElement,
  Input,
  InputGroup as ChakraInputGroup,
  FormLabel,
  Box,
  InputRightElement,
  Text,
  ResponsiveValue,
  Link,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import * as React from 'react';

export interface InputGroupPropsI {
  name: string;
  leftIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  inputIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  rightIcon?: React.ReactElement<any, string | React.JSXElementConstructor<any>> | undefined;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
  type?: React.HTMLInputTypeAttribute;
  label?: string;
  helpText?: {
    onClick?: () => void;
    text?: string;
    href?: string;
  };
  errorMsg?: string;
  children?: React.ReactNode;
  width?: ResponsiveValue<any>;
  value?: string | number | readonly string[] | undefined;
  maxLength?: number;
  autoFocus?: boolean | undefined;
  defaultValue?: string | number | readonly string[] | undefined;
  whiteMode?: boolean;
}

const InputGroup: React.FC<InputGroupPropsI> = ({
  name,
  leftIcon,
  rightIcon,
  inputIcon,
  placeholder,
  onChange,
  type,
  label,
  helpText,
  errorMsg,
  width = 'full',
  value,
  children,
  maxLength,
  autoFocus,
  defaultValue,
  whiteMode,
}) => {
  return (
    <>
      <Box
        width={width}
        display="flex"
        flexDir="column"
        maxH="90px"
        minH="60px"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        {label && (
          <FormLabel
            justifyContent="space-between"
            display="flex"
            w="full"
            color={whiteMode ? 'rgba(78, 96, 112, 1)' : 'rgba(255, 255, 255, 0.85)'}
            textStyle="semiBold6"
            lineHeight="120%"
          >
            <Box>
              {label}
              {label.length > 1 && ':'}
            </Box>
            {helpText && helpText.href && (
              <Link
                as={ReactRouterLink}
                to={helpText.href ?? '#'}
                onClick={helpText.onClick}
                tabIndex={-1}
                textDecor="none !important"
                cursor="pointer"
                textColor="impaktRed"
              >
                {helpText.text}
              </Link>
            )}
            {helpText && !helpText.href && (
              <Box tabIndex={-1} cursor="pointer" onClick={helpText?.onClick} color="impaktRed">
                {helpText?.text}
              </Box>
            )}
          </FormLabel>
        )}
        <ChakraInputGroup
          _hover={{ color: '#fff' }}
          _focusWithin={{ color: '#fff' }}
          _focusVisible={{ color: '#fff' }}
          transition="all .2s ease-in"
          color="rgba(255, 255, 255, 0.5)"
          h="100% !important"
          border="none"
          background={whiteMode ? '#EEF4F6' : '#121216'}
          borderRadius="12px"
        >
          {leftIcon && (
            <InputLeftElement
              pointerEvents="none"
              minW="60px"
              h="full"
              color="rgba(255, 255, 255, 0.5)"
              borderEnd="1px solid rgba(255, 255, 255, 0.1)"
              marginRight="16px"
            >
              {leftIcon}
            </InputLeftElement>
          )}

          {inputIcon}
          <Input
            autoFocus={autoFocus}
            name={name}
            id={name}
            color={whiteMode ? 'rgba(41, 50, 59, 1)' : '#fff'}
            h="100%"
            border="none"
            _focus={{ border: whiteMode ? '' : '2px solid rgba(240, 65, 83, 1)' }}
            minH="60px"
            defaultValue={defaultValue}
            maxLength={maxLength}
            type={type}
            value={value}
            pl={leftIcon ? '80px' : '2em'}
            // minWidth={{ base: '100%', md: '503px' }}
            w="full"
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
      {children}
    </>
  );
};
export default InputGroup;
