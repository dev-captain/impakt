import React, { createContext, useCallback, useContext } from 'react';
import leaderBoardAxiosInstance from '../lib/axios/leaderBoard';

interface MemberDashboardContextI {
  fetchMemberWhitelistLeaderboard: ({
    take,
    skip,
  }: {
    take: string;
    skip: string;
  }) => Promise<void>;
  fetchMemberLeaderboardById: ({ userId }: { userId: number }) => Promise<void>;
  memberWhitelistLeaderboard: any[];
  memberWhitelistLeaderboardMember: any[];
  getTopThreeByRank: (arr: any[]) => any[];
  getFiveRanksAboveAndFiveRanksBelowByRank: (arr: any[], certainRank?: number) => any[];
  getMemberById: (arr: any[], memberId?: number) => any;
  fetchBasedRankMemberInfo: () => Promise<void>;
  memberWhitelistLeaderboardBasedMember: any;
}

const MemberDashboardContext = createContext<MemberDashboardContextI | null>(null);

export function useMemberDashBoardContext() {
  const context = useContext(MemberDashboardContext);
  if (!context) {
    throw new Error(
      'use MemberDashBoardContext provider must be used within the MemberDashBoardContext.Provider',
    );
  }

  return context;
}

export const MemberDashboardContextProvider: React.FC = ({ children }) => {
  const [memberWhitelistLeaderboard, setMemberWhitelistLeaderboard] = React.useState<any[]>([]);
  const [memberWhitelistLeaderboardBasedMember, setMemberWhitelistLeaderboardBasedMember] =
    React.useState<any>(null);
  const [memberWhitelistLeaderboardMember, setMemberWhitelistLeaderboardMember] = React.useState<
    any[]
  >([]);

  const getMemberById = useCallback((arr: any[], memberId?: number) => {
    const member = arr.find(({ userId }) => userId === memberId);
    if (!member) return { rank: undefined, totalScore: undefined };

    return member;
  }, []);

  const getTopThreeByRank = useCallback((arr: any[]) => {
    const topThree = arr.filter(({ rank }) => {
      return rank === 1 || rank === 2 || rank === 3;
    });

    return topThree;
  }, []);

  const getFiveRanksAboveAndFiveRanksBelowByRank = useCallback((arr: any[], certainRank?: any) => {
    if (!certainRank || certainRank <= 10 || certainRank === 'UNK') {
      const topTenExceptTopThree = arr.filter(({ rank }) => {
        return rank > 3 && rank < 11;
      });

      return topTenExceptTopThree;
    }

    const less5 = certainRank - 4;
    const plus5 = certainRank + 4;
    const fiveRanksAboveAndFiveRanksBelow = arr.filter(({ rank }) => {
      return less5 < rank && rank < plus5;
    });
    if (fiveRanksAboveAndFiveRanksBelow.length === 0) return arr;

    return fiveRanksAboveAndFiveRanksBelow;
  }, []);

  const fetchMemberWhitelistLeaderboard = useCallback(
    async ({ take, skip }: { take: string; skip: string }) => {
      try {
        const leaderBoardRes = await leaderBoardAxiosInstance.get(
          `/leaderboards/user-leaderboards?take=${take}&skip=${skip}`,
        );
        setMemberWhitelistLeaderboard([...leaderBoardRes.data]);
      } catch (e: any) {
        console.log(e);
      }
    },
    [],
  );

  const fetchMemberLeaderboardById = useCallback(async ({ userId }: { userId: number }) => {
    try {
      const leaderBoardResById = await leaderBoardAxiosInstance.get(
        `/leaderboards/user-leaderboards/users/${userId}`,
      );

      setMemberWhitelistLeaderboardMember([...leaderBoardResById.data]);
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  const fetchBasedRankMemberInfo = useCallback(async () => {
    const rank = 2500;

    try {
      const leaderBoardByRankRes = await leaderBoardAxiosInstance.get(
        `/leaderboards/user-leaderboards/ranks/${rank}`,
      );

      if (leaderBoardByRankRes.data && leaderBoardByRankRes.data.length > 0) {
        setMemberWhitelistLeaderboardBasedMember(leaderBoardByRankRes.data[0]);
      }
      setMemberWhitelistLeaderboardBasedMember({ totalScore: 0 });

      return;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <MemberDashboardContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        fetchMemberWhitelistLeaderboard,
        fetchMemberLeaderboardById,
        getTopThreeByRank,
        getFiveRanksAboveAndFiveRanksBelowByRank,
        getMemberById,
        fetchBasedRankMemberInfo,
        memberWhitelistLeaderboard,
        memberWhitelistLeaderboardBasedMember,
        memberWhitelistLeaderboardMember,
      }}
    >
      {children}
    </MemberDashboardContext.Provider>
  );
};
