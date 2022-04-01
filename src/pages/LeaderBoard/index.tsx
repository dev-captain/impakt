/* eslint-disable */
import { Button, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react';
import AnimationInWhenVisible from 'components/common/AnimationInWhenVisible';
import Spacer from 'components/core/Spacer';
import HeroLayout from 'components/layouts/HeroLayout';
import useLeaderBoard from 'hooks/store/useLeaderboard';
import { useEffect } from 'react';
import LeaderboardCard from './component/LeaderboardCard';
import { LeaderBoardUser } from "../../hooks/store/types";

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

  let mockDailyData: LeaderBoardUser[] = [];
  
  for (let i = 0; i < 15; i++) {
    mockDailyData.push({ 
      date: '2022.04.01',
      name: `Community${i + 1}`,
      score: 1000 - (i * 50),
      userId: 0,
      order: i + 1
    })
  }

  return (
    <HeroLayout>
      <AnimationInWhenVisible animationType="fade">
        <VStack
          color={text}
          maxW="1232px"
          marginTop="85px"
          w="full"
          px="16px"
          pt={{ base: '100px', md: '0px' }}
        >
          <VStack w="full">
            <LeaderboardCard
              title="Daily leaderboard"
              isSmallView={!!isSmallView}
              data={mockDailyData}
            />
            <Spacer size="100px" />
            <LeaderboardCard
              title="Weekly leaderboard"
              isSmallView={!!isSmallView}
              data={data?.weeklyLeaderboard}
            />
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
              <Button variant="accent" onClick={() => {}} display={{ base: 'none', md: 'flex' }}>
                <Text textStyle="semiBold16" color="glass.100">
                  Fill out the form to register your community!
                </Text>
              </Button>
            </VStack>
          </VStack>
        </VStack>
      </AnimationInWhenVisible>
    </HeroLayout>
  );
};

export default LeaderBoard;
