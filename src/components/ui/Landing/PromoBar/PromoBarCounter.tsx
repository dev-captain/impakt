import { HStack, Text, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import { Common } from 'components';
import { compareDateWithNow } from '../../../../utils';
import PromoBarDayItem from './PromoBarDayItem';
import WaitlistModal from '../../Download/DownloadPlatform/WaitlistModal';

interface PropsI {}
export const PromoBarCounter: React.FC<PropsI> = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  const { d, h, m, s } = compareDateWithNow(
    new Date(process.env.REACT_APP_PROMO_DATE ?? '1990').toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
    }),
  );
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      if (d === '00' && h === '00' && m === '00' && s === '00') {
        clearInterval(intervalId);

        return;
      }
      setCount((prev) => {
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [count]);

  return (
    <>
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
      {}
      <Common.ImpaktButton
        ml={{ base: '0', md: '24px' }}
        target="_blank"
        as="a"
        variant="white"
        h="full"
        onClick={onOpen}
        href={
          d === '00' && h === '00' && m === '00' && s === '00'
            ? 'https://wefunder.com/vsports'
            : undefined
        }
        p={{ base: '10px 20px', md: '18px 32px' }}
      >
        <Text textStyle="semibold20">
          {d === '00' && h === '00' && m === '00' && s === '00' ? 'Invest Now' : 'Join'}
        </Text>
      </Common.ImpaktButton>
      {d === '00' && h === '00' && m === '00' && s === '00' ? null : (
        <WaitlistModal
          headlineText=""
          isOpen={isOpen}
          onClose={onClose}
          isCloseButton
          subHeadlineText="Launching soon. Want to become an early investor?"
          type="invest"
        />
      )}
    </>
  );
};
