import { GridItem, SimpleGrid, Text, Input, Button, VStack } from '@chakra-ui/react';
import useNewsletter from 'hooks/useNewsletter';
import { memo, useState } from 'react';

const SubscribeArea = () => {
  const [email, setEmail] = useState('');
  const { sendData, loading } = useNewsletter();

  return (
    <VStack paddingTop={16}>
      <Text fontSize="xl" zIndex={2} paddingBottom={4}>
        Join our mailing list and find out first when around stuffs happens!
      </Text>
      <SimpleGrid
        zIndex={2}
        spacing={0}
        columns={3}
        rowGap={2}
        h={100}
        w={{ base: 'full', md: 'fit-content' }}
        px={{ base: 10, sm: 100, md: 0 }}
      >
        <GridItem colSpan={{ base: 3, md: 2 }}>
          <Input
            w="full"
            minH={12}
            color="white"
            borderWidth={0}
            placeholder="Email"
            borderRadius="5px"
            borderColor="white"
            bgColor="whiteAlpha.600"
            onChange={(event) => setEmail(event.target.value as string)}
            borderRightRadius={{ base: '5px', md: 0 }}
            _placeholder={{ color: 'whiteAlpha.700' }}
          />
        </GridItem>
        <GridItem colSpan={{ base: 3, md: 1 }}>
          <Button
            isDisabled={loading}
            w="full"
            px="48px"
            py="16px"
            borderRadius="5px"
            minH={12}
            onClick={() => {
              sendData({ email });
            }}
            borderLeftRadius={{ base: '5px', md: 0 }}
            bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
          >
            <Text>Subscribe</Text>
          </Button>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};

export default memo(SubscribeArea);
