import * as yup from 'yup';
import { groupName } from '../fields';

const createGroupYupScheme = yup.object().shape({
  groupName,
});

export default createGroupYupScheme;
