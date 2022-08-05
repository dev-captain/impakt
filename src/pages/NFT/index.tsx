import { Container } from '@chakra-ui/react';
import { S } from 'components';

const Whitelist = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <S.NFTHeroSection />
      {/* <> */}
      <section>
        <S.NFTGenesis />
      </section>
      <section>
        <S.NFTCongrats />
      </section>
      {/* </> */}
    </Container>
  );
};

export default Whitelist;
