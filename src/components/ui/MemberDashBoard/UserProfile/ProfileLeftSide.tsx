import * as React from 'react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import { Box, Text, VStack, Divider, HStack, useDisclosure } from '@chakra-ui/react';
import { useForm } from '@/hooks';
import { Common } from '@/components';
import { InputGroupPropsI } from '../../../common/InputGroup';
import MemberDashboardCard from '../MemberDashBoardCard';

import { usePersistedAuthStore } from '../../../../lib/zustand';
import ChangePasswordModal from './ChangePassword/ChangePasswordModal';
import ChangeMemberInfoForm from './ChangeMemberInfoForm';
import ChangeEmailModal from './ChangeEmail/ChangeEmailModal';

const ProfileLeftSide: React.FC = () => {
  const ChangePasswordDisclosure = useDisclosure();
  const ChangeEmailDisclosure = useDisclosure();
  const { member } = usePersistedAuthStore();
  const memberEmail = member?.email;
  const { setValue, errors, getValues } = useForm({
    defaultValues: { email: memberEmail },
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const emailInputItems: InputGroupPropsI[] = [
    {
      inputProps: {
        placeholder: 'hello@mail.com',
        onChange,
        type: 'text',
        name: 'email',
        value: getValues('email')!,
        autoFocus: false,
      },
      inputElementProps: {
        left: { item: <EmailIcon color="#29323B" /> },
      },
      errorMsg: errors?.email?.message,
      whiteMode: true,
    },
  ];

  return (
    <>
      <MemberDashboardCard p={{ base: '1.5em', md: '2em' }} maxW={{ base: '100%', md: '588px' }}>
        <VStack spacing="0" rowGap="2em" w="full">
          <ChangeMemberInfoForm />
          <Divider />
          <HStack
            align="center"
            justify="center"
            w="full"
            display="flex"
            flexWrap="wrap"
            justifyContent="space-between"
          >
            <Box w={{ base: '100%', md: '69%' }}>
              <Text>Email:</Text>
              <Common.InputItems inputItems={emailInputItems} />
            </Box>
            <Box w={{ base: '100%', md: '30%', lg: '30%' }} marginLeft="0px !important">
              <Text />
              <Common.ImpaktButton
                height="48px"
                marginTop="21px"
                bg="rgba(238, 244, 246, 1)"
                onClick={() => {
                  ChangeEmailDisclosure.onOpen();
                }}
              >
                <Text color="rgba(41, 50, 59, 1)" fontWeight="600">
                  Change Email
                </Text>
              </Common.ImpaktButton>
            </Box>
          </HStack>
          <Divider />
          <HStack
            align="center"
            justify="flex-end"
            w="full"
            display="flex"
            flexWrap="wrap"
            rowGap="16px"
          >
            <Box w={{ base: '100%', md: '36%' }}>
              <Common.ImpaktButton
                height="48px"
                bg="rgba(238, 244, 246, 1)"
                onClick={() => {
                  ChangePasswordDisclosure.onOpen();
                }}
              >
                <LockIcon marginRight="10px" color="#29323B" />
                <Text color="rgba(41, 50, 59, 1)" fontWeight="bold">
                  Change Password
                </Text>
              </Common.ImpaktButton>
            </Box>
            <Box
              w={{ base: '100%', md: '20%', lg: '20%', xl: '155px' }}
              marginLeft={{ base: '0px !important', md: '8px !important' }}
            >
              <Common.ImpaktButton height="48px" bg="rgba(240, 65, 83, 0.1)">
                <Text color="rgba(189, 15, 33, 1)" fontWeight="bold">
                  Sign Out
                </Text>
              </Common.ImpaktButton>
            </Box>
          </HStack>
        </VStack>
      </MemberDashboardCard>
      <ChangePasswordModal
        open={ChangePasswordDisclosure.isOpen}
        close={ChangePasswordDisclosure.onClose}
      />
      <ChangeEmailModal open={ChangeEmailDisclosure.isOpen} close={ChangeEmailDisclosure.onClose} />
    </>
  );
};

export default ProfileLeftSide;
