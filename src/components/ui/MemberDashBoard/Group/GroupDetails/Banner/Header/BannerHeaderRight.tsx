import React from 'react';
import { Avatar, AvatarGroup, Box } from '@chakra-ui/react';

import { Common, I } from 'components';
import { usePersistedGroupStore } from '../../../../../../../lib/zustand';

export const BannerHeaderRight: React.FC = () => {
  // const isMembersLoading = useAppSelector((state) => state.groupsReducer.isMembersLoading);
  const members = usePersistedGroupStore().membersOfGroup?.Members?.filter(
    ({ role }: any) => role !== 'None',
  );

  return (
    <Box
      id="banner-header-right"
      display={{ md: 'flex', base: 'block' }}
      marginTop={{ md: '0', base: '20px' }}
    >
      {/* <Skeleton isLoaded={!isMembersLoading}> */}

      <Box display="flex" mr="5px" alignItems="center" marginTop={{ md: '0', base: '20px' }}>
        <AvatarGroup size="sm" max={3} spacing="-0.50rem">
          {members?.map(({ User }) => (
            <Avatar
              key={User.id}
              name={User.firstName?.replace(' ', '') ?? User.username?.replace(' ', '')}
            />
          ))}
        </AvatarGroup>
      </Box>
      <Common.ImpaktButton
        variant="transparent"
        backgroundColor="#E7ECFF"
        borderRadius="8px"
        width="107px"
        height="34px"
        _hover={{ backgroundColor: '#E7ECFF' }}
        _active={{ backgroundColor: '#E7ECFF' }}
        _focus={{ boxShadow: 'none' }}
        color="#5C7FFF"
        fontWeight="700"
        fontSize={{ base: '14px', md: '16px' }}
        leftIcon={<I.PeopleIcon width={{ md: '18px', base: '14px' }} />}
        cursor="auto"
      >
        {members?.length}
      </Common.ImpaktButton>
      {/* </Skeleton> */}
    </Box>
  );
};
export default BannerHeaderRight;
