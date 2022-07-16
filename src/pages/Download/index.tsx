import { Container } from '@chakra-ui/layout';
import { DownloadPlatfrom, Footer, SubscriptionForm } from 'components/ui/Download';
import Seo from 'components/core/Seo';
import VideoModal from 'components/common/VideoModal';

const DownloadSCreen = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <VideoModal />
      <Seo />

      <div id="download-platform">
        <DownloadPlatfrom />
      </div>

      <div id="subscription-form">
        <SubscriptionForm />
      </div>
      <Footer />
    </Container>
  );
};

export default DownloadSCreen;
