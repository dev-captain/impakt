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
  setSearchGroup: (string) => void;
  showToggle: boolean;
}
const ExploreGroupCardHeader: React.FC<ExploreGroupCardWrapperHeaderPropsI> = ({
  status,
  setStatus,
  setSearchGroup,
  showToggle,
}) => {
  const [inputValue, setInput] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setInput(e.target.value);
    const filterVal = e.target.value.toLowerCase();
    setSearchGroup(filterVal);
  };
  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Search',
      onChange,
      type: 'text',
      name: 'Groupname',
      leftIcon: <I.SearchIcon color="#29323B" width="20px" height="20px" />,
      autoFocus: false,
      whiteMode: true,
      width: '100%',
      value: inputValue,
    },
  ];

  return (
    <GroupCardWrapperHeader title={showToggle ? 'Explore' : 'Explore Groups'}>
      <Box
        display="flex"
        flexDir={{ base: 'column-reverse', sm: 'row' }}
        justifyContent="flex-end"
        alignItems="center"
        w={{ base: '100%' }}
        // alignItems={{ base: 'flex-end', sm: 'center' }}
      >
        <Box display="flex" mr={{ base: '0', sm: '20px' }} w={{ base: '282px', sm: 'auto' }}>
          <Common.InputItems inputItems={inputItems} />
        </Box>
        {showToggle && (
          <Box m="20px 0 !important">
            <ExploreGroupCardPrivatePublicToggleButton status={status} setStatus={setStatus} />
          </Box>
        )}
      </Box>
    </GroupCardWrapperHeader>
  );
};

export default ExploreGroupCardHeader;
