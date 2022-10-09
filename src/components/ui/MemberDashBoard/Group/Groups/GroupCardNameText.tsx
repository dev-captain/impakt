import React from 'react';
import { Text } from '@chakra-ui/react';

interface GroupCardNameTitleTextPropsI {
  groupName: string;
}
const GroupCardNameTitleText: React.FC<GroupCardNameTitleTextPropsI> = ({ groupName }) => {
  return (
    <Text as="h1" textStyle="TitleBold64" fontSize={{ lgx: '20px', base: '16px' }} color="#1C1C28">
      {groupName}
    </Text>
  );
};

export default GroupCardNameTitleText;
