import {
  useColorModeValue,
  VStack,
  Text,
  useBreakpointValue,
  Flex,
  Box,
  Link,
  useToast,
} from '@chakra-ui/react';
import { C, Common, S } from 'components';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Images from 'assets/images';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useParams } from 'react-router-dom';

import Gradients from './Gradient';
import GenerateDigitNumber from './component/GenerateDigitNumber';
import useAppDispatch from '../../hooks/useAppDispatch';
import useAppSelector from '../../hooks/useAppSelector';
import { signUpMember } from '../../lib/redux/slices/member/actions/signUpMember';

const SignUp = () => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const navigate = useNavigate();
  const bgImage = useColorModeValue(Images.backgrounds.gradientBg, Images.backgrounds.light);
  const textColor = useColorModeValue('glass.100', 'glass.700');

  React.useEffect(() => {
    if (member) navigate('/signin');
  }, []);

  return (
    <C.HeroLayout
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
        px={{ base: '1em', md: '0' }}
        filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1));"
        overflow="hidden !important"
        mt={{ base: '10px', lg: '15px' }}
      >
        <S.SignUp />
      </VStack>
    </C.HeroLayout>
    // <C.HeroLayout showNavbar minH="70vh" spacing={10} pos="relative" bgImage={bgImage}>
    //   <VStack
    //     color={textColor}
    //     maxW={{ base: 'full', md: '551px' }}
    //     marginTop={{ base: '40px !important', md: '85px' }}
    //     w="full"
    //     px={{ base: '20px', md: '0' }}
    //     filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));"
    //   >
    //     <VStack
    //       marginTop={{ base: '0', md: '15px !important' }}
    //       mb="48px"
    //       textAlign="center"
    //       overflow="hidden"
    //       flexDirection="row"
    //       position="relative"
    //       justifyContent="center"
    //       w="full"
    //     >
    //       <Text
    //         textStyle="black3"
    //         fontSize={{ base: '31.8px', sm: '40px', md: '56px' }}
    //         lineHeight={{ base: '40px', md: '60px' }}
    //         marginRight={{ base: '5px', md: '10px' }}
    //       >
    //         {t(keys.signUp.createAn)}
    //       </Text>
    //       <Text
    //         textStyle={isSmallView ? 'black7' : 'black8'}
    //         fontSize={{ base: '36px', sm: '40px', md: '56px' }}
    //         lineHeight={{ base: '40px', md: '60px' }}
    //         marginTop="0 !important"
    //       >
    //         {t(keys.signUp.account)}
    //       </Text>
    //     </VStack>
    //     <VStack
    //       bgColor={bgColor}
    //       height="50%"
    //       w="full"
    //       maxH={{ base: 'unset', md: '516px' }}
    //       maxW={{ base: 'unset', md: '520px' }}
    //       padding={{ base: '32px 16px', md: '48px' }}
    //       borderRadius={30}
    //       position="relative"
    //       overflow="hidden"
    //       marginTop="0 !important"
    //     >
    //       <VStack
    //         as="form"
    //         onSubmit={handleSubmit(handleRegisterFormSubmit)}
    //         spacing="24px"
    //         w="full"
    //         borderRadius={16}
    //       >
    //         <Flex justifyContent="space-between" w="full">
    //           <Common.TextField
    //             name="memberName"
    //             zIndex="999"
    //             isOutlined
    //             fontSize="14px"
    //             textStyle="regular2"
    //             onChange={onChange}
    //             placeholder={t(keys.signUp.memberName)}
    //             _placeholder={{ color: textColor, fontSize: '14px' }}
    //             type="text"
    //             error={errors.memberName ? errors.memberName.message : ''}
    //           />

    //           <Common.TextField
    //             name="fourDigit"
    //             boxWidth="40%"
    //             zIndex="999"
    //             isOutlined
    //             fontSize="14px"
    //             textStyle="regular2"
    //             onChange={onChange}
    //             value={getValues('fourDigit') ? `${getValues('fourDigit')}` : ''}
    //             placeholder={t(keys.signUp.fourDigit)}
    //             _placeholder={{ color: textColor, fontSize: '14px' }}
    //             type="number"
    //             error={errors.fourDigit ? errors.fourDigit.message : ''}
    //           >
    //             <Box
    //               as="span"
    //               position="absolute"
    //               top="3"
    //               left="0.5"
    //               textColor="whiteAlpha.400"
    //               zIndex={2000}
    //             >
    //               #
    //             </Box>
    //           </Common.TextField>
    //         </Flex>

    //         <Common.TextField
    //           name="email"
    //           isOutlined
    //           fontSize="14px"
    //           textStyle="regular2"
    //           onChange={onChange}
    //           placeholder={t(keys.signUp.email)}
    //           _placeholder={{ color: textColor, fontSize: '14px' }}
    //           type="email"
    //           error={errors.email ? errors.email.message : ''}
    //         />
    //         <Common.TextField
    //           name="password"
    //           isOutlined
    //           fontSize="14px"
    //           textStyle="regular2"
    //           onChange={onChange}
    //           placeholder={t(keys.password.password)}
    //           _placeholder={{ color: textColor, fontSize: '14px' }}
    //           type="password"
    //           error={errors.password ? errors.password.message : ''}
    //         />

    //         <Common.TextField
    //           isOutlined
    //           name="passwordConfirmation"
    //           fontSize="14px"
    //           textStyle="regular2"
    //           onChange={onChange}
    //           placeholder={t(keys.password.confirmPassword)}
    //           _placeholder={{ color: textColor, fontSize: '14px' }}
    //           type="password"
    //           error={errors.passwordConfirmation ? errors.passwordConfirmation.message : ''}
    //         />
    //         <VStack
    //           marginTop={{ base: '20px !important' }}
    //           w="full"
    //           justifyContent="start"
    //           alignItems="baseline"
    //           flexDir="row"
    //           borderRadius={16}
    //         >
    //           <Flex justifyContent="center" alignItems="center">
    //             <Text textStyle="regular3" pos="relative">
    //               By clicking on &apos;Create Account&apos; you agree to our
    //               <Link
    //                 target="_blank"
    //                 _hover={{ textDecoration: 'none' }}
    //                 href="https://knowledgebase.impakt.com/terms-of-use?category=Terms-of-Use"
    //               >
    //                 <Box mx="5px" cursor="pointer" textColor={accentRedtextColor} as="span">
    //                   Terms
    //                 </Box>
    //               </Link>
    //               and
    //               <Link
    //                 _hover={{ textDecoration: 'none' }}
    //                 target="_blank"
    //                 href="https://knowledgebase.impakt.com/terms-of-use?category=Terms-of-Use"
    //               >
    //                 <Box mx="5px" cursor="pointer" textColor={accentRedtextColor} as="span">
    //                   Privacy Policy
    //                 </Box>
    //               </Link>
    //             </Text>
    //           </Flex>
    //         </VStack>
    //         <VStack
    //           w="full"
    //           align={{ base: 'center' }}
    //           display="flex"
    //           fontSize={16}
    //           marginTop={{ base: '24px !important' }}
    //         >
    //           <Common.GradientButton
    //             type="submit"
    //             py="32px"
    //             w={{ base: 'full' }}
    //             radius="20px"
    //             title="Create account"
    //             bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
    //             isLoading={isMemberCreateLoading}
    //           />
    //         </VStack>

    //         <Flex mt="8px !important" justifyContent="center">
    //           <Text textStyle="regular2" pos="relative">
    //             Already have an account?
    //             <Box
    //               onClick={() => navigate('/signin')}
    //               mx="5px"
    //               cursor="pointer"
    //               textColor={accentRedtextColor}
    //               as="span"
    //             >
    //               Login
    //             </Box>
    //           </Text>
    //         </Flex>
    //       </VStack>

    //       <Gradients />

    //       <GenerateDigitNumber onClick={generateRandomFourDigitNumberString} />
    //     </VStack>
    //   </VStack>
    // </C.HeroLayout>
  );
};
export default SignUp;
