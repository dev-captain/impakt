import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { Common } from '@/components';
import Images from '@/assets/images';
import { usePersistedGroupStore } from '@/lib/zustand';
import routes from '@/data/routes';

import GroupsCard from '../GroupsCard';

const MyGroupCardHeader: React.FC = () => {
  const { myGroups } = usePersistedGroupStore();
  const navigate = useNavigate();

  return (
    <>
      {myGroups.map((m, index) => (
        <Box
          key={`group-${m.groupId}`}
          cursor="pointer"
          as="a"
          onClick={(e: any) => {
            e.preventDefault();
            navigate(routes.groupDetail(m.groupId));
          }}
        >
          <Box position="relative">
            <GroupsCard
              // member={m.Group?.memberCount ?? 0}
              img={
                m.Group?.currentCoverImageId
                  ? m.Group?.CurrentCoverImage
                  : Images.group.defaultThumbnail
              }
              name={m.Group?.groupName}
              // eslint-disable-next-line no-underscore-dangle
              isPrivateGroup={m.Group?.private}
            >
              <Common.ImpaktButton
                variant="white-50"
                borderRadius="8px"
                justifyContent="space-around"
              >
                <Text textStyle="semiBold3">View</Text>
              </Common.ImpaktButton>
            </GroupsCard>
          </Box>
        </Box>
      ))}
    </>
  );
};
export default MyGroupCardHeader;
