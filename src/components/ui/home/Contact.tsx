import {
  Box,
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  useMediaQuery,
  VStack,
} from '@chakra-ui/react';
import Images from 'assets/images';
import GradientButton from 'components/core/GradientButton';
import TextareaField from 'components/core/TextareaField';
import TextField from 'components/core/TextField';
import HeroLayout from 'components/layouts/HeroLayout';
import useContactUs from 'hooks/useContactUs';
import React, { useState } from 'react';
import { validateEmail } from 'utils';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { ContactProps } from 'pages/Contact/component/ContactProps';
import AnimationInWhenVisible from 'components/common/AnimationInWhenVisible';

const SendMessage = () => {
  const { t } = useTranslation().i18n;
  const [isLessThan355] = useMediaQuery('(max-width: 355px)');
  const [isLessThan992] = useMediaQuery('(max-width: 992px)');
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const { sendData, loading } = useContactUs();
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const [values, setValues] = useState({
    email: '',
    message: '',
    name: '',
    subject: 'Landing Page',
    isSubscribed: false,
  });

  const resetFields = () => {
    setValues({ email: '', message: '', name: '', subject: 'Landing Page', isSubscribed: false });
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    sendData(values, resetFields);
  };

  const isDisabled =
    !values.email ||
    !values.name ||
    !values.subject ||
    !values.message ||
    !validateEmail(values.email);

  return (
    <HeroLayout minH="20vh">
      <VStack w="full">
        <VStack
          {...ContactProps.mVStack}
          px="16px"
          maxW="1232px"
          pt={{ base: '16px', md: '70px' }}
          color={textColor}
        >
          <SimpleGrid
            {...ContactProps.sGrid}
            templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(2, 1fr)' }}
          >
            <GridItem
              colSpan={{
                base: 2,
                md: 2,
              }}
              w="full"
              alignItems="center"
              justifyContent="center"
              display="flex"
            >
              <HStack {...ContactProps.mHStack} pb={{ base: '20px', md: '20px' }} w="full">
                <Text textStyle={{ base: isLessThan355 ? 'bold4' : 'bold5', md: 'bold7' }}>
                  {t(keys.contact.getInTouch)} {` `}
                  {t(keys.contact.withUs)}
                </Text>
              </HStack>
            </GridItem>

            <VStack display={isLessThan992 ? 'none' : ''}>
              <AnimationInWhenVisible animationType="move" isLeft>
                <GridItem {...ContactProps.sGridItem}>
                  <Image src={Images.contactUs.hiPeter} display={{ base: 'none', lg: 'flex' }} />
                </GridItem>
              </AnimationInWhenVisible>
            </VStack>
            <GridItem
              colSpan={{ base: isLessThan992 ? 2 : 'auto' }}
              display={isLessThan992 ? 'block' : ''}
            >
              <AnimationInWhenVisible animationType="move">
                <GridItem
                  colSpan={{
                    base: 2,
                    md: 2,
                    lg: 1,
                  }}
                  w={{ base: 'full', md: 'full' }}
                  alignItems="center"
                  justifyContent="center"
                  display="flex"
                >
                  <VStack bgColor={bgColor} {...ContactProps.messageVStack}>
                    <Text textStyle={{ base: 'regular4', md: 'regular5' }}>
                      {t(keys.contact.sendUsMessage)}
                    </Text>
                    <VStack w="full" spacing="16px">
                      <TextField
                        name="name"
                        isOutlined
                        fontSize="14px"
                        onChange={onChange}
                        textStyle="regular2"
                        placeholder={t(keys.contact.yourName)}
                        _placeholder={{ color: textColor, fontSize: '14px' }}
                      />
                      <TextField
                        name="email"
                        isOutlined
                        fontSize="14px"
                        onChange={onChange}
                        textStyle="regular2"
                        placeholder={t(keys.contact.yourEmail)}
                        _placeholder={{ color: textColor, fontSize: '14px' }}
                      />
                      <TextField
                        isOutlined
                        name="subject"
                        fontSize="14px"
                        onChange={onChange}
                        textStyle="regular2"
                        placeholder={t(keys.contact.topicOfMessage)}
                        _placeholder={{ color: textColor, fontSize: '14px' }}
                      />
                      <TextareaField
                        isOutlined
                        name="message"
                        fontSize="14px"
                        onChange={onChange}
                        textStyle="regular2"
                        placeholder={t(keys.contact.yourMessage)}
                        _placeholder={{ color: textColor, fontSize: '14px' }}
                      />
                      <Box {...ContactProps.gradients.first} />
                      <Box {...ContactProps.gradients.second} />
                    </VStack>
                    <VStack w="full" align={{ base: 'center', md: 'flex-end' }}>
                      <GradientButton
                        py="32px"
                        minW="240px"
                        radius="14px"
                        onClick={onSubmit}
                        title={t(keys.contact.send)}
                        disabled={isDisabled || loading}
                        bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                      />
                    </VStack>
                    <Box {...ContactProps.gradients.first} />
                    <Box {...ContactProps.gradients.second} />
                  </VStack>
                </GridItem>
              </AnimationInWhenVisible>
            </GridItem>
          </SimpleGrid>
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default SendMessage;
