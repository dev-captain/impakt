import * as React from 'react';
import { Text } from '@chakra-ui/react';
import keys from 'i18n/types';
import { useTranslation } from 'react-i18next';

const AthletesDescriptionText: React.FC = () => {
  const { t } = useTranslation().i18n;

  return (
    <Text
      color="#1C1C28"
      fontSize={{ md: '18px', base: '15px' }}
      lineHeight="inherit"
      fontWeight="500"
      textStyle="TitleBold48"
      maxWidth="670px"
      margin="auto"
      mb={{ lg: '97px', base: '40px' }}
    >
      {t(keys.impaktGamesHero.athletesDescription)}
    </Text>
  );
};
export default AthletesDescriptionText;
