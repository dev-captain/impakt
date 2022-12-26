import { useColorModeValue, VStack, Text, useBreakpointValue } from '@chakra-ui/react';
import React, { useState } from 'react';
import { C, Common } from '@/components';
import { validateEmail } from '@/utils';
import keys from '@/i18n/translations/en';
import Gradients from './Gradient';

const SubscriptionForm = () => {
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

  const onSubmit = () => {};

  const isDisabled = !values.email || !validateEmail(values.email);

  return (
    <C.HeroLayout minH="20vh">
      <VStack
        position="relative"
        color={textColor}
        maxW={{ base: 'full', md: '840px' }}
        marginTop={{ base: '40px !important', md: '85px' }}
        w="full"
        px="20px"
        filter="drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.15)) drop-shadow(0px 4px 14px rgba(0, 0, 0, 0.16));"
      >
        <VStack
          spacing="24px"
          marginTop={{ base: '0', md: '15px !important' }}
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
            fontSize={{ base: '16px', md: '24px' }}
            lineHeight={{ base: '24px', md: '32px' }}
            opacity="0.6"
            paddingX={{ base: '20px', md: '0' }}
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
          <VStack spacing="16px" w={{ base: 'full', md: '424px' }} borderRadius={16}>
            <Common.TextField
              name="email"
              isOutlined
              fontSize="14px"
              onChange={onChange}
              textStyle="regular2"
              placeholder={keys.contact.yourEmail}
              _placeholder={{ color: textColor, fontSize: '14px' }}
            />

            <Gradients />
          </VStack>
          <VStack
            w={{ base: 'full', md: '424px' }}
            align={{ base: 'center', md: 'flex-end' }}
            display="flex"
            fontSize={16}
          >
            <Common.GradientButton
              py="24px"
              w={{ base: 'full', md: '424px' }}
              radius="16px"
              onClick={onSubmit}
              title="Subscribe"
              disabled={isDisabled}
              bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
            />
          </VStack>
        </VStack>
      </VStack>
    </C.HeroLayout>
  );
};

export default SubscriptionForm;
