import { Container } from '@chakra-ui/layout';
import { Box } from '@chakra-ui/react';
import { C, S } from 'components';

const DownloadSCreen = () => {
  return (
    <Container spacing={0} p={0} minW="full" m={0} bgColor="">
      {/* <Common.VideoModal /> */}
      <C.Seo />

      <Box id="download-platform">
        <S.DownloadPlatfrom />
      </Box>
    </Container>
  );
};

export default DownloadSCreen;
