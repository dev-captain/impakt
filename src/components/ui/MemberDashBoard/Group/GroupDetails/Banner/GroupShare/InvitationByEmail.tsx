import * as React from 'react';
import { useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormControl } from '@chakra-ui/react';

import { Common } from 'components';
import { InputGroupPropsI } from '../../../../../../common/InputGroup';
import groupInviteYupScheme from '../../../../../../../lib/yup/schemas/groupInviteYupScheme';
// import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const InvitationByEmail: React.FC = () => {
  // const group = usePersistedGroupStore().activeGroup;
  const { handleSubmit, errors, getValues, setValue } = useForm({
    defaultValues: { email: '' },
    resolver: yupResolver(groupInviteYupScheme),
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  /* eslint no-underscore-dangle: 0 */
  // const groupInviteUrl = `${window.location.origin}/invite-link?group_id=${group?.id}&private=${group?.private}`;
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
  const handleSendInvitationEmail = async (data: object) => {
    const { email } = data as { email: string };
    /**
     * TODO: We will use our own api point to send email with template
     */
    const windowFeatures = 'left=200,top=200,width=450,height=450';
    const mailto = `mailto:${email}`;
    window.open(mailto, 'newWindows', windowFeatures);
  };

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
        mt={{ md: 0, base: '10px' }}
        variant="black"
        colorScheme="#fff"
        w={{ md: '147px', base: '100%' }}
        ml={{ md: '16px', base: '0' }}
        h="60px"
        backgroundColor="#29323B"
        borderRadius="8px"
        fontSize={{ md: '16px' }}
        fontWeight="700"
        onClick={handleSubmit(handleSendInvitationEmail)}
      >
        Send
      </Common.ImpaktButton>
    </FormControl>
  );
};
export default InvitationByEmail;
