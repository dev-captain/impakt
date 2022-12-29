const useSearchString = () => {
  const checkString = (groupName: string, filterVal: string) => {
    let res = 0;
    let lastSearch = -1;
    for (let i = 0; i < filterVal.length; i += 1) {
      for (let j = lastSearch + 1; j < groupName.length; j += 1) {
        if (groupName[j] === filterVal[i]) {
          res += 1;
          lastSearch = j;
          break;
        }
      }
    }
    if (res === filterVal.length) return true;
    return false;
  };
  return { checkString };
};
export default useSearchString;
