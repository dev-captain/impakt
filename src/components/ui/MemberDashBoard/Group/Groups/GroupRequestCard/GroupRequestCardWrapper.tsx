import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, HStack, useToast, Text, VStack } from '@chakra-ui/react';

import { Common, I } from 'components';
import Images from 'assets/images';
import GroupsCard from '../../../GroupsCard';
import { answerToGroupRequest } from '../../../../../../lib/redux/slices/groups/actions/answerToGroupRequest';

const GroupRequestCardWrapper: React.FC = () => {
  const groupRequests = useAppSelector((state) => state.groupsReducer.groupRequests);
  const dispatch = useAppDispatch();
  const toast = useToast();

  const handleAnswerToJoinGroup = async (
    answer: 'Accepted' | 'Declined',
    requestId: number,
    fromUserId: number,
  ) => {
    try {
      await dispatch(answerToGroupRequest({ status: answer, requestId, fromUserId })).unwrap();
      toast({
        title: 'Success',
        description: `Request is ${answer.toLowerCase()} successfully`,
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
  if (groupRequests.length === 0) return null;

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
      {groupRequests.map((req) => (
        <Box
          key={req.id}
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <GroupsCard img={Images.group.img} name={req.Group.groupName}>
            <VStack justifyContent="flex-start" alignItems="flex-start">
              <Text>{req.from.username} </Text>
              <HStack>
                <Common.ImpaktButton
                  variant="black"
                  onClick={() => handleAnswerToJoinGroup('Accepted', req.id, req.fromUserId)}
                  borderRadius="8px"
                  color="#fff"
                  width={{ lgx: '112px', base: '100px' }}
                  justifyContent="space-around"
                  fontSize={{ lgx: '16px', base: '14px' }}
                  _hover={{ backgroundColor: '#68D391', color: '#fff' }}
                  _active={{ backgroundColor: 'transparent' }}
                  _focus={{ boxShadow: 'none' }}
                  leftIcon={<I.CheckIcon />}
                >
                  Accept
                </Common.ImpaktButton>

                <Common.ImpaktButton
                  onClick={() => handleAnswerToJoinGroup('Declined', req.id, req.fromUserId)}
                  borderRadius="8px"
                  color="#fff"
                  width={{ lgx: '112px', base: '100px' }}
                  justifyContent="space-around"
                  fontSize={{ lgx: '16px', base: '14px' }}
                  _focus={{ boxShadow: 'none' }}
                  leftIcon={<I.CheckIcon />}
                >
                  Decline
                </Common.ImpaktButton>
              </HStack>
            </VStack>
          </GroupsCard>
        </Box>
      ))}
    </HStack>
  );
};
export default GroupRequestCardWrapper;
