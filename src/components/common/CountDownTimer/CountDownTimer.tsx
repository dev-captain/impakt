import { StackProps, Text } from '@chakra-ui/react';
import React from 'react';
import { compareDateWithNow } from '../../../utils';
import CountDownTimerItem from './CountDownTimerItem';

interface CountDownTimerPropsI {
  validUntil: string;
  isWhite?: boolean;
  finishCb?: () => void;
  last15MinutesCb?: () => void;
}

const CountDownTimer: React.FC<CountDownTimerPropsI & StackProps> = ({
  validUntil,
  isWhite = false,
  finishCb,
  last15MinutesCb,
  ...props
}) => {
  const [count, setCount] = React.useState(0);

  const { d, h, m, s } = compareDateWithNow(validUntil);

  React.useEffect(() => {
    let startingCount = 0;
    const intervalId = setInterval(() => {
      if (d === '00' && h === '00' && m === '00' && s === '00') {
        clearInterval(intervalId);
        if (finishCb) {
          finishCb();
        }

        return;
      }

      if (d === '00' && h === '00' && Number(m) < 15 && startingCount === 0) {
        startingCount += 1;
        if (last15MinutesCb) {
          last15MinutesCb();
        }
      }

      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <>
      <CountDownTimerItem isWhite={isWhite} label="DAYS" value={d} {...props} />
      <Text color={isWhite ? 'white' : '#000'} textStyle="regular5" as="span">
        :
      </Text>
      <CountDownTimerItem isWhite={isWhite} label="HOURS" value={h} {...props} />
      <Text color={isWhite ? 'white' : '#000'} textStyle="regular5" as="span">
        :
      </Text>
      <CountDownTimerItem isWhite={isWhite} label="MINS" value={m} {...props} />
      <Text color={isWhite ? 'white' : '#000'} textStyle="regular5" as="span">
        :
      </Text>
      <CountDownTimerItem isWhite={isWhite} label="SECS" value={s} {...props} />
    </>
  );
};

export default CountDownTimer;
