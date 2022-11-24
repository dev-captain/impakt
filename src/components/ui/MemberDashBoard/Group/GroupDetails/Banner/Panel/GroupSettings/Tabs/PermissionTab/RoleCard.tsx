import React, { useState } from 'react';
import { Box, Text, Avatar, Button } from '@chakra-ui/react';
import { AddIcon, CloseIcon } from '@chakra-ui/icons';
// import { Common } from 'components';
import { useForm } from 'hooks';
import { Common, I } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroupPropsI } from '../../../../../../../../../common/InputGroup';
import createGroupYupScheme from '../../../../../../../../../../lib/yup/schemas/createGroupYupScheme';
import { usePersistedGroupStore } from '../../../../../../../../../../lib/zustand';

interface ChallengesCardProps {
  title: string;
}

const RoleCard: React.FC<ChallengesCardProps> = ({ title }) => {
  const { errors, setValue } = useForm({
    resolver: yupResolver(createGroupYupScheme),
    defaultValues: { username: '' },
  });
  const members = usePersistedGroupStore().membersOfGroup?.Members ?? [];
  const [searchedMembers, setSearchedMembers] = useState<Array<any>>([]);
  const checkString = (username, filterVal) => {
    console.log(username);
    console.log(filterVal);
    let res = 0;
    for (let i = 0; i < filterVal.length; i += 1) {
      if (username.includes(filterVal[i])) {
        res += 1;
      }
    }
    if (res === filterVal.length) return true;
    return false;
  };
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
    const filterVal = e.target.value.split('').sort().join('').toLowerCase();
    console.log(members[0].User.username.split('').sort().join('').toLowerCase());
    const result = members.filter((member) =>
      checkString(member.User.username.split('').sort().join('').toLowerCase(), filterVal),
    );
    setSearchedMembers(result);
  };
  const addModeratorRole = (e) => {
    console.log(e);
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
      rightIcon: <I.CloseIcon color="#29323B" width="20px" height="20px" />,
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
        <Text color="#29323B" fontSize={{ md: '14px', base: '14px' }} fontWeight="300">
          Assign group members to be moderators. They will be able to do everything you can, except
          deleting your group and assigning other moderators.
        </Text>
      </Box>
      <Box display="flex" width="100%" mt="12px">
        <Common.InputItems inputItems={inputItems} />
      </Box>
      <Box display="flex" width="100%" mt="12px">
        <Box w="full">
          {searchedMembers.map(
            ({ role, User }) =>
              role !== 'None' &&
              role !== 'Moderator' && (
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
                    <Button onClick={addModeratorRole}>
                      <AddIcon color="#4E6070" width="14px" height="14px" />
                    </Button>
                    {/* <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" /> */}
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
                    <Button>
                      <CloseIcon color="#ff3333" width="12px" height="12px" />
                    </Button>
                    {/* <Box backgroundColor="#53E0C2" width="8px" height="8px" borderRadius="50%" /> */}
                  </Box>
                </Box>
              ),
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default RoleCard;
