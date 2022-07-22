import { Container } from '@chakra-ui/layout';
import { C, S, Common } from 'components';

const DownloadSCreen = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <Common.VideoModal />
      <C.Seo />

      <div id="download-platform">
        <S.DownloadPlatfrom />
      </div>

      <div id="subscription-form">
        <S.SubscriptionForm />
      </div>
      <C.FooterV1 />
    </Container>
  );
};

export default DownloadSCreen;
