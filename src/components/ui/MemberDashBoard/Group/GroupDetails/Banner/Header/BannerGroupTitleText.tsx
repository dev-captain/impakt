import * as React from 'react';
import { Text } from '@chakra-ui/react';

import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const BannerGroupTitleText: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();

  return (
    <Text
      textStyle="TitleBold64"
      fontSize={{ base: '20px', md: '30px', lgx: '44px' }}
      color="29323B"
    >
      {activeGroup?.groupName}
    </Text>
  );
};

export default BannerGroupTitleText;
