import React from 'react';
import { Box, CircularProgress, HStack } from '@chakra-ui/react';
import Images from 'assets/images';
import { useParams } from 'react-router-dom';
import GroupWelcome from '../../GroupWelcome';
import { useAppDispatch, useAppSelector } from '../../../../../hooks';
import { fetchGroupDetailById } from '../../../../../lib/redux/slices/groups/actions/fetchGroupDetailById';
import Content from './Content/Content';
import Banner from './Banner/Banner';

const GroupDetails: React.FC = () => {
  const [show, setShow] = React.useState<null | string>(null);
  const [isNotFound, setIsNotFound] = React.useState(false);
  const groupParam = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector((state) => state.groupsReducer.isLoading);
  const activeGroup = useAppSelector((state) => state.groupsReducer.activeGroup);
  const member = useAppSelector((state) => state.memberAuth.member);

  const getGroupDetail = async () => {
    try {
      if (groupParam?.id) {
        await dispatch(fetchGroupDetailById(groupParam.id)).unwrap();
      }
    } catch (e) {
      setIsNotFound(true);
    }
  };

  React.useEffect(() => {
    getGroupDetail();
  }, []);

  React.useEffect(() => {
    const showTip = localStorage.getItem('showTip');
    if (showTip) {
      setShow(showTip);
    }
  }, []);

  const hide = () => {
    localStorage.setItem('showTip', 'false');
    setShow('false');
  };

  if (isLoading) return <CircularProgress isIndeterminate />;
  // if (isNotFound) return <Text>404 Group not found</Text>;
  if (isNotFound)
    return (
      <HStack w="100%" display="block">
        <Banner img={Images.group.cover} />
        <Content />
      </HStack>
    );

  return (
    <Box w="full" as="section" id="general-section">
      {(!localStorage.getItem('showTip') || !show) && activeGroup?.ownerId === member?.id ? (
        <GroupWelcome hideGroupWelcome={hide} />
      ) : (
        <HStack w="100%" display="block">
          <Banner img={Images.group.cover} />
          <Content />
        </HStack>
      )}
    </Box>
  );
};
export default GroupDetails;
