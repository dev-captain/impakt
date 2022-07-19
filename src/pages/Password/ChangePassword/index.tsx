import { useColorModeValue, VStack, Text, useBreakpointValue, useToast } from '@chakra-ui/react';
import { C, Common } from 'components';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import axios, { AxiosError } from 'axios';
import { useSearchParams } from 'react-router-dom';
import TextField from '../TextField';
import Gradients from '../Gradient';

const apiBaseUrl = process.env.REACT_APP_API;

const ChangePassword = () => {
  const toast = useToast();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.backgrounds.defaultBg, Images.backgrounds.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const [isNewPasswordActive, setIsNewPasswordActive] = useState(true);
  const [isConfirmPasswordActive, setIsConfirmPasswordActive] = useState(true);
  const [isUpdateButtonLoading, setIsUpdateButtonLoading] = useState(false);
  const [isUpdateButtonDisabled, setIsUpdateButtonDisabled] = useState(true);
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });
  const [values, setValues] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  useEffect(() => {
    setIsUpdateButtonDisabled(
      values.newPassword.length === 0 || !isValidNewPassword() || !isValidConfirmPassword(),
    );
  }, [values]);
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = async () => {
    setIsUpdateButtonLoading(true);
    const url = `${apiBaseUrl}/iam/auth/passwordReset/${token}`;
    try {
      await axios.post(url, { password: values.newPassword });
      toast({
        title: 'Success',
        description: 'Your password was changed, you can now login in the Impakt app.',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (err) {
      const error = err as AxiosError;
      const { status } = error.response ?? {};
      if (status && status >= 400 && status < 500) {
        toast({
          title: 'Error',
          description: 'Your link is invalid or has expired. Please request a new link.',
          isClosable: true,
          duration: 8000,
          status: 'error',
        });
      } else {
        toast({
          title: 'Error',
          description: 'Something went wrong. Please contact support.',
          isClosable: true,
          duration: 8000,
          status: 'error',
        });
      }
    }
    setIsUpdateButtonLoading(false);
  };

  // new password validation
  const isValidNewPassword = () =>
    values.newPassword.length === 0 || values.newPassword.length >= 8;
  const getNewPasswordError = () =>
    isNewPasswordActive && !isValidNewPassword() ? 'Use at least 8 characters' : '';

  // confirm password validation
  const isValidConfirmPassword = () => values.newPassword === values.confirmPassword;
  const getConfirmPasswordError = () =>
    isConfirmPasswordActive && !isValidConfirmPassword() ? 'Passwords don’t match' : '';

  return (
    <C.HeroLayout showNavbar minH="70vh" spacing={10} pos="relative" bgImage={bgImage}>
      <VStack
        position="relative"
        color={textColor}
        maxW={{ base: 'full', md: '520px' }}
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
            {t(keys.password.new)}
          </Text>
          <Text
            textStyle={isSmallView ? 'black7' : 'black8'}
            fontSize={{ base: '36px', md: '56px' }}
            lineHeight={{ base: '40px', md: '60px' }}
            marginTop="0 !important"
          >
            {t(keys.password.password)}
          </Text>
        </VStack>
        <VStack
          bgColor={bgColor}
          height="50%"
          w="full"
          padding={{ base: '32px 15px', md: '50px 45px 40px' }}
          borderRadius={30}
          position="relative"
          overflow="hidden"
          marginTop="0 !important"
        >
          <VStack spacing="24px" w="full" borderRadius={16}>
            <Text
              textStyle={{ base: 'regular4', md: 'regular5' }}
              fontSize="24px !important"
              lineHeight="32px !important"
              textAlign={{ base: 'center', md: 'left' }}
              paddingRight={{ base: '0', md: '80px !important' }}
              paddingX={{ base: '20px', md: '0' }}
            >
              {t(keys.password.changeText)}
            </Text>
            <TextField
              isOutlined
              name="newPassword"
              onBlur={() => setIsNewPasswordActive(false)}
              onFocus={() => setIsNewPasswordActive(true)}
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.password.password)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="password"
              error={getNewPasswordError()}
            />

            <TextField
              isOutlined
              name="confirmPassword"
              onBlur={() => setIsConfirmPasswordActive(false)}
              onFocus={() => setIsConfirmPasswordActive(true)}
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.password.confirmPassword)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="password"
              error={getConfirmPasswordError()}
            />
          </VStack>
          <VStack
            w="full"
            align={{ base: 'center', md: 'flex-end' }}
            display="flex"
            fontSize={16}
            marginTop={{ base: '20px !important', md: '24px !important' }}
          >
            <Common.GradientButton
              py="32px"
              w={{ base: 'full', md: '240px' }}
              radius="20px"
              onClick={onSubmit}
              title="Update"
              disabled={isUpdateButtonDisabled}
              bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
              isLoading={isUpdateButtonLoading}
            />
          </VStack>
          <Gradients />
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default ChangePassword;
