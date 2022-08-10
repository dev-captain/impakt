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
        <S.ImapktPass />
      </div>
      <div>
        <S.Opportunities />
      </div>

      <div>
        <S.CommunityLeaderboard />
      </div>

      <div>
        <S.IndividualLeaderboard />
      </div>
    </Container>
  );
};

export default Whitelist;
