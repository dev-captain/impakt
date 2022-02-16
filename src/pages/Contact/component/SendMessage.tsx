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
import { layoutPadding } from 'theme';
import { validateEmail } from 'utils';
import { ContactProps } from './ContactProps';

const SendMessage = () => {
  const [isLessThan355] = useMediaQuery('(max-width: 355px)');
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const bgImage = useColorModeValue(Images.impaktGames.Header('xl'), Images.impaktGames.light);
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
    <HeroLayout showNavbar bgImage={bgImage} minH="20vh">
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
                Get in Touch
              </Text>
              <Text textStyle={{ base: isLessThan355 ? 'bold4' : 'bold5', md: 'bold7' }}>
                with Us
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
              <Text textStyle={{ base: 'regular4', md: 'regular5' }}>Send us a Message</Text>
              <VStack w="full" spacing="16px">
                <TextField
                  name="name"
                  isOutlined
                  fontSize="14px"
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder="Your name"
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <TextField
                  name="email"
                  isOutlined
                  fontSize="14px"
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder="Your e-mail"
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <TextField
                  isOutlined
                  name="subject"
                  fontSize="14px"
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder="Topic of the message"
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <TextareaField
                  isOutlined
                  name="message"
                  fontSize="14px"
                  onChange={onChange}
                  textStyle="regular2"
                  placeholder="Your message"
                  _placeholder={{ color: textColor, fontSize: '14px' }}
                />
                <Box {...ContactProps.gradients.first} />
                <Box {...ContactProps.gradients.second} />
              </VStack>
              <VStack w="full" align={{ base: 'center', md: 'flex-end' }}>
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
              <Box {...ContactProps.gradients.first} />
              <Box {...ContactProps.gradients.second} />
            </VStack>
          </GridItem>
        </SimpleGrid>
      </VStack>
    </HeroLayout>
  );
};

export default SendMessage;
