import * as React from 'react';
import { useAppDispatch } from 'hooks';
import { Box, HStack, useToast } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

import { Common } from 'components';
import { GroupDetails } from 'data';
import Images from 'assets/images';
import GroupsCard from '../../../GroupsCard';
import { sendGroupRequestToJoin } from '../../../../../../lib/redux/slices/groups/actions/sendGroupRequestToJoin';

const ExplorePrivateSection: React.FC = () => {
  const dispatch = useAppDispatch();
  // const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
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
  // if (exploreGroups.length === 0) return null;

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
      {GroupDetails.map(
        (a) =>
          a.private === 'true' && (
            <Box
              w={{
                base: '100%',
                sm: '49%',
                md: '31%',
                lgx: '23%',
              }}
            >
              <Box position="relative">
                <GroupsCard img={Images.group.img} member={Number(2)} name={a.name}>
                  <Box position="absolute" top="10px" left="12px">
                    <LockIcon
                      bg="#29323B"
                      color="white"
                      height="40px"
                      width="40px"
                      padding="12px"
                      border-radius="4px"
                    />
                  </Box>
                  <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
                    <Box maxH="38px">
                      <Common.ImpaktButton
                        variant="transparent"
                        _hover={{ backgroundColor: '#000', color: '#fff' }}
                        onClick={() => handleRequestToJoinGroup(10)}
                        borderRadius="8px"
                        fontWeight="600"
                        justifyContent="space-around"
                        fontSize="16px"
                        background="#EEF4F6"
                      >
                        Request to join
                      </Common.ImpaktButton>
                    </Box>
                  </Box>
                </GroupsCard>
              </Box>
            </Box>
          ),
      )}
    </HStack>
  );
};
export default ExplorePrivateSection;
