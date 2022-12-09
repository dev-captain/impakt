import * as React from 'react';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl } from '@chakra-ui/react';

import { Common } from 'components';
import { usePersistedGroupStore, usePersistedAuthStore } from '../../../../../../../lib/zustand';
import { InputGroupPropsI } from '../../../../../../common/InputGroup';
import groupInviteYupScheme from '../../../../../../../lib/yup/schemas/groupInviteYupScheme';
// import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const InvitationByEmail: React.FC = () => {
  // const group = usePersistedGroupStore().activeGroup;
  const { errors, getValues, setValue } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(groupInviteYupScheme),
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };
  const group = usePersistedGroupStore().activeGroup;
  /* eslint no-underscore-dangle: 0 */
  // const groupInviteUrl = `${window.location.origin}/invite?g=${group?.id}&p=${group?.private}`;
  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'hello@mail.com',
      label: 'Invite by email',
      onChange,
      type: 'text',
      name: 'email',
      value: getValues('email'),
      errorMsg: errors?.email?.message,
      autoFocus: false,
      whiteMode: true,
    },
  ];
  const { member } = usePersistedAuthStore();
  const subject = `Invitation to Impakt Group`;
  const inviteUrl = `${window.location.origin}/invite?g=${group?.id}&p=${group?.private}&r=${member?.id}`;
  const mailto = `mailto:${getValues(
    'email',
  )}?subject=${subject}&body= You have been invited to Impakt. Please click the link below to join ${inviteUrl}</b>}`;

  return (
    <FormControl
      display={{ md: 'flex', base: 'block' }}
      justifyContent="center"
      flexDir="row"
      alignItems="flex-end"
      m="0 !important"
      rowGap="24px"
      as="form"
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <Common.ImpaktButton
        as="a"
        isDisabled={!!errors.email?.message || getValues('email').length === 0}
        onClick={(e) => {
          if (!!errors.email?.message || getValues('email').length === 0) {
            e.preventDefault();
          }
        }}
        href={mailto}
        mt={{ md: 0, base: '10px' }}
        variant="black"
        w={{ md: '147px', base: '100%' }}
        ml={{ md: '16px', base: '0' }}
        h="60px"
        borderRadius="8px"
        fontSize={{ md: '16px' }}
        fontWeight="700"
      >
        Send
      </Common.ImpaktButton>
    </FormControl>
  );
};
export default InvitationByEmail;
