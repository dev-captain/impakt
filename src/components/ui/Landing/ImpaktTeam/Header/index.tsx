import { VStack, Box, Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';
import keys from 'i18n/types';
import { useTranslation } from 'react-i18next';
import LandingLine from '../../LandingLine';

const ImpaktTeamHeader: React.FC = () => {
  const { t } = useTranslation().i18n;
  const textColor = useColorModeValue('glass.100', 'glass.700');

  return (
    <VStack spacing="0px" px="16px" maxW="100%" width="100%" color={textColor}>
      <VStack width="100%">
        <VStack
          width="100%"
          spacing="24px"
          align={{ base: 'flex-start', md: 'auto' }}
          justifyContent="center"
          maxW={{ base: '100%', lg: '1232px' }}
          pb="16px"
        >
          <VStack
            w="full"
            spacing={5}
            justify={{ base: 'center', md: 'center' }}
            mt={{ base: 0, md: 0, xl: '64px' }}
          >
            <Box textAlign="center">
              <Text
                color="#1C1C28"
                fontSize={{ base: '30px', md: '50px' }}
                textStyle="semiBold17"
                fontWeight="700"
                lineHeight="inherit"
              >
                {t(keys.impaktGamesHero.impaktTeamTitle)}
              </Text>
              <LandingLine dir="h" />
              <Text
                color="#1C1C28"
                fontSize="26px"
                lineHeight="inherit"
                fontWeight="700"
                textStyle="TitleBold48"
                maxWidth="519px"
                margin="auto"
                mb="15px"
              >
                The industry experts defining vSports.
              </Text>
            </Box>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default ImpaktTeamHeader;
