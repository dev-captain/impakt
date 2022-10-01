import * as yup from 'yup';
import { eventDescription, assocId, eventTime, eventTitle } from '../fields';

const createEventYupScheme = yup.object().shape({
  eventTitle,
  eventDescription,
  eventStartTime: eventTime,
  eventEndTime: eventTime,
  assocId,
});

export default createEventYupScheme;
