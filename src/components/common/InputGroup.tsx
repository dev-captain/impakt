import {
  InputLeftElement,
  Input,
  InputGroup as ChakraInputGroup,
  InputRightElement,
  InputGroupProps,
  FormLabelProps,
  InputElementProps,
  InputProps,
  VStack,
  StackProps,
} from '@chakra-ui/react';

import * as React from 'react';
import InputErrorMessage from './InputErrorMessage';
import InputLabel, { InputLabelPropsI } from './InputLabel';

export type InputGroupPropsI = { inputContainerProps?: StackProps } & {
  inputGroupProps?: InputGroupProps;
} & {
  inputLabelProps?: InputLabelPropsI & FormLabelProps;
} & {
  inputElementProps?: {
    left?: InputElementProps & { item?: React.ReactNode };
    right?: InputElementProps & { item?: React.ReactNode };
  };
} & { inputProps?: InputProps } & {
  errorMsg?: string;
  children?: React.ReactNode;
  whiteMode?: boolean;
  inputIcon?: React.ReactNode;
};

const InputGroup = React.forwardRef<HTMLInputElement, InputGroupPropsI>(
  (
    {
      errorMsg,
      whiteMode,
      inputIcon,
      inputElementProps,
      inputGroupProps,
      inputLabelProps,
      inputProps,
      inputContainerProps,
      children,
    },
    ref,
  ) => {
    const inputRef = ref;
    const groupProps = inputGroupProps;
    const labelProps = inputLabelProps;
    const elementLeftProps = inputElementProps?.left;
    const elementRightProps = inputElementProps?.right;

    return (
      <>
        <VStack w="full" spacing="0.2em" {...inputContainerProps}>
          <InputLabel {...labelProps} margin="0" />

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
            {...groupProps}
          >
            {elementLeftProps && (
              <InputLeftElement
                pointerEvents="none"
                minW="60px"
                h="full"
                color="rgba(255, 255, 255, 0.5)"
                borderEnd="1px solid rgba(255, 255, 255, 0.1)"
                marginRight="16px"
                {...elementLeftProps}
              >
                {elementLeftProps.item}
              </InputLeftElement>
            )}

            {inputIcon}
            <Input
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
              pl={elementLeftProps ? '80px' : '2em'}
              isInvalid={!!errorMsg}
              errorBorderColor="transparent"
              // minWidth={{ base: '100%', md: '503px' }}
              w="full"
              ref={inputRef}
              textStyle="regular201"
              borderRadius="12px"
              _autofill={{
                textFillColor: '#c6c6c6',
                boxShadow: '0 0 0px 1000px #121216 inset',
                transition: 'background-color 5000s ease-in-out 0s',
              }}
              {...inputProps}
            />
            {elementRightProps && (
              <InputRightElement cursor="pointer" marginRight="3px" h="full">
                {elementRightProps.item}
              </InputRightElement>
            )}
          </ChakraInputGroup>

          <InputErrorMessage errorMsg={errorMsg} />
        </VStack>

        {children}
      </>
    );
  },
);
export default InputGroup;
