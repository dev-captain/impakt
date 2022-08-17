import * as React from 'react';
import { Box, Button, useMediaQuery } from '@chakra-ui/react';
import { I } from 'components';
import { useNavigate } from 'react-router-dom';

const AddGroup = () => {
  const navigate = useNavigate();
  const [isLessThan1650] = useMediaQuery('(max-width: 1650px)');

  return (
    <Box
      display="flex"
      backgroundColor="#fff"
      borderRadius="24px"
      padding={{ base: '100px 0', md: '0' }}
      height="100%"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        backgroundColor="#1C1C28"
        width={isLessThan1650 ? '200px' : '238px'}
        height={isLessThan1650 ? '58px' : '64px'}
        fontWeight="700"
        color="#fff"
        _hover={{ backgroundColor: '#1C1C28' }}
        _active={{ backgroundColor: '#1C1C28' }}
        borderRadius="16px"
        _focus={{ boxShadow: 'none' }}
        justifyContent="space-evenly"
        fontSize={isLessThan1650 ? '16px' : '20px'}
        onClick={() => navigate('/dashboard/groups/create-group')}
      >
        <I.UnionIcon /> Create Group
      </Button>
    </Box>
  );
};
export default AddGroup;
