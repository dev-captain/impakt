import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsMemberInstance } from '../../../../impakt-dev-api-client/init';

const fetchGroupRoleById = createAsyncThunk(
  'groups/fetch-group-role-by-id',
  async (groupId: number, { rejectWithValue, getState }) => {
    try {
      const {
        memberAuth: { isLogin },
      } = getState() as any;

      if (!isLogin) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }
      const getMyRoleOnGroup = await GroupsMemberInstance.groupsMemberControllerV1AmIRoleOnGroup(
        groupId,
      );

      const payload = getMyRoleOnGroup;

      return payload;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { fetchGroupRoleById };
