import * as yup from 'yup';
import { assocName, assocDuration } from '../fields';

const createChallengeYupScheme = yup.object().shape({
  assocName,
  assocDuration,
});

export default createChallengeYupScheme;
