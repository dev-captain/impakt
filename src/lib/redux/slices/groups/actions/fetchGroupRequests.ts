import { GetGroupRequestResV2 } from '@impakt-dev/api-client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsRequestInstance } from '../../../../impakt-dev-api-client/init';

const fetchGroupRequests = createAsyncThunk(
  'groups/group-requests',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
        groupsReducer: { myGroups },
      } = getState() as any;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      if (myGroups?.length > 0) {
        const callMap = myGroups.map(async ({ groupId }) =>
          GroupsRequestInstance.groupsRequestControllerV1GetGroupRequests(groupId),
        );

        const getGroupRequests = await Promise.all(callMap);
        if (getGroupRequests.length > 0) {
          const dataExist: GetGroupRequestResV2[] = [];
          getGroupRequests.forEach((d) => {
            if (d.length > 0) {
              dataExist.push(d[0]);
            }
          });

          const payload = dataExist;

          return payload;
        }
      }

      return [];
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGroupRequests };
