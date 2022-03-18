import { Button, Text, VStack } from '@chakra-ui/react';

const CommunityChip = ({ title }: { title: string }) => {
  return (
    <VStack padding={0} margin={0} paddingBottom="19px">
      <Button variant="outline" borderRadius={100} py="8px" px="37px" borderColor="electric.300">
        <Text textStyle="regular3" color="electric.250">
          {title}
        </Text>
      </Button>
    </VStack>
  );
};

export default CommunityChip;
