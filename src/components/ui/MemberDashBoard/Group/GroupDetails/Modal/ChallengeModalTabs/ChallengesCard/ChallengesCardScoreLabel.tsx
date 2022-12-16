import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface ChallengesCardScoreLabelPropsI {
  score: any;
  icon: any;
}
const ChallengesCardScoreLabel: React.FC<ChallengesCardScoreLabelPropsI> = ({ score, icon }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      background="#EEF4F6"
      borderRadius="8px"
      p={{ base: '5px 10px', md: '8px 12px' }}
    >
      {icon}
      <Text color="#4E6070" fontWeight="500" ml="10px" fontSize={{ base: '13px', md: '16px' }}>
        {score} {/* {challenge} */}
      </Text>
    </Box>
  );
};

export default ChallengesCardScoreLabel;
