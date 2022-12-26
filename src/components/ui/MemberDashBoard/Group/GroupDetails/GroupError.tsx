import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Common, I } from '@/components';
import Images from '@/assets/images';
import routes from '@/data/routes';
// import { getDefaultQueryOptions } from '../../../../../lib/impakt-dev-api-client/utils';

const GroupError: React.FC<{ isError: string }> = (props) => {
  const navigate = useNavigate();

  return (
    <Box
      display="flex"
      flexDir="column"
      alignItems="center"
      transform={{ lg: 'translateX(-5vw)' }}
      mb="50px"
    >
      <Box display="flex" position="relative" alignItems="center">
        <Text
          bgGradient="linear-gradient(90deg, #F04153 0%, #F27961 100%)"
          bgClip="text"
          textStyle="ErrorText"
          position="absolute"
          left={{ base: '45px', sm: '30px', md: '0' }}
        >
          4
        </Text>
        <Image
          src={Images.group.error}
          w={{ base: '350px', sm: '400px', md: '440px' }}
          h={{ base: '200px', sm: '250px', md: '290px' }}
        />
        <Text
          bgGradient="linear-gradient(90deg, #F04153 0%, #F27961 100%)"
          bgClip="text"
          textStyle="ErrorText"
          position="absolute"
          right={{ base: '45px', sm: '30px', md: '0' }}
        >
          4
        </Text>
      </Box>
      <Text
        textStyle={{ base: 'regular4', sm: 'regular6', md: 'TitleBold48_2' }}
        mt="20px"
        maxW="640px"
        textAlign="center"
        color="fg-1"
      >
        {props.isError}
      </Text>
      <Text
        color="fg"
        textStyle={{ base: 'regular20', md: 'regular4' }}
        textAlign="center"
        mt={{ base: '30px', sm: '48px' }}
        mb={{ base: '20px', sm: '24px' }}
      >
        You are welcome to look around though:
      </Text>
      <Box display="flex" justifyContent="center">
        <Common.ImpaktButton
          w="auto"
          mr="12px"
          bg="orangeGradient"
          onClick={() => {
            navigate(routes.dashboard);
          }}
          fill="white"
          _hover={{ bg: 'white', color: 'fg-1', fill: 'fg-1' }}
        >
          <I.DashboardIcon cursor="pointer" width="32px" height="32px" mr="20px" />
          General
        </Common.ImpaktButton>
        <Common.ImpaktButton
          w="auto"
          ml="12px"
          bg="white"
          onClick={() => {
            navigate(routes.groups);
          }}
          color="fg-1"
          _hover={{ bg: 'orangeGradient', color: 'white' }}
        >
          <I.PeopleIcon cursor="pointer" width="32px" height="32px" mr="20px" />
          Groups
        </Common.ImpaktButton>
      </Box>
    </Box>
  );
};

export default GroupError;
