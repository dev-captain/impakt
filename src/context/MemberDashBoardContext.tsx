import React, { createContext, useCallback, useContext, useEffect } from 'react';
import leaderBoardAxiosInstance from '../lib/axios/leaderBoard';
import statsChannel from '../lib/pusher/init';
import { MemberI } from './types/MemberDashBoardTypes';

interface MemberDashboardContextI {
  fetchWhitelistLeaderboardMemberById: (userId: MemberI['userId']) => Promise<void | boolean>;
  whitelistLeaderboardBasedMemberTotalScore: MemberI['totalScore'];
  whitelistLeaderboardMember: MemberI | null;
  whitelistLeaderboardTopThree: MemberI[];
  whitelistLeaderboardMemberFiveRanksAboveAndFiveRanksBelowOrTopTen: MemberI[];
  whitelistLeaderBoardIsLoading: boolean;
  activeMembers: number;
}

const MemberDashboardContext = createContext<MemberDashboardContextI | null>(null);
const basedRank = 2500;

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
  const [whitelistLeaderboardBasedMemberTotalScore, setWhitelistLeaderboardBasedMemberTotalScore] =
    React.useState<MemberI['totalScore']>(0);
  const [whitelistLeaderboardMember, setWhitelistLeaderboardMember] =
    React.useState<MemberI | null>(null);
  const [whitelistLeaderboardTopThree, setWhitelistLeaderboardTopThree] = React.useState<MemberI[]>(
    [],
  );
  const [
    whitelistLeaderboardMemberFiveRanksAboveAndFiveRanksBelowOrTopTen,
    setWhitelistLeaderboardMemberFiveRanksAboveAndFiveRanksBelowOrTopTen,
  ] = React.useState<MemberI[]>([]);

  const [activeMembers] = React.useState(0);

  const [whitelistLeaderBoardIsLoading, setWhitelistLeaderBoardIsLoading] = React.useState(false);

  const getMemberById = useCallback(
    (whiteListLeaderBoardMembersArr: MemberI[], memberId?: MemberI['userId']) => {
      const member = whiteListLeaderBoardMembersArr.find(
        (memberObj) => memberObj.userId === memberId,
      );
      if (!member) return null;

      return member;
    },
    [],
  );

  const getTopThreeByRank = useCallback((whiteListLeaderBoardMembersArr: MemberI[]) => {
    const topThree = whiteListLeaderBoardMembersArr.filter(({ rank }) => {
      return rank === 1 || rank === 2 || rank === 3;
    });

    return topThree;
  }, []);

  const getFiveRanksAboveAndFiveRanksBelowOrTopTenByRank = useCallback(
    (whiteListLeaderBoardMembersArr: MemberI[], certainRank?: any) => {
      if (!certainRank || certainRank <= 10 || certainRank === 'UNK') {
        const topTenExceptTopThree = whiteListLeaderBoardMembersArr.filter(({ rank }) => {
          return rank > 3 && rank < 11;
        });

        return topTenExceptTopThree;
      }

      const less5 = certainRank - 4;
      const plus5 = certainRank + 4;
      const fiveRanksAboveAndFiveRanksBelow = whiteListLeaderBoardMembersArr.filter(({ rank }) => {
        return less5 < rank && rank < plus5;
      });
      if (fiveRanksAboveAndFiveRanksBelow.length === 0) return whiteListLeaderBoardMembersArr;

      return fiveRanksAboveAndFiveRanksBelow;
    },
    [],
  );

  // TODO for pagination in future
  // const fetchMemberWhitelistLeaderboard = useCallback(
  //   async ({ take, skip }: MemberWhitelistLeaderboardFetchInput) => {
  //     try {
  //       const leaderBoardRes = await leaderBoardAxiosInstance.get(
  //         `/leaderboards/user-leaderboards?take=${take}&skip=${skip}`,
  //       );

  //       return setMemberWhitelistLeaderboard([...leaderBoardRes.data]);
  //     } catch (e: any) {
  //       return null;
  //     }
  //   },
  //   [],
  // );

  const fetchWhitelistLeaderboardMemberById = useCallback(async (memberId: MemberI['userId']) => {
    setWhitelistLeaderBoardIsLoading(true);
    try {
      const leaderBoardResById = await leaderBoardAxiosInstance.get(
        `/leaderboards/user-leaderboards/users/${memberId}`,
      );

      const leaderBoardData = leaderBoardResById.data as MemberI[];
      const member = getMemberById(leaderBoardData, memberId);
      const topThree = getTopThreeByRank(leaderBoardData);
      const memberFiveRanksAboveAndFiveRanksBelowOrTopTen =
        getFiveRanksAboveAndFiveRanksBelowOrTopTenByRank(leaderBoardData, member?.rank);

      setWhitelistLeaderboardMember(member);
      setWhitelistLeaderboardTopThree(topThree);
      setWhitelistLeaderboardMemberFiveRanksAboveAndFiveRanksBelowOrTopTen(
        memberFiveRanksAboveAndFiveRanksBelowOrTopTen,
      );

      return true;
    } catch (e: any) {
      return false;
    } finally {
      setWhitelistLeaderBoardIsLoading(false);
    }
  }, []);

  const fetchMemberWhitelistLeaderboardByRank = useCallback(async (rank: MemberI['rank']) => {
    try {
      const leaderBoardByRankRes = await leaderBoardAxiosInstance.get(
        `/leaderboards/user-leaderboards/ranks/${rank}`,
      );

      return leaderBoardByRankRes.data as MemberI[] | [];
    } catch (e) {
      return null;
    }
  }, []);

  const fetchWhitelistLeaderboardBasedRankTotalScore = useCallback(async () => {
    try {
      const memberDataByRank2500 = await fetchMemberWhitelistLeaderboardByRank(basedRank);
      if (memberDataByRank2500 && memberDataByRank2500.length > 0) {
        setWhitelistLeaderboardBasedMemberTotalScore(memberDataByRank2500[0].totalScore);
      }
    } catch (e) {
      setWhitelistLeaderboardBasedMemberTotalScore(0);
    }
  }, []);

  useEffect(() => {
    fetchWhitelistLeaderboardBasedRankTotalScore();
  }, []);

  useEffect(() => {
    statsChannel.bind('message', (data: any) => {
      console.log(data);
    });

    return () => {
      statsChannel.unbind('message');
    };
  }, []);

  return (
    <MemberDashboardContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        fetchWhitelistLeaderboardMemberById,
        whitelistLeaderboardBasedMemberTotalScore,
        whitelistLeaderboardMember,
        whitelistLeaderboardMemberFiveRanksAboveAndFiveRanksBelowOrTopTen,
        whitelistLeaderboardTopThree,
        whitelistLeaderBoardIsLoading,
        activeMembers,
      }}
    >
      {children}
    </MemberDashboardContext.Provider>
  );
};
