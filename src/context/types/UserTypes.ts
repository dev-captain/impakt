export interface User {
  Communities: any[];
  Roles: any[];
  createdAt: string;
  cryptoWallet: null | string;
  discordHandle: any;
  email: string;
  emailVerified: boolean;
  firstName: null | string;
  id: number;
  lastName: null | string;
  primaryCommunityId: null | string | number;
  referrerId: number;
  updatedAt: string;
  username: string;
}

export type signInInput = { emailOrUsername: string; password: string };
export type signUpInput = {
  username: string;
  password: string;
  email: string;
  referrerId?: number;
};

export type singleSignOnInput = {
  DiscoursePayload?: string;
  DiscourseSig?: string;
};
