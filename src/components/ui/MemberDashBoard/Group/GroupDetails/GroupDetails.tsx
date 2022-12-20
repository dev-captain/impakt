import React from 'react';
import { Box, Text, HStack, CircularProgress, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Common, I } from 'components';
import Images from 'assets/images';
import routes from 'data/routes';
import Content from './Content/Content';
import Banner from './Banner/Banner';
import { useFetchGroupDetails } from '../../../../../hooks/useFetchGroupDetails';
// import { getDefaultQueryOptions } from '../../../../../lib/impakt-dev-api-client/utils';

const GroupDetails: React.FC = () => {
  const { group, isError, isGroupDetailsLoading } = useFetchGroupDetails();
  // const [show, setShow] = React.useState<null | string>(null);
  // React.useEffect(() => {
  //   const showTip = localStorage.getItem('showTip');
  //   if (showTip) {
  //     setShow(showTip);
  //   }
  // }, []);

  // const hide = () => {
  //   localStorage.setItem('showTip', 'false');
  //   setShow('false');
  // };
  const navigate = useNavigate();
  if (isError.length > 0)
    return (
      // <Text fontWeight="hairline" fontSize="2xl">
      //   {isError}
      // </Text>
      <Box textAlign="center">
        <Image src={Images.group.error} />
        <Text
          textStyle={{ base: 'regular6', md: 'TitleBold48_2' }}
          mt="20px"
          maxW="640px"
          textAlign="center"
        >
          {isError}
        </Text>
        <Text textStyle={{ base: 'regular20', md: 'regular4' }} mt="48px" mb="24px">
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
  if (isGroupDetailsLoading) return <CircularProgress color="darkOrange" isIndeterminate />;
  if (!group) return null;

  return (
    <HStack w="full" as="section" id="group-detail-section">
      {/* {(!localStorage.getItem('showTip') || !show) && activeGroup?.role === GroupRole.Creator ? (
        <GroupWelcome hideGroupWelcome={hide} />
      ) : ( */}
      <Box maxW="1200px" w="100%">
        <Banner />
        <Content />
      </Box>
      {/* )} */}
    </HStack>
  );
};

export default GroupDetails;
