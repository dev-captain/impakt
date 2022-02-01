import { Box, Input, Text } from '@chakra-ui/react';
import React from 'react';

type FieldProps = {
  name?: string;
  error?: string;
  textStyle?: any;
  _placeholder?: any;
  placeholder?: string;
  errorTextStyle?: any;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextField = ({ placeholder, onChange, error, textStyle, ...rest }: FieldProps) => {
  return (
    <Box w="full">
      <Input
        w="full"
        minH="48px"
        _focus={{}}
        borderWidth={0}
        borderRadius="12px"
        onChange={onChange}
        isInvalid={!!error}
        errorBorderColor="#DC143C"
        backdropFilter="blur(1px)"
        placeholder={placeholder || ''}
        style={{ caretColor: '#dc213c' }}
        background="rgba(33, 37, 42, 0.01)"
        textStyle={textStyle || 'regular12'}
        // eslint-disable-next-line no-underscore-dangle
        _placeholder={rest._placeholder || { color: 'white', opacity: '0.6' }}
        boxShadow="inset -2px -2px 6px rgba(255, 255, 255, 0.04), inset 4px 4px 8px rgba(0, 0, 0, 0.25)"
        {...rest}
      />
      {!!error && (
        <Box w="full" textAlign="end" mt="2px">
          <Text
            bgClip="text"
            textStyle={rest.errorTextStyle || 'regular12'}
            bgGradient="linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))"
          >
            {error}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default TextField;
