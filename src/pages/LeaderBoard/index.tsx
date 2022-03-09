import { Button, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react';
import Images from 'assets/images';
import Spacer from 'components/core/Spacer';
import HeroLayout from 'components/layouts/HeroLayout';
import { LeaderBoardData } from 'data';
import Community from './component/Community';
import LeaderBoardContainer from './component/LeaderBoardContainer';
import LeaderBoardRow from './component/LeaderBoardRow';

const LeaderBoard = () => {
  const bgImage = useColorModeValue(Images.impaktGames.Header('2xl'), Images.impaktGames.light);
  const text = useColorModeValue('glass.100', 'glass.700');
  const isSmallView = useBreakpointValue({
    base: true,
    sm: true,
    md: false,
    lg: false,
    xl: false,
    '2xl': false,
  });

  return (
    <HeroLayout showNavbar bgImage={bgImage}>
      <VStack color={text} w="full" h="full" minH="100vh" pt="70px">
        <VStack spacing="24px" mb="60px" px="16px" textAlign="center">
          <Text textStyle={isSmallView ? 'bold5' : 'black8'}>Join the challenge</Text>
          <Text textStyle={isSmallView ? 'regular3' : 'regular5'} opacity="0.6">
            Represent your community and earn together!
          </Text>
          <Button variant="accent" onClick={() => {}} display={{ base: 'none', md: 'flex' }}>
            <Text textStyle="semiBold16" color="glass.100">
              Find your community and join
            </Text>
          </Button>
        </VStack>
        <VStack
          w="full"
          mb="80px"
          maxH="500px"
          maxW="1000px"
          spacing="24px"
          overflowY="scroll"
          borderRadius="28px"
          className={isSmallView ? '' : 'leaderBoard'}
        >
          <LeaderBoardContainer>
            {LeaderBoardData.slice(0, 3).map((item, index) => {
              return (
                <LeaderBoardRow
                  {...item}
                  showStar
                  key={index.toString()}
                  isSmallView={isSmallView}
                />
              );
            })}
          </LeaderBoardContainer>
          <LeaderBoardContainer>
            {LeaderBoardData.slice(3).map((item, index) => {
              return <LeaderBoardRow isSmallView={isSmallView} {...item} key={index.toString()} />;
            })}
          </LeaderBoardContainer>
        </VStack>
        {!isSmallView && <Spacer size="80px" />}
        {!isSmallView && <Community />}
      </VStack>
    </HeroLayout>
  );
};

export default LeaderBoard;
