import {
  useColorModeValue,
  VStack,
  Text,
  useBreakpointValue,
  useToast,
  Flex,
  Box,
  FormControl,
} from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import axios, { AxiosError } from 'axios';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { useSearchParams } from 'react-router-dom';
import Gradients from './Gradient';
import CheckBox from '../../components/core/CheckBox';
import TextField from '../../components/core/TextField';

const signUpFormYupScheme = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email(),
  password: yup
    .string()
    .required('No password provided.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match.'),
});

const SignUp = () => {
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const accentRedtextColor = useColorModeValue('accentR1', 'accentR1');
  const [isNewPasswordActive, setIsNewPasswordActive] = useState(true);
  const [isConfirmPasswordActive, setIsConfirmPasswordActive] = useState(true);
  const [isAggreeToTermsAndPrivacy, setIsAgreeToTermsAndPrivacy] = useState(false);
  const [errorMessageIsAgreeToTermsAndPrivacy, setErrorMessageIsAggreeToTermsAndPrivacy] =
    useState('');
  const [isUpdateButtonLoading, setIsUpdateButtonLoading] = useState(false);
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });
  const {
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm({
    resolver: yupResolver(signUpFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name, e.target.value, { shouldValidate: true });
  };

  const handleRegisterFormSubmit = (data: any) => {
    if (!isAggreeToTermsAndPrivacy)
      return setErrorMessageIsAggreeToTermsAndPrivacy('You must accept the terms and conditions');

    return console.log('clicked', data);
  };

  return (
    <HeroLayout showNavbar minH="70vh" spacing={10} pos="relative" bgImage={bgImage}>
      <VStack
        position="relative"
        color={textColor}
        maxW={{ base: 'full', md: '551px' }}
        marginTop={{ base: '40px !important', md: '85px' }}
        w="full"
        px={{ base: '20px', md: '0' }}
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));"
      >
        <VStack
          spacing="24px"
          marginTop={{ base: '0', md: '15px !important' }}
          mb="48px"
          textAlign="center"
          overflow="hidden"
          flexDirection="row"
          justifyContent="center"
          w="full"
        >
          <Text
            fontSize={{ base: '40px', md: '56px' }}
            lineHeight={{ base: '36px', md: '60px' }}
            marginRight={{ base: '5px', md: '10px' }}
          >
            {t(keys.signUp.createAn)}
          </Text>
          <Text
            textStyle={isSmallView ? 'black7' : 'black8'}
            fontSize={{ base: '36px', md: '56px' }}
            lineHeight={{ base: '40px', md: '60px' }}
            marginTop="0 !important"
          >
            {t(keys.signUp.account)}
          </Text>
        </VStack>
        <VStack
          bgColor={bgColor}
          height="50%"
          w="full"
          padding={{ base: '48px' }}
          borderRadius={30}
          position="relative"
          overflow="hidden"
          marginTop="0 !important"
        >
          <VStack
            as="form"
            onSubmit={handleSubmit(handleRegisterFormSubmit)}
            spacing="24px"
            w="full"
            borderRadius={16}
          >
            <TextField
              isOutlined
              name="username"
              onBlur={() => setIsNewPasswordActive(false)}
              onFocus={() => setIsNewPasswordActive(true)}
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.signUp.username)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="username"
              error={errors.username ? errors.username.message : ''}
            />

            <TextField
              isOutlined
              name="email"
              onBlur={() => setIsNewPasswordActive(false)}
              onFocus={() => setIsNewPasswordActive(true)}
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.signUp.email)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="email"
              error={errors.email ? errors.email.message : ''}
            />
            <TextField
              isOutlined
              name="password"
              onBlur={() => setIsNewPasswordActive(false)}
              onFocus={() => setIsNewPasswordActive(true)}
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.password.password)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="password"
              error={errors.password ? errors.password.message : ''}
            />

            <TextField
              isOutlined
              name="passwordConfirmation"
              onBlur={() => setIsConfirmPasswordActive(false)}
              onFocus={() => setIsConfirmPasswordActive(true)}
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.password.confirmPassword)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="password"
              error={errors.passwordConfirmation ? errors.passwordConfirmation.message : ''}
            />
            <VStack
              marginTop={{ base: '20px !important' }}
              w="full"
              justifyContent="start"
              alignItems="baseline"
              flexDir="row"
              borderRadius={16}
            >
              <Flex justifyContent="center" alignItems="center">
                <CheckBox
                  name="aggreeToTermsAndPrivacy"
                  checked={isAggreeToTermsAndPrivacy}
                  onToggle={() => {
                    setIsAgreeToTermsAndPrivacy(!isAggreeToTermsAndPrivacy);
                    setErrorMessageIsAggreeToTermsAndPrivacy('');
                  }}
                />
                <Text ml="1em" textStyle="regular3" pos="relative">
                  I agree to
                  <Box mx="5px" cursor="pointer" textColor={accentRedtextColor} as="span">
                    Terms
                  </Box>
                  and
                  <Box mx="5px" cursor="pointer" textColor={accentRedtextColor} as="span">
                    Privacy Policy
                  </Box>
                </Text>
              </Flex>
            </VStack>

            {!!errorMessageIsAgreeToTermsAndPrivacy && (
              <Box textAlign="end" mt="2px">
                <Text
                  bgClip="text"
                  textStyle="regular12"
                  bgGradient="linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))"
                >
                  {errorMessageIsAgreeToTermsAndPrivacy}
                </Text>
              </Box>
            )}

            <VStack
              w="full"
              align={{ base: 'center' }}
              display="flex"
              fontSize={16}
              marginTop={{ base: '24px !important' }}
            >
              <GradientButton
                type="submit"
                py="32px"
                w={{ base: 'full' }}
                radius="20px"
                title="Create account"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                isLoading={isUpdateButtonLoading}
              />
              <Text ml="1em" textStyle="regular3" pos="relative">
                Already have an account?
                <Box mx="3px" cursor="pointer" textColor={accentRedtextColor} as="span">
                  Login
                </Box>
              </Text>
            </VStack>
          </VStack>

          <Gradients />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};
export default SignUp;
