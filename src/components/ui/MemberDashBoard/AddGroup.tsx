import * as React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { I } from 'components';
import { useNavigate } from 'react-router-dom';

const AddGroup = () => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      backgroundColor="#fff"
      borderRadius="24px"
      padding={{ base: '100px 0', md: '0' }}
      height="100%"
      minHeight="300px"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        backgroundColor="#1C1C28"
        width={{ lgx: '238px', base: '200px' }}
        height={{ lgx: '64px', base: '58px' }}
        fontWeight="700"
        color="#fff"
        _hover={{ backgroundColor: '#1C1C28' }}
        _active={{ backgroundColor: '#1C1C28' }}
        borderRadius="16px"
        _focus={{ boxShadow: 'none' }}
        justifyContent="space-evenly"
        fontSize={{ lgx: '20px', base: '16px' }}
        onClick={() => navigate('/dashboard/groups/create-group')}
      >
        <I.UnionIcon /> Create Group
      </Button>
    </Box>
  );
};
export default AddGroup;
