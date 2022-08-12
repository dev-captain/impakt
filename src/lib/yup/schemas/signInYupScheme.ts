import * as yup from 'yup';
import { email, password } from '../fields';

const signInFormYupScheme = yup.object().shape({
  email,
  password,
});

export default signInFormYupScheme;
