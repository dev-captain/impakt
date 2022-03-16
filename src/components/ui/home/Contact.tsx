import {
  GridItem,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import Images from 'assets/images';
import GradientButton from 'components/core/GradientButton';
import TextareaField from 'components/core/TextareaField';
import TextField from 'components/core/TextField';
import HeroLayout from 'components/layouts/HeroLayout';
import useContactUs from 'hooks/useContactUs';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { layoutPadding } from 'theme';
import { validateEmail } from 'utils';
import keys from 'i18n/types';
import { ContactGradientEllipse, ContactGradientEllipse1 } from '../gradients';

const Contact = () => {
  const { t } = useTranslation().i18n;
  const { sendData, loading } = useContactUs();
  const bgColor = useColorModeValue('glass.800', 'glass.200');
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
    <HeroLayout minH="70vh">
      <VStack px={layoutPadding} w="full" color={textColor}>
        <SimpleGrid columns={2} w="full" columnGap={4}>
          <GridItem colSpan={1} d={{ base: 'none', md: 'flex' }}>
            <Image
              maxH="600px"
              objectFit="contain"
              srcSet={`${Images.contact.md} 900w, ${Images.contact.xl} 1200w`}
            />
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 2, md: 1 }}>
            <VStack
              w="full"
              spacing="24px"
              align="flex-start"
              alignItems={{ base: 'center', md: 'flex-start' }}
            >
              <HStack
                display="flex"
                alignItems="center"
                lineHeight={{ base: '40px', md: '60px' }}
                fontSize={{ base: '40px', md: '56px' }}
              >
                <Text
                  fontSize={{ base: '40px', md: '56px' }}
                  fontWeight="700"
                  lineHeight={{ base: '40px', md: '60px' }}
                  marginRight={{
                    base: '5px',
                    md: '15px',
                  }}
                >
                  {t(keys.contactUs.contact)}
                </Text>
                <Text>{t(keys.contactUs.us)}</Text>
              </HStack>
              <VStack
                bgColor={bgColor}
                w="full"
                px="48px"
                py="40px"
                borderRadius="28px"
                maxW="600px"
                align="flex-start"
                overflow="hidden"
                position="relative"
                spacing="32px"
                filter="drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.12)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.1))"
              >
                <ContactGradientEllipse />
                <ContactGradientEllipse1 />
                <VStack w="full" spacing="16px">
                  <TextField
                    name="name"
                    onChange={onChange}
                    _placeholder={{ color: textColor }}
                    placeholder={t(keys.contactUs.yourName)}
                  />
                  <TextField
                    name="email"
                    onChange={onChange}
                    _placeholder={{ color: textColor }}
                    placeholder={t(keys.contactUs.yourEmail)}
                  />
                  <TextareaField
                    name="message"
                    onChange={onChange}
                    _placeholder={{ color: textColor }}
                    placeholder={t(keys.contactUs.yourMessage)}
                  />
                </VStack>
                <VStack w="full" align="flex-end">
                  <GradientButton
                    py="32px"
                    minW="240px"
                    radius="14px"
                    onClick={onSubmit}
                    title={t(keys.contactUs.send)}
                    disabled={isDisabled || loading}
                    bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
                  />
                </VStack>
              </VStack>
            </VStack>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default Contact;
