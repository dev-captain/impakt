import * as yup from 'yup';
import { email } from '../fields';

const waitlistYupScheme = yup.object().shape({
  email,
});

export default waitlistYupScheme;
