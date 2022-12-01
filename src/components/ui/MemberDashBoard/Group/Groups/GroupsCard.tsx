import * as React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

import MemberDashboardCard from '../../MemberDashBoardCard';
import GroupsThumbnailImage from './GroupsThumbnailImage';
import GroupCardMemberCount from './GroupCardMemberCount';
import GroupCardNameTitleText from './GroupCardNameText';

interface GroupsCardPropsI {
  member?: number;
  img: any;
  name: string;
  isPrivateGroup: boolean;
}
const GroupsCard: React.FC<GroupsCardPropsI> = ({
  member,
  img,
  name,
  children,
  isPrivateGroup,
}) => {
  return (
    <MemberDashboardCard
      maxH="282px"
      _hover={{ boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      p="0 !important"
      borderRadius="16px"
    >
      <Box maxH="128px" position="relative" w="full">
        {isPrivateGroup && (
          <Box
            bg="fg-1"
            w="32px"
            borderRadius="0.5em"
            h="32px"
            position="absolute"
            top="0.5em"
            left="0.5em"
            padding="12px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <LockIcon color="white" />
          </Box>
        )}
        <GroupsThumbnailImage src={img} />
        <Box bottom="1em" left="1em" position="absolute">
          {member && <GroupCardMemberCount count={member} />}
        </Box>
      </Box>
      <VStack
        w="100%"
        spacing="0"
        rowGap="1em"
        justifyContent="flex-start"
        alignItems="flex-start"
        p="1em"
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <GroupCardNameTitleText groupName={name} />
        </Box>
        <Box display="flex" w="full" justifyContent="space-between" alignItems="center">
          {children}
        </Box>
      </VStack>
    </MemberDashboardCard>
  );
};
export default GroupsCard;
