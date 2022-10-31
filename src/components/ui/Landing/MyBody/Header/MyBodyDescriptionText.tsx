import * as React from 'react';
import { Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import Keys from 'i18n/types';

const MyBodyDescriptionText: React.FC = () => {
  const { t } = useTranslation(`default`).i18n;

  return (
    <>
      <Text color="#1C1C28" fontWeight="500">
        {t(Keys.impaktGamesHero.body)}
      </Text>
      <Text color="#1C1C28" fontWeight="500" maxWidth="618px">
        {t(Keys.impaktGamesHero.body1)}
      </Text>
    </>
  );
};
export default MyBodyDescriptionText;
