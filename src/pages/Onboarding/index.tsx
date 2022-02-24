import { Spinner, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { Widget } from '@typeform/embed-react';
import useOnboardingCode from 'hooks/useOnboardingCode';

const OnboardingPage = () => {
  const text = useColorModeValue('glass.100', 'glass.800');
  const data = useOnboardingCode();

  return (
    <HeroLayout showFooter showNavbar minH="60vh">
      <VStack w="full" minH="70vh" pt={{ base: '16px' }} color={text}>
        {data.loading && <Spinner size="xl" />}
        {!data.loading && !data.isValid && (
          <VStack w="full" minH="70vh" pt={{ base: '16px', md: '80px' }} color={text}>
            <Text textStyle="bold6" fontWeight="700" mb="52px" pl="16px" align="center">
              {data.isCodeExist
                ? 'Your onboarding code is wrong.'
                : 'Your onboarding code is not found.'}
            </Text>
          </VStack>
        )}
        {!data.loading && data.isValid && (
          <Widget
            id="EEnQpuTA"
            style={{
              width: '100%',
              height: '70vh',
              padding: '16px',
            }}
          />
        )}
      </VStack>
    </HeroLayout>
  );
};

export default OnboardingPage;
