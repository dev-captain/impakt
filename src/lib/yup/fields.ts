import * as yup from 'yup';

const email = yup
  .string()
  .email('Email field should be a valid email')
  .required('Email is required field')
  .default('');

const password = yup.string().required('Password is required field');

const passwordConfirmation = yup
  .string()
  .oneOf([yup.ref('password'), null], 'Passwords must match.')
  .required('Confirm Password is required field');

const memberName = yup.string().required('Member name is required field');

const fourDigit = yup
  .string()
  .test('len', ' ', (val) => {
    return val?.length === 4;
  })
  .matches(/^[0-9]+$/, ' ')
  .required(' ');

const walletAddress = yup
  .string()
  .matches(/^0x[a-fA-F0-9]{40}$/g, 'It must be valid crypto address 0x...')
  .required('Wallet Address is required field');

export { email, password, memberName, fourDigit, passwordConfirmation, walletAddress };
