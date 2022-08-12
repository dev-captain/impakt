import * as yup from 'yup';
import { email } from '../fields';

const recoverPasswordFormYupScheme = yup.object().shape({
  email,
});
export default recoverPasswordFormYupScheme;
