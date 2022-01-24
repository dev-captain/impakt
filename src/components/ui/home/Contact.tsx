/* eslint-disable prettier/prettier */
import { GridItem, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import TextareaField from 'components/core/TextareaField';
import TextField from 'components/core/TextField';
import HeroLayout from 'components/layouts/HeroLayout';
import useContactUs from 'hooks/useContactUs';
import React, { useState } from 'react';
import { layoutPadding } from 'theme';
import { validateEmail } from 'utils';
import { ContactGradientEllipse, ContactGradientEllipse1 } from '../gradients';

const Contact = () => {
  const { sendData, loading } = useContactUs();
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
    <HeroLayout hideBlur>
      <VStack px={layoutPadding} w="full">
        <SimpleGrid columns={2} w="full" columnGap={4}>
          <GridItem colSpan={1} d={{ base: 'none', md: 'flex' }}>
            <Image src="assets/images/contact-us.png" maxH="600px" objectFit="contain" />
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 2, md: 1 }}>
            <VStack w="full" spacing="24px" align="flex-start" alignItems="flex-start">
              <Text
                display="flex"
                alignItems="center"
                ineHeight={{ base: '40px', md: '60px' }}
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
                  Contact
                </Text>
                <Text>Us</Text>
              </Text>
              <VStack
                bgColor="#1F2024"
                w="full"
                px="48px"
                py="40px"
                borderRadius="28px"
                maxW="600px"
                align="flex-start"
                overflow="hidden"
                position="relative"
                spacing="32px"
                boxShadow="0px 6px 6px rgba(0, 0, 0, 0.3), 0px 6px 16px rgba(0, 0, 0, 0.16)"
              >
                <ContactGradientEllipse />
                <ContactGradientEllipse1 />
                <VStack w="full" spacing="16px">
                  <TextField placeholder="Your name" name="name" onChange={onChange} />
                  <TextField placeholder="Your e-mail" name="email" onChange={onChange} />
                  <TextareaField placeholder="Your message" name="message" onChange={onChange} />
                </VStack>
                <VStack w="full" align="flex-end">
                  <GradientButton
                    py="32px"
                    title="Send"
                    minW="240px"
                    radius="14px"
                    onClick={onSubmit}
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
