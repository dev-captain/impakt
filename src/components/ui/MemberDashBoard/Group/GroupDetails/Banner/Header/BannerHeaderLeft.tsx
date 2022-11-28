import { Box } from '@chakra-ui/react';
import * as React from 'react';
import BannerGroupTitleText from './BannerGroupTitleText';

const BannerHeaderLeft: React.FC = () => {
  return (
    <Box id="banner-header-left">
      <BannerGroupTitleText />
    </Box>
  );
};

export default BannerHeaderLeft;
