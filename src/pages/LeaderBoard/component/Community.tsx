import { HStack, Text, VStack } from '@chakra-ui/react';
import Spacer from 'components/common/Spacer';
import { CommunityData } from 'data';
import CommunityChip from './CommunityChip';

const Community = () => {
  return (
    <VStack>
      <HStack w="full" spacing={5} justify={{ base: 'center', md: 'center' }}>
        <Text textStyle="bold7" fontWeight="300">
          Top
        </Text>
        <Text textStyle="bold7">Communities</Text>
      </HStack>
      <Spacer size="50px" />
      <HStack
        w="full"
        maxW="1100px"
        align="center"
        spacing="12px"
        className="grid"
        justify="center"
      >
        {CommunityData.map((community, index) => {
          return <CommunityChip title={community} key={index.toString()} />;
        })}
      </HStack>
    </VStack>
  );
};

export default Community;
