import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
import { CloseIcon } from '@chakra-ui/icons';
import { PatchGroupRequestReqStatusEnum } from '@impakt-dev/api-client';
import { useAppDispatch } from 'hooks';
import { answerToGroupRequest } from '../../../../lib/redux/slices/groups/actions/answerToGroupRequest';

interface NoitificationCardProps {
  name: string;
  GroupName: string;
  requestorId: number;
  groupId: number;
}

const NoitificationCard: React.FC<NoitificationCardProps> = ({
  name,
  GroupName,
  requestorId,
  groupId,
}) => {
  const dispatch = useAppDispatch();

  const acceptOrDeclineRequestToJoin = async (currentStatus: PatchGroupRequestReqStatusEnum) => {
    await dispatch(answerToGroupRequest({ requestorId, status: currentStatus, groupId })).unwrap();
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
