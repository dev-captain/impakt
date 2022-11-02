import create from 'zustand';
import { persist } from 'zustand/middleware';
import { authSlice, AuthSlice } from './stores/authStore';
import { calendarStore, CalendarStore } from './stores/calendarStore';
import { ChallengeStore, challengeStore } from './stores/challengeStore';
import { DiscourseSlice, discourseStore } from './stores/discourseStore';
import { fitnessSlice, FitnessSlice } from './stores/fitnessStore';
import { ForumSlice, forumStore } from './stores/forumStore';
import { godlSlice, GodlSlice } from './stores/godlStore';
import { GroupsSlice, groupsStore } from './stores/groupsStore';
import { KoinSlice, koinSlice } from './stores/koinStore';
import { referralsSlice, ReferralsSlice } from './stores/referralsStore';

// export const useStore = create<>()((...a) => ({}));

export const usePersistedBalanceScoreStore = create<GodlSlice & KoinSlice>()(
  persist(
    (set, get, ...a) => ({
      ...godlSlice(set, get, ...a),
      ...koinSlice(set, get, ...a),
    }),
    {
      name: 'coin-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedAuthStore = create<AuthSlice>()(
  persist(
    (set, get, ...a) => ({
      ...authSlice(set, get, ...a),
    }),
    {
      name: 'auth-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedReferralsStore = create<ReferralsSlice>()(
  persist(
    (set, get, ...a) => ({
      ...referralsSlice(set, get, ...a),
    }),
    {
      name: 'referrals-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedFitnessStore = create<FitnessSlice>()(
  persist(
    (set, get, ...a) => ({
      ...fitnessSlice(set, get, ...a),
    }),
    {
      name: 'fitness-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedDiscourseStore = create<DiscourseSlice>()(
  persist(
    (set, get, ...a) => ({
      ...discourseStore(set, get, ...a),
    }),
    {
      name: 'discourse-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedGroupStore = create<GroupsSlice>()(
  persist(
    (set, get, ...a) => ({
      ...groupsStore(set, get, ...a),
    }),
    {
      name: 'groups-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedForumStore = create<ForumSlice>()(
  persist(
    (set, get, ...a) => ({
      ...forumStore(set, get, ...a),
    }),
    {
      name: 'forums-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedCalendarStore = create<CalendarStore>()(
  persist(
    (set, get, ...a) => ({
      ...calendarStore(set, get, ...a),
    }),
    {
      name: 'calendar-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const usePersistedChallengeStore = create<ChallengeStore>()(
  persist(
    (set, get, ...a) => ({
      ...challengeStore(set, get, ...a),
    }),
    {
      name: 'challenge-storage',
      serialize: (state) => btoa(JSON.stringify(state)),
      deserialize: (str) => JSON.parse(atob(str)),
      getStorage: () => localStorage,
    },
  ),
);

export const clearMemberLocalStorages = () => {
  usePersistedBalanceScoreStore.setState({ godlBalanceScore: 0, koinBalanceScore: 0 });
  usePersistedReferralsStore.persist.clearStorage();
  usePersistedFitnessStore.persist.clearStorage();
};
