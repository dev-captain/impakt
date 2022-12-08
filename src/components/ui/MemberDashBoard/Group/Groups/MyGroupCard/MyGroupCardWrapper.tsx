import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
import { useNavigate } from 'react-router-dom';
import Images from '../../../../../../assets/images';
import GroupsCard from '../GroupsCard';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

const MyGroupCardHeader: React.FC = () => {
  const { myGroups } = usePersistedGroupStore();
  const navigate = useNavigate();

  return (
    <>
      {myGroups.map((m) => (
        <Box
          key={`group-${m.groupId}`}
          cursor="pointer"
          as="a"
          onClick={(e: any) => {
            e.preventDefault();
            navigate(`/d/g/${m.groupId}`);
          }}
          w="282px"
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
