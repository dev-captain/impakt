import dayjs from 'dayjs';
import create, { SetState } from 'zustand';

type LeaderBoardResponseUser = {
  id: number;
  userCount: number;
  userTime: number;
  username: string;
  communityName: string;
  completedAt: string;
};

type LeaderBoardUser = {
  name: string;
  date: string;
  order: number;
  userId: number;
  points: number;
  community: string;
};

type LeaderboardStore = {
  leaderboard: LeaderBoardUser[];

  getLeaderboard: () => void;
};

const API = process.env.REACT_APP_API;

const useLeaderboard = create<LeaderboardStore>((set: SetState<LeaderboardStore>) => ({
  leaderboard: [],

  getLeaderboard: async () => {
    const url = `${API}/leaderboards/1`;
    const event = await (await fetch(url)).json();
    const leaderboardUsers = event.usersPassed as LeaderBoardResponseUser[];
    const newData = leaderboardUsers.sort(
      (a, b) => a.userCount - b.userCount,
    ) as LeaderBoardResponseUser[];

    const leaderboard = newData.map((user, i) => {
      return {
        order: i + 1,
        userId: user.id,
        name: user.username,
        points: user.userCount,
        community: user.communityName,
        date: dayjs(user.completedAt).format('MM.DD.YY'),
      };
    });

    set((state) => ({ ...state, leaderboard }));
  },
}));

export default useLeaderboard;
