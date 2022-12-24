import {
  InputLeftElement,
  Input,
  InputGroup as ChakraInputGroup,
  Box,
  InputRightElement,
  ResponsiveValue,
  Link,
  FormLabel,
} from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

import * as React from 'react';
import InputErrorMessage from './InputErrorMessage';
import InputLabel from './InputLabel';

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
  isSmallLabel?: boolean;
}

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupPropsI>(
  (
    {
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
      isSmallLabel,
    },
    ref,
  ) => {
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
          <InputLabel
            helpText={helpText}
            isSmallLabel={isSmallLabel}
            whiteMode={whiteMode}
            label={label}
          />

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
              border={errorMsg ? '1px solid #BD0F21 !important' : 'none'}
              _focus={{
                // eslint-disable-next-line no-nested-ternary
                border: errorMsg
                  ? '1px solid #BD0F21'
                  : whiteMode
                  ? ''
                  : '2px solid rgba(240, 65, 83, 1)',
              }}
              minH="60px"
              defaultValue={defaultValue}
              maxLength={maxLength}
              type={type}
              value={value}
              pl={leftIcon ? '80px' : '2em'}
              isInvalid={!!errorMsg}
              errorBorderColor="transparent"
              // minWidth={{ base: '100%', md: '503px' }}
              w="full"
              ref={ref}
              placeholder={placeholder}
              textStyle="regular201"
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

          <InputErrorMessage errorMsg={errorMsg} />
        </Box>
        {children}
      </>
    );
  },
);
export default InputGroup;
