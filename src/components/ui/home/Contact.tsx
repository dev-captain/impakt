import { Box, GridItem, Image, SimpleGrid, Text, VStack } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import TextareaField from 'components/core/TextareaField';
import TextField from 'components/core/TextField';
import HeroLayout from 'components/layouts/HeroLayout';
import useContactUs from 'hooks/useContactUs';
import React, { useState } from 'react';
import { layoutPadding } from 'theme';

const Contact = () => {
  const { sendData, loading } = useContactUs();
  const [values, setValues] = useState({
    email: '',
    message: '',
    name: '',
    subject: '',
    isSubscribed: false,
  });

  const resetFields = () => {
    setValues({ email: '', message: '', name: '', subject: '', isSubscribed: false });
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
            <Image src="assets/images/contact-us.png" maxH="400px" />
          </GridItem>
          <GridItem colSpan={{ base: 2, sm: 2, md: 1 }}>
            <VStack w="full" spacing="20px" align="flex-start">
              <Text display="flex" lineHeight="60px" fontSize={{ base: '36px', md: '56px' }}>
                <Text
                  fontSize={{ base: '36px', md: '56px' }}
                  fontWeight="700"
                  lineHeight="60px"
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
              >
                <GradientEllipse />
                <GradientEllipse1 />
                <VStack w="full" spacing="16px">
                  <TextField placeholder="Your name" name="name" onChange={onChange} />
                  <TextField placeholder="Your e-mail" name="email" onChange={onChange} />
                  <TextField
                    placeholder="Topic of the message"
                    name="subject"
                    onChange={onChange}
                  />
                  <TextareaField placeholder="Your message" name="message" onChange={onChange} />
                </VStack>
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
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default Contact;

const GradientEllipse = () => {
  return (
    <Box
      opacity="0.8"
      pos="absolute"
      w="252px"
      h="224px"
      zIndex={2}
      left="-109px"
      top="-136px"
      filter="blur(94px)"
      background="radial-gradient(50% 50% at 50% 50%, #B8326C 0%, rgba(184, 50, 108, 0) 100%)"
    />
  );
};

const GradientEllipse1 = () => {
  return (
    <Box
      opacity="0.8"
      pos="absolute"
      w="380px"
      h="338px"
      zIndex={2}
      left="347px"
      top="-196px"
      filter="blur(94px)"
      background="radial-gradient(50% 50% at 50% 50%, #D33B26 0%, rgba(242, 112, 17, 0) 100%)"
    />
  );
};

export const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);
