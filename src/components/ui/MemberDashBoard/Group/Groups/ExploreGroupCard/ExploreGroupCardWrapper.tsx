import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { Common } from '@/components';
import { useSearchString } from '@/hooks';
import Images from '../../../../../../assets/images';
import GroupsCard from '../GroupsCard';

import { usePersistedGroupStore } from '../../../../../../lib/zustand';
import routes from '../../../../../../data/routes';

interface ExploreGroupCardWrapperPropsI {
  status: 'Private' | 'Public';
  searchGroup: string;
}
const ExploreGroupCardWrapper: React.FC<ExploreGroupCardWrapperPropsI> = ({
  status,
  searchGroup,
}) => {
  const isPrivate = status === 'Private';
  const navigate = useNavigate();
  const { exploreGroups } = usePersistedGroupStore();
  const { checkString } = useSearchString();
  const exploreGroup = exploreGroups.filter(
    // eslint-disable-next-line no-underscore-dangle
    (d) => d.private === isPrivate && checkString(d.groupName.toLowerCase(), searchGroup),
  );

  return (
    <>
      {exploreGroup.map((g) => (
        <Box
          key={g.id}
          cursor="pointer"
          marginStart="0 !important"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            navigate(routes.groupDetail(g.id), { state: { fromExplore: true } });
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
