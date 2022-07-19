import {
  Box,
  Flex,
  FormControl,
  useBreakpointValue,
  useColorModeValue,
  useToast,
  VStack,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import * as React from 'react';
import * as yup from 'yup';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginReq } from '@impakt-dev/api-client';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import { signInMember } from '../../../lib/redux/slices/member/actions/signInMember';
import useAppDispatch from '../../../hooks/useAppDispatch';
import useAppSelector from '../../../hooks/useAppSelector';
import { parseUrlQueryParamsToKeyValuePairs } from '../../../utils';
import { Eye } from '../../icons';
import { InputGroupPropsI } from '../../common/InputGroup';
import { signUpMember } from '../../../lib/redux/slices/member/actions/signUpMember';

const signUpFormYupScheme = yup.object().shape({
  memberName: yup.string().required('Membername is required field'),
  fourDigit: yup
    .string()
    .test('len', ' ', (val) => {
      return val?.length === 4;
    })
    .matches(/^\d+$/, ' ')
    .required(' '),
  email: yup
    .string()
    .email('Email field should be a valid email')
    .required('Email is required field')
    .default(''),
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Confirm Password is required field'),
});

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

  const {
    handleSubmit,
    formState: { errors },
    setValue,
    register,
    getValues,
  } = useForm({
    resolver: yupResolver(signUpFormYupScheme),
    defaultValues: {
      memberName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      fourDigit: '',
    },
  });

  React.useEffect(() => {
    register('password');
    register('passwordConfirmation');
    register('memberName');
    register('fourDigit');
    register('email');
    generateRandomFourDigitNumberString();
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
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
      status: 'success',
    });

    navigate('/download');
  };

  const generateRandomFourDigitNumberString = () => {
    const generatedNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString();
    setValue('fourDigit', generatedNumber, { shouldValidate: true });
  };

  console.log(errors.fourDigit?.message);
  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Nickname',
      leftIcon: <I.NickNameIcon />,
      onChange,
      type: 'text',
      name: 'memberName',
      label: 'Nickname',
      width: { base: '100%', lg: '75%' },
      errorMsg: errors?.memberName?.message || errors?.fourDigit?.message,
      children: (
        <Common.InputGroup
          placeholder="0000"
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
          helpText={{ text: 'Generate ID' }}
          name="fourDigit"
          type="number"
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
          <Eye />
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
          <Eye />
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
        <Flex mt="1em !important" w="75%" textAlign="center" justifyContent="center">
          <Text textStyle="semiBold5" pos="relative">
            By clicking on &apos;Create Account&apos; you agree to our
            <Box as="a" href="register" mx="5px" cursor="pointer" textColor="impaktRed">
              Terms
            </Box>
            and
            <Box as="a" href="register" mx="5px" cursor="pointer" textColor="impaktRed">
              Privacy Policy
            </Box>
          </Text>
        </Flex>
        <Box w={{ base: 'full', lg: '240px' }}>
          <Common.ImpaktButton
            // isLoading={isMemberAuthLoading}
            type="submit"
            leftIcon={<I.EnterIcon width="24" height="24" />}
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
