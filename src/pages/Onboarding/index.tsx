import { Spinner, Text, VStack } from '@chakra-ui/react';
import { C } from 'components';
import { Widget } from '@typeform/embed-react';
import useOnboardingCode from 'hooks/useOnboardingCode';
import { GradientEllipse } from 'components/common/Gradients';
import { layoutPadding } from 'theme';
import Container from './component/Container';

const OnboardingPage = () => {
  const {
    bg,
    text,
    showWidget,
    widgetProps,
    showSpinner,
    informativeMessage,
    showInformativeMessage,
  } = useOnboardingCode();

  return (
    <C.HeroLayout showFooter showNavbar minH="60vh">
      <VStack w="full" minH="70vh" pt={{ base: '16px' }} color={text} px={layoutPadding}>
        {showSpinner && <Spinner size="xl" />}
        {showInformativeMessage && (
          <Container bgColor={bg} textColor={text}>
            <Text textStyle="bold6" fontWeight="700" pl="16px" align="center">
              {informativeMessage}
            </Text>
            <GradientEllipse />
          </Container>
        )}
        {showWidget && <Widget {...widgetProps} />}
      </VStack>
    </C.HeroLayout>
  );
};

export default OnboardingPage;
