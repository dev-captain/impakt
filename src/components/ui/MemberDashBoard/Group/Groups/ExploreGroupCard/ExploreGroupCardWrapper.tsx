import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Common } from 'components';

import Images from '../../../../../../assets/images';
import GroupsCard from '../GroupsCard';

import { usePersistedGroupStore } from '../../../../../../lib/zustand';
import routes from '../../../../../../data/routes';

interface ExploreGroupCardWrapperPropsI {
  status: 'Private' | 'Public';
}
const ExploreGroupCardWrapper: React.FC<ExploreGroupCardWrapperPropsI> = ({ status }) => {
  const isPrivate = status === 'Private';
  const navigate = useNavigate();

  const { exploreGroups } = usePersistedGroupStore();

  const exploreGroup = exploreGroups.filter(
    // eslint-disable-next-line no-underscore-dangle
    (d) => d.private === isPrivate,
  );

  return (
    <>
      {exploreGroup.map((g) => (
        <Box
          key={g.id}
          cursor="pointer"
          marginStart="0 !important"
          w="282px"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(routes.groupDetail(g.id));
          }}
          position="relative"
        >
          <GroupsCard
            img={g.CurrentCoverImage ? g.CurrentCoverImage : Images.group.defaultThumbnail}
            // member={g.memberCount}
            name={g.groupName}
            isPrivateGroup={g.private}
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
      ))}
    </>
  );
};

export default ExploreGroupCardWrapper;
