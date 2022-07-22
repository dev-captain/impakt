import { Button, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react';
import { C, Common } from 'components';
import useLeaderBoard from 'hooks/store/useLeaderboard';
import { useEffect } from 'react';
import LeaderboardCard from './component/LeaderboardCard';

const LeaderBoard = () => {
  const data = useLeaderBoard();
  const text = useColorModeValue('glass.100', 'glass.700');
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  useEffect(() => {
    data.getLeaderboard();
  }, []);

  return (
    <C.HeroLayout>
      <Common.AnimationInWhenVisible animationType="fade">
        <VStack
          color={text}
          maxW="1232px"
          marginTop="85px"
          w="full"
          px="16px"
          pt={{ base: '100px', md: '0px' }}
        >
          <VStack w="full">
            {data?.dailyLeaderboard.length > 0 && (
              <>
                <LeaderboardCard
                  title="Daily leaderboard"
                  isSmallView={!!isSmallView}
                  data={data?.dailyLeaderboard}
                />
                <Common.Spacer size="100px" />
              </>
            )}
            {data?.weeklyLeaderboard.length > 0 && (
              <LeaderboardCard
                title="Weekly leaderboard"
                isSmallView={!!isSmallView}
                data={data?.weeklyLeaderboard}
              />
            )}
            <VStack
              spacing="24px"
              marginTop="95px !important"
              mb={{ base: '25px', md: '60px' }}
              textAlign="center"
            >
              <Text textStyle={isSmallView ? 'black7' : 'black8'}>Join the NFT Whitelist</Text>
              <Text textStyle={isSmallView ? 'regular3' : 'regular5'} opacity="0.6">
                Represent your community! Take part in group challenges and win together!
              </Text>
              <Button
                as="a"
                variant="accent"
                target="_blank"
                _focus={{}}
                cursor="pointer"
                href="https://airtable.com/shrlRU72JdcfXIvKj"
              >
                <Text textStyle="semiBold16" color="glass.100">
                  Fill out the form to register your community!
                </Text>
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </Common.AnimationInWhenVisible>
    </C.HeroLayout>
  );
};

export default LeaderBoard;
