import * as yup from 'yup';
import { post, comment } from '../fields';

const createPostYupScheme = yup.object().shape({
  post,
  comment,
});

export default createPostYupScheme;
