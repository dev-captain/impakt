import { Box, Flex, FormControl, useToast, VStack, Text, useMediaQuery } from '@chakra-ui/react';
import * as React from 'react';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useAppDispatch, useAppSelector, useForm } from 'hooks';

import { InputGroupPropsI } from '../../common/InputGroup';
import { signUpMember } from '../../../lib/redux/slices/member/actions/signUpMember';
import signUpYupScheme from '../../../lib/yup/schemas/signUpYupScheme';

const SignUpForm: React.FC = () => {
  const [activeReferrerId, setActiveReferrerId] = useState<number>();
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const [isShowPassword, setIsShowPassword] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isMemberCreateLoading = useAppSelector((state) => state.memberAuth.isLoading);
  const toast = useToast();
  const dispatch = useAppDispatch();
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
    };

    await dispatch(signUpMember(payload)).unwrap();

    toast({
      title: 'Success',
      description: 'Your account created successfully.You can now login in the Impakt app.',
      isClosable: true,
      duration: 8000,
      variant: 'glass',
      position: 'top-right',
      containerStyle: {
        background: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid #fff',
        boxShadow: '0px 5px 40px -10px rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(15px)',
        color: '#000',
        borderRadius: '16px',
        width: '360px',
      },
    });

    navigate('/signin');
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
            isLoading={isMemberCreateLoading}
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
