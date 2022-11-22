import * as React from 'react';
import { Box } from '@chakra-ui/react';

import BannerImage from './BannerImage';
import BannerTitle from './Header/BannerTitle';
import RequestItem from './Header/RequestItem';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';
// import BannerPanelLeft from './BannerPanelLeft';

const Banner: React.FC = () => {
  const { exploreGroups } = usePersistedGroupStore();
  const currentURL = window.location.href.split('/');
  const groupdId = parseInt(currentURL[currentURL.length - 1], 10);
  const g = exploreGroups[exploreGroups.findIndex((group) => group.id === groupdId)];
  const isPrivate = true;
  return (
    <Box>
      <Box backgroundColor="#fff" borderRadius="24px" w="full" p={{ base: '16px', md: '32px' }}>
        <BannerImage />
        <Box>
          <Box
            marginTop="32px"
            display={{ md: 'flex', base: 'block' }}
            justifyContent="space-between"
            alignItems="center"
            id="banner-header"
            mb="24px"
          >
            <BannerTitle />
            <RequestItem
              gId={g.id}
              gRequestStatus={g.Request}
              gPrivate={isPrivate}
              key={`explore-group-item-${g.id}`}
            />
          </Box>
          <Box display={{ md: 'flex', base: 'block' }} justifyContent="end" alignItems="flex-end">
            {/* <BannerPanelLeft /> */}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Banner;
