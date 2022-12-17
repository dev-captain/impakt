import { Box, Image, Text, useDisclosure } from '@chakra-ui/react';
import { Common, I } from 'components';
import { LockIcon } from '@chakra-ui/icons';
import * as React from 'react';
import Images from '../../../../../../assets/images';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';
// import GroupCardMemberCount from '../../Groups/GroupCardMemberCount';
import BannerImageChangeModal from './BannerImageChangeModal';

const BannerImage: React.FC = () => {
  // const members = usePersistedGroupStore().membersOfGroup?.Members?.filter(
  //   ({ role }: any) => role !== 'None',
  // );
  const isCurrentImageExist = usePersistedGroupStore().activeGroup?.currentCoverImageId;
  const currentCoverImageSource = usePersistedGroupStore().activeGroup?.CurrentCoverImage;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { activeGroup } = usePersistedGroupStore();
  const { role } = usePersistedGroupStore();
  const isCreator = role === 'Creator';
  const isModerator = role === 'Moderator';
  return (
    <Box w="full" position="relative">
      {/* TODO PEN ICON TO CHANGE BANNER WILL ADD HERE */}
      {/* {members && members.length > 0 && (
        <Box pos="absolute" bottom="1.5em" left="1em">
          <GroupCardMemberCount count={members.length} />
        </Box>
      )} */}
      <Image
        src={isCurrentImageExist ? currentCoverImageSource : Images.group.defaultCoverImage}
        loading="lazy"
        minH="100px"
        minWidth="100%"
        borderRadius="24px 24px 0 0"
        maxH="240px"
        objectFit="cover"
        // position="absolute"
      />
      {isCreator && (
        <Common.ImpaktButton
          variant="black"
          w="48px"
          h="48px"
          style={{ position: 'absolute', top: '16px', right: '16px' }}
          onClick={() => {
            onOpen();
          }}
        >
          <I.PenIcon />
        </Common.ImpaktButton>
      )}
      {activeGroup?.private && (isCreator || isModerator) && (
        <Box
          bg="rgba(18, 18, 22, 0.4)"
          w="128px"
          borderRadius="40px"
          h="32px"
          position="absolute"
          bottom="24px"
          left="32px"
          padding="12px"
          display="flex"
          justifyContent="space-around"
          alignItems="center"
        >
          <LockIcon color="white" />
          <Text color="white">PRIVATE</Text>
        </Box>
      )}
      <BannerImageChangeModal open={isOpen} close={onClose} />
    </Box>
  );
};

export default BannerImage;
