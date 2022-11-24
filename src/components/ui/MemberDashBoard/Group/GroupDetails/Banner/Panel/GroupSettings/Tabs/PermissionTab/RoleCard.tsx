import React from 'react';
import { Box, Text } from '@chakra-ui/react';
// import { Common } from 'components';
import { useForm } from 'hooks';
import { Common } from 'components';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputGroupPropsI } from '../../../../../../../../../common/InputGroup';
import createGroupYupScheme from '../../../../../../../../../../lib/yup/schemas/createGroupYupScheme';

interface ChallengesCardProps {
  title: string;
}

const RoleCard: React.FC<ChallengesCardProps> = ({ title, children }) => {
  const { errors, setValue } = useForm({
    resolver: yupResolver(createGroupYupScheme),
    defaultValues: { username: '' },
  });
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };
  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Username',
      onChange,
      type: 'text',
      name: 'username',
      errorMsg: errors?.username?.message,
      autoFocus: true,
      whiteMode: true,
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
      <Common.InputItems inputItems={inputItems} />
      <Box display="flex" width="100%" mt="12px">
        {children}
      </Box>
    </Box>
  );
};

export default RoleCard;
