import React from 'react';
import { Box, Skeleton } from '@chakra-ui/react';

import { Common, I } from 'components';
import { useAppSelector } from 'hooks';

export const BannerHeaderRight: React.FC = () => {
  const isMembersLoading = useAppSelector((state) => state.groupsReducer.isMembersLoading);
  const members = useAppSelector((state) => state.groupsReducer.membersOfGroup?.members)?.filter(
    ({ role }: any) => role !== 'None',
  );

  return (
    <Box
      id="banner-header-right"
      display={{ md: 'flex', base: 'block' }}
      marginTop={{ md: '0', base: '20px' }}
    >
      <Skeleton isLoaded={!isMembersLoading}>
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
          marginRight="16px"
          fontSize={{ base: '14px', md: '16px' }}
          leftIcon={<I.PeopleIcon width={{ md: '18px', base: '14px' }} />}
          cursor="auto"
        >
          {members?.length}
        </Common.ImpaktButton>
      </Skeleton>
      {/* <Box display="flex" alignItems="center" marginTop={{ md: '0', base: '20px' }}>
                <AvatarGroup size="sm" max={3} spacing="-0.50rem">
                  {members.map(({ firstName, username }) => (
                    <Avatar name={firstName ?? username} src={Images.group.ellipse} />
                  ))}
                </AvatarGroup>
                <Text fontSize="18px" color="#5C7FFF" fontWeight="500" marginLeft="12px">
                  friends
                </Text>
              </Box> */}
    </Box>
  );
};
export default BannerHeaderRight;
