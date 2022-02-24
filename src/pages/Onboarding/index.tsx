import { Spinner, Text, useColorModeValue, VStack } from '@chakra-ui/react';
import HeroLayout from 'components/layouts/HeroLayout';
import { Widget } from '@typeform/embed-react';
import useOnboardingCode from 'hooks/useOnboardingCode';
import { useState } from 'react';
import { GradientEllipse } from 'components/ui/home/RoadmapHero/Gradients';
import { layoutPadding } from 'theme';
import Container from './component/Container';

const OnboardingPage = () => {
  const [ready, setReady] = useState(false);
  const text = useColorModeValue('glass.100', 'glass.800');
  const { loading, isValid, isCodeExist } = useOnboardingCode();
  const bg = useColorModeValue('glass.700', 'glass.300');

  return (
    <HeroLayout showFooter showNavbar minH="60vh">
      <VStack w="full" minH="70vh" pt={{ base: '16px' }} color={text} px={layoutPadding}>
        {(loading || (!ready && isValid)) && <Spinner size="xl" />}
        {!loading && !isValid && (
          <Container bgColor={bg} textColor={text}>
            <Text textStyle="bold6" fontWeight="700" pl="16px" align="center">
              {isCodeExist
                ? 'Your onboarding code is wrong.'
                : 'Your onboarding code is not found.'}
            </Text>
            <GradientEllipse />
          </Container>
        )}
        {!loading && isValid && (
          <Widget
            id="EEnQpuTA"
            style={{
              width: '100%',
              padding: '16px',
              height: ready ? '70vh' : '0vh',
            }}
            onReady={() => {
              setReady(true);
            }}
          />
        )}
      </VStack>
    </HeroLayout>
  );
};

export default OnboardingPage;
