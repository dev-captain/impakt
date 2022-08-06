import * as React from 'react';
import { Common } from 'components';

import ContactUsForm from './ContactUsForm';

const ContactUsBox: React.FC = () => {
  return (
    <Common.Card
      maxW="576px"
      mt={{ base: '0px !important', lg: '12px !important' }}
      h="100%"
      w="full"
    >
      <ContactUsForm />
    </Common.Card>
  );
};

export default ContactUsBox;
