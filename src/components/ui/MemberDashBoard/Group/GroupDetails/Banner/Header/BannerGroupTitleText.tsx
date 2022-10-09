import * as React from 'react';
import { Text } from '@chakra-ui/react';

import { useAppSelector } from 'hooks';

const BannerGroupTitleText: React.FC = () => {
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);

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
