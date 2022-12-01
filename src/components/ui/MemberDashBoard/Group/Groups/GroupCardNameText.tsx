import React from 'react';
import { Text } from '@chakra-ui/react';

interface GroupCardNameTitleTextPropsI {
  groupName: string;
}
const GroupCardNameTitleText: React.FC<GroupCardNameTitleTextPropsI> = ({ groupName }) => {
  return (
    <Text textStyle="semiBold6" color="fg-1">
      {groupName}
    </Text>
  );
};

export default GroupCardNameTitleText;
