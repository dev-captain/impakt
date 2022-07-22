import * as yup from 'yup';

const changePasswordFormYupScheme = yup.object().shape({
  password: yup
    .string()
    .required('Password is required field')
    .min(8, 'Password is too short - should be 8 chars minimum.'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match.')
    .required('Confirm Password is required field'),
});
export default changePasswordFormYupScheme;
