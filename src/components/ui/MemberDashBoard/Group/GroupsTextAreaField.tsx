import React, { FormEvent } from 'react';
import { Box, Text, FormLabel, BoxProps } from '@chakra-ui/react';

interface GroupTextAreaInputPropsI {
  name: string;
  value?: string;
  labelText?: string;
  errMessage?: string;
  onInput: (e: FormEvent<HTMLDivElement>) => void;
}

const GroupTextAreaInput = React.forwardRef<HTMLDivElement, GroupTextAreaInputPropsI & BoxProps>(
  ({ name, onInput, errMessage, labelText, ...props }, ref) => (
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

      <Box
        as="div"
        contentEditable
        ref={ref}
        name={name}
        // onChange={onChange}
        onInput={onInput}
        // onInput={onChange}
        height="auto"
        placeholder="What do you think?"
        border="1px solid #D3E2F0"
        borderRadius="8px"
        color={errMessage ? '#BD0F21' : '#29323B'}
        bg={errMessage ? '#fff' : '#F5F8FA'}
        fontWeight="400"
        fontSize="14px"
        lineHeight="100%"
        outline="1px solid #D3E2F0"
        _hover={{ bg: '#EEF4F6' }}
        _focus={{
          bg: '#fff',
          border: errMessage ? '2px solid #BD0F21' : '1px solid #F27961',
        }}
        dangerouslySetInnerHTML={{ __html: props.value as any }}
        resize="vertical"
        overflow="auto"
        _empty={{
          _before: {
            content: 'attr(placeholder)',
            color: '#91A8BD',
            backgroundColor: 'transparent',
            fontSize: '14px',
          },
        }}
        padding="16px"
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
  ),
);

export default GroupTextAreaInput;
