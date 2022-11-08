import * as yup from 'yup';
import { comment } from '../fields';

const createCommentFormYupScheme = yup.object().shape({
  comment,
});

export default createCommentFormYupScheme;
