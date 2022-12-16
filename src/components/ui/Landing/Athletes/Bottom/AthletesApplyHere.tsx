import { Box, Text } from '@chakra-ui/react';
import { Common } from 'components';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const AthletesApplyHere: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Box textAlign="center">
      <Text
        fontSize={{ md: '32px', base: '26px' }}
        fontWeight="500"
        lineHeight="120%"
        mb="40px"
        color="#1C1C28"
      >
        Got what it takes to be an ICON?
      </Text>
      <Common.ImpaktButton
        variant="black"
        height="50px"
        w={{ md: '300px', base: '170px' }}
        gap="8px"
        padding="10px 14px"
        // disabled
        onClick={() => navigate('/contact')}
      >
        Apply Here
      </Common.ImpaktButton>
    </Box>
  );
};

export default AthletesApplyHere;
