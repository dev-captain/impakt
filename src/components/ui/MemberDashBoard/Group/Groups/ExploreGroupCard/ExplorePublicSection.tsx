import * as React from 'react';
import { Box, HStack, useToast } from '@chakra-ui/react';

import { Common, I } from 'components';
import Images from 'assets/images';
import { useAppDispatch, useAppSelector } from 'hooks';
import { useNavigate } from 'react-router-dom';

import GroupsCard from '../../../GroupsCard';
import { joinGroup } from '../../../../../../lib/redux/slices/groups/actions/joinGroup';
import { getImageFromS3AsUrl } from '../../../../../../utils';

const ExplorePublicSection: React.FC = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useAppDispatch();
  const explorePublicGroups = useAppSelector((state) => state.groupsReducer.exploreGroups).filter(
    (d) => d.private === false,
  );

  const joinedGroup = async (groupId: number) => {
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
  // const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);
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
      {explorePublicGroups.map((g) => (
        <Box
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(`/dashboard/groups/group/${g.id}`);
          }}
        >
          <GroupsCard
            img={
              g.CurrentCoverImage?.source
                ? getImageFromS3AsUrl(g.CurrentCoverImage?.source)
                : Images.group.logo
            }
            member={g.memberCount}
            name={g.groupName}
          >
            <Box w="full" display="flex" alignItems="flex-end" justifyContent="flex-end">
              <Box maxW="99px" maxH="38px">
                <Common.ImpaktButton
                  variant="transparent"
                  _hover={{ backgroundColor: '#000', color: '#fff' }}
                  borderRadius="8px"
                  fontWeight="600"
                  border="1px solid #1C1C28"
                  onClick={() => {
                    joinedGroup(g.id);
                  }}
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
export default ExplorePublicSection;
