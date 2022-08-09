import { Container } from '@chakra-ui/react';
import { S } from 'components';

const Whitelist = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <div>
        <S.WhitelistHero />
      </div>

      <div>
        <S.PassNft />
      </div>
      <div>
        <S.Opportunities />
      </div>
    </Container>
  );
};

export default Whitelist;
