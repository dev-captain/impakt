import React from 'react';
import { Textarea } from '@chakra-ui/react';

type FieldProps = {
  name?: string;
  textStyle?: any;
  value?: string;
  borderColor?: string;
  _placeholder?: any;
  isOutlined?: boolean;
  placeholder?: string;
  fontSize?: string;
  placeholderColor?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

const TextareaField = ({
  placeholder,
  onChange,
  textStyle,
  isOutlined,
  borderColor,
  placeholderColor,
  _placeholder,
  fontSize,
  value,
  ...rest
}: FieldProps) => {
  return (
    <Textarea
      w="full"
      h="100px"
      _focus={
        isOutlined
          ? {
              borderColor,
            }
          : {}
      }
      _hover={
        isOutlined
          ? {
              borderColor,
            }
          : {}
      }
      value={value}
      resize="none"
      onChange={onChange}
      borderRadius="12px"
      backdropFilter="blur(1px)"
      placeholder={placeholder || ''}
      background="rgba(33, 37, 42, 0.01)"
      border={isOutlined ? '1px' : 0}
      borderColor={borderColor || 'glass.500'}
      _placeholder={
        _placeholder || {
          color: placeholderColor || 'white',
          opacity: placeholderColor ? '1' : '0.6',
          fontWeight: '400',
          fontSize: '12px',
          lineHeight: '20px',
        }
      }
      boxShadow={
        isOutlined
          ? 'none'
          : 'inset -2px -2px 6px rgba(255, 255, 255, 0.04), inset 4px 4px 8px rgba(0, 0, 0, 0.25)'
      }
      textStyle={textStyle || 'regular2'}
      fontSize={fontSize || 'auto'}
      {...rest}
    />
  );
};

export default TextareaField;
