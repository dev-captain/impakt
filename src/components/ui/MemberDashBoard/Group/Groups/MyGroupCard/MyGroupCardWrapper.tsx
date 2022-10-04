import * as React from 'react';
import { useAppSelector } from 'hooks';
import { Box, HStack } from '@chakra-ui/react';
import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';
import Images from '../../../../../../assets/images';
import GroupsCard from '../../../GroupsCard';
import AddGroupCard from './AddGroupCard';
import { getImageFromS3AsUrl } from '../../../../../../utils';

const MyGroupCardWrapper: React.FC = () => {
  const myGroups = useAppSelector((state) => state.groupsReducer.myGroups);
  const navigate = useNavigate();

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
      {myGroups.map((m) => (
        <Box
          key={`group-${m.groupId}`}
          cursor="pointer"
          as="a"
          onClick={(e: any) => {
            e.preventDefault();
            navigate(`/dashboard/groups/group/${m.groupId}`);
          }}
          w={{
            base: '100%',
            sm: '49%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <GroupsCard
            member={m.Group.memberCount ?? 0}
            img={
              m.Group.currentCoverImageId
                ? getImageFromS3AsUrl(m.Group.CurrentCoverImage!.source)
                : Images.group.logo
            }
            name={m.Group.groupName}
          >
            <Common.ImpaktButton
              variant="transparent"
              _hover={{ backgroundColor: '#000', color: '#fff' }}
              border="1px solid #1C1C28"
              borderRadius="8px"
              width={{ lgx: '112px', base: '100px' }}
              justifyContent="space-around"
              fontSize={{ lgx: '16px', base: '14px' }}
              _focus={{ boxShadow: 'none' }}
              leftIcon={<I.CheckIcon />}
            >
              Joined
            </Common.ImpaktButton>
          </GroupsCard>
        </Box>
      ))}

      <Box
        marginStart="0 !important"
        w={{
          base: '100%',
          sm: '49%',
          md: '31%',
          lgx: '23%',
        }}
      >
        <AddGroupCard />
      </Box>
    </HStack>
  );
};
export default MyGroupCardWrapper;
