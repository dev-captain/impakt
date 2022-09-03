import * as React from 'react';
import { Box, Button, HStack, Text, useToast } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Images from 'assets/images';
import { I } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks';
import MemberDashboardSectionHeadlineText from '../MemberDashboardSectionHeadlineText';
import MemberDashboardSectionHeadlineJoinedGroup from '../MemberDashboardSectionHeadlineJoinedGroup';
import GroupsCard from '../GroupsCard';
import AddGroup from '../AddGroup';
import { sendGroupRequestToJoin } from '../../../../lib/redux/slices/groups/actions/sendGroupRequestToJoin';
import { answerToGroupRequest } from '../../../../lib/redux/slices/groups/actions/answerToGroupRequest';
// import Topics from '../Topics/Topics';

const Group: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const myGroups = useAppSelector((state) => state.groupsReducer.myGroups);
  const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
  const groupRequests = useAppSelector((state) => state.groupsReducer.groupRequests);
  const member = useAppSelector((state) => state.memberAuth.member);
  const ownedGroups = myGroups.filter((groups) => groups.ownerId === member?.id);

  const handleRequestToJoinGroup = async (groupId: number) => {
    try {
      await dispatch(sendGroupRequestToJoin(groupId)).unwrap();

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

  return (
    <Box minH="100vh" overflow="hidden" w="full" as="section" id="general-section">
      <Box display="flex" gap={{ lgx: '48px', base: '44px' }} borderBottom="2px solid #E0E0E0">
        <MemberDashboardSectionHeadlineText title="Your Groups" />
        <MemberDashboardSectionHeadlineJoinedGroup
          value={myGroups.length.toString()}
          icon={<I.PeopleIcon />}
          name="Joined Groups"
          color="#1C1C28"
          width="60px"
        />
        <MemberDashboardSectionHeadlineJoinedGroup
          value="0"
          icon={<I.RewardIcon color="#D92D85" />}
          name="Challenges completed"
          color="#D92D85"
          width="94px"
        />
        <MemberDashboardSectionHeadlineJoinedGroup
          value={ownedGroups.length.toString()}
          icon={<I.AddMemberIcon color="#5714EC" width="32px" height="32px" />}
          name="Groupscreated"
          color="#5714EC"
          width="65px"
        />
      </Box>
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
        {myGroups.map(({ memberCount, friendlyName, id }) => (
          <Box
            key={`group-${id}`}
            cursor="pointer"
            as="a"
            onClick={(e: any) => {
              e.preventDefault();
              navigate(`/dashboard/groups/group/${id}`);
            }}
            w={{
              base: '100%',
              sm: '49%',
              md: '31%',
              lgx: '23%',
            }}
          >
            <GroupsCard member={memberCount ?? 0} img={Images.group.img} name={friendlyName}>
              <Button
                border="1px solid #1C1C28"
                borderRadius="8px"
                color="#1C1C28"
                width={{ lgx: '112px', base: '100px' }}
                justifyContent="space-around"
                fontSize={{ lgx: '16px', base: '14px' }}
                backgroundColor="transparent"
                _hover={{ backgroundColor: 'transparent' }}
                _active={{ backgroundColor: 'transparent' }}
                _focus={{ boxShadow: 'none' }}
              >
                <I.CheckIcon />
                Joined
              </Button>
            </GroupsCard>
          </Box>
        ))}
        {/* <Box
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <GroupsCard member="705" img={Images.group.img} name="Dance Fit" />
        </Box>
        <Box
          marginStart="0 !important"
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <GroupsCard member="705" img={Images.group.img} name="Dance Fit" />
        </Box> */}
        <Box
          marginStart="0 !important"
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <AddGroup />
        </Box>
      </HStack>
      {groupRequests.length > 0 && (
        <>
          <Box display="flex" gap={{ lgx: '48px', base: '44px' }} borderBottom="2px solid #E0E0E0">
            <MemberDashboardSectionHeadlineText title="Join requests" />
          </Box>
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
                <GroupsCard img={Images.group.img} name={req.Group.friendlyName}>
                  <Text>{req.from.username} </Text>
                  <Button
                    onClick={() => handleAnswerToJoinGroup('Accepted', req.id, req.fromUserId)}
                    borderRadius="8px"
                    color="#fff"
                    width={{ lgx: '112px', base: '100px' }}
                    justifyContent="space-around"
                    fontSize={{ lgx: '16px', base: '14px' }}
                    backgroundColor="#68D391"
                    _hover={{ backgroundColor: '#68D391', color: '#fff' }}
                    _active={{ backgroundColor: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <I.CheckIcon />
                    Accept
                  </Button>

                  <Button
                    onClick={() => handleAnswerToJoinGroup('Declined', req.id, req.fromUserId)}
                    borderRadius="8px"
                    color="#fff"
                    width={{ lgx: '112px', base: '100px' }}
                    justifyContent="space-around"
                    fontSize={{ lgx: '16px', base: '14px' }}
                    backgroundColor="red"
                    _hover={{ color: '#fff' }}
                    _active={{ backgroundColor: 'transparent' }}
                    _focus={{ boxShadow: 'none' }}
                  >
                    <I.CheckIcon />
                    Decline
                  </Button>
                </GroupsCard>
              </Box>
            ))}
          </HStack>
        </>
      )}

      {exploreGroups.length > 0 && (
        <>
          <Box display="flex" gap={{ lgx: '48px', base: '44px' }} borderBottom="2px solid #E0E0E0">
            <MemberDashboardSectionHeadlineText title="Explore Group" />
          </Box>
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
            {exploreGroups.map(
              (d) =>
                d.ownerId !== member?.id && (
                  <Box
                    w={{
                      base: '100%',
                      sm: '49%',
                      md: '31%',
                      lgx: '23%',
                    }}
                  >
                    <GroupsCard img={Images.group.img} name={d.friendlyName}>
                      <Button
                        onClick={() => handleRequestToJoinGroup(d.id)}
                        borderRadius="8px"
                        color="#1C1C28"
                        justifyContent="space-around"
                        fontSize={{ lgx: '16px', base: '14px' }}
                        backgroundColor="transparent"
                        _hover={{ backgroundColor: '#68D391', color: '#fff' }}
                        _active={{ backgroundColor: 'transparent' }}
                        _focus={{ boxShadow: 'none' }}
                      >
                        <I.CheckIcon mr="5px" />
                        Send request to join
                      </Button>
                    </GroupsCard>
                  </Box>
                ),
            )}
          </HStack>
        </>
      )}
    </Box>
  );
};
export default Group;
