import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsRequestInstance } from '../../../../impakt-dev-api-client/init';

import { RootState } from '../../../store';
import { fetchGroupRequests } from './fetchGroupRequests';
import { fetchMyGroups } from './fetchMyGroups';

const answerToGroupRequest = createAsyncThunk(
  'groups/answer-group-request-to-join',
  async (
    {
      groupId,
      status,
      requestorId,
    }: { groupId: number; status: 'Accepted' | 'Declined'; requestorId: number },
    { rejectWithValue, dispatch, getState },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as RootState;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      await GroupsRequestInstance.groupsRequestControllerV1AnswerRequestToJoinGroup(groupId, {
        status,
        requestorId,
      });

      await dispatch(fetchMyGroups(member.id));
      await dispatch(fetchGroupRequests());

      return true;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { answerToGroupRequest };
