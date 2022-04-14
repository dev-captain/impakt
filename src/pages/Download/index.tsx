import { Container } from '@chakra-ui/layout';
import { DownloadPlatfrom, Footer } from 'components/ui/Download';
import Seo from 'components/core/Seo';
import VideoModal from 'components/core/VideoModal';

const DownloadSCreen = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      <VideoModal />
      <Seo />

      <div id="impakt-nft">
        <DownloadPlatfrom />
      </div>
      <Footer />
    </Container>
  );
};

export default DownloadSCreen;
