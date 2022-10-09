import * as React from 'react';
import { Box } from '@chakra-ui/react';

import BannerSettingsMenu from './BannerSettingsMenu';

interface PropsI {}
const BannerPanelRight: React.FC<PropsI> = () => {
  return (
    <Box marginTop={{ md: '0', base: '20px' }} display="flex">
      <BannerSettingsMenu />
      {/* <Button
                backgroundColor="#F4F7F9"
                borderRadius="8px"
                height="40px"
                width="40px"
                _focus={{ boxShadow: 'none' }}
              >
                <I.SearchIcon color="#4E6070" width="22px" />
              </Button> */}
    </Box>
  );
};
export default BannerPanelRight;
