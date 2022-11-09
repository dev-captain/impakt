import { useColorModeValue, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import DiscordSupport from './component/DiscordSupport';
import SendMessage from './component/SendMessage';

const ContactPage = () => {
  const bgColor = useColorModeValue('glass.800', 'glass.300');
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <VStack spacing={0} bgColor={bgColor}>
      <SendMessage />
      <DiscordSupport />
    </VStack>
  );
};

export default ContactPage;
