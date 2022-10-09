import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

import MemberDashboardCard from '../../MemberDashBoardCard';
import GroupsThumbnailImage from './GroupsThumbnailImage';
import MemberCount from '../MemberCount';
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
          {member && <MemberCount count={member} />}
        </Box>
        <Box display="flex" justifyContent="space-between" alignItems="center" marginTop="26px">
          {/* <Box display="flex" position="relative">
            <Image src={Images.group.ellipse} zIndex="10" />
            <Image src={Images.group.ellipse} zIndex="9" position="absolute" left="27px" />
            <Image src={Images.group.ellipse} zIndex="8" position="absolute" left="53px" />
            <Image src={Images.group.ellipse} position="absolute" left="79px" />
          </Box> */}
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
