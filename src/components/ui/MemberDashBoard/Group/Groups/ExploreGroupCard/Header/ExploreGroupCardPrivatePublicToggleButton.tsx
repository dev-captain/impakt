import React from 'react';
import { Button } from '@chakra-ui/react';

interface ExploreGroupCardPrivatePublicToggleButtonPropsI {
  status: 'public' | 'private';
  handleChangeStatus: (status: 'public' | 'private') => void;
}

const ExploreGroupCardPrivatePublicToggleButton: React.FC<
  ExploreGroupCardPrivatePublicToggleButtonPropsI
> = ({ status, handleChangeStatus }) => {
  return (
    <>
      <Button
        color={status === 'public' ? '#fff' : '#000'}
        bg={status === 'public' ? '#29323B' : '#fff'}
        _hover={{
          backgroundColor: status === 'private' ? '#fff' : '#29323B',
          color: status === 'private' ? '#000' : '#fff',
        }}
        _focus={{ boxShadow: 'none' }}
        w="120px"
        h="38px"
        borderRadius="8px 0 0 8px"
        onClick={() => {
          handleChangeStatus('public');
        }}
      >
        Public
      </Button>
      <Button
        bg={status === 'private' ? '#29323B' : '#fff'}
        color={status === 'private' ? '#fff' : '#000'}
        _hover={{
          backgroundColor: status === 'public' ? '#fff' : '#29323B',
          color: status === 'public' ? '#000' : '#fff',
        }}
        _focus={{ boxShadow: 'none' }}
        w="120px"
        h="38px"
        borderRadius="0 8px 8px 0"
        onClick={() => {
          handleChangeStatus('private');
        }}
      >
        Private
      </Button>
    </>
  );
};
export default ExploreGroupCardPrivatePublicToggleButton;
