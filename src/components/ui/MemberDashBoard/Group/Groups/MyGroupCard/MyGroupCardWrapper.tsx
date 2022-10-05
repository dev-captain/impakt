import * as React from 'react';
import { useAppSelector } from 'hooks';
import { Box, HStack } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
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
            sm: '100%',
            md: '31%',
            lgx: '23%',
          }}
        >
          <Box position="relative">
            <GroupsCard
              member={m.Group.memberCount ?? 0}
              img={
                m.Group.currentCoverImageId
                  ? getImageFromS3AsUrl(m.Group.CurrentCoverImage!.source)
                  : Images.group.img
              }
              name={m.Group.groupName}
            >
              {m.Group.private === true && (
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
              )}
              <Common.ImpaktButton
                variant="transparent"
                _hover={{ backgroundColor: '#000', color: '#fff' }}
                border="1px solid #1C1C28"
                borderRadius="8px"
                width={{ md: '112px', sm: '100px', base: '100px' }}
                justifyContent="space-around"
                fontSize={{ lgx: '16px', base: '14px' }}
                _focus={{ boxShadow: 'none' }}
                leftIcon={<I.CheckIcon />}
              >
                Joined
              </Common.ImpaktButton>
            </GroupsCard>
          </Box>
        </Box>
      ))}

      <Box
        marginStart="0 !important"
        w={{
          base: '100%',
          sm: '100%',
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
