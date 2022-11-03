import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import GroupsModal from '../../../../../../GroupsModal';
import { useGroupsControllerV1Remove } from '../../../../../../../../../../lib/impakt-dev-api-client/react-query/groups/groups';
import { renderToast } from '../../../../../../../../../../utils';
import { useGroupsMemberControllerV1LeaveGroup } from '../../../../../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { usePersistedGroupStore } from '../../../../../../../../../../lib/zustand';

interface GroupSettingModalProps {
  open: boolean;
  close: () => void;
}

const ConformationModal: React.FC<GroupSettingModalProps> = ({ open, close }) => {
  const deleteGroup = useGroupsControllerV1Remove();
  const leaveGroup = useGroupsMemberControllerV1LeaveGroup();
  const { activeGroup, myGroups, setMyGroups, exploreGroups, setExploreGroups } =
    usePersistedGroupStore();
  const { role } = usePersistedGroupStore();
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
    <GroupsModal
      modalTitle={{
        text:
          role !== 'Creator'
            ? 'Are you sure you want to leave?'
            : 'Are you sure you want to delete group?',
      }}
      isOpen={open}
      onClose={close}
      showCloseButton
    >
      <Box display="flex" justifyContent="center" alignItems="center" mt="24px">
        <Box>
          {role === 'Creator' && (
            <Box display="flex" alignItems="center" justifyContent="center" marginBottom="24px">
              <I.PeopleIcon color="#F84153" />
              <Text color="#F84153" fontSize="24px" fontWeight="700" marginLeft="12px">
                {members?.length}
              </Text>
            </Box>
          )}
          <Common.ImpaktButton
            mt={{ md: 0, base: '10px' }}
            display="flex"
            justifyContent="center"
            margin="auto"
            colorScheme="#fff"
            w={{ md: '156px', base: '100%' }}
            ml={{ md: '16px', base: '0' }}
            _hover={{ bg: '#C41F30' }}
            _active={{ bg: '#910917', color: '#fff' }}
            h="60px"
            borderRadius="8px"
            type="submit"
            isDisabled={role === 'Creator' ? deleteGroup.isLoading : leaveGroup.isLoading}
            isLoading={role === 'Creator' ? deleteGroup.isLoading : leaveGroup.isLoading}
            fontSize={{ md: '20px' }}
            onClick={role === 'Creator' ? handleGroupDelete : handleLeaveGroup}
            fontWeight="700"
          >
            {role === 'Creator' ? (
              <DeleteIcon width="24px" height="24px" marginRight="20px" />
            ) : (
              <I.LeaveIcon width="24px" height="24px" marginRight="20px" />
            )}
            {role === 'Creator' ? 'Delete' : 'Leave'}
          </Common.ImpaktButton>
        </Box>
      </Box>
    </GroupsModal>
  );
};

export default ConformationModal;
