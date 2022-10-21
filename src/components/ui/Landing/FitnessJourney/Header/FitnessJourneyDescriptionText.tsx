import * as React from 'react';
import { Text } from '@chakra-ui/react';
import keys from 'i18n/types';

import { useTranslation } from 'react-i18next';

const FitnessJourneyDescriptionText: React.FC = () => {
  const { t } = useTranslation().i18n;

  return (
    <Text
      margin="auto"
      color="#1C1C28"
      fontSize={{ lg: '16px', base: '14px' }}
      lineHeight="inherit"
      fontWeight="500"
      textStyle="TitleBold48"
      maxWidth={{ lg: '632px', md: '482px', base: '730px' }}
      textAlign={{ base: 'center', md: 'start' }}
    >
      {t(keys.impaktGamesHero.fitnessJourneyDescription)}
    </Text>
  );
};
export default FitnessJourneyDescriptionText;
