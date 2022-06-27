import React, { createContext, useContext, useEffect } from 'react';

import statsChannel from '../lib/pusher/init';

interface PusherContextI {
  activeMembers: number;
}

const PusherContext = createContext<PusherContextI | null>(null);

export function usePusherContext() {
  const context = useContext(PusherContext);
  if (!context) {
    throw new Error(
      'use MemberDashBoardContext provider must be used within the MemberDashBoardContext.Provider',
    );
  }

  return context;
}

export const PusherContextProvider: React.FC = ({ children }) => {
  const [activeMembers, setActiveMembers] = React.useState(0);

  useEffect(() => {
    statsChannel.bind('RoutineSessionSuccess', (activeMemberStatsData: any) => {
      if (activeMemberStatsData?.activeMembers7Days) {
        if (!Number.isNaN(Number(activeMemberStatsData?.activeMembers7Days))) {
          setActiveMembers(activeMemberStatsData.activeMembers7Days);
        }
      }
    });

    return () => {
      statsChannel.unbind('RoutineSessionSuccess');
    };
  }, []);

  return (
    <PusherContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        activeMembers,
      }}
    >
      {children}
    </PusherContext.Provider>
  );
};
