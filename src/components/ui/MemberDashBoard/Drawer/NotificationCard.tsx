import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
import { CloseIcon } from '@chakra-ui/icons';
import { PatchGroupRequestReqStatusEnum } from '@impakt-dev/api-client';
import { useGroupsRequestControllerV1AnswerRequestToJoinGroup } from '../../../../lib/impakt-dev-api-client/react-query/groups-request/groups-request';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../lib/zustand';
import { GetUserRes } from '../../../../lib/impakt-dev-api-client/react-query/types';

interface NoitificationCardProps {
  id: number;
  name: string;
  GroupName: string;
  requestorId: number;
  groupId: number;
  requestor: GetUserRes;
}

const NoitificationCard: React.FC<NoitificationCardProps> = ({
  id,
  name,
  GroupName,
  requestorId,
  groupId,
  requestor,
}) => {
  const { member } = usePersistedAuthStore();
  const {
    activeGroup,
    groupRequests,
    myGroups,
    membersOfGroup,
    setGroupRequests,
    setMyGroups,
    setMembersOfGroup,
  } = usePersistedGroupStore();
  const answerToGroupRequest = useGroupsRequestControllerV1AnswerRequestToJoinGroup();

  const acceptOrDeclineRequestToJoin = async (currentStatus: PatchGroupRequestReqStatusEnum) => {
    answerToGroupRequest.mutate(
      { data: { requestorId, status: currentStatus }, groupId },
      {
        onSuccess: () => {
          const shallow = [...groupRequests];
          const getGroupRequestIndex = groupRequests.findIndex(
            (groupRequestData) => groupRequestData.id === id,
          );

          if (getGroupRequestIndex !== -1) {
            shallow[getGroupRequestIndex].status = currentStatus;
            setGroupRequests(shallow);

            if (currentStatus === 'Accepted') {
              const shallowOfMyGroups = [...myGroups];
              const indexOfGroup = shallowOfMyGroups.findIndex(
                (group) => group.groupId === groupId,
              );

              if (indexOfGroup !== -1) {
                shallowOfMyGroups[indexOfGroup].Group.memberCount += 1;
                setMyGroups(shallowOfMyGroups);
              }
              if (membersOfGroup && member) {
                if (groupId === activeGroup?.id) {
                  setMembersOfGroup({
                    ...membersOfGroup,
                    Members: [
                      ...membersOfGroup.Members,
                      {
                        joinedAt: new Date().toISOString(),
                        userId: requestor?.id,
                        bannedAt: null,
                        groupId,
                        leftAt: null,
                        role: 'Member',
                        User: { ...requestor },
                      },
                    ],
                  });
                }
              }
            }
          }
        },
      },
    );
  };

  return (
    <Box
      mt="16px"
      border="1px solid #DFEDF2"
      borderRadius="16px"
      p={{ md: '24px', base: '16px' }}
      pl="0"
    >
      <Text as="span" color="#5C7FFF" fontWeight="600">
        {name}{' '}
      </Text>
      <Text as="span" color="#4E6070">
        wants to join your group:
      </Text>
      <Box color="#728BA3" display="flex" alignItems="center" mt="16px">
        <I.PeopleIcon width="20px" mr="12px" />
        <Text fontWeight="600">{GroupName}</Text>
      </Box>
      <Box mt="16px" display="flex" justifyContent="space-between" width="100%">
        <Common.ImpaktButton
          variant="black"
          color="#29323B"
          w="47%"
          h="42px"
          backgroundColor="#EEF4F6"
          borderRadius="8px"
          type="submit"
          fontWeight="600"
          isDisabled={answerToGroupRequest.isLoading}
          isLoading={answerToGroupRequest.isLoading}
          onClick={() => acceptOrDeclineRequestToJoin('Accepted')}
        >
          <I.CheckIcon width="16px" height="16px" />
          <Text fontSize={{ md: '16px', base: '14px' }} ml="11px">
            Accept
          </Text>
        </Common.ImpaktButton>
        <Common.ImpaktButton
          variant="black"
          color="#29323B"
          w="47%"
          h="42px"
          backgroundColor="transparent"
          borderRadius="8px"
          fontSize={{ md: '16px', base: '14px' }}
          isDisabled={answerToGroupRequest.isLoading}
          isLoading={answerToGroupRequest.isLoading}
          type="submit"
          fontWeight="600"
          onClick={() => acceptOrDeclineRequestToJoin('Declined')}
        >
          <CloseIcon color="#29323B" width="10px" height="10px" mr="11px" />
          Decline
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default NoitificationCard;
