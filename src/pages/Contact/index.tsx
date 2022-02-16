import DiscordSupport from './component/DiscordSupport';
import SendMessage from './component/SendMessage';

const ContactPage = () => {
  return (
    <>
      <SendMessage />
      <DiscordSupport />
    </>
  );
};

export default ContactPage;
