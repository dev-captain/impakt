const routes = {
  home: '/',
  events: '/events',
  onboarding: '/onboarding',
  contact: '/contact',
  download: '/download',
  changePassword: '/change-password',
  recoverPassword: '/recover-password',
  invite: '/invite',
  register: '/register',
  signin: '/signin',
  verify: '/verify',
  nft: '/nft',
  whitelist: '/whitelist',
  termsOfUse: '/terms-of-use',
  dashboard: '/d',
  groups: '/d/g',
  referrals: '/d/r',
  groupDetail: (groupId: number) => `/d/g/${groupId}`,
  postDetail: (groupId: number, postId: number) => `/d/g/${groupId}/post/${postId}`,
  eventDetail: (groupId: number, eventId: number) => `/d/g/${groupId}/eventId/${eventId}`,
};

export default routes;
