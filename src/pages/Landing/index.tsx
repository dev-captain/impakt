import { Container } from '@chakra-ui/react';
import { S, C } from 'components';

const LandingPage = () => {
  // const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');

  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <S.Landing.HeroVideoSection />
      <S.Landing.MyBody />
      <S.Landing.FitnessJourney />
      {/* <S.Landing.Privacy />
          <S.Landing.Evolving />
          <S.Landing.HumanNeed /> */}
      <S.Landing.Athletes />
      <S.Landing.ImpaktTeam />
      <S.Landing.BecomePart />
      <S.Landing.LandingPageFooter />
    </Container>
  );
};

export default LandingPage;
