import * as yup from 'yup';
import { eventDescription, eventTime, eventTitle } from '../fields';

const createEventYupScheme = yup.object().shape({
  eventTitle,
  eventDescription,
  eventStartTime: eventTime,
  eventEndTime: eventTime,
});

export default createEventYupScheme;
