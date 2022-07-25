import { Button, Text } from '@chakra-ui/react';
import { I } from 'components';
import * as React from 'react';

const CheckOurDiscourseButton: React.FC = () => {
  return (
    <Button
      as="a"
      href="https://discuss.impakt.com"
      w="full"
      p="2em"
      _hover={{ bgColor: 'rgba(255, 255, 255, 0.05)' }}
      _active={{
        bgColor: 'rgba(255, 255, 255, 0.05)',
      }}
      _focus={{
        border: '0',
      }}
      borderRadius="1em"
      justifyContent="flex-start"
      bgColor="rgba(255, 255, 255, 0.1)"
      leftIcon={<I.DiscourseIcon style={{ marginRight: '0.5em' }} />}
    >
      <Text textStyle="regular201" lineHeight="32px">
        Check our Discourse for more updates
      </Text>
    </Button>
  );
};
export default CheckOurDiscourseButton;
