import { GridItem, SimpleGrid, Text, Input, Button } from "@chakra-ui/react";
import { memo } from "react";

const SubscribeArea = () => {
  return (
    <SimpleGrid
      zIndex={2}
      paddingTop={16}
      spacing={0}
      columns={3}
      rowGap={2}
      h={100}
      w={{ base: "full", md: "fit-content" }}
      px={{ base: 10, sm: 100, md: 0 }}
    >
      <GridItem colSpan={{ base: 3, md: 2 }}>
        <Input
          w="full"
          minH={12}
          color="white"
          borderWidth={0}
          placeholder="Email"
          borderRadius={"5px"}
          borderColor={"white"}
          bgColor={"whiteAlpha.600"}
          borderRightRadius={{ base: "5px", md: 0 }}
          _placeholder={{ color: "whiteAlpha.700" }}
        />
      </GridItem>
      <GridItem colSpan={{ base: 3, md: 1 }}>
        <Button
          w="full"
          px="48px"
          py={"16px"}
          borderRadius={"5px"}
          minH={12}
          borderLeftRadius={{ base: "5px", md: 0 }}
          bgGradient="linear-gradient(143.78deg, #DC143C 18.94%, #B22222 78.86%)"
        >
          <Text>Subscribe</Text>
        </Button>
      </GridItem>
    </SimpleGrid>
  );
};

export default memo(SubscribeArea);
