import { KnowledgeBaseEndpoints } from 'helpers/constants';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const useOnboardingCode = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const code = useQuery().get('code');

  const apiCb = async () => {
    try {
      const json = await fetch(KnowledgeBaseEndpoints.OnboardingCode(code!));
      const data = await json.json();
      const result = data.data[0];
      setIsValid(!!result);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (code) {
      apiCb();
    }
  }, [code]);

  return {
    loading,
    isValid,
  };
};

export default useOnboardingCode;
