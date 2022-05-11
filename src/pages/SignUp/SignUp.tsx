import {
  useColorModeValue,
  VStack,
  Text,
  useBreakpointValue,
  useToast,
  Flex,
  Box,
} from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import axios, { AxiosError } from 'axios';

import { useSearchParams } from 'react-router-dom';
import Gradients from './Gradient';
import CheckBox from '../../components/core/CheckBox';
import TextField from '../../components/core/TextField';

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
    // on submit process here
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
          <VStack spacing="24px" w="full" borderRadius={16}>
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
              error={getNewPasswordError()}
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
              error={getNewPasswordError()}
            />
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
            marginTop={{ base: '20px !important' }}
            w="full"
            justifyContent="start"
            alignItems="baseline"
            flexDir="row"
            borderRadius={16}
          >
            <Flex justifyContent="center" alignItems="center">
              <CheckBox checked={false} onToggle={() => {}} />
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
          <VStack
            w="full"
            align={{ base: 'center' }}
            display="flex"
            fontSize={16}
            marginTop={{ base: '24px !important' }}
          >
            <GradientButton
              py="32px"
              w={{ base: 'full' }}
              radius="20px"
              onClick={onSubmit}
              title="Create account"
              disabled={isUpdateButtonDisabled}
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
          <Gradients />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};
export default SignUp;
