import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { Common } from '@/components';
import PermissionCard from './PermissionCard';
import RoleCard from './RoleCard';
import { useGroupsControllerV1PatchGroup } from '../../../../../../../../../../lib/impakt-dev-api-client/react-query/groups/groups';

import { renderToast } from '../../../../../../../../../../utils';
import { usePersistedGroupStore } from '../../../../../../../../../../lib/zustand';

const PermissionTab: React.FC = () => {
  const updateGroup = useGroupsControllerV1PatchGroup();
  const [value, setValue] = React.useState('Public');

  const groupParam = useParams();
  const { activeGroup, setActiveGroup, setMyGroups, myGroups, role } = usePersistedGroupStore();
  React.useEffect(() => {
    // eslint-disable-next-line no-underscore-dangle
    if (activeGroup?.private) {
      setValue('Private');
    } else {
      setValue('Public');
    }
  }, [activeGroup]);

  const handleOnUpdate = async () => {
    if (!activeGroup?.id) return;
    updateGroup.mutate(
      {
        data: { private: value !== 'Public' },
        groupId: Number(groupParam?.id),
      },
      {
        onSuccess: (newStatus) => {
          renderToast('success', 'Group permission changed successfully.');
          setActiveGroup({ ...activeGroup, private: newStatus.private });
          const shallowOfMyGroups = [...myGroups];
          const indexOfGroup = shallowOfMyGroups.findIndex(
            (group) => group.groupId === activeGroup.id,
          );
          if (indexOfGroup !== -1) {
            shallowOfMyGroups[indexOfGroup].Group.private = newStatus.private;
            setMyGroups(shallowOfMyGroups);
          }
        },
        onError: (err) => {
          renderToast('error', err.response?.data.message ?? 'Something went wrong');
        },
      },
    );
  };

  return (
    <Box>
      <Box
        height="470px"
        overflow="auto"
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
        <PermissionCard title="Is your group public or private?">
          <Common.Toggle
            leftTitle="Public"
            rightTitle="Private"
            onToggle={value === 'Public' ? () => setValue('Private') : () => setValue('Public')}
            on={value === 'Public'}
          />
        </PermissionCard>

        <RoleCard title="Moderators" />
      </Box>
      {role === 'Creator' && (
        <Box mt="20px" textAlign="end">
          <Common.ImpaktButton
            variant="black"
            w="147px"
            h="60px"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="500"
            isLoading={updateGroup.isLoading}
            isDisabled={updateGroup.isLoading}
            onClick={() => handleOnUpdate()}
          >
            <Text
              ml={{ md: '11px', base: '6px' }}
              fontSize={{ md: '20px', base: '16px' }}
              fontWeight="600"
            >
              Save
            </Text>
          </Common.ImpaktButton>
        </Box>
      )}
    </Box>
  );
};

export default PermissionTab;
