import { Box, FormControl, HStack, useToast, Text } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';
import { yupResolver } from '@hookform/resolvers/yup';

import { updateMember } from '../../../../lib/redux/slices/member/actions/updateMember';
import walletAddressFormYupScheme from '../../../../lib/yup/schemas/walletAddressScheme';
import { InputGroupPropsI } from '../../../common/InputGroup';

const WalletAddressForm: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [showPasswordSection, setShowPasswordSection] = React.useState(false);
  const [isShowPassword, setIsShowPassword] = React.useState(false);

  const member = useAppSelector((state) => state.memberAuth.member);
  const isMemberAuthLoading = useAppSelector((state) => state.memberAuth.isLoading);
  const toast = useToast();
  const dispatch = useAppDispatch();

  const { handleSubmit, errors, getValues, setValue, isDirty } = useForm({
    defaultValues: {
      walletAddress: member?.cryptoWallet ?? '',
      password: '',
      passwordConfirmation: '',
    },
    resolver: yupResolver(walletAddressFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleWalletAddressForm = async ({
    walletAddress,
    password,
  }: {
    walletAddress: string;
    password: string;
  }) => {
    if (!member) return;
    if (isDirty) {
      await dispatch(
        updateMember({ id: member.id, data: { cryptoWallet: walletAddress, password } }),
      ).unwrap();

      toast({
        title: 'Success',
        description: '“Your crypto wallet address has been updated successfully.” ',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });

      onClose();
    }
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: '********',
      leftIcon: <I.Password />,
      rightIcon: (
        <Box
          h="100%"
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          {isShowPassword ? <I.EyeOff width="24px" height="24px" /> : <I.Eye />}
        </Box>
      ),
      onChange,
      type: isShowPassword ? 'text' : 'password',
      label: 'Password',
      name: 'password',
      errorMsg: errors?.password?.message,
      autoFocus: true,
    },
    {
      placeholder: '********',
      leftIcon: <I.Password />,
      rightIcon: (
        <Box
          h="100%"
          w="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={() => setIsShowPassword(!isShowPassword)}
        >
          {isShowPassword ? <I.EyeOff width="24px" height="24px" /> : <I.Eye />}
        </Box>
      ),
      onChange,
      type: isShowPassword ? 'text' : 'password',
      label: 'Confirm password',
      name: 'passwordConfirmation',
      errorMsg: errors?.passwordConfirmation?.message,
    },
  ];

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
        flexWrap={{ base: 'wrap', md: showPasswordSection ? 'wrap' : 'nowrap' }}
      >
        {showPasswordSection && (
          <Box m="0 !important">
            <Text fontWeight="700" color="white">
              Re-enter password
            </Text>
          </Box>
        )}
        <Box
          m="0 !important"
          display="flex"
          flexDir="column"
          rowGap="25px"
          columnGap="25px"
          w="full"
        >
          {!showPasswordSection && (
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
          )}
          {showPasswordSection && <Common.InputItems inputItems={inputItems} />}
        </Box>
        <Box w={{ sm: '100%', md: '28%' }} display="flex" marginLeft="0 !important">
          {showPasswordSection ? (
            <Common.ImpaktButton
              marginTop="15px"
              isLoading={isMemberAuthLoading}
              disabled={!isDirty || !!errors.walletAddress || isMemberAuthLoading}
              minW={{ base: '100%', md: '137px' }}
              size="lg"
              type="submit"
            >
              Submit
            </Common.ImpaktButton>
          ) : (
            <Common.ImpaktButton
              isLoading={isMemberAuthLoading}
              disabled={!isDirty || !!errors.walletAddress || isMemberAuthLoading}
              minW={{ base: '100%', md: '137px' }}
              size="lg"
              type="button"
              onClick={() => {
                setShowPasswordSection(true);
              }}
            >
              Submit
            </Common.ImpaktButton>
          )}
        </Box>
      </HStack>
    </FormControl>
  );
};

export default WalletAddressForm;
