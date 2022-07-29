import * as yup from 'yup';
import { walletAddress } from '../fields';

const walletAddressFormYupScheme = yup.object().shape({
  walletAddress,
});

export default walletAddressFormYupScheme;
