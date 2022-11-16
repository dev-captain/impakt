import React from 'react';
import { Box, Text, FormLabel, Textarea, TextareaProps } from '@chakra-ui/react';

interface GroupTextAreaInputPropsI {
  name: string;
  labelText?: string;
  errMessage?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const GroupTextAreaInput: React.FC<GroupTextAreaInputPropsI & TextareaProps> = ({
  labelText,
  name,
  errMessage,
  onChange,
  ...props
}) => {
  return (
    <>
      {labelText && (
        <FormLabel
          justifyContent="space-between"
          display="flex"
          w="full"
          color="#29323B"
          textStyle="semiBold6"
          fontWeight="400"
          fontSize="14px"
          lineHeight="22px"
        >
          {labelText}:
        </FormLabel>
      )}

      <Textarea
        name={name}
        onChange={onChange}
        height="88px"
        placeholder="What do you think?"
        border="1px solid #D3E2F0"
        borderRadius="8px"
        color={errMessage ? '#BD0F21' : '#29323B'}
        bg={errMessage ? '#fff' : '#F5F8FA'}
        fontWeight="400"
        font-size="14px"
        line-height="100%"
        _hover={{ bg: '#EEF4F6' }}
        _focus={{
          bg: '#fff',
          border: errMessage ? '2px solid #BD0F21' : '1px solid #F27961',
        }}
        {...props}
      />

      {errMessage && (
        <Box w="full" mt="5px" ml="10px">
          <Text
            bgClip="text"
            textStyle="regular12"
            bgGradient="linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))"
          >
            {errMessage}
          </Text>
        </Box>
      )}
    </>
  );
};
export default GroupTextAreaInput;
