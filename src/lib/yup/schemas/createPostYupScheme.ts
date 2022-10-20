import * as yup from 'yup';
import { post } from '../fields';

const createPostYupScheme = yup.object().shape({
  post,
});

export default createPostYupScheme;
