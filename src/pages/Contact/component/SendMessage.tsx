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
import { C, Common } from 'components';
import useContactUs from 'hooks/useContactUs';
import React, { useState } from 'react';
import { layoutPadding } from 'theme';
import { validateEmail } from 'utils';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import { ContactProps } from './ContactProps';

const SendMessage = () => {
  const { t } = useTranslation().i18n;
  const [isLessThan355] = useMediaQuery('(max-width: 355px)');
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const bgImage = useColorModeValue(Images.backgrounds.defaultBg, Images.backgrounds.light);
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
    <C.HeroLayout showNavbar bgImage={bgImage} minH="20vh">
      <VStack
        {...ContactProps.mVStack}
        px={layoutPadding}
        pt={{ base: '16px', md: '70px' }}
        color={textColor}
      >
        <SimpleGrid {...ContactProps.sGrid}>
          <GridItem {...ContactProps.sGridItem} display={{ base: 'flex', md: 'none' }} maxH="350px">
            <Image src={Images.contactUs.hiPeter} objectFit="contain" />
          </GridItem>
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
            <HStack {...ContactProps.mHStack} pb={{ base: '20px', md: '80px' }} w="full">
              <Text textStyle={{ base: isLessThan355 ? 'regular4' : 'regular5', md: 'light7' }}>
                {t(keys.contact.getInTouch)}
              </Text>
              <Text textStyle={{ base: isLessThan355 ? 'bold4' : 'bold5', md: 'bold7' }}>
                {t(keys.contact.withUs)}
              </Text>
            </HStack>
          </GridItem>
          <GridItem {...ContactProps.sGridItem}>
            <Image src={Images.contactUs.hiPeter} />
          </GridItem>
          <GridItem
            colSpan={{
              base: 2,
              md: 1,
            }}
            w="full"
            alignItems="center"
            justifyContent="center"
            display="flex"
          >
            <VStack bgColor={bgColor} {...ContactProps.messageVStack}>
              <Text textStyle={{ base: 'regular4', md: 'regular5' }}>
                {t(keys.contact.sendUsMessage)}
              </Text>
              <VStack w="full" spacing="16px">
                <Common.TextField
                  name="name"
                  value={values.name}
                  isOutlined
                  fontSize="14px"
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder={t(keys.contact.yourName)}
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <Common.TextField
                  name="email"
                  value={values.email}
                  isOutlined
                  fontSize="14px"
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder={t(keys.contact.yourEmail)}
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <Common.TextField
                  isOutlined
                  value={values.subject}
                  name="subject"
                  fontSize="14px"
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder={t(keys.contact.topicOfMessage)}
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <Common.TextareaField
                  isOutlined
                  name="message"
                  fontSize="14px"
                  value={values.message}
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder={t(keys.contact.yourMessage)}
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <Box {...ContactProps.gradients.first} />
                <Box {...ContactProps.gradients.second} />
              </VStack>
              <VStack w="full" align={{ base: 'center', md: 'flex-end' }}>
                <Common.GradientButton
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
        </SimpleGrid>
      </VStack>
    </C.HeroLayout>
  );
};

export default SendMessage;
