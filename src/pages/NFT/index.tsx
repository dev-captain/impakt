import { Container } from '@chakra-ui/react';
import { C, S } from '@/components';

const Whitelist = () => {
  return (
    <Container spacing={0} backgroundColor="" p={0} minW="full" m={0} bgColor="">
      <S.NFTHeroSection />
      <section>
        <S.NFTGenesis />
      </section>

      <div>
        <S.DynamicNFT />
      </div>

      <div>
        <S.Rarity />
      </div>

      <div>
        <S.NFTOffer />
      </div>

      <section>
        <S.NftCommonQuestion />
      </section>

      {/* <section>
        <S.NFTCongrats />
      </section> */}
      <C.ImpaktFooterV2 wFull isWhiteMode={false} />
    </Container>
  );
};

export default Whitelist;
