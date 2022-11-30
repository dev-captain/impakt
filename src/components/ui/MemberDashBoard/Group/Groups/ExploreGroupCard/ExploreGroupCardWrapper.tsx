/* eslint-disable no-underscore-dangle */
/* eslint-disable no-nested-ternary */
import { Box } from '@chakra-ui/react';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

import Images from '../../../../../../assets/images';
import GroupsCard from '../GroupsCard';

import ExploreGroupItem from './ExploreGroupItem';
import { usePersistedGroupStore } from '../../../../../../lib/zustand';

interface ExploreGroupCardWrapperPropsI {
  status: 'private' | 'public';
}
const ExploreGroupCardWrapper: React.FC<ExploreGroupCardWrapperPropsI> = ({ status }) => {
  const isPrivate = status === 'private';
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
          cursor={g.private ? 'unset' : 'pointer'}
          marginStart="0 !important"
          w={{
            base: '100%',
            sm: '100%',
            md: '31%',
            lgx: '23%',
          }}
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();
            if (!g.private) {
              navigate(`/d/g/${g.id}`);
            }
          }}
          position="relative"
        >
          <GroupsCard
            img={g.CurrentCoverImage ? g.CurrentCoverImage : Images.group.defaultThumbnail}
            member={g.memberCount}
            name={g.groupName}
            isPrivateGroup={g.private}
          >
            <ExploreGroupItem
              gId={g.id}
              gRequestStatus={g.Request}
              gPrivate={isPrivate}
              key={`explore-group-item-${g.id}`}
            />
          </GroupsCard>
        </Box>
      ))}
    </>
  );
};

export default ExploreGroupCardWrapper;
