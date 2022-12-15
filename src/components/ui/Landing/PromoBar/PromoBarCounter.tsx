import { HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { compareDateWithNow } from '../../../../utils';
import PromoBarDayItem from './PromoBarDayItem';

interface PropsI {}
export const PromoBarCounter: React.FC<PropsI> = () => {
  const { d, h, m, s } = compareDateWithNow(
    new Date(process.env.REACT_APP_PROMO_DATE ?? '1990').toString(),
  );
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <HStack color="white">
      <PromoBarDayItem label="DAYS" value={d} />
      <Text textStyle="regular5" as="span">
        :
      </Text>
      <PromoBarDayItem label="HOURS" value={h} />
      <Text textStyle="regular5" as="span">
        :
      </Text>
      <PromoBarDayItem label="MINS" value={m} />
      <Text textStyle="regular5" as="span">
        :
      </Text>
      <PromoBarDayItem label="SECS" value={s} />
    </HStack>
  );
};
