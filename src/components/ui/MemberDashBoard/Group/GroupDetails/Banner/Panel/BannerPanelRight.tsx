import * as React from 'react';
import { Box, HStack } from '@chakra-ui/react';

import BannerSettingsMenu from './BannerSettingsMenu';
import BannerShareButton from '../BannerShareButton';

const BannerPanelRight: React.FC = () => {
  return (
    <HStack marginTop={{ md: '0', base: '20px' }} display="flex" spacing="1em">
      <BannerShareButton />
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
    </HStack>
  );
};
export default BannerPanelRight;
