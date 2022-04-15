import dayjs from 'dayjs';
import create, { GetState, SetState } from 'zustand';
import { Challenges, LeaderBoardResponseUser, LeaderBoardUser } from './types';

const API = process.env.REACT_APP_API;

type LeaderboardStore = {
  dailyLeaderboard: LeaderBoardUser[];
  weeklyLeaderboard: LeaderBoardUser[];

  getLeaderboard: () => void;
  getChallenges: () => Promise<Challenges[]>;
  getLeaderboardId: (id: number) => Promise<LeaderBoardUser[]>;
};

const useLeaderboard = create<LeaderboardStore>(
  (set: SetState<LeaderboardStore>, get: GetState<LeaderboardStore>) => ({
    dailyLeaderboard: [],
    weeklyLeaderboard: [],

    getChallenges: async () => {
      const url = `${API}/fitness/challenges?validOnly=true`;
      const challenges = (await (await fetch(url)).json()) as Challenges[];

      return challenges;
    },

    getLeaderboardId: async (challengeId: number) => {
      if (!challengeId) return [];

      const url = `${API}/leaderboards/${challengeId}/communities`;
      const leaderboardCommunities = (await (await fetch(url)).json()) as LeaderBoardResponseUser[];
      const newData = leaderboardCommunities.sort((a, b) => a.score - b.score);

      const leaderboard = newData
        .sort((firstscore, secondscore) => (firstscore.score > secondscore.score ? -1 : 1))
        .map((community, i) => {
          return {
            order: i + 1,
            userId: community.id,
            name: community.name,
            score: community.score,
            date: dayjs().format('MM.DD.YY'),
          };
        });

      return leaderboard;
    },

    getLeaderboard: async () => {
      const challenges = await get().getChallenges();
      // const daily = challenges.RoutinesToChallenges.filter(
      //   (routine) => routine.challengeType === 'Daily',
      // )[0];
      // const weekly = challenges.RoutinesToChallenges.filter(
      //   (routine) => routine.challengeType === 'Weekly',
      // )[0];

      const daily: Challenges[] = [];
      const weekly: Challenges[] = [];

      challenges.map((challenge) => {
        if (challenge.RoutinesToChallenges[0].challengeType === 'Daily') {
          daily.push(challenge);
        }
        if (challenge.RoutinesToChallenges[0].challengeType === 'Weekly') {
          weekly.push(challenge);
        }

        return null;
      });
      const dailyLeaderboard = (await get().getLeaderboardId(daily[0]?.id)) || [];
      const weeklyLeaderboard = (await get().getLeaderboardId(weekly[0]?.id)) || [];

      set((state) => ({ ...state, dailyLeaderboard, weeklyLeaderboard }));
    },
  }),
);

export default useLeaderboard;
