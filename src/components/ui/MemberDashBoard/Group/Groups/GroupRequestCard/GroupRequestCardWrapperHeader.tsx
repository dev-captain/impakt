import * as React from 'react';
import { useAppSelector } from 'hooks';
import GroupCardWrapperHeader from '../GroupCardWrapperHeader';

const GroupRequestCardWrapperHeader: React.FC = () => {
  const groupRequests = useAppSelector((state) => state.groupsReducer.groupRequests);

  return groupRequests.length ? <GroupCardWrapperHeader title="Group requests" /> : null;
};

export default GroupRequestCardWrapperHeader;
