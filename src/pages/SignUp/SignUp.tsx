import {
  useColorModeValue,
  VStack,
  Text,
  useBreakpointValue,
  Flex,
  Box,
  Link,
} from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';

import Gradients from './Gradient';
import TextField from '../../components/core/TextField';
import GenerateDigitNumber from './component/GenerateDigitNumber';
import { useUserContext } from '../../context/UserContext';

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

const SignUp = () => {
  const { user, signUp } = useUserContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const accentRedtextColor = useColorModeValue('accentR1', 'accentR1');
  const [activeReferrerId, setActiveReferrerId] = useState<number>();
  const [isCreateAccountButtonLoading, setIsCreateAccountButtonLoading] = useState(false);
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  React.useEffect(() => {
    if (user) navigate('/download');
  }, [user]);

  useEffect(() => {
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

  useEffect(() => {
    register('password');
    register('passwordConfirmation');
    register('memberName');
    register('fourDigit');
    register('email');
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value, { shouldValidate: true });
  };

  const handleRegisterFormSubmit = async (data: any) => {
    setIsCreateAccountButtonLoading(true);
    const { memberName, fourDigit, email, password } = data;
    const payload = {
      username: `${memberName}#${fourDigit}`,
      password,
      email,
      referrerId: activeReferrerId,
    };

    try {
      await signUp(payload);
      navigate('/login');
    } catch (e) {
      console.error(e);
    }

    return setIsCreateAccountButtonLoading(false);
  };

  const generateRandomFourDigitNumberString = () => {
    const generatedNumber = Math.floor(Math.random() * (9999 - 1000 + 1) + 1000).toString();
    setValue('fourDigit', generatedNumber, { shouldValidate: true });
  };

  return (
    <HeroLayout showNavbar minH="70vh" spacing={10} pos="relative" bgImage={bgImage}>
      <VStack
        color={textColor}
        maxW={{ base: 'full', md: '551px' }}
        marginTop={{ base: '40px !important', md: '85px' }}
        w="full"
        px={{ base: '20px', md: '0' }}
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));"
      >
        <VStack
          marginTop={{ base: '0', md: '15px !important' }}
          mb="48px"
          textAlign="center"
          overflow="hidden"
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
            {t(keys.signUp.createAn)}
          </Text>
          <Text
            textStyle={isSmallView ? 'black7' : 'black8'}
            fontSize={{ base: '36px', sm: '40px', md: '56px' }}
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
          maxH={{ base: 'unset', md: '516px' }}
          maxW={{ base: 'unset', md: '520px' }}
          padding={{ base: '32px 16px', md: '48px' }}
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
            <Flex justifyContent="space-between" w="full">
              <TextField
                name="username"
                zIndex="999"
                isOutlined
                fontSize="14px"
                textStyle="regular2"
                onChange={onChange}
                placeholder={t(keys.signUp.memberName)}
                _placeholder={{ color: textColor, fontSize: '14px' }}
                type="text"
                error={errors.memberName ? errors.memberName.message : ''}
              />

              <TextField
                name="fourDigit"
                boxWidth="40%"
                zIndex="999"
                isOutlined
                fontSize="14px"
                textStyle="regular2"
                onChange={onChange}
                value={getValues('fourDigit') ? `${getValues('fourDigit')}` : ''}
                placeholder={t(keys.signUp.fourDigit)}
                _placeholder={{ color: textColor, fontSize: '14px' }}
                type="number"
                error={errors.fourDigit ? errors.fourDigit.message : ''}
              >
                <Box
                  as="span"
                  position="absolute"
                  top="3"
                  left="0.5"
                  textColor="whiteAlpha.400"
                  zIndex={2000}
                >
                  #
                </Box>
              </TextField>
            </Flex>

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
            <TextField
              name="password"
              isOutlined
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
                <Text textStyle="regular3" pos="relative">
                  By clicking on &apos;Create Account&apos; you agree to our
                  <Link
                    target="_blank"
                    _hover={{ textDecoration: 'none' }}
                    href="https://knowledgebase.impakt.com/terms-of-use?category=Terms-of-Use"
                  >
                    <Box mx="5px" cursor="pointer" textColor={accentRedtextColor} as="span">
                      Terms
                    </Box>
                  </Link>
                  and
                  <Link
                    _hover={{ textDecoration: 'none' }}
                    target="_blank"
                    href="https://knowledgebase.impakt.com/terms-of-use?category=Terms-of-Use"
                  >
                    <Box mx="5px" cursor="pointer" textColor={accentRedtextColor} as="span">
                      Privacy Policy
                    </Box>
                  </Link>
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
                type="submit"
                py="32px"
                w={{ base: 'full' }}
                radius="20px"
                title="Create account"
                bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                isLoading={isCreateAccountButtonLoading}
              />
            </VStack>
          </VStack>

          <Gradients />

          <GenerateDigitNumber onClick={generateRandomFourDigitNumberString} />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};
export default SignUp;
