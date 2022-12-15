import { Box, VStack, Text, Divider, StackProps } from '@chakra-ui/react';
import { FC } from 'react';

const PublicPrivateGroupHelperText: FC<StackProps> = ({ ...props }) => {
  return (
    <VStack
      justifyContent="flex-start"
      alignItems="flex-start"
      color="#4E6070"
      p="2em"
      columnGap="24px"
      {...props}
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
        <Text fontWeight="600">Private</Text>
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
  );
};

export default PublicPrivateGroupHelperText;
