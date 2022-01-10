import { Center } from "@chakra-ui/react";
import Icons from "components/icons";
import { memo } from "react";

const SocialIcon = ({ name }: { name: string }) => {
  const Icon = Icons?.[name];

  return (
    <Center
      backgroundColor={{
        base: "blackAlpha.800",
      }}
      w="40px"
      h="40px"
      borderRadius="8px"
    >
      {Icon && <Icon opacity={1} />}
    </Center>
  );
};

export default memo(SocialIcon);
