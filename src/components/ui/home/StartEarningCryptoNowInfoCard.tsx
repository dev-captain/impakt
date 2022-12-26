import { FC } from 'react';
import { VStack, Text, useMediaQuery } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import routes from '../../../data/routes';
import Keys from '@/i18n/translations/en';
import { Common, I } from '@/components';

const StartEarningCryptoNowInfoCard: FC = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const navigate = useNavigate();

  return (
    <Common.InfoCard
      tooltipLabel={Keys.toolTip.downloadLabel}
      isShowTooltip
      LeftLogo={<I.YoutubeIcon isMobile={isLessThan1280} />}
    >
      <VStack
        cursor="pointer"
        as="a"
        href={routes.download}
        onClick={(e) => {
          e.preventDefault();
          navigate(routes.download);
        }}
        alignItems="flex-start"
        color="white"
      >
        <Text textStyle={{ base: 'semiBold15', lg: 'regular201' }}>
          {Keys.toolTip.earningCrypto}
        </Text>
        <Text
          color="gold"
          fontWeight="700 !important"
          textStyle={{ base: 'semiBold15', lg: 'regular201' }}
        >
          {Keys.toolTip.godlBonus}
        </Text>
        <Text textStyle={{ base: 'semiBold12', lg: 'semiBold14' }} color="rgba(255,255,255,0.85)">
          {Keys.toolTip.description}
        </Text>
      </VStack>
    </Common.InfoCard>
  );
};
export default StartEarningCryptoNowInfoCard;
