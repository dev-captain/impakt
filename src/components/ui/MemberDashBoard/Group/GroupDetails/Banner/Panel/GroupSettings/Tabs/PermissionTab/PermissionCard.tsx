import React from 'react';
import { Box, Divider, Text, Tooltip, VStack } from '@chakra-ui/react';
import { I } from 'components';
// import { Common } from 'components';

interface ChallengesCardProps {
  title: string;
}

const PermissionCard: React.FC<ChallengesCardProps> = ({ title, children }) => {
  return (
    <Box border="2px solid #EEF4F6" p="16px" borderRadius="16px" mb="16px">
      <Box display="flex" justifyContent="space-between" alignItem="center">
        <Text color="#29323B" fontSize={{ md: '18px', base: '12px' }} fontWeight="500">
          {title}
        </Text>

        <Tooltip
          bg="#FFFFFF"
          cursor="pointer"
          borderRadius="16px"
          width="900px"
          boxShadow="0px 4px 6px -2px rgba(0, 0, 0, 0.12)"
          hasArrow
          label={
            <VStack
              justifyContent="flex-start"
              alignItems="flex-start"
              color="#4E6070"
              p="2em"
              columnGap="24px"
            >
              <Box>
                <Text fontWeight="600">Public</Text>
              </Box>
              <Box>
                <Text fontWeight="400">Recommended for growing a following.</Text>
              </Box>
              <Box>
                <ul>
                  <li>
                    <Text>Anyone can find your group</Text>
                  </li>

                  <li>
                    <Text>Anyone can join (no approval needed)</Text>
                  </li>

                  <li>
                    <Text>Anyone can view group content</Text>
                  </li>
                </ul>
              </Box>
              <Divider />
              <Box>
                <Text>Private</Text>
              </Box>
              <Box>
                <Text fontWeight="400">Recommended for closed circles (e.g. friends, family)</Text>
              </Box>
              <Box>
                <ul>
                  <li>Only group members can view group content</li>
                  <li>People can only join if you manually accept their join request</li>
                </ul>
              </Box>
            </VStack>
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
