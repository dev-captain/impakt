import { Box, Container, HStack } from '@chakra-ui/react';
import { S } from 'components';
import { ImpaktFooter } from '../../components/ui';
import SocialFitnessGamified from '../../components/ui/home/HeroSection/SocialFitnessGamified';

const LandingPage = () => {
  // const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <S.VideoSection />
      <Box>
        <SocialFitnessGamified>
          <HStack id="hero-right" maxH="788px" h="80vh" w="full" margin="0 !important">
            <Box height="100%" />
          </HStack>
        </SocialFitnessGamified>
        <S.FitnessJourney />
        {/* <S.Privacy />
          <S.Evolving />
          <S.HumanNeed /> */}
        <S.Athletes />
        <S.ImpaktTeam />
        <ImpaktFooter />
      </Box>
    </Container>
  );
};

export default LandingPage;
