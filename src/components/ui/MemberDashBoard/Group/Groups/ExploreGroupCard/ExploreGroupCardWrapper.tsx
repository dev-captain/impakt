/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import { Box, useToast } from '@chakra-ui/react';
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';

import Images from '../../../../../../assets/images';
import { getImageFromS3AsUrl } from '../../../../../../utils';
import GroupsCard from '../GroupsCard';
import { sendGroupRequestToJoin } from '../../../../../../lib/redux/slices/groups/actions/sendGroupRequestToJoin';
import { joinGroup } from '../../../../../../lib/redux/slices/groups/actions/joinGroup';
import { UserRequestStatus } from '../../../../../../lib/redux/slices/groups/types';

interface ExploreGroupCardWrapperPropsI {
  status: 'private' | 'public';
}
const ExploreGroupCardWrapper: React.FC<ExploreGroupCardWrapperPropsI> = ({ status }) => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const isPrivate = status === 'private';
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const toast = useToast();

  const exploreGroup = useAppSelector((state) => state.groupsReducer.exploreGroups).filter(
    // eslint-disable-next-line no-underscore-dangle
    (d) => d._private === isPrivate,
  );

  const handleGroupCardButtonClick = async (groupId: number) => {
    try {
      if (isPrivate) {
        if (!member) return;
        await dispatch(sendGroupRequestToJoin(groupId)).unwrap();
      } else {
        await dispatch(joinGroup(groupId)).unwrap();
      }
      toast({
        title: 'Success',
        description: isPrivate ? 'Request sent successfully' : 'Joined successfully',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };

  return (
    <>
      {exploreGroup.map((g) => (
        <Box
          cursor={g._private ? 'unset' : 'pointer'}
          marginStart="0 !important"
          w={{
            base: '100%',
            sm: '100%',
            md: '31%',
            lgx: '23%',
          }}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (!g._private) {
              navigate(`/dashboard/groups/group/${g.id}`);
            }
          }}
          position="relative"
        >
          <GroupsCard
            img={
              // g.currentCoverImage?.source
              //   ? getImageFromS3AsUrl(g.currentCoverImage?.source)
              // :
              Images.group.logo
            }
            member={g.memberCount}
            name={g.groupName}
            isPrivateGroup={g._private}
          >
            <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
              <Box maxW={g._private ? 'unset' : '99px'} maxH="38px">
                <Common.ImpaktButton
                  borderRadius="8px"
                  fontWeight="600"
                  border="1px solid #1C1C28"
                  justifyContent="space-around"
                  fontSize="16px"
                  _hover={{ backgroundColor: '#000', color: '#fff' }}
                  variant={
                    g._private
                      ? g.request?.status !== UserRequestStatus.Pending
                        ? 'transparent'
                        : 'black'
                      : 'transparent'
                  }
                  onClick={() => {
                    if (g._private) {
                      if (g.request?.status !== UserRequestStatus.Pending) {
                        handleGroupCardButtonClick(g.id);

                        return;
                      }

                      return;
                    }
                    handleGroupCardButtonClick(g.id);
                  }}
                  leftIcon={g._private ? undefined : <I.UnionIcon width="12px" />}
                >
                  {g._private
                    ? g.request?.status !== UserRequestStatus.Pending
                      ? 'Request to join'
                      : 'Pending'
                    : 'Join'}
                </Common.ImpaktButton>
              </Box>
            </Box>
          </GroupsCard>
        </Box>
      ))}
    </>
  );
};

export default ExploreGroupCardWrapper;
