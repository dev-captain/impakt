import {
  useColorModeValue,
  Image,
  VStack,
  Text,
  Flex,
  Box,
  Spinner,
  useToast,
} from '@chakra-ui/react';
import { C, Common } from 'components';
import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { LoginReq } from '@impakt-dev/api-client';

import Gradients from './Gradient';
import { parseUrlQueryParamsToKeyValuePairs } from '../../utils';
import useAppDispatch from '../../hooks/useAppDispatch';
import { signInMember } from '../../lib/redux/slices/member/actions/signInMember';
import useAppSelector from '../../hooks/useAppSelector';
import { requestAccessToken } from '../../lib/redux/slices/member/actions/requestAccessToken';
import SignInForm from '../../components/ui/Signin/SignInForm';
import SignInBox from '../../components/ui/Signin/SignInBox';

const signInFormYupScheme = yup.object().shape({
  email: yup
    .string()
    .email('Email field should be a valid email')
    .required('Email is required field')
    .default(''),
  password: yup.string().required('Password is required field'),
});

const SignIn = () => {
  const toast = useToast();
  const queryString = parseUrlQueryParamsToKeyValuePairs(window.location.search);
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);
  const requestAccessTokenAttemp = useAppSelector(
    (state) => state.memberAuth.requestAccessTokenAttemptCount,
  );
  const isMemberAuthLoading = useAppSelector((state) => state.memberAuth.isLoading);
  const navigate = useNavigate();
  const { t } = useTranslation().i18n;
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const accentRedtextColor = useColorModeValue('accentR1', 'accentR1');
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    register,
  } = useForm({
    resolver: yupResolver(signInFormYupScheme),
  });

  const requestAccessTokenAsync = React.useCallback(async () => {
    toast({
      title: 'Logging in to forums',
      duration: 2000,
      status: 'info',
    });

    try {
      const request = await dispatch(
        requestAccessToken({
          discoursePayload: queryString.sso,
          discourseSig: queryString.sig,
        }),
      ).unwrap();

      if (request.discourseRedirectUrl === undefined) {
        toast({
          title: 'Error',
          description: ' "Something went wrong...',
          isClosable: false,
          duration: 2000,
          status: 'error',
        });

        return undefined;
      }

      toast({
        title: 'Success',
        description: ' "Redirecting to forums..',
        isClosable: false,
        duration: 2000,
        status: 'success',
      });

      return request.discourseRedirectUrl;
    } catch (error: any) {
      return null;
    }
  }, []);

  useEffect(() => {
    if (member) {
      if (queryString.DiscourseConnect) {
        if (requestAccessTokenAttemp === 0) {
          const request = requestAccessTokenAsync();
          request.then((res) => {
            if (res) {
              window.location.href = res;
            }
          });

          return;
        }
      }

      if (requestAccessTokenAttemp === 0) {
        navigate('/dashboard');
      }
    }
  }, [member, requestAccessTokenAttemp]);

  React.useEffect(() => {
    register('email');
    register('password');
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name, e.target.value, { shouldValidate: true });
  };

  const handleSignInFormSubmit = async (data: any) => {
    const { email, password } = data as { email: string; password: string };
    const signInPayload: LoginReq & { discoursePayload?: any; discourseSig?: any } = {
      emailOrUsername: email,
      password,
    };

    if (queryString.DiscourseConnect) {
      signInPayload.discoursePayload = queryString.sso;
      signInPayload.discourseSig = queryString.sig;
    }

    await dispatch(signInMember(signInPayload)).unwrap();

    toast({
      title: 'Success',
      description: 'Welcome !',
      isClosable: true,
      duration: 8000,
      status: 'success',
    });
  };

  return (
    <C.HeroLayout
      removeBottomPadding
      showFooterV2
      showNavbar
      minH="100vh"
      pos="relative"
      justify="flex-start"
      align="flex-start"
      bgImage={bgImage}
    >
      <VStack
        color={textColor}
        w="full"
        px={{ base: '20px', md: '0' }}
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));"
        overflow="hidden !important"
      >
        {member && queryString.DiscourseConnect && <Spinner size="xl" />}
        {!member && (
          <VStack>
            <VStack w="full">
              <Box
                css={{
                  '-webkit-background-clip': 'text',
                  '-webkit-text-fill-color': 'transparent',
                }}
                background="linear-gradient(79.07deg, rgba(223, 0, 220, 0.3) 0%, rgba(223, 0, 220, 0) 58.09%), linear-gradient(280.93deg, rgba(255, 11, 34, 0.3) 0%, rgba(255, 11, 34, 0) 58.09%), #FFFFFF;"
                minH="80px"
                id="hero-headline-box"
                bgClip="text"
                color="white"
              >
                <Text
                  textAlign={{ base: 'center', lg: 'unset' }}
                  letterSpacing="-2.5px"
                  textStyle="TitleBold64"
                >
                  {t(keys.signIn.signIn)}
                </Text>
              </Box>
            </VStack>
            <SignInBox />
          </VStack>
          // <>
          //   <VStack
          //     marginTop={{ base: '0', md: '15px !important' }}
          //     mb="48px"
          //     textAlign="center"
          //     flexDirection="row"
          //     position="relative"
          //     justifyContent="center"
          //     w="full"
          //   >
          //     <Text
          //       textStyle="black3"
          //       fontSize={{ base: '31.8px', sm: '40px', md: '56px' }}
          //       lineHeight={{ base: '40px', md: '60px' }}
          //       marginRight={{ base: '5px', md: '10px' }}
          //     >
          //       {t(keys.signIn.signIn)}
          //     </Text>
          //   </VStack>
          //   <VStack
          //     bgColor={bgColor}
          //     w="full"
          //     h="516px"
          //     maxH={{ base: 'unset', md: '516px' }}
          //     maxW={{ base: 'unset', md: '520px' }}
          //     paddingX={{ base: '18px', md: '48px' }}
          //     borderRadius={30}
          //     position="relative"
          //     justifyContent="space-evenly"
          //     overflow="hidden"
          //     marginTop="0 !important"
          //   >
          //     <Box id="logo-container">
          //       <Image src={Images.Common.HighResLogo} />
          //     </Box>
          //     <VStack
          //       mt="56px"
          //       as="form"
          //       onSubmit={handleSubmit(handleSignInFormSubmit)}
          //       spacing="22px"
          //       w="full"
          //       borderRadius={16}
          //     >
          //       <Common.TextField
          //         name="email"
          //         isOutlined
          //         fontSize="14px"
          //         textStyle="regular2"
          //         onChange={onChange}
          //         placeholder={t(keys.signUp.email)}
          //         _placeholder={{ color: textColor, fontSize: '14px' }}
          //         type="email"
          //         error={errors.email ? errors.email.message : ''}
          //       />
          //       <Box w="full" position="relative">
          //         <Box
          //           w="full"
          //           cursor="pointer"
          //           display="flex"
          //           justifyContent="flex-end"
          //           alignItems="flex-start"
          //           mb="5px"
          //           as="a"
          //           href="/recover-password"
          //         >
          //           <Text textStyle="regular2" textColor={accentRedtextColor} as="span">
          //             Forgot password?
          //           </Text>
          //         </Box>
          //         <Common.TextField
          //           isOutlined
          //           name="password"
          //           fontSize="14px"
          //           borderColor="#E4EAF1"
          //           textStyle="regular2"
          //           onChange={onChange}
          //           placeholder={t(keys.password.password)}
          //           _placeholder={{ color: textColor, fontSize: '14px' }}
          //           type="password"
          //           error={errors.password ? errors.password.message : ''}
          //         />
          //       </Box>

          //       <VStack
          //         w="full"
          //         align={{ base: 'center' }}
          //         display="flex"
          //         fontSize={16}
          //         marginTop={{ base: '24px !important' }}
          //       >
          //         <Common.GradientButton
          //           type="submit"
          //           minH="64px"
          //           py="32px"
          //           w={{ base: 'full' }}
          //           radius="20px"
          //           title={t(keys.signIn.signInButton)}
          //           bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
          //           isLoading={isMemberAuthLoading}
          //         />
          //       </VStack>

          //       <Flex mt="5px !important" justifyContent="center">
          //         <Text textStyle="regular2" pos="relative">
          //           {t(keys.signIn.firstTime)}
          //           <Box
          //             onClick={() => navigate('/register')}
          //             mx="5px"
          //             cursor="pointer"
          //             textColor={accentRedtextColor}
          //             as="span"
          //           >
          //             {t(keys.signIn.createAn)}
          //           </Box>
          //         </Text>
          //       </Flex>
          //     </VStack>
          //     <Gradients />
          //   </VStack>
          // </>
        )}
      </VStack>
    </C.HeroLayout>
  );
};
export default SignIn;
