import React from 'react';
import { HStack, Text } from '@chakra-ui/layout';
import GroupLabels from './GroupLabels/GroupLabels';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

const BannerPanelLeft: React.FC = () => {
  const { activeGroup } = usePersistedGroupStore();

  return (
    <HStack
      alignItems="flex-start"
      justifyContent="flex-start"
      rowGap="12px"
      columnGap="12px"
      flexDir={{ base: 'column', md: 'row' }}
      flexWrap="wrap"
      width={{ base: '100%', md: 'auto' }}
      display="block"
    >
      {activeGroup?.isPreview && activeGroup.private ? (
        <Text color="#29323B" fontWeight="400" fontSize="18px" lineHeight="26px">
          This is a private group. You can only view it&apos;s content if you&apos;re a member.
        </Text>
      ) : (
        <GroupLabels />
      )}
      {/* Creation challenge modal here */}
    </HStack>
  );
};

export default BannerPanelLeft;
