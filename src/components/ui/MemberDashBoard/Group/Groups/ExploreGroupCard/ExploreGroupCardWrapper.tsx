/* eslint-disable no-plusplus */
/* eslint-disable no-nested-ternary */
import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, HStack, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Common, I } from 'components';
import Images from 'assets/images';
import { joinGroup } from 'lib/redux/slices/groups/actions/joinGroup';
import GroupsCard from '../../../GroupsCard';
import { sendGroupRequestToJoin } from '../../../../../../lib/redux/slices/groups/actions/sendGroupRequestToJoin';

const ExploreGroupCardWrapper: React.FC = () => {
  const [reRender, setRerender] = React.useState(0);
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);
  const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
  const toast = useToast();
  const navigate = useNavigate();

  const handleRequestToJoinGroup = async (groupId: number) => {
    if (!member) return;
    try {
      await dispatch(sendGroupRequestToJoin(groupId)).unwrap();

      setRerender((prevState) => prevState + 1);

      toast({
        title: 'Success',
        description: 'Request sent successfully',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };

  const joinedGroup = async (groupId: string) => {
    try {
      await dispatch(joinGroup(groupId)).unwrap();
      toast({
        title: 'Success',
        description: 'Joined successfully',
        isClosable: true,
        duration: 8000,
        status: 'success',
      });
    } catch (e: any) {
      toast({
        title: 'Error',
        description: e.response.data.message,
        isClosable: true,
        duration: 8000,
        status: 'error',
      });
    }
  };
  if (exploreGroups.length === 0) return null;

  return (
    <HStack
      columnGap={{ md: '24px' }}
      rowGap="24px"
      justifyContent="flex-start"
      alignItems="flex-start"
      w="full"
      margin="30px 0"
      flexWrap={{ sm: 'wrap' }}
      display={{ sm: 'flex' }}
    >
      {/* here is the components */}
      {exploreGroups.map((d) => {
        return (
          <Box
            key={d.id}
            cursor={!d.private ? 'pointer' : ''}
            w={{
              base: '100%',
              sm: '49%',
              md: '31%',
              lgx: '23%',
            }}
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              e.stopPropagation();
              // eslint-disable-next-line no-unused-expressions
              if (!d.private) {
                navigate(`/dashboard/groups/group/${d.id}`);
              }
            }}
          >
            <GroupsCard
              img={
                d.CurrentCoverImage?.source
                  ? `https://impakt-image-data-dev.s3.amazonaws.com/images/8479333ebdd04821b69cff7ba9c70f35.png`
                  : Images.group.img
              }
              member={d.memberCount}
              name={d.groupName}
            >
              <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
                <Box maxW="99px" maxH="38px">
                  <Common.ImpaktButton
                    variant={d.private ? 'black' : 'transparent'}
                    _hover={{
                      backgroundColor: d.private ? '#fff' : '#000',
                      color: d.private ? '#000' : '#fff',
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (d.private) {
                        return handleRequestToJoinGroup(d.id);
                      }

                      return joinedGroup(String(d.id));
                    }}
                    borderRadius="8px"
                    fontWeight="600"
                    border="1px solid #1C1C28"
                    justifyContent="space-around"
                    fontSize="16px"
                    leftIcon={d.private ? <Box display="none" /> : <I.UnionIcon width="12px" />}
                  >
                    {d.private ? (d.Request?.status ? d.Request.status : 'Join') : 'Join'}
                  </Common.ImpaktButton>
                </Box>
              </Box>
            </GroupsCard>
          </Box>
        );
      })}
    </HStack>
  );
};
export default ExploreGroupCardWrapper;
