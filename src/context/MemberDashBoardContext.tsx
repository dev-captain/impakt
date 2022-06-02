import React, { createContext, useCallback, useContext } from 'react';
import leaderBoardAxiosInstance from '../lib/axios/leaderBoard';

interface MemberDashBoardContextI {
  fetchLeaderBoard: ({ take, skip }: { take: string; skip: string }) => Promise<void>;
  fetchCertainUserLeaderBoardById: ({ userId }: { userId: number }) => Promise<void>;
  memberDashBoardData: any[];
  memberDashBoarCertainUserData: any[];
  getTopThreeByRank: (arr: any[]) => any[];
  getFiveRanksAboveAndFiveRanksBelowByRank: (arr: any[], certainRank?: number) => any[];
  getCertainMemberById: (arr: any[], memberId?: number) => any;
  fetchBasedRankMemberInfo: () => Promise<void>;
  basedMemberInfoByRank: any;
}

const MemberDashBoardContext = createContext<MemberDashBoardContextI | null>(null);

export function useMemberDashBoardContext() {
  const context = useContext(MemberDashBoardContext);
  if (!context) {
    throw new Error(
      'use MemberDashBoardContext provider must be used within the MemberDashBoardContext.Provider',
    );
  }

  return context;
}

export const MemberDashBoardContextProvider: React.FC = ({ children }) => {
  const [memberDashBoardData, setMemberDashBoardData] = React.useState<any[]>([]);
  const [basedMemberInfoByRank, setBasedMemberInfoByRank] = React.useState<any>(null);
  const [memberDashBoarCertainUserData, setMemberDashBoarCertainUserData] = React.useState<any[]>(
    [],
  );

  const getCertainMemberById = useCallback((arr: any[], memberId?: number) => {
    const member = arr.find(({ userId }) => userId === memberId);
    if (!member) return null;

    return member;
  }, []);

  const getTopThreeByRank = useCallback((arr: any[]) => {
    const topThree = arr.filter(({ rank }) => {
      return rank === 1 || rank === 2 || rank === 3;
    });

    return topThree;
  }, []);

  const getFiveRanksAboveAndFiveRanksBelowByRank = useCallback(
    (arr: any[], certainRank?: number) => {
      if (!certainRank) {
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
    },
    [],
  );

  const fetchLeaderBoard = useCallback(async ({ take, skip }: { take: string; skip: string }) => {
    try {
      const leaderBoardRes = await leaderBoardAxiosInstance.get(
        `/leaderboards/user-leaderboards?take=${take}&skip=${skip}`,
      );
      setMemberDashBoardData([...leaderBoardRes.data]);
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  const fetchCertainUserLeaderBoardById = useCallback(async ({ userId }: { userId: number }) => {
    try {
      const leaderBoardResById = await leaderBoardAxiosInstance.get(
        `/leaderboards/user-leaderboards/users/${userId}`,
      );

      setMemberDashBoarCertainUserData([...leaderBoardResById.data]);
    } catch (e: any) {
      console.log(e);
    }
  }, []);

  const fetchBasedRankMemberInfo = useCallback(async () => {
    const rank = 200;

    try {
      const leaderBoardByRankRes = await leaderBoardAxiosInstance.get(
        `/leaderboards/user-leaderboards/ranks/${rank}`,
      );

      if (leaderBoardByRankRes.data && leaderBoardByRankRes.data.length > 0) {
        setBasedMemberInfoByRank(leaderBoardByRankRes.data[0]);
      }

      return;
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <MemberDashBoardContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        fetchLeaderBoard,
        fetchCertainUserLeaderBoardById,
        memberDashBoardData,
        memberDashBoarCertainUserData,
        getTopThreeByRank,
        getFiveRanksAboveAndFiveRanksBelowByRank,
        getCertainMemberById,
        fetchBasedRankMemberInfo,
        basedMemberInfoByRank,
      }}
    >
      {children}
    </MemberDashBoardContext.Provider>
  );
};
