import { Box, useColorModeValue, VStack, Text, useBreakpointValue } from '@chakra-ui/react';
import GradientButton from 'components/core/GradientButton';
import TextField from 'components/core/TextField';
import HeroLayout from 'components/layouts/HeroLayout';
import React, { useState } from 'react';
import { validateEmail } from 'utils';
import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';
import Gradients, { GradientEllipse, GradientEllipse1 } from './Gradient';

const SubscriptionForm = () => {
  const { t } = useTranslation().i18n;
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  const textColor = useColorModeValue('glass.100', 'glass.700');
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });
  const [values, setValues] = useState({
    email: '',
    isSubscribed: false,
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = () => {
    console.log('values', values);
  };

  const isDisabled = !values.email || !validateEmail(values.email);

  return (
    <HeroLayout minH="20vh">
      <VStack
        position="relative"
        color={textColor}
        maxW={{ base: 'full', md: '1232px' }}
        marginTop="85px"
        w="full"
        px="16px"
        pt={{ base: '100px', md: '0px' }}
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));"
      >
        <VStack
          spacing="24px"
          marginTop="95px !important"
          mb={{ base: '25px', md: '60px' }}
          textAlign="center"
          overflow="hidden"
          marginBottom="20px !important"
        >
          <Text
            textStyle={isSmallView ? 'black7' : 'black8'}
            fontSize={{ base: '32px', md: '56px' }}
            lineHeight={{ base: '36px', md: '60px' }}
          >
            Receive the latest news
          </Text>
          <Text
            textStyle={isSmallView ? 'regular3' : 'regular5'}
            fontSize={{ base: '24px', md: '18px' }}
            lineHeight={{ base: '30px', md: '24px' }}
            opacity="0.6"
          >
            Subscribe to our Newsletter — the best way to stay informed about everything related to
            Impakt!
          </Text>
        </VStack>
        <VStack
          bgColor={bgColor}
          height="200px"
          w="full"
          paddingY="50px"
          paddingX={{ base: '50px' }}
          borderRadius={30}
          position="relative"
          overflow="hidden"
          marginTop="0 !important"
        >
          <VStack spacing="16px" w={{ base: 'full', md: '600px' }} borderRadius={16}>
            <TextField
              name="email"
              isOutlined
              fontSize="14px"
              onChange={onChange}
              textStyle="regular2"
              placeholder={t(keys.contact.yourEmail)}
              _placeholder={{ color: textColor, fontSize: '14px' }}
            />

            <Gradients />
            {/* <Gradients /> */}
          </VStack>
          <VStack
            w={{ base: 'full', md: '600px' }}
            align={{ base: 'center', md: 'flex-end' }}
            display="flex"
            fontSize={16}
          >
            <GradientButton
              py="24px"
              w={{ base: 'full', md: '600px' }}
              radius="16px"
              onClick={onSubmit}
              title="Subscribe"
              disabled={isDisabled}
              bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
            />
          </VStack>
          <Box {...GradientEllipse} />
          <Box {...GradientEllipse1} />
        </VStack>
      </VStack>
    </HeroLayout>
  );
};

export default SubscriptionForm;
