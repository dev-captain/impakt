import React, { useState } from 'react';
import { Box, Text, Avatar, Button, useDisclosure } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
import { useForm } from 'hooks';
import { Common, I } from 'components';
import { useParams } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroupPropsI } from '../../../../../../../../../common/InputGroup';
import createGroupYupScheme from '../../../../../../../../../../lib/yup/schemas/createGroupYupScheme';
import { usePersistedGroupStore } from '../../../../../../../../../../lib/zustand';
import { useGroupsMemberControllerV1AssignRole } from '../../../../../../../../../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { renderToast } from '../../../../../../../../../../utils';
import ConfirmationModal from './ConfirmationModal';

interface ChallengesCardProps {
  title: string;
}
const RoleCard: React.FC<ChallengesCardProps> = ({ title }) => {
  const [inputValue, setInput] = useState('');
  const { errors, setValue } = useForm({
    resolver: yupResolver(createGroupYupScheme),
    defaultValues: { username: '' },
  });
  const memberRole = usePersistedGroupStore();
  const assignRole = useGroupsMemberControllerV1AssignRole();
  const { activeGroup, setMyGroups, myGroups, membersOfGroup } = usePersistedGroupStore();
  const [members, setMembers] = useState(membersOfGroup?.Members ?? []);
  const [searchedMembers, setSearchedMembers] = useState<Array<any>>([]);
  const [userIndex, setUserIndex] = useState({ id: -1, name: '' });
  const groupParam = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const checkString = (username, filterVal) => {
    let res = 0;
    let lastSearch = -1;
    for (let i = 0; i < filterVal.length; i += 1) {
      for (let j = lastSearch + 1; j < username.length; j += 1) {
        if (username[j] === filterVal[i]) {
          res += 1;
          lastSearch = j;
          break;
        }
      }
    }
    if (res === filterVal.length) return true;

    return false;
  };

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInput(e.target.value);
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
    const filterVal = e.target.value.toLowerCase();
    const result = members.filter((member) =>
      checkString(member.User.username.toLowerCase(), filterVal),
    );
    setSearchedMembers(result);
  };

  const handleOnAssignModerator = async (userId: number, Role) => {
    if (!activeGroup?.id) return;
    assignRole.mutate(
      {
        groupId: Number(groupParam?.id),
        userId: Number(userId),
        role: Role,
      },
      {
        onSuccess: () => {
          renderToast('success', `Assigned as a ${Role} successfully.`);
          const shallowOfMyGroups = [...myGroups];
          const indexOfGroup = shallowOfMyGroups.findIndex(
            (group) => group.groupId === activeGroup.id,
          );
          if (indexOfGroup !== -1) {
            setMyGroups(shallowOfMyGroups);
          }
          setMembers(
            members.map((member) => ({
              ...member,
              role: member.User.id === userId ? Role : member.role,
            })),
          );
        },
        onError: (err) => {
          if (err.response?.data.message === 'Member role is Moderator already...') {
            renderToast('error', `${userIndex.name} is already a moderator`);
          } else {
            renderToast('error', err.response?.data.message ?? 'Something went wrong');
          }
        },
      },
    );
  };
  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Username',
      onChange,
      type: 'text',
      name: 'username',
      errorMsg: errors?.username?.message,
      leftIcon: <I.SearchIcon color="#29323B" width="20px" height="20px" />,
      autoFocus: true,
      whiteMode: true,
      width: '50%',
      value: inputValue,
      rightIcon: (
        <I.CloseIcon
          color="#29323B"
          width="20px"
          height="20px"
          style={{ borderRadius: '50px', backgroundColor: '#91A8BD', fill: '#ffffff' }}
          onClick={() => {
            setInput('');
          }}
        />
      ),
    },
  ];

  return (
    <Box border="2px solid #EEF4F6" p="16px" borderRadius="16px" mb="16px">
      <Box display="flex" justifyContent="space-between" alignItem="center">
        <Text color="#29323B" fontSize={{ md: '18px', base: '12px' }} fontWeight="500">
          {title}
        </Text>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItem="center">
        {memberRole.role === 'Creator' && (
          <Text color="#29323B" fontSize={{ md: '14px', base: '14px' }} fontWeight="300">
            Assign group members to be moderators. They will be able to do everything you can,
            except deleting your group and assigning other moderators.
          </Text>
        )}
      </Box>
      {memberRole.role === 'Creator' && (
        <Box display="flex" width="100%" mt="12px">
          <Common.InputItems inputItems={inputItems} />
        </Box>
      )}
      <Box display="flex" width="100%" mt="12px">
        <Box w="full">
          {searchedMembers.map(
            ({ role, User }, index) =>
              role !== 'None' &&
              role !== 'Moderator' &&
              role !== 'Creator' && (
                <Box
                  key={`${User.id}-box`}
                  display="flex"
                  justifyContent="space-between"
                  marginTop="5px"
                  width="50%"
                  color="#29323B"
                  bg="#EEF4F6"
                  borderRadius="8px"
                  height="50px"
                >
                  <Box display="flex" alignItems="center">
                    <Avatar
                      name={User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                      width="32px"
                      height="32px"
                    />
                    <Text
                      color="#4E6070"
                      fontSize={{ lgx: '18px', md: '14px' }}
                      fontWeight="500"
                      marginLeft="16px"
                    >
                      {User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                    </Text>
                  </Box>
                  <Box marginLeft="1em" display="flex" alignItems="center">
                    {memberRole.role === 'Creator' && (
                      <Button
                        onClick={() => {
                          handleOnAssignModerator(User.id, 'Moderator');
                          searchedMembers.splice(index, 1);
                        }}
                      >
                        <AddIcon color="#4E6070" width="14px" height="14px" />
                      </Button>
                    )}
                  </Box>
                </Box>
              ),
          )}
        </Box>
      </Box>
      <Box display="flex" width="100%" mt="12px">
        <Box w="full">
          {members.map(
            ({ role, User }) =>
              role === 'Moderator' && (
                <Box
                  key={`${User.id}-box`}
                  display="flex"
                  justifyContent="space-between"
                  marginTop="5px"
                  width="50%"
                  color="#29323B"
                  bg="#EEF4F6"
                  borderRadius="8px"
                  height="50px"
                >
                  <Box display="flex" alignItems="center">
                    <Avatar
                      name={User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                      width="32px"
                      height="32px"
                    />
                    <Text
                      color="#4E6070"
                      fontSize={{ lgx: '18px', md: '14px' }}
                      fontWeight="500"
                      marginLeft="16px"
                    >
                      {User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
                    </Text>
                  </Box>
                  <Box marginLeft="1em" display="flex" alignItems="center">
                    {memberRole.role === 'Creator' && (
                      <Button
                        onClick={() => {
                          setUserIndex({ id: User.id, name: User.username });
                          onOpen();
                        }}
                      >
                        <CloseIcon color="#ff3333" width="12px" height="12px" />
                      </Button>
                    )}
                  </Box>
                </Box>
              ),
          )}
        </Box>
      </Box>
      <ConfirmationModal
        open={isOpen}
        close={() => onClose()}
        handleConfirm={() => handleOnAssignModerator(userIndex.id, 'Member')}
      />
    </Box>
  );
};

export default RoleCard;
