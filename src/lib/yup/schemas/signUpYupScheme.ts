import * as yup from 'yup';
import { memberName, fourDigit, email, password, passwordConfirmation } from '../fields';

const signUpYupScheme = yup.object().shape({
  memberName,
  fourDigit,
  email,
  password,
  passwordConfirmation,
});

export default signUpYupScheme;
