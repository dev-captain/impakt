import * as yup from 'yup';
import { email } from '@/lib/yup/fields';

const groupInviteYupScheme = yup.object().shape({
  email,
});
export default groupInviteYupScheme;
