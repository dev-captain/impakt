import React from 'react';
import { Box, Text, FormControl, useDisclosure } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
import { Day, EventInput } from 'dayspan';
import { useForm } from 'hooks';
import { InputGroupPropsI } from 'components/common/InputGroup';
import { I, Common } from 'components';
import { useEventCalendarContext } from 'context/EventCalendarContext';
import ChallengeModal from './SelectChallenge/ChallengeModal';

const CreateEvent: React.FC = () => {
  const { goBackToOverViewScreen, addEvents, getSelectedDay, goToOverViewScreen, setSelectedDay } =
    useEventCalendarContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const date = getSelectedDay();

  const { handleSubmit, errors, setValue } = useForm({
    defaultValues: { eventTitle: '', eventDescription: '' },
  });

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setValue(e.target.name as any, e.target.value as any, { shouldValidate: true });
  };

  const handleAdd = async (data: Object) => {
    const { eventTitle, eventDescription } = data as {
      eventTitle: string;
      eventDescription: string;
    };

    const eventData = JSON.stringify({
      title: eventTitle,
      description: eventDescription,
      link: 'impakt.com/e/ehF47bca',
      memberCount: 99,
      chellanges: 'select Chellage',
    });

    const newEvent: EventInput<string, any> = {
      id: 10,
      data: eventData,
      schedule: {
        on: Day.build(date.year, date.month, date.dayOfMonth),
        times: [Day.build(date.year, date.month, date.dayOfMonth, 9)],
        duration: 1,
        durationUnit: 'hours',
      },
    };

    addEvents([newEvent]);
    setSelectedDay(date);
    goToOverViewScreen('first');
  };

  const inputItems: InputGroupPropsI[] = [
    {
      placeholder: 'Add title',
      onChange,
      type: 'text',
      name: 'eventTitle',
      errorMsg: errors?.eventTitle?.message,
      autoFocus: false,
      whiteMode: true,
      leftIcon: <I.TextIcon width="20px" height="20px" />,
    },
    {
      placeholder: 'Add description',
      onChange,
      type: 'text',
      name: 'eventDescription',
      errorMsg: errors?.eventDescription?.message,
      autoFocus: false,
      whiteMode: true,
      leftIcon: <I.MenuIcon width="20px" height="20px" />,
    },
  ];

  return (
    <>
      <Box>
        <Box display="flex" justifyContent="left" alignItems="center" mb="16px">
          <ChevronLeftIcon
            fontSize="30px"
            padding="3px"
            backgroundColor=" #ffffff"
            borderRadius=" 8px"
            cursor=" pointer"
            onClick={() => goBackToOverViewScreen()}
            marginRight="5px"
          />
          <Text color="#29323B" fontWeight="600" fontSize="20px">
            Create event
          </Text>
        </Box>
        <FormControl
          display="flex"
          justifyContent="center"
          flexDir="column"
          m="0 !important"
          rowGap="24px"
          as="form"
          onSubmit={handleSubmit(handleAdd)}
          autoComplete="off"
          w="full"
        >
          <Common.InputItems inputItems={inputItems} />
          <Box display="flex" alignItems="center">
            <Box w="34px">
              <I.DateIcon color="#728BA3" width="16px" height="16px" />
            </Box>
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              {Day.build(date.year, date.month, date.dayOfMonth).format('dddd, MMMM D')}
            </Text>
          </Box>
          <Box display="flex" alignItems="center">
            <Box w="34px">
              <I.ClockIcon width="20px" height="20px" color="#728BA3" />
            </Box>
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              10:00pm - 10:30pm
            </Text>
          </Box>
          <Box display="flex" alignItems="center" mb="12px" w="100%">
            <Box w="34px">
              <I.ChallengeIcon width="20px" height="20px" color="#728BA3" />
            </Box>
            <Text color="#4E6070" fontSize="16px" fontWeight="500" onClick={() => onOpen()}>
              Select challenge
            </Text>
          </Box>
          <Common.ImpaktButton
            variant="black"
            colorScheme="#fff"
            h={{ md: '48px', base: '40px' }}
            backgroundColor="#29323B"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="700"
          >
            <I.SendIcon fontSize="10px" />
            <Text marginLeft="10px">Create</Text>
          </Common.ImpaktButton>
        </FormControl>
      </Box>
      <ChallengeModal open={isOpen} close={() => onClose()} />
    </>
  );
};

export default CreateEvent;
