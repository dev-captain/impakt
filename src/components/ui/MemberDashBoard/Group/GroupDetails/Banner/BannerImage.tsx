import { Box, Image } from '@chakra-ui/react';
import * as React from 'react';
import Images from '../../../../../../assets/images';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';
import GroupCardMemberCount from '../../Groups/GroupCardMemberCount';

const BannerImage: React.FC = () => {
  const members = usePersistedGroupStore().membersOfGroup?.Members?.filter(
    ({ role }: any) => role !== 'None',
  );
  const isCurrentImageExist = usePersistedGroupStore().activeGroup?.currentCoverImageId;
  const currentCoverImageSource = usePersistedGroupStore().activeGroup?.CurrentCoverImage;

  return (
    <Box w="full" position="relative">
      {/* TODO PEN ICON TO CHANGE BANNER WILL ADD HERE */}
      {members && members.length > 0 && (
        <Box pos="absolute" bottom="1.5em" left="1em">
          <GroupCardMemberCount count={members.length} />
        </Box>
      )}
      <Image
        src={isCurrentImageExist ? currentCoverImageSource : Images.group.defaultCoverImage}
        loading="lazy"
        minH="100px"
        minWidth="100%"
        borderRadius="24px 24px 0 0"
        maxH="240px"
        objectFit="cover"
      />
    </Box>
  );
};

export default BannerImage;
