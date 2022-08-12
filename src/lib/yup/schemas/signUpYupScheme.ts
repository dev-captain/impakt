import * as yup from 'yup';
import { memberName, fourDigit, email, password, passwordConfirmation } from '../fields';

const signUpYupScheme = yup.object().shape({
  memberName,
  fourDigit,
  email,
  password: password.min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirmation,
});

export default signUpYupScheme;
