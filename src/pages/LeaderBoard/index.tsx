import { Button, Text, useBreakpointValue, useColorModeValue, VStack } from '@chakra-ui/react';
import AnimationInWhenVisible from 'components/common/AnimationInWhenVisible';
import HeroLayout from 'components/layouts/HeroLayout';
import { LeaderBoardData } from 'data';
import LeaderBoardContainer from './component/LeaderBoardContainer';
import LeaderBoardRow from './component/LeaderBoardRow';

const LeaderBoard = () => {
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
    <HeroLayout>
      <AnimationInWhenVisible animationType="fade">
        <VStack color={text} maxW="1232px" w="full" px="16px" pt={{ base: '100px', md: '0px' }}>
          <VStack w="full">
            <VStack spacing="24px" mb={{ base: '25px', md: '60px' }} textAlign="center">
              <Text textStyle={isSmallView ? 'black7' : 'black8'}>Join the challenge</Text>
              <Text textStyle={isSmallView ? 'regular3' : 'regular5'} opacity="0.6">
                Represent your community and earn together!
              </Text>
              <Button variant="accent" onClick={() => {}} display={{ base: 'none', md: 'flex' }}>
                <Text textStyle="semiBold16" color="glass.100">
                  Fill up the form and get your community to join
                </Text>
              </Button>
            </VStack>
            <VStack
              w="full"
              spacing="24px"
              justify="flex-start"
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
                  return (
                    <LeaderBoardRow isSmallView={isSmallView} {...item} key={index.toString()} />
                  );
                })}
              </LeaderBoardContainer>
            </VStack>
          </VStack>
        </VStack>
      </AnimationInWhenVisible>
    </HeroLayout>
  );
};

export default LeaderBoard;
