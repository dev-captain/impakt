import { Center } from '@chakra-ui/react';
import Icons from 'components/icons';
import { memo } from 'react';

const SocialIcon = ({ name, href }: { name: string; href?: string }) => {
  const Icon = Icons?.[name];

  return (
    <Center
      as="a"
      href={href}
      target="_blank"
      backgroundColor={{
        base: name === 'Twitter' ? '#3accff' : '#536DFE',
      }}
      w="60px"
      h="60px"
      borderRadius="40px"
    >
      {Icon && <Icon opacity={1} color="#3accff" scale="2" />}
    </Center>
  );
};

export default memo(SocialIcon);
