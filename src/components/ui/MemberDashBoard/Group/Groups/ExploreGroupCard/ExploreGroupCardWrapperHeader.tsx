import * as React from 'react';
import { useAppSelector } from 'hooks';
import GroupCardWrapperHeader from '../GroupCardWrapperHeader';

const ExploreGroupCardWrapperHeader: React.FC = () => {
  const exploreGroups = useAppSelector((state) => state.groupsReducer.exploreGroups);

  return exploreGroups.length ? <GroupCardWrapperHeader title="Explore Groups" /> : null;
};

export default ExploreGroupCardWrapperHeader;
