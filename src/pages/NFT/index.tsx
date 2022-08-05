import { Container } from '@chakra-ui/react';
import { S } from 'components';

const Whitelist = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <S.NFTHeroSection />
      {/* <> */}
      <div>
        <S.NFTGenesis />
      </div>
      {/* </> */}
    </Container>
  );
};

export default Whitelist;
