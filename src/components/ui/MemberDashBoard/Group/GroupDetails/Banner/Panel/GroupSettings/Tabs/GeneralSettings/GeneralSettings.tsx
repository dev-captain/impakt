import React from 'react';
import { Box, useDisclosure, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';

import ConfirmationModal from './ConfirmationModal';
import { usePersistedGroupStore } from '../../../../../../../../../../lib/zustand';
import { renderToast } from '../../../../../../../../../../utils';
import { useGroupsMemberControllerV1LeaveGroup } from '../../../../../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { useGroupsControllerV1Remove } from '../../../../../../../../../../lib/impakt-dev-api-client/react-query/groups/groups';

const GeneralSettings: React.FC = () => {
  const { role } = usePersistedGroupStore();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const deleteGroup = useGroupsControllerV1Remove();
  const leaveGroup = useGroupsMemberControllerV1LeaveGroup();
  const { activeGroup, myGroups, setMyGroups, setRole } = usePersistedGroupStore();
  const navigate = useNavigate();
  const members = usePersistedGroupStore().membersOfGroup?.Members?.filter(
    (m) => m.role !== 'None',
  );

  const handleGroupDelete = async () => {
    if (activeGroup?.id) {
      deleteGroup.mutate(
        { groupId: activeGroup.id },
        {
          onSuccess: () => {
            renderToast('success', `Group is deleted successfully`);
            const distractFromMyGroup = myGroups.filter(
              (myGroup) => myGroup.groupId !== activeGroup.id,
            );
            setMyGroups(distractFromMyGroup);
            // TODO update explore group on zustand
            navigate('/dashboard/groups');
          },
          onError: (err) => {
            renderToast('error', err.response?.data.message ?? 'Something went wrong');
          },
        },
      );
    }
  };

  const handleLeaveGroup = async () => {
    if (activeGroup) {
      leaveGroup.mutate(
        { groupId: activeGroup.id },
        {
          onSuccess: () => {
            renderToast('success', `Left from Group successfully`);
            const distractFromMyGroup = myGroups.filter(
              (myGroup) => myGroup.groupId !== activeGroup.id,
            );
            setRole('None');
            setMyGroups(distractFromMyGroup);
            navigate('/dashboard/groups');
          },
          onError: (err) => {
            renderToast('error', err.response?.data.message ?? 'Something went wrong');
          },
        },
      );
    }
  };

  return (
    <>
      <Box
        height={{ base: '550px', md: 'aut0' }}
        overflowY="auto"
        paddingRight="8px"
        css={{
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {
            visibility: 'initial',
            width: '10px',
            background: '#D3E2F0',
            borderRadius: '24px',
          },
        }}
      >
        <Common.ImpaktButton
          mt={{ md: 0, base: '10px' }}
          variant="primary"
          color="#F84153"
          w={{ md: '222px', base: '100%' }}
          ml={{ md: '16px', base: '0' }}
          h="60px"
          bg="#FEE1E3"
          _hover={{ bg: '#C41F30', color: '#fff' }}
          _active={{ bg: '#910917', color: '#fff' }}
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '20px' }}
          onClick={() => onOpen()}
          fontWeight="600"
        >
          {role === 'Creator' ? (
            <DeleteIcon width="24px" height="24px" marginRight="20px" />
          ) : (
            <I.LeaveIcon width="24px" height="24px" marginRight="20px" />
          )}
          {role === 'Creator' ? 'Delete Group' : 'Leave Group'}
        </Common.ImpaktButton>
      </Box>
      <ConfirmationModal
        isLoading={deleteGroup.isLoading || leaveGroup.isLoading}
        onClick={role === 'Creator' ? handleGroupDelete : handleLeaveGroup}
        title={
          role === 'Creator'
            ? 'Are you sure you want to delete group?'
            : 'Are you sure you want to leave?'
        }
        buttonIcon={
          role === 'Creator' ? (
            <I.TrashIcon width="24px" height="24px" />
          ) : (
            <I.LeaveIcon width="24px" height="24px" />
          )
        }
        buttonTitle={role === 'Creator' ? 'Delete' : 'Leave'}
        open={isOpen}
        close={() => onClose()}
      >
        {role === 'Creator' && (
          <Box display="flex" alignItems="center" justifyContent="center" marginBottom="24px">
            <I.PeopleIcon color="#F84153" />
            <Text color="#F84153" fontSize="24px" fontWeight="700" marginLeft="12px">
              {members?.length}
            </Text>
          </Box>
        )}
      </ConfirmationModal>
    </>
  );
};

export default GeneralSettings;
