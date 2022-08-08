const useNormalizeError = () => {
  const normalizeAuthErrorHandler = (errAuthMsg: string) => {
    if (errAuthMsg.includes('404')) {
      return NO_DISCORD_USER_FOUND;
    }

    if (errAuthMsg.includes('401')) {
      return PLEASE_LOGIN_FIRST;
    }

    return errAuthMsg;
  };

  return { normalizeAuthErrorHandler };
};

const NO_DISCORD_USER_FOUND = 'Discord user not found';
const PLEASE_LOGIN_FIRST = 'You must log in first...';

export default useNormalizeError;
