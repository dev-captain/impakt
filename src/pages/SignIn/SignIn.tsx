import { useColorModeValue, Image, VStack, Text, Flex, Box, Link } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import HeroLayout from 'components/layouts/HeroLayout';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

import Gradients from './Gradient';
import TextField from '../../components/core/TextField';
import { useUserContext } from '../../context/UserContext';

// const apiBaseUrl = process.env.REACT_APP_API;

const signInFormYupScheme = yup.object().shape({
  emailOrUsername: yup
    .string()
    .email('Email field should be a valid email')
    .required('Email is required field'),
  password: yup.string().required('Password is required field'),
});

const SignIn = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const { signIn } = useUserContext();
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.impaktGames.Header, Images.impaktGames.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const accentRedtextColor = useColorModeValue('accentR1', 'accentR1');
  const [isCreateAccountButtonLoading, setIsCreateAccountButtonLoading] = useState(false);

  React.useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  const {
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: yupResolver(signInFormYupScheme),
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name, e.target.value, { shouldValidate: true });
  };

  const handleRegisterFormSubmit = async (data: any) => {
    setIsCreateAccountButtonLoading(true);
    const { emailOrUsername, password } = data as { emailOrUsername: string; password: string };
    try {
      signIn({ emailOrUsername, password });
    } catch (err) {
      console.error(err);
    }

    return setIsCreateAccountButtonLoading(false);
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
            onSubmit={handleSubmit(handleRegisterFormSubmit)}
            spacing="24px"
            w="full"
            borderRadius={16}
          >
            <TextField
              isOutlined
              name="emailOrUsername"
              borderColor="#E4EAF1"
              fontSize="14px"
              textStyle="regular2"
              onChange={onChange}
              placeholder={t(keys.signIn.emailOrUsername)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
              type="email"
              error={errors.email ? errors.email.message : ''}
            />
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
                <Link
                  target="_blank"
                  _hover={{ textDecoration: 'none' }}
                  href="https://impakt.com/register/1"
                >
                  <Box mx="5px" cursor="pointer" textColor={accentRedtextColor} as="span">
                    {t(keys.signIn.createAn)}
                  </Box>
                </Link>
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
