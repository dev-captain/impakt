import React from 'react';
import { Box, Text, Tooltip } from '@chakra-ui/react';
import { I } from 'components';
// import { Common } from 'components';

interface ChallengesCardProps {
  title: string;
  helperText: string;
}

const PermissionCard: React.FC<ChallengesCardProps> = ({ title, helperText, children }) => {
  return (
    <Box border="2px solid #EEF4F6" p="16px" borderRadius="16px" mb="16px">
      <Box display="flex" justifyContent="space-between" alignItem="center">
        <Text color="#29323B" fontSize={{ md: '18px', base: '12px' }} fontWeight="500">
          {title}
        </Text>
        <Tooltip
          bg="#FFFFFF"
          borderRadius="16px"
          width="900px"
          boxShadow="0px 4px 6px -2px rgba(0, 0, 0, 0.12)"
          hasArrow
          label={
            <Text
              color="#4E6070"
              padding="5px"
              dangerouslySetInnerHTML={{
                __html: helperText,
              }}
            />
          }
          mt="3"
          placement="auto"
          closeOnClick={false}
        >
          <Box>
            <I.InfoIcon />
          </Box>
        </Tooltip>
      </Box>
      <Box display="flex" width="100%" mt="12px">
        {children}
      </Box>
    </Box>
  );
};

export default PermissionCard;
