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
  .matches(/^0x[a-fA-F0-9]{40}$/g, 'It must be valid crypto address 0x... (ETH)')
  .required('Wallet Address is required field');

const topic = yup.string().required('Topic is required field');

const message = yup.string().required('Message is required field');

const groupName = yup
  .string()
  .required('Field is required')
  .matches(/^[A-Za-z0-9_. ]+$/, 'Special character are not allow');

export const ALLOW_IMAGE_FILE: string[] = ['image/png', 'image/jpeg'];

const file = yup
  .mixed()
  .required('File is required')
  .test(
    'fileSize',
    'File too large',
    (value) => value === null || (value && value.size <= 1 * 1024 * 1024),
  )
  .test(
    'fileFormat',
    'Unsupported file type',
    (value) => value === null || (value && ALLOW_IMAGE_FILE.includes(value.type)),
  );

const eventTitle = yup.string().required('Event title is required field');
const eventDescription = yup.string().required('Event description is required field');
const eventTime = yup.string().required('Event time is required field');
const assocId = yup
  .number()
  .required('Challenge is required please select one...')
  .typeError('Challenge is required please select one...');

export {
  email,
  password,
  memberName,
  fourDigit,
  passwordConfirmation,
  walletAddress,
  topic,
  message,
  groupName,
  file,
  eventTitle,
  eventDescription,
  eventTime,
  assocId,
};
