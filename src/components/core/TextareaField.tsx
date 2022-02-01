import React from 'react';
import { Textarea } from '@chakra-ui/react';

type FieldProps = {
  name?: string;
  textStyle?: any;
  _placeholder?: any;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextareaField = ({ placeholder, onChange, textStyle, ...rest }: FieldProps) => {
  return (
    <Textarea
      w="full"
      h="100px"
      resize="none"
      borderWidth={0}
      onChange={onChange}
      borderRadius="12px"
      backdropFilter="blur(1px)"
      placeholder={placeholder || ''}
      background="rgba(33, 37, 42, 0.01)"
      textStyle={textStyle || 'regular12'}
      // eslint-disable-next-line no-underscore-dangle
      _placeholder={rest._placeholder || { color: 'white', opacity: '0.8' }}
      boxShadow="inset -2px -2px 6px rgba(255, 255, 255, 0.04), inset 4px 4px 8px rgba(0, 0, 0, 0.25)"
      {...rest}
    />
  );
};

export default TextareaField;
