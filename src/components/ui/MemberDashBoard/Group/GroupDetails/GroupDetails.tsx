import React from 'react';
import { Box, HStack, CircularProgress } from '@chakra-ui/react';
import Content from './Content/Content';
import Banner from './Banner/Banner';
import { useFetchGroupDetails } from '../../../../../hooks/useFetchGroupDetails';
import GroupError from './GroupError';

interface GroupDetailsPropsI {
  isAnonymously?: boolean;
}

const GroupDetails: React.FC<GroupDetailsPropsI> = ({ isAnonymously = false }) => {
  const { group, isError, isGroupDetailsLoading } = useFetchGroupDetails(isAnonymously);

  if (isError.length > 0) return <GroupError isError={isError} />;
  if (isGroupDetailsLoading) return <CircularProgress color="darkOrange" isIndeterminate />;
  if (!group) return null;

  return (
    <HStack w="full" as="section" id="group-detail-section">
      <Box maxW="1200px" w="100%">
        <Banner />
        <Content />
      </Box>
    </HStack>
  );
};

export default GroupDetails;
