import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface ChallengeCardMetaLabelPropsI {
  times: { d: number; h: string | number; m: string | number };
  creatorName?: string;
}

const ChallengeCardMetaLabel: React.FC<ChallengeCardMetaLabelPropsI> = ({ times, creatorName }) => {
  return (
    <Box
      color="#29323B"
      fontWeight="600"
      fontSize={{ base: '13px', md: '18px' }}
      display="flex"
      flexWrap="wrap"
      alignItems="center"
    >
      <Text background="#EEF4F6" borderRadius="4px" p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}>
        {times.d}
      </Text>
      <Text m="0 6px">:</Text>
      <Text background="#EEF4F6" borderRadius="4px" p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}>
        {times.h}
      </Text>
      <Text m="0 6px">:</Text>
      <Text background="#EEF4F6" borderRadius="4px" p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}>
        {times.m}
      </Text>
      {/* <Text m="0 6px">:</Text> */}
      {/* <Text
        background="#EEF4F6"
        borderRadius="4px"
        p={{ base: '4px 6px', md: '6px 10px 5px 9px' }}
        mr="16px"
      >
        {times.s}Sec
      </Text> */}
      {creatorName && (
        <Text color="#4E6070" fontWeight="500" fontSize="16px" lineHeight="18px">
          {`by ${creatorName}`}
        </Text>
      )}
    </Box>
  );
};
export default ChallengeCardMetaLabel;
