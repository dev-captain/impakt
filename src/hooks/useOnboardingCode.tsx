/* eslint-disable no-nested-ternary */
import { useColorModeValue } from '@chakra-ui/react';
import dayjs from 'dayjs';
import { KnowledgeBaseEndpoints } from 'helpers/constants';
import { useEffect, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

const useOnboardingCode = () => {
  const code = useQuery().get('code');
  const [widgetReady, setWidgetReady] = useState(false);
  const [loading, setLoading] = useState<boolean>(!!code);
  const [isExpired, setIsExpired] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const bg = useColorModeValue('glass.700', 'glass.300');
  const text = useColorModeValue('glass.100', 'glass.800');
  const informativeMessage = code
    ? isExpired
      ? 'Your onboarding code is expired.'
      : 'Your onboarding code is wrong.'
    : 'Your onboarding code is not found.';

  const widgetProps = {
    id: 'EEnQpuTA',
    style: {
      width: '100%',
      padding: '16px',
      height: widgetReady ? '70vh' : '0vh',
    },
    onReady: () => {
      setWidgetReady(true);
    },
  };

  const apiCb = async () => {
    try {
      const json = await fetch(KnowledgeBaseEndpoints.OnboardingCode(code!));
      const data = await json.json();
      const result = data.data[0].attributes;

      const startDate = result?.expireDate;
      const utcOffset = result?.utcOffset;

      const dateString = startDate
        ? `${startDate} GMT${utcOffset}`
        : dayjs().add(1, 'seconds').toDate();
      const date = dayjs(dateString).utcOffset(utcOffset ? Number(utcOffset) : 8);
      const now = dayjs().utcOffset(8);
      const isExpiredCode = date.diff(now, 'minutes') <= 0;

      if (isExpiredCode) {
        setIsValid(false);
        setIsExpired(!isExpired);
      } else {
        setIsValid(!!result);
      }
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
    bg,
    text,
    loading,
    isValid,
    isExpired,
    widgetReady,
    widgetProps,
    setWidgetReady,
    informativeMessage,
    isCodeExist: !!code,
    showWidget: !loading && isValid,
    showInformativeMessage: !loading && !isValid,
    showSpinner: loading || (!widgetReady && isValid),
  };
};

export default useOnboardingCode;
