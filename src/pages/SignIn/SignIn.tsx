import { useColorModeValue, Image, VStack, Text, Flex, Box } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { LoginReq } from '@impakt-dev/api-client';

import Gradients from './Gradient';
import TextField from '../../components/core/TextField';
import { useUserContext } from '../../context/UserContext';
import { parseUrlQueryParamsToKeyValuePairs } from '../../utils';

const signInFormYupScheme = yup.object().shape({
  email: yup
    .string()
    .email('Email field should be a valid email')
    .required('Email is required field')
    .default(''),
  password: yup.string().required('Password is required field'),
});

const SignIn = () => {
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { signIn, requestAccessToken } = useUserContext();
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const accentRedtextColor = useColorModeValue('accentR1', 'accentR1');
  const [isCreateAccountButtonLoading, setIsCreateAccountButtonLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    register,
  } = useForm({
    resolver: yupResolver(signInFormYupScheme),
  });

  useEffect(() => {
    if (user && queryString.DiscourseConnect && !user?.discourseRedirectUrl) {
      requestAccessToken({
        DiscoursePayload: queryString.sso,
        DiscourseSig: queryString.sig,
      });

      return;
    }

    if (user?.discourseRedirectUrl) {
      window.location.href = user.discourseRedirectUrl;

      return;
    }

    if (user) navigate('/dashboard');
  }, [user]);

  React.useEffect(() => {
    register('email');
    register('password');
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name, e.target.value, { shouldValidate: true });
  };

  const handleSignInFormSubmit = async (data: any) => {
    setIsCreateAccountButtonLoading(true);
    const { email, password } = data as { email: string; password: string };
    try {
      const signInPayload: LoginReq & { discoursePayload?: any; discourseSig?: any } = {
        emailOrUsername: email,
        password,
      };

      if (queryString.DiscourseConnect) {
        signInPayload.discoursePayload = queryString.sso;
        signInPayload.discourseSig = queryString.sig;
      }

      await signIn(signInPayload);
    } catch (err) {
      console.error(err);
    }
    setIsCreateAccountButtonLoading(false);
  };

  return (
    <HeroLayout showNavbar minH="70vh" spacing={10} pos="relative" bgImage={bgImage}>
      <VStack
        color={textColor}
        maxW={{ base: 'full', md: '551px' }}
        marginTop={{ base: '40px !important', md: '85px' }}
        w="full"
        px={{ base: '20px', md: '0' }}
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));"
        overflow="hidden !important"
      >
        <VStack
          marginTop={{ base: '0', md: '15px !important' }}
          mb="48px"
          textAlign="center"
          flexDirection="row"
          position="relative"
          justifyContent="center"
          w="full"
        >
          <Text
            textStyle="black3"
            fontSize={{ base: '31.8px', sm: '40px', md: '56px' }}
            lineHeight={{ base: '40px', md: '60px' }}
            marginRight={{ base: '5px', md: '10px' }}
          >
            {t(keys.signIn.signIn)}
          </Text>
        </VStack>
        <VStack
          bgColor={bgColor}
          w="full"
          h="516px"
          maxH={{ base: 'unset', md: '516px' }}
          maxW={{ base: 'unset', md: '520px' }}
          paddingX={{ base: '18px', md: '48px' }}
          borderRadius={30}
          position="relative"
          justifyContent="space-evenly"
          overflow="hidden"
          marginTop="0 !important"
        >
          <Box id="logo-container">
            <Image src={Images.Common.HighResLogo} />
          </Box>
          <VStack
            mt="56px"
            as="form"
            onSubmit={handleSubmit(handleSignInFormSubmit)}
            spacing="22px"
            w="full"
            borderRadius={16}
          >
            <TextField
              name="email"
              isOutlined
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.signUp.email)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="email"
              error={errors.email ? errors.email.message : ''}
            />
            <Box w="full" position="relative">
              <Box
                w="full"
                cursor="pointer"
                display="flex"
                justifyContent="flex-end"
                alignItems="flex-start"
                mb="5px"
                as="a"
                href="/recover-password"
              >
                <Text textStyle="regular2" textColor={accentRedtextColor} as="span">
                  Forgot password?
                </Text>
              </Box>
              <TextField
                isOutlined
                name="password"
                fontSize="14px"
                borderColor="#E4EAF1"
                textStyle="regular2"
                onChange={onChange}
                placeholder={t(keys.password.password)}
                _placeholder={{ color: textColor, fontSize: '14px' }}
                type="password"
                error={errors.password ? errors.password.message : ''}
              />
            </Box>

            <VStack
              w="full"
              align={{ base: 'center' }}
              display="flex"
              fontSize={16}
              marginTop={{ base: '24px !important' }}
            >
              <GradientButton
                type="submit"
                minH="64px"
                py="32px"
                w={{ base: 'full' }}
                radius="20px"
                title={t(keys.signIn.signInButton)}
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                isLoading={isCreateAccountButtonLoading}
              />
            </VStack>

            <Flex mt="5px !important" justifyContent="center">
              <Text textStyle="regular2" pos="relative">
                {t(keys.signIn.firstTime)}
                <Box
                  onClick={() => navigate('/register')}
                  mx="5px"
                  cursor="pointer"
                  textColor={accentRedtextColor}
                  as="span"
                >
                  {t(keys.signIn.createAn)}
                </Box>
              </Text>
            </Flex>
          </VStack>
          <Gradients />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};
export default SignIn;
