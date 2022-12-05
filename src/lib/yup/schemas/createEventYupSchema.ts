import * as yup from 'yup';
import { eventDescription, assocId, eventTime, eventTitle, eventEndTime } from '../fields';

const createEventYupScheme = yup.object().shape({
  eventTitle,
  eventDescription,
  eventStartTime: eventTime,
  eventEndTime,
  assocId,
});

export default createEventYupScheme;
