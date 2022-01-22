import { Input } from '@chakra-ui/react';
import React from 'react';

type FieldProps = {
  name?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextField = ({ placeholder, onChange, ...rest }: FieldProps) => {
  return (
    <Input
      w="full"
      minH="48px"
      borderWidth={0}
      fontSize="12px"
      lineHeight="16px"
      borderRadius="12px"
      onChange={onChange}
      backdropFilter="blur(1px)"
      placeholder={placeholder || ''}
      background="rgba(33, 37, 42, 0.01)"
      _placeholder={{ color: 'white', opacity: '0.8' }}
      boxShadow="inset -2px -2px 6px rgba(255, 255, 255, 0.04), inset 4px 4px 8px rgba(0, 0, 0, 0.25)"
      {...rest}
    />
  );
};

export default TextField;
