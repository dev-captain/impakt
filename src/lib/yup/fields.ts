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
  .min(1, 'Group name must be at least 1 characters')
  .max(30, 'Group name must be at max 30 characters');

export const ALLOW_IMAGE_FILE: string[] = ['image/png', 'image/jpeg'];

const file = yup
  .mixed()
  .required('File is a required field to upload cover image...')
  .test('fileFormat', 'Unsupported file type', (value) => {
    return value && ALLOW_IMAGE_FILE.includes(value.type);
  })
  .test('fileSize', 'File too large', (value) => value && value.size <= 1 * 1024 * 1024);

const eventTitle = yup
  .string()
  .required('Event title is required field')
  .max(50, `You can't use more than 50 characters.`)
  .required('Event description is required field');

const eventDescription = yup
  .string()
  .max(50, `You can't use more than 50 characters.`)
  .required('Event description is required field');

const eventTime = yup.string().required('Event time is required field');
const eventEndTime = yup.number().required('Duration time is required field');
const assocId = yup
  .number()
  .required('Challenge is required please select one...')
  .typeError('Challenge is required please select one...');

const assocName = yup.string().required('Challenge name is required');
const assocDuration = yup.number().min(1).max(30);

const post = yup
  .string()
  .max(60, `You can't use more than 60 characters.`)
  .required('Post content is required field...');

const comment = yup
  .string()
  .max(280, `You can't use more than 280 characters.`)
  .required('Comment content is required field...');

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
  post,
  comment,
  assocName,
  assocDuration,
  eventEndTime,
};
