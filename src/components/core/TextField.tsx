import React from 'react';
import Icons from 'components/icons';
import { Box, Input, Text } from '@chakra-ui/react';

type FieldProps = {
  name?: string;
  error?: string;
  textStyle?: any;
  inputWidth?: string;
  boxWidth?: string;
  iconColor?: string;
  zIndex?: string;
  _placeholder?: any;
  borderColor?: string;
  placeholder?: string;
  errorTextStyle?: any;
  showPassword?: boolean;
  isOutlined?: boolean;
  fontSize?: string;
  placeholderColor?: string;
  showPasswordToggle?: () => void;
  type?: React.HTMLInputTypeAttribute | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined;
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined;
  value?: any;
};

const TextField: React.FC<FieldProps> = ({
  children,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  type,
  error,
  fontSize,
  borderColor,
  textStyle,
  iconColor,
  isOutlined,
  _placeholder,
  placeholderColor,
  boxWidth,
  inputWidth,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const onToggleShowPassword = () => setShowPassword(!showPassword);

  return (
    <Box
      w={boxWidth ?? 'full'}
      marginLeft={boxWidth ? '1em' : 'unset'}
      minH="fit-content"
      position="relative"
      overflow="hidden"
    >
      {children}
      <Input
        {...rest}
        w={inputWidth ?? 'full'}
        minH="48px"
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
        borderWidth={1}
        fontSize="12px"
        lineHeight="16px"
        borderRadius="12px"
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        backdropFilter="blur(1px)"
        placeholder={placeholder || ''}
        background="rgba(33, 37, 42, 0.01)"
        type={showPassword ? 'text' : type}
        pr={type === 'password' ? '48px' : 'auto'}
        isInvalid={!!error}
        errorBorderColor="#DC143C"
        boxShadow={
          isOutlined
            ? 'none'
            : 'inset -2px -2px 6px rgba(255, 255, 255, 0.04), inset 4px 4px 8px rgba(0, 0, 0, 0.25)'
        }
        border={isOutlined ? '1px' : 0}
        borderColor={borderColor || 'glass.500'}
        _placeholder={
          _placeholder || {
            color: placeholderColor || 'white',
            opacity: placeholderColor ? '1' : '0.6',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px',
          }
        }
        textStyle={textStyle || 'regular2'}
        style={{
          fontSize,
          caretColor: '#dc213c',
        }}
      />
      {type === 'password' && (
        <Box position="absolute" zIndex={10} top="16px" right="24px" onClick={onToggleShowPassword}>
          {showPassword ? <Icons.Eye color={iconColor} /> : <Icons.EyeOff color={iconColor} />}
        </Box>
      )}
      {!!error && (
        <Box
          w="full"
          zIndex="999"
          position="absolute"
          bottom="0px"
          right="10px"
          textAlign="end"
          mt="2px"
        >
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
