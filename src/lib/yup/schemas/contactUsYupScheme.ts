import * as yup from 'yup';
import { memberName, message, email, topic } from '../fields';

const contactUsYupScheme = yup.object().shape({
  memberName: memberName.required('Your name is required field'),
  email,
  message,
  topic,
});

export default contactUsYupScheme;
