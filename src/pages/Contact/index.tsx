import { Container } from '@chakra-ui/react';
import { S } from '@/components';
import DiscordSupport from '../../components/ui/ContactUs/DiscordSupport';

const ContactPage = () => {
  return (
    <Container spacing={0} backgroundColor="" p={0} minW="full" m={0} bgColor="">
      <S.ContactUs />
      <DiscordSupport />
    </Container>
  );
};

export default ContactPage;
