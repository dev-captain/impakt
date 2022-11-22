import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const BannerHeaderLeft: React.FC = () => {
  const { exploreGroups } = usePersistedGroupStore();
  const currentURL = window.location.href.split('/');
  const groupdId = parseInt(currentURL[currentURL.length - 1], 10);
  const title = exploreGroups[exploreGroups.findIndex((group) => group.id === groupdId)].groupName;
  return (
    <Box id="banner-header-left">
      <Text
        textStyle="TitleBold64"
        fontSize={{ base: '20px', md: '30px', lgx: '44px' }}
        color="29323B"
      >
        {title}
      </Text>
      <Text fontSize={{ base: '10px', md: '18px', lgx: '20px' }} color="29323B">
        This is a private group. You can only view its content if you are a member.
      </Text>
    </Box>
  );
};

export default BannerHeaderLeft;
