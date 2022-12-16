import * as yup from 'yup';
import { file } from '../fields';

const uploadImageScheme = yup.object().shape({
  file,
});

export default uploadImageScheme;
