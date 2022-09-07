import React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { I, Common } from 'components';
import { AddIcon, DeleteIcon, ChevronLeftIcon } from '@chakra-ui/icons';

const ShowEvents = ({ data }: any) => {
  return (
    <>
      <Box>
        <Box display="flex" mb="16px">
          <Text color="#29323B" fontWeight="600" fontSize="20px">
            September 9, 2022
          </Text>
        </Box>
        <Box
          background="#E7ECFF"
          p="8px"
          color="#4364D9"
          borderRadius="8px"
          mb="3px"
          onClick={() => data('join')}
        >
          <Text fontSize="14px" fontWeight="600">
            Good morning
          </Text>
          <Text fontSize="12px" fontWeight="500">
            09:00 AM - 10:00 AM
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="3px">
          <Box background="#5C7FFF" w="8px" h="8px" borderRadius="50%" marginLeft="-6px" />
          <Box backgroundColor="#5C7FFF" borderRadius="0px 8px 8px 0px" h="2px" w="100%" />
        </Box>
        <Box
          background="#E7ECFF"
          p="8px"
          color="#4364D9"
          borderRadius="8px"
          onClick={() => data('event')}
        >
          <Text fontSize="14px" fontWeight="600">
            Power Training
          </Text>
          <Text fontSize="12px" fontWeight="500">
            1:00 PM - 2:00 pM
          </Text>
        </Box>
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
        onClick={() => data('create')}
      >
        <AddIcon marginRight="11px" fontSize="10px" />
        Create
      </Common.ImpaktButton>
    </>
  );
};

const EventDetails = ({ data, name }: any) => {
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
            onClick={() => data('first')}
            marginRight="5px"
          />
          <Text color="#29323B" fontWeight="600" fontSize="20px">
            Power Training
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.MenuIcon fontSize="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500" maxW="258px">
            This event created for lorem ipsum dolor sit amet
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.DateIcon width="20px" height="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            Friday, September 9
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ClockIcon color="#728BA3" width="16px" height="16px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            1:00 – 2:30pm
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.PeopleIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          {name === 'event' && (
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              39 members
            </Text>
          )}
          {name === 'unjoin' && (
            <Text color="#4E6070" fontSize="16px" fontWeight="500">
              <Text as="span" fontWeight="bold">
                You
              </Text>{' '}
              and 39 members more
            </Text>
          )}
        </Box>
        <Box display="flex" alignItems="center">
          <Box w="34px">
            <I.ArowIcon w="15px" height="15px" color="#728BA3" />
          </Box>
          <Text color="#5C7FFF" fontSize="16px" fontWeight="500">
            impakt.com/e/ehF47bc
          </Text>
        </Box>
      </Box>
      {name === 'event' && (
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          onClick={() => data('unjoin')}
        >
          <I.CoolIcon fontSize="10px" />
          <Text marginLeft="10px">Going</Text>
        </Common.ImpaktButton>
      )}
      {name === 'unjoin' && (
        <Common.ImpaktButton
          variant="black"
          color="#29323B"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#EEF4F6"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
        >
          <I.CloseIcon width="16px" height="16px" />
          <Text marginLeft="10px" fontWeight="600">
            Not going
          </Text>
        </Common.ImpaktButton>
      )}
    </>
  );
};

const CreateEvent = ({ data }: any) => {
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
            onClick={() => data('first')}
            marginRight="5px"
          />
          <Text color="#29323B" fontWeight="600" fontSize="20px">
            Create event
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.TextIcon width="20px" height="20px" />
          </Box>
          <Text color="#B0C3D6" fontSize="16px" fontWeight="500" maxW="258px">
            Add title
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.MenuIcon width="20px" height="20px" />
          </Box>
          <Text color="#B0C3D6" fontSize="16px" fontWeight="500">
            Add description
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.DateIcon color="#728BA3" width="16px" height="16px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            Thursday, September 1
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ClockIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            10:00pm - 10:30pm
          </Text>
        </Box>
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
    </>
  );
};

