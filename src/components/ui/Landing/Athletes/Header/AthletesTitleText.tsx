import * as React from 'react';
import keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import { Text } from '@chakra-ui/react';

interface PropsI {}
const AthletesTitleText: React.FC<PropsI> = () => {
  const { t } = useTranslation().i18n;

  return (
    <Text
      color="#1C1C28"
      fontSize={{ base: '30px', md: '50px' }}
      textStyle="semiBold17"
      fontWeight="700"
      margin="auto"
      lineHeight="100%"
      maxWidth="600px"
    >
      {t(keys.impaktGamesHero.athletesTitle)}
    </Text>
  );
};
export default AthletesTitleText;
