import { Common, I } from 'components';
import { FC } from 'react';
import { VStack, Text, useMediaQuery } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';
import { useNavigate } from 'react-router-dom';

const StartEarningCryptoNowInfoCard: FC = () => {
  const [isLessThan1280] = useMediaQuery('(max-width: 1280px)');
  const navigate = useNavigate();
  const { t } = useTranslation(`default`).i18n;

  return (
    <Common.InfoCard
      tooltipLabel={t(Keys.toolTip.downloadLabel)}
      isShowTooltip
      LeftLogo={<I.YoutubeIcon isMobile={isLessThan1280} />}
    >
      <VStack
        cursor="pointer"
        as="a"
        href="/download"
        onClick={(e) => {
          e.preventDefault();
          navigate('/download');
        }}
        alignItems="flex-start"
        color="white"
      >
        <Text textStyle={{ base: 'semiBold15', lg: 'regular201' }}>
          {t(Keys.toolTip.earningCrypto)}
        </Text>
        <Text
          color="gold"
          fontWeight="700 !important"
          textStyle={{ base: 'semiBold15', lg: 'regular201' }}
        >
          {t(Keys.toolTip.godlBonus)}
        </Text>
        <Text textStyle={{ base: 'semiBold12', lg: 'semiBold14' }} color="whiteAlpha.400">
          {t(Keys.toolTip.description)}
        </Text>
      </VStack>
    </Common.InfoCard>
  );
};
export default StartEarningCryptoNowInfoCard;
