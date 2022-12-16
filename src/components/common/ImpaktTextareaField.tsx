import React from 'react';
import { Box, Text, FormLabel, Textarea, TextareaProps } from '@chakra-ui/react';

type ImpaktTextAreaFieldProps = {
  errMsg?: string;
  labelText?: string;
};

const ImpaktTextAreaField: React.FC<TextareaProps & ImpaktTextAreaFieldProps> = (props) => {
  return (
    <>
      {props.labelText && (
        <FormLabel
          justifyContent="space-between"
          display="flex"
          w="full"
          color="rgba(255, 255, 255, 0.85)"
          textStyle="semiBold6"
          lineHeight="120%"
        >
          {props.labelText}:
        </FormLabel>
      )}
      <Textarea
        textStyle="regular201"
        background="#121216"
        px={{ base: '12px', md: '1em' }}
        color="rgba(255, 255, 255, 0.5)"
        _hover={{ color: '#fff' }}
        _focus={{ border: '2px solid rgba(240, 65, 83, 1)' }}
        _focusWithin={{ color: '#fff' }}
        _focusVisible={{ color: '#fff' }}
        _autofill={{
          textFillColor: '#c6c6c6',
          boxShadow: '0 0 0px 1000px #121216 inset',
          transition: 'background-color 5000s ease-in-out 0s',
        }}
        resize="none"
        minH={{ base: '128px', md: '180px' }}
        border="none"
        placeholder="Your message text"
        isInvalid={!!props.errMsg}
        {...props}
      />

      {props.errMsg && (
        <Box w="full" mt="5px" ml="10px">
          <Text
            bgClip="text"
            textStyle="regular12"
            bgGradient="linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))"
          >
            {props.errMsg}
          </Text>
        </Box>
      )}
    </>
  );
};

export default ImpaktTextAreaField;
