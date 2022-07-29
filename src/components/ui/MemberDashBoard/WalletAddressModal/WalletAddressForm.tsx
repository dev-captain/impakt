import { Box, FormControl, HStack, useToast } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { updateMember } from '../../../../lib/redux/slices/member/actions/updateMember';
import walletAddressFormYupScheme from '../../../../lib/yup/schemas/walletAddressScheme';

const WalletAddressForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const isMemberAuthLoading = useAppSelector((state) => state.memberAuth.isLoading);
  const toast = useToast();
  const dispatch = useAppDispatch();

  const { handleSubmit, errors, getValues, setValue, isDirty } = useForm({
    defaultValues: { walletAddress: member?.cryptoWallet ?? '' },
    resolver: yupResolver(walletAddressFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleWalletAddressForm = async ({ walletAddress }: { walletAddress: string }) => {
    if (!member) return;
    if (isDirty) {
      await dispatch(
        updateMember({ id: member.id, data: { cryptoWallet: walletAddress } }),
      ).unwrap();
    }

    onClose();
    toast({
      title: 'Success',
      description: '“Your crypto wallet address has been updated successfully.” ',
      isClosable: true,
      duration: 8000,
      status: 'success',
    });
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDir="column"
      m="0 !important"
      rowGap="32px"
      onSubmit={handleSubmit(handleWalletAddressForm)}
      as="form"
      autoComplete="off"
      w="full"
    >
      <HStack
        rowGap="1em"
        columnGap="0.5em"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={2}
        w="full"
        flexWrap={{ base: 'wrap', md: 'nowrap' }}
      >
        <Box w="full">
          <Common.InputGroup
            placeholder="Enter wallet address"
            name="walletAddress"
            type="text"
            onChange={onChange}
            defaultValue={getValues('walletAddress')}
            errorMsg={errors.walletAddress?.message}
            autoFocus
            leftIcon={<I.EthIcon />}
          />
        </Box>
        <Box w={{ sm: '100%', md: '28%' }} marginLeft="0 !important">
          <Common.ImpaktButton
            isLoading={isMemberAuthLoading}
            disabled={!isDirty || !!errors.walletAddress || isMemberAuthLoading}
            minW={{ base: '100%', md: '137px' }}
            size="lg"
            type="submit"
          >
            Submit
          </Common.ImpaktButton>
        </Box>
      </HStack>
    </FormControl>
  );
};

export default WalletAddressForm;
