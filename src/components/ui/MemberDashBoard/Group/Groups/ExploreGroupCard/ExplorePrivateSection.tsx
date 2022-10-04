import * as React from 'react';
import { useAppDispatch, useAppSelector } from 'hooks';
import { Box, HStack, useToast } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';

import { Common } from 'components';
import Images from 'assets/images';

import GroupsCard from '../../../GroupsCard';
import { sendGroupRequestToJoin } from '../../../../../../lib/redux/slices/groups/actions/sendGroupRequestToJoin';

const ExplorePrivateSection: React.FC = () => {
  const toast = useToast();
  const dispatch = useAppDispatch();
  const [reRender, setRerender] = React.useState(0);
  const member = useAppSelector((state) => state.memberAuth.member);
  const explorePrivateGroups = useAppSelector((state) => state.groupsReducer.exploreGroups).filter(
    (d) => d.private === true,
  );

  // const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);

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
      {explorePrivateGroups.map((g) => (
        <Box
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <Box position="relative">
            <GroupsCard
              img={
                g.CurrentCoverImage?.source
                  ? `https:impakt-image-data-dev.s3.amazonaws.com/images/8479333ebdd04821b69cff7ba9c70f35.png`
                  : Images.group.logo
              }
              member={g.memberCount}
              name={g.groupName}
            >
              <Box position="absolute" top="24px" left="24px">
                <LockIcon
                  bg="#29323b"
                  color="white"
                  height="40px"
                  width="40px"
                  padding="12px"
                  borderRadius="4px"
                />
              </Box>
              <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
                <Box maxH="38px">
                  <Common.ImpaktButton
                    variant="transparent"
                    _hover={{ backgroundColor: '#000', color: '#fff' }}
                    onClick={() => handleRequestToJoinGroup(g.id)}
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
      ))}
    </HStack>
  );
};
export default ExplorePrivateSection;
