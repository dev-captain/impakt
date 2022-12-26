import React from 'react';
import { FormLabel, Input, InputProps } from '@chakra-ui/react';
import { Common } from '@/components';

interface GroupInputFieldPropsI {
  labelText?: string;
  errMsg?: string;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const GroupInputField: React.FC<GroupInputFieldPropsI & InputProps> = ({
  labelText,
  placeholder,
  name,
  errMsg,
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
      <Input
        background={errMsg ? '#fff' : '#F5F8FA'}
        border="1px solid #D3E2F0"
        borderRadius="12px"
        fontWeight="400"
        fontSize="14px"
        lineHeight="26px"
        color={errMsg ? '#BD0F21' : '#29323B'}
        h="60px"
        name={name}
        placeholder={placeholder}
        _placeholder={{ opacity: 1, color: '#91A8BD' }}
        _hover={{ background: '#EEF4F6', border: '1px solid #B0C3D6', borderRadius: '12px' }}
        _focus={{
          background: errMsg ? '#fff' : '#EEF4F6',
          border: errMsg ? '2px solid #BD0F21' : '1px solid #F27961',
          borderRadius: '12px',
        }}
        // isInvalid={!!errMsg}
        // errorBorderColor="#BD0F21"
        onChange={onChange}
        {...props}
      />

      <Common.InputErrorMessage errorMsg={errMsg} />
    </>
  );
};
export default GroupInputField;
