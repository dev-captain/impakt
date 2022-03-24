import dayjs from 'dayjs';
import create, { GetState, SetState } from 'zustand';
import { Challenges, LeaderBoardResponseUser, LeaderBoardUser } from './types';

const API = process.env.REACT_APP_API;

type LeaderboardStore = {
  dailyLeaderboard: LeaderBoardUser[];
  weeklyLeaderboard: LeaderBoardUser[];

  getLeaderboard: () => void;
  getChallenges: () => Promise<Challenges>;
  getLeaderboardId: (id: number) => Promise<LeaderBoardUser[]>;
};

const useLeaderboard = create<LeaderboardStore>(
  (set: SetState<LeaderboardStore>, get: GetState<LeaderboardStore>) => ({
    dailyLeaderboard: [],
    weeklyLeaderboard: [],

    getChallenges: async () => {
      const url = `${API}/fitness/challenges?validOnly=true`;
      const challenges = (await (await fetch(url)).json()) as Challenges[];

      return challenges[0];
    },

    getLeaderboardId: async (challengeId: number) => {
      const url = `${API}/leaderboards/${challengeId}`;
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

      return leaderboard;
    },

    getLeaderboard: async () => {
      const challenges = await get().getChallenges();
      const daily = challenges.RoutinesToChallenges.filter(
        (routine) => routine.challengeType === 'Daily',
      )[0];
      const weekly = challenges.RoutinesToChallenges.filter(
        (routine) => routine.challengeType === 'Weekly',
      )[0];

      const dailyLeaderboard = await get().getLeaderboardId(daily.id);
      const weeklyLeaderboard = await get().getLeaderboardId(weekly.id);

      set((state) => ({ ...state, dailyLeaderboard, weeklyLeaderboard }));
    },
  }),
);

export default useLeaderboard;
