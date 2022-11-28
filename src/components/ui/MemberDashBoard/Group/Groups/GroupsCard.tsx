import * as React from 'react';
import { Box } from '@chakra-ui/react';
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
      minH="300px"
      _hover={{ boxShadow: '0px 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      p="0 !important"
    >
      <GroupsThumbnailImage src={img} />
      <Box w="100%" padding={{ lgx: '16px', base: '12px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <GroupCardNameTitleText groupName={name} />
          {member && <GroupCardMemberCount count={member} />}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="26px">
          {children}

          {isPrivateGroup && (
            <Box position="absolute" top="24px" left="24px">
              <LockIcon
                bg="#29323b"
                color="white"
                height="40px"
                width="40px"
                padding="12px"
                borderRadius="4px"
              />
            </Box>
          )}
        </Box>
      </Box>
    </MemberDashboardCard>
  );
};
export default GroupsCard;
