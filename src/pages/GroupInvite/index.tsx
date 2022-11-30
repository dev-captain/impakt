import { useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';
import { useGroupsMemberControllerV1JoinGroup } from '../../lib/impakt-dev-api-client/react-query/groups-member/groups-member';
import { useGroupsRequestControllerV1SendRequestToJoinGroup } from '../../lib/impakt-dev-api-client/react-query/groups-request/groups-request';
import { exploreGroupToMyGroupsTransformation } from '../../lib/impakt-dev-api-client/utils';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../lib/zustand';
import { renderToast } from '../../utils';

const GroupInvite = () => {
  const { exploreGroups, setExploreGroups, addToMyGroups } = usePersistedGroupStore();

  const sendGroupRequestToJoin = useGroupsRequestControllerV1SendRequestToJoinGroup();
  const joinGroup = useGroupsMemberControllerV1JoinGroup();
  const navigate = useNavigate();
  const location = useLocation();
  const { member } = usePersistedAuthStore();
  const [searchParams] = useSearchParams();
  const groupId: any = searchParams.get('g');
  const isPrivate = searchParams.get('p') === 'true';
  const referralId = searchParams.get('r');
  const jointoGroup = async () => {
    // eslint-disable-next-line no-unused-expressions
    if (!member) {
      navigate(`/register/${referralId}?next=${location.pathname + location.search}`);
    }
    if (member) {
      if (isPrivate) {
        sendGroupRequestToJoin.mutate(
          { groupId },
          {
            onSuccess: (d) => {
              renderToast('success', 'Request sent successfully', 'white');
              const shallowExploreGroups = [...exploreGroups];
              const indexOfExploreGroup = shallowExploreGroups.findIndex(
                (group) => group.id === groupId,
              );
              if (indexOfExploreGroup !== -1) {
                shallowExploreGroups[indexOfExploreGroup].Request = d;
                setExploreGroups(shallowExploreGroups);
              }
              navigate('/dashboard/groups');
            },
            onError: (err) => {
              renderToast('error', err.response?.data.message ?? 'Something went wrong');
              navigate('/dashboard/groups');
            },
          },
        );
      } else {
        joinGroup.mutate(
          { groupId },
          {
            onSuccess: () => {
              renderToast('success', 'Joined successfully', 'white');
              const shallowExploreGroups = [...exploreGroups];
              const exploreItem = shallowExploreGroups.find((group) => group.id === groupId);
              const distractGroupFromExploreList = shallowExploreGroups.filter(
                (group) => group.id !== groupId,
              );
              setExploreGroups(distractGroupFromExploreList);
              if (exploreItem) {
                const myGroupObj = exploreGroupToMyGroupsTransformation(exploreItem, member?.id);
                addToMyGroups({
                  ...myGroupObj,
                  Group: { ...myGroupObj.Group, memberCount: myGroupObj.Group.memberCount + 1 },
                });
              }

              navigate(`/dashboard/groups/group/${groupId}`);
            },
            onError: (err) => {
              renderToast('error', err.response?.data.message ?? 'Something went wrong');
              navigate(`/dashboard/groups/group/${groupId}`);
            },
          },
        );
      }
    }
  };

  useEffect(() => {
    jointoGroup();
  }, []);

  return null;
};

export default GroupInvite;
