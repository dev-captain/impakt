import React from 'react';
import { Box, Text, HStack, CircularProgress } from '@chakra-ui/react';
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

  if (isError.length > 0)
    return (
      <Text fontWeight="hairline" fontSize="2xl">
        {isError}
      </Text>
    );
  if (isGroupDetailsLoading) return <CircularProgress isIndeterminate />;
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
