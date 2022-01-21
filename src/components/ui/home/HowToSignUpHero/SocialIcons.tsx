import { Center, HStack, VStack } from '@chakra-ui/react';
import Icons from 'components/icons';

const SocialIcons = ({ forMobile }: { forMobile?: boolean }) => {
  const StackComponent = forMobile ? HStack : VStack;

  return (
    <StackComponent
      right={{
        base: 10,
        md: 20,
        xl: '44px',
      }}
      zIndex={1}
      align="center"
      justify="center"
      spacing="16px"
      flexDir={forMobile ? 'row' : 'column'}
      pos={forMobile ? 'inherit' : 'absolute'}
      paddingTop={{ base: forMobile ? 0 : 8, md: 0 }}
      display={{ base: forMobile ? 'flex' : 'none', md: forMobile ? 'none' : 'flex' }}
    >
      <SocialIcon name="Facebook" />
      <SocialIcon name="Google" />
      <SocialIcon name="Apple" />
    </StackComponent>
  );
};

const SocialIcon = ({ name }: { name: string }) => {
  const Icon = Icons?.[name];

  return (
    <Center backgroundColor="blackAlpha.400" w="40px" h="40px" borderRadius="8px" p={0}>
      <VStack w="full">{Icon && <Icon />}</VStack>
    </Center>
  );
};

export default SocialIcons;
