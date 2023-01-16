import * as React from 'react';
import { EmailIcon } from '@chakra-ui/icons';
import { FormControl, Box, Text, VStack, HStack, useDisclosure } from '@chakra-ui/react';
import { useForm } from '@/hooks';
import { Common, I } from '@/components';
import { InputGroupPropsI } from '../../../../common/InputGroup';
import ConfirmNewEmail from './ConfirmNewEmailModal';
// import changePasswordFormYupScheme from '../../../../../lib/yup/schemas/changePasswordYupScheme';
// import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const ChangeEmailForm: React.FC = () => {
  // const group = usePersistedGroupStore().activeGroup;
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const [isShowPassword, setIsShowPassword] = React.useState(false);
  const { setValue, errors, getValues } = useForm({
    defaultValues: { password: '', passwordConfirmation: '', email: '' },
  });
  const emailInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: 'hello@mail.com',
        onChange,
        type: 'text',
        name: 'email',
        value: getValues('email'),
        autoFocus: false,
      },
      inputElementProps: {
        left: { item: <EmailIcon color="#29323B" /> },
      },
      errorMsg: errors?.email?.message,
      whiteMode: true,
    },
  ];
  const passwordInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: '********',
        onChange,
        type: isShowPassword ? 'text' : 'password',
        name: 'password',
        autoFocus: false,
      },
      inputElementProps: {
        left: { item: <I.LockIcon color="#29323B" width="20px" height="20px" /> },
        right: {
          item: (
            <Box
              h="100%"
              w="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
              onClick={() => setIsShowPassword(!isShowPassword)}
            >
              {isShowPassword ? (
                <I.EyeOff color="#29323B" width="24px" height="24px" />
              ) : (
                <I.Eye color="#29323B" />
              )}
            </Box>
          ),
        },
      },
      errorMsg: errors?.password?.message,
      whiteMode: true,
    },
  ];
  const ConfirmNewEmailDisclosure = useDisclosure();

  return (
    <FormControl
      display={{ md: 'flex', base: 'block' }}
      justifyContent="center"
      flexDir="row"
      m="0 !important"
      as="form"
      autoComplete="off"
      w="full"
    >
      <VStack justifyContent="center" alignItems="center" w="full" paddingRight="8px">
        <Text
          w="100%"
          fontSize={{ base: 'regular2', md: 'regular3' }}
          color="#4E6070"
          fontWeight="500"
        >
          New Email:
        </Text>
        <Common.InputItems inputItems={emailInputItems} />
        <Text
          w="100%"
          fontSize={{ base: 'regular2', md: 'regular3' }}
          color="#4E6070"
          fontWeight="500"
        >
          Password:
        </Text>
        <Common.InputItems inputItems={passwordInputItems} />
        <HStack m="0 !important" w="full" justifyContent="end">
          <Common.ImpaktButton
            height="48px"
            marginTop="21px"
            bgGradient="linear(to-t, rgba(240, 65, 83, 1), rgba(242, 121, 97, 1))"
            w={{ base: '100%', md: '155px' }}
            onClick={() => {
              ConfirmNewEmailDisclosure.onOpen();
            }}
          >
            <Text color="rgba(255, 255, 255, 1)" fontWeight="600">
              Submit
            </Text>
          </Common.ImpaktButton>
        </HStack>
      </VStack>
      <ConfirmNewEmail
        open={ConfirmNewEmailDisclosure.isOpen}
        close={ConfirmNewEmailDisclosure.onClose}
      />
    </FormControl>
  );
};
export default ChangeEmailForm;
