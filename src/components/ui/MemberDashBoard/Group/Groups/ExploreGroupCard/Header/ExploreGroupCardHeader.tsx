import { Box } from '@chakra-ui/react';
import React, { useState } from 'react';
import { Common, I } from 'components';
import { InputGroupPropsI } from 'components/common/InputGroup';
// import * as React from 'react';
import GroupCardWrapperHeader from '../../GroupCardHeader';
import ExploreGroupCardPrivatePublicToggleButton from './ExploreGroupCardPrivatePublicToggleButton';

interface ExploreGroupCardWrapperHeaderPropsI {
  status: 'Public' | 'Private';
  setStatus: (status: 'Public' | 'Private') => void;
  // searchGroup: string;
  setSearchGroup: (string) => void;
}
const ExploreGroupCardHeader: React.FC<ExploreGroupCardWrapperHeaderPropsI> = ({
  status,
  setStatus,
  setSearchGroup,
}) => {
  const [inputValue, setInput] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInput(e.target.value);
    const filterVal = e.target.value.toLowerCase();
    setSearchGroup(filterVal);
    // setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
    // const result = members.filter((member) =>
    //   checkString(member.User.username.toLowerCase(), filterVal),
    // );
    // setSearchedMembers(result);
  };
  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Groupname',
      onChange,
      type: 'text',
      name: 'Groupname',
      // errorMsg: errors?.username?.message,
      leftIcon: <I.SearchIcon color="#29323B" width="20px" height="20px" />,
      autoFocus: true,
      whiteMode: true,
      width: '100%',
      value: inputValue,
      // rightIcon: (
      //   <I.CloseIcon
      //     color="#29323B"
      //     width="20px"
      //     height="20px"
      //     style={{ borderRadius: '50px', backgroundColor: '#91A8BD', fill: '#ffffff' }}
      //     onClick={() => {
      //       setInput('');
      //     }}
      //   />
      // ),
    },
  ];
  return (
    <GroupCardWrapperHeader title="Explore">
      <Box display="flex" justifyContent="flex-end" alignItems="center">
        <Box display="flex">
          <Common.InputItems inputItems={inputItems} />
        </Box>
        <Box m="20px 0 !important">
          <ExploreGroupCardPrivatePublicToggleButton status={status} setStatus={setStatus} />
        </Box>
      </Box>
    </GroupCardWrapperHeader>
  );
};

export default ExploreGroupCardHeader;
