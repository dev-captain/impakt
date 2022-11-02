import { createAsyncThunk } from '@reduxjs/toolkit';
import { GroupsInstance } from '../../../../impakt-dev-api-client/init';

import { fetchGroupDetailById } from './fetchGroupDetailById';

const updateGroupCoverImage = createAsyncThunk(
  'groups/update-cover-image',
  async (
    { body, groupId }: { body: FormData; groupId: number },
    { rejectWithValue, getState, dispatch },
  ) => {
    try {
      const {
        memberAuth: { isLogin, member },
      } = getState() as any;

      if (!isLogin || !member) {
        return Promise.reject(new Error('Please sign in first to continue...'));
      }

      // const result = await axios
      //   .create({
      //     baseURL: API_SERVER_BASE_URL,
      //     withCredentials: true,
      //     headers: { 'Content-Type': 'multipart/form-data' },
      //   })
      //   .patch(`/api/v1/groups/${groupId}/cover-image`, body);
      const file = body.get('file');

      const result = await GroupsInstance.groupsControllerV1PatchGroupCoverImage(
        groupId,
        file as any,
      );
      await dispatch(fetchGroupDetailById(groupId.toString()));

      return result;
    } catch (err: any) {
      return rejectWithValue(err);
    }
  },
);

// eslint-disable-next-line import/prefer-default-export
export { updateGroupCoverImage };
