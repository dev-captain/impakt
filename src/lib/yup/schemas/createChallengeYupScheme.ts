import * as yup from 'yup';
import { challengeName, assocDuration } from '../fields';

const createChallengeYupScheme = yup.object().shape({
  challengeName,
  assocDuration,
});

export default createChallengeYupScheme;
