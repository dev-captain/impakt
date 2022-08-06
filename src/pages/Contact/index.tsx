// import DiscordSupport from './component/DiscordSupport';
// import SendMessage from './component/SendMessage';
import { Container } from '@chakra-ui/react';
import { S } from 'components';
import DiscordSupport from '../../components/ui/ContactUs/DiscordSupport';

const ContactPage = () => {
  return (
    <Container spacing={0} backgroundColor="" p={0} minW="full" m={0} bgColor="">
      <S.ContactUs />
      <DiscordSupport />
    </Container>
  );
};

/* // <VStack spacing={0} bgColor={bgColor}>
    //   <SendMessage />
    //   <DiscordSupport />
    // </VStack> */

export default ContactPage;
