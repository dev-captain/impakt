import { Box, Flex, FormControl, VStack, Text, useMediaQuery } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'hooks';

import { InputGroupPropsI } from '../../common/InputGroup';
import signUpYupScheme from '../../../lib/yup/schemas/signUpYupScheme';
import { useUserControllerCreate } from '../../../lib/impakt-dev-api-client/react-query/users/users';
import { renderToast } from '../../../utils';
import { PostUserReq } from '../../../lib/impakt-dev-api-client/react-query/types/postUserReq';
import { useAuthControllerLogin } from '../../../lib/impakt-dev-api-client/react-query/auth/auth';
import { usePersistedAuthStore } from '../../../lib/zustand';
import { useNextParamRouter } from '../../../hooks/useNextParamRouter';

const SignUpForm: React.FC = () => {
  const isThereNextParam =
    useLocation().search.includes('next') || useLocation().search.includes('invite');

  const navigateToNextParam = useNextParamRouter('/download');
  const navigate = useNavigate();

  const { setMember } = usePersistedAuthStore();

  const [activeReferrerId, setActiveReferrerId] = useState<number>();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const createUser = useUserControllerCreate();
  const signIn = useAuthControllerLogin();

  React.useEffect(() => {
    if (!id) return;
    const isStringThatCanConvertToPositiveInt = Number.isInteger(Number(id)) && Number(id) > 0;
    if (isStringThatCanConvertToPositiveInt) {
      const referrerNumberId = Number(id);
      setActiveReferrerId(referrerNumberId);
    }
  }, []);

  const { handleSubmit, errors, getValues, setValue } = useForm({
    resolver: yupResolver(signUpYupScheme),
    defaultValues: {
      memberName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      fourDigit: '',
    },
  });

  React.useEffect(() => {
    generateRandomFourDigitNumberString();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (e.target.name === 'fourDigit') {
      if (e.target.value.length === 0) {
        setValue(e.target.name as any, e.target.value, { shouldValidate: true });

        return;
      }

      const digitRegExp = /^[0-9]+$/;
      const isMatch = digitRegExp.test(e.target.value);

      if (!isMatch) return;

      setValue(e.target.name as any, e.target.value, { shouldValidate: true });

      return;
    }
    setValue(e.target.name as any, e.target.value, { shouldValidate: true });
  };

  const handleRegisterFormSubmit = async (data: any) => {
    const { memberName, fourDigit, email, password } = data;
    const payload = {
      username: `${memberName}#${fourDigit}`,
      password,
      email,
      referrerId: activeReferrerId,
      minigameBonus: searchParams.get('minigamebonus') === 'true' ? true : false ?? false,
    } as PostUserReq;
    createUser.mutate(
      { data: { ...payload } },
      {
        onSuccess: async () => {
          renderToast(
            'success',
            'Your account created successfully.You can now login in the Impakt app.',
            'dark',
          );
          if (isThereNextParam) {
            await signIn.mutateAsync(
              { data: { emailOrUsername: email, password } },
              {
                onSuccess: (member) => {
                  setMember(member);
                  renderToast('success', 'Welcome');
                },
                onError: (err) => {
                  renderToast(
                    'error',
                    err.response?.data.message ?? 'Something went wrong',
                    'dark',
                  );
                },
              },
            );
          }
          navigateToNextParam();
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong', 'dark');
        },
      },
    );
  };

  const generateRandomFourDigitNumberString = () => {
    const generatedNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString();
    setValue('fourDigit', generatedNumber, { shouldValidate: true });
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Member name...',
      autoFocus: true,
      leftIcon: <I.NickNameIcon />,
      onChange,
      type: 'text',
      name: 'memberName',
      label: 'Member name',
      width: { base: '100%', lg: '75%' },
      errorMsg: errors?.memberName?.message || errors?.fourDigit?.message,
      children: (
        <Common.InputGroup
          placeholder="0000"
          maxLength={4}
          value={getValues('fourDigit') ? `${getValues('fourDigit')}` : ''}
          type="text"
          label={isLessThan1280 ? 'ID' : ' '}
          inputIcon={
            <Text
              as="span"
              position="absolute"
              left={{ base: '4%', lg: '15%' }}
              top="28%"
              fontWeight="500"
              fontSize="18px"
              textColor="whiteAlpha.400"
              zIndex={2000}
            >
              #
            </Text>
          }
          helpText={{ text: 'Generate ID', onClick: generateRandomFourDigitNumberString }}
          name="fourDigit"
          // value={getValues('fourDigit') ? `${getValues('fourDigit')}` : ''}
          errorMsg={errors?.fourDigit?.message}
          width={{ base: '100%', lg: '23%' }}
          onChange={onChange}
        />
      ),
    },
    {
      placeholder: 'your@mail.com',
      leftIcon: <I.Email />,
      onChange,
      type: 'email',
      name: 'email',
      label: 'Email',
      errorMsg: errors?.email?.message,
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
      label: 'Password',
      name: 'password',
      errorMsg: errors?.password?.message,
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
      rowGap={{ base: '1em', lg: '2em' }}
      as="form"
      onSubmit={handleSubmit(handleRegisterFormSubmit)}
      autoComplete="off"
      w="full"
    >
      <Common.InputItems inputItems={inputItems} />
      <VStack m="0 !important" w="full">
        <Flex mb="5px" w={{ base: '100%', lg: '75%' }} textAlign="center" justifyContent="center">
          <Text textStyle="semiBold5" pos="relative">
            By clicking on &apos;Create Account&apos; you agree to our
            <Box
              as="a"
              href="/terms-of-use"
              onClick={(e: any) => {
                e.preventDefault();
                navigate('/terms-of-use');
              }}
              mx="3px"
              tabIndex={-1}
              cursor="pointer"
              textColor="impaktRed"
            >
              Terms
            </Box>
            and
            <Box
              as="a"
              href="https://knowledgebase.impakt.com/category/privacy-notice/privacy-notice-article"
              mx="3px"
              cursor="pointer"
              textColor="impaktRed"
              tabIndex={-1}
            >
              Privacy Policy
            </Box>
          </Text>
        </Flex>
        <Box w={{ base: 'full', lg: '240px' }}>
          <Common.ImpaktButton
            isLoading={createUser.isLoading}
            isDisabled={createUser.isLoading}
            type="submit"
            leftIcon={<I.AddMemberIcon />}
            size="lg"
          >
            Create account
          </Common.ImpaktButton>
        </Box>
      </VStack>
    </FormControl>
  );
};

export default SignUpForm;
