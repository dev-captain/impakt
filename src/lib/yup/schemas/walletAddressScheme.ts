import * as yup from 'yup';
import { walletAddress, password, passwordConfirmation } from '../fields';

const walletAddressFormYupScheme = yup.object().shape({
  walletAddress,
  password,
  passwordConfirmation,
});

export default walletAddressFormYupScheme;
