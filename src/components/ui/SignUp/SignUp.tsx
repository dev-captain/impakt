import { VStack, Box, Text, HStack } from '@chakra-ui/react';
import * as React from 'react';
import { useSearchParams } from 'react-router-dom';

import { Common, I } from '@/components';
import keys from '@/i18n/translations/en';

import SignUpBox from './SignUpBox';

const SignUp: React.FC = () => {
  const [searchParams] = useSearchParams();
  const isMiniGameBonusBoxExist =
    searchParams.get('minigamebonus') === 'true' ? true : false ?? false;

  return (
    <VStack rowGap={{ base: '1.5em', lg: '2em' }} w="full">
      <VStack w="full">
        <Box
          sx={{
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
          background="linear-gradient(79.07deg, rgba(223, 0, 220, 0.3) 0%, rgba(223, 0, 220, 0) 58.09%), linear-gradient(280.93deg, rgba(255, 11, 34, 0.3) 0%, rgba(255, 11, 34, 0) 58.09%), #FFFFFF;"
          id="hero-headline-box"
          bgClip="text"
          color="white"
        >
          <Text
            textAlign={{ base: 'center', lg: 'unset' }}
            letterSpacing={{ base: '-0.5px', lg: '-2.5px' }}
            fontSize={{ base: '32px', lg: '64px' }}
            lineHeight={{ base: '32px', lg: '64px' }}
            fontWeight="700"
          >
            {keys.signUp.createAn}
          </Text>
        </Box>
      </VStack>
      {isMiniGameBonusBoxExist && (
        <Common.Card padding="0px" maxH="103px" maxW="576px" w="full">
          <HStack m="0.5em" alignItems="flex-start" justifyContent="flex-start" w="full">
            <I.ClaimBonusIcon />
            <Box maxW="356px" display="flex" alignSelf="center">
              <Text display="inline-block">
                Congrats! You earned{' '}
                <Box as="span" color="#FEC417">
                  5000 Koins!{' '}
                </Box>
                Create an account now to claim
              </Text>
            </Box>
          </HStack>
        </Common.Card>
      )}
      <SignUpBox />
    </VStack>
  );
};
export default SignUp;
