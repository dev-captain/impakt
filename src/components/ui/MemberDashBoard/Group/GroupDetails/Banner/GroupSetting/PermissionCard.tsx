import React from 'react';
import { Box, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
// import { Common } from 'components';

interface ChallengesCardProps {
  title: string;
}

const PermissionCard: React.FC<ChallengesCardProps> = ({ title }) => {
  const [value, setValue] = React.useState('Public');

  return (
    <Box border="2px solid #EEF4F6" p="16px" borderRadius="16px" mb="16px">
      <Text color="#29323B" fontSize={{ md: '18px', base: '12px' }} fontWeight="500">
        {title}
      </Text>
      <Box display="flex" width="100%" mt="12px">
        <RadioGroup onChange={setValue} value={value}>
          <Stack direction="row">
            <Radio value="Public">Public</Radio>
            <Radio value="Private">Private</Radio>
          </Stack>
        </RadioGroup>
      </Box>
    </Box>
  );
};

export default PermissionCard;