const TodayEvent = ({ data, name }: any) => {
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
            onClick={() => data('first')}
            marginRight="5px"
          />
          <Box display="flex" justifyContent="space-between" alignContent="center">
            <Text color="#29323B" fontWeight="600" fontSize="20px" marginRight="50px">
              Good morning
            </Text>
            {name === 'join' && (
              <Box background="#5C7FFF" borderRadius="16px" textAlign="center" p="2px 14px">
                <Text color="#fff" fontWeight="700">
                  LIVE
                </Text>
              </Box>
            )}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.MenuIcon fontSize="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500" maxW="258px">
            This event created for lorem ipsum dolor sit amet
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.DateIcon width="20px" height="20px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            Friday, September 9
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.ClockIcon color="#728BA3" width="16px" height="16px" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            1:00 – 2:30pm
          </Text>
        </Box>
        <Box display="flex" alignItems="center" mb="12px">
          <Box w="34px">
            <I.PeopleIcon width="20px" height="20px" color="#728BA3" />
          </Box>
          <Text color="#4E6070" fontSize="16px" fontWeight="500">
            17 members
          </Text>
        </Box>
        <Box display="flex" alignItems="center">
          <Box w="34px">
            <I.ArowIcon w="15px" height="15px" color="#728BA3" />
          </Box>
          <Text color="#5C7FFF" fontSize="16px" fontWeight="500">
            impakt.com/e/ehF47bc
          </Text>
        </Box>
      </Box>
      {name === 'join' && (
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#29323B"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          onClick={() => data('todayEvent')}
        >
          <I.ArowIcon fontSize="12px" />
          <Text marginLeft="10px">Join Now</Text>
        </Common.ImpaktButton>
      )}
      {name === 'todayEvent' && (
        <Box display="flex" gap="8px">
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
            <I.CoolIcon fontSize="12px" />
            <Text marginLeft="10px">Going</Text>
          </Common.ImpaktButton>
          <Common.ImpaktButton
            variant="black"
            w="48px"
            h={{ md: '48px', base: '40px' }}
            backgroundColor="#EEF4F6"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="700"
          >
            <I.PenIcon width="18px" />
          </Common.ImpaktButton>
          <Common.ImpaktButton
            variant="black"
            w="48px"
            h={{ md: '48px', base: '40px' }}
            backgroundColor="#FEE1E3"
            borderRadius="8px"
            type="submit"
            fontSize={{ md: '16px' }}
            fontWeight="700"
          >
            <DeleteIcon width="18px" color="#F84153" onClick={() => data('remove')} />
          </Common.ImpaktButton>
        </Box>
      )}
    </>
  );
};

const RemoveEvent = ({ data }: any) => {
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
            onClick={() => data('first')}
            marginRight="5px"
          />
          <Box textAlign="center" marginLeft={{ base: '50px', md: '35px' }}>
            <Text color="#29323B" fontWeight="600" fontSize="20px">
              Are you sure?
            </Text>
            <Text color="#29323B" fontWeight="600" fontSize="20px">
              Event will be deleted.
            </Text>
          </Box>
        </Box>
        <Box background="#FEE1E3" p="8px" color="#C41F30" opacity="0.5" borderRadius="8px" mb="3px">
          <Text fontSize="14px" fontWeight="600">
            Good morning
          </Text>
          <Text fontSize="12px" fontWeight="500">
            09:00 AM - 10:00 AM
          </Text>
        </Box>
        <Box
          p="8px"
          color="#C41F30"
          opacity="0.5"
          borderRadius="8px"
          display="flex"
          alignItems="center"
        >
          <I.PeopleIcon cursor="pointer" width="26px" height="23px" marginRight="20px" />
          <Text fontSize="12px" fontWeight="500">
            24 members
          </Text>
        </Box>
      </Box>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Common.ImpaktButton
          variant="black"
          colorScheme="#fff"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#F84153"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          marginRight="5px"
          _hover={{ backgroundColor: '#F84153' }}
        >
          <DeleteIcon width="18px" color="#fff" marginRight="5px" />
          Yes, delete
        </Common.ImpaktButton>
        <Common.ImpaktButton
          variant="black"
          h={{ md: '48px', base: '40px' }}
          backgroundColor="#EEF4F6"
          borderRadius="8px"
          type="submit"
          fontSize={{ md: '16px' }}
          fontWeight="700"
          color="#29323B"
          _hover={{ backgroundColor: '#EEF4F6' }}
        >
          <DeleteIcon width="18px" color="#29323B" marginRight="5px" />
          No
        </Common.ImpaktButton>
      </Box>
    </>
  );
};

const EventsOverview: React.FC = () => {
  const [name, setName] = React.useState('first');

  return (
    <Box w="full">
      <Box
        backgroundColor="#fff"
        borderRadius="24px"
        w={{ base: '100%', md: '342px' }}
        minH="384px"
        p="5px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        mt="20px"
      >
        {name === 'first' && <ShowEvents data={(e: any) => setName(e)} />}
        {name === 'create' && <CreateEvent data={(e: any) => setName(e)} />}
        {name === 'event' && <EventDetails name={name} data={(e: any) => setName(e)} />}
        {name === 'unjoin' && <EventDetails name={name} data={(e: any) => setName(e)} />}
        {name === 'join' && <TodayEvent data={(e: any) => setName(e)} name={name} />}
        {name === 'todayEvent' && <TodayEvent data={(e: any) => setName(e)} name={name} />}
        {name === 'remove' && <RemoveEvent data={(e: any) => setName(e)} />}
      </Box>
    </Box>
  );
};

export default EventsOverview;
