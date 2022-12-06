import * as yup from 'yup';
import { eventDescription, challengeId, eventTime, eventTitle, eventEndTime } from '../fields';

const createEventYupScheme = yup.object().shape({
  eventTitle,
  eventDescription,
  eventStartTime: eventTime,
  eventEndTime,
  challengeId,
});

export default createEventYupScheme;
