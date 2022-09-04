import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, HStack, useToast } from '@chakra-ui/react';

import { Common, I } from 'components';
import Images from 'assets/images';
import GroupsCard from '../../../GroupsCard';
import { sendGroupRequestToJoin } from '../../../../../../lib/redux/slices/groups/actions/sendGroupRequestToJoin';

const ExploreGroupCardWrapper: React.FC = () => {
  const dispatch = useAppDispatch();
  const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
  const toast = useToast();

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
      {exploreGroups.map((d) => (
        <Box
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <GroupsCard img={Images.group.img} member={d.memberCount} name={d.friendlyName}>
            <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
              <Box maxW="99px" maxH="38px">
                <Common.ImpaktButton
                  variant="transparent"
                  _hover={{ backgroundColor: '#000', color: '#fff' }}
                  onClick={() => handleRequestToJoinGroup(d.id)}
                  borderRadius="8px"
                  fontWeight="600"
                  border="1px solid #1C1C28"
                  justifyContent="space-around"
                  fontSize="16px"
                  leftIcon={<I.UnionIcon width="12px" />}
                >
                  Join
                </Common.ImpaktButton>
              </Box>
            </Box>
          </GroupsCard>
        </Box>
      ))}
    </HStack>
  );
};
export default ExploreGroupCardWrapper;
