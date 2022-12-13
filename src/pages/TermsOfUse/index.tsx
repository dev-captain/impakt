import { Container } from '@chakra-ui/layout';
import { C, S } from 'components';

const TermsOfUse = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      {/* <Common.VideoModal /> */}
      <C.Seo />

      <div id="download-platform">
        <S.TermsOfUseContent />
      </div>

      {/* <div id="subscription-form">
        <S.SubscriptionForm />
      </div> */}
      <C.ImpaktFooterV2 isWhiteMode={false} wFull />
    </Container>
  );
};

export default TermsOfUse;
