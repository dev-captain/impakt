import * as React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

import Gradients from '../../home/RoadmapHero/Gradients';
import { usePusherContext } from '../../../../context/PusherContext';

const ActiveMembersCard: React.FC = () => {
  const { activeMembers } = usePusherContext();

  const getCurrentTokenPrice = () => {
    if (
      !activeMemberGoals.includes(activeMembers) &&
      tokenPriceDownItems[0].activeMember <= activeMembers &&
      activeMembers < tokenPriceDownItems[tokenPriceDownItems.length - 1].activeMember
    ) {
      const getPreviousTokenPrices = tokenPriceDownItems.filter(
        ({ activeMember }) => activeMembers > activeMember,
      );
      const theBiggerThatClosest = getPreviousTokenPrices[getPreviousTokenPrices.length - 1];

      return theBiggerThatClosest.priceValue;
    }

    const currentToken = tokenPriceDownItems.find(
      ({ activeMember }) => activeMember === activeMembers,
    );

    return currentToken?.priceValue ?? 'UNK';
  };

  const getNextActiveMemberGoalAndPrice = () => {
    const getNextTokenPrices = tokenPriceDownItems.filter(
      ({ activeMember }) => activeMembers < activeMember,
    );
    const nextBiggerThatClosest = getNextTokenPrices[0];

    return nextBiggerThatClosest;
  };

  const nextActiveMemberGoalAndPrice = getNextActiveMemberGoalAndPrice();
  const currentTokenPrice = getCurrentTokenPrice();

  return (
    <VStack
      w="470px"
      h="297px"
      alignItems="center"
      justifyContent="center"
      bgColor="#1C2C40"
      minH="256px"
      filter="drop-shadow(0px 8.55078px 17.1016px rgba(0, 0, 0, 0.12)) drop-shadow(0px 8.55078px 29.9277px rgba(0, 0, 0, 0.1))"
      borderRadius={28}
      position="relative"
      overflow="hidden"
      marginTop="0 !important"
      rowGap="10px"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        mt="20px"
        id="active-members-value-box"
        w="163px"
        h="167px"
        color="rgba(11, 23, 37, 1)"
        bgColor="rgba(254, 196, 23, 1)"
        border="1px solid #FEC417"
        borderRadius="8px"
      >
        <Text textStyle="bold6">{activeMembers}</Text>
        <Text textStyle="regular2">Active members</Text>
        <Text textStyle="bold6">{currentTokenPrice}</Text>
        <Text textStyle="regular2">Current token price</Text>
      </Box>
      {tokenPriceDownItems[0].activeMember <= activeMembers &&
        activeMembers < tokenPriceDownItems[tokenPriceDownItems.length - 1].activeMember &&
        activeMembers !== activeMemberGoals[activeMemberGoals.length - 1] && (
          <VStack id="active-members-description-box">
            <Text fontWeight={400} textStyle="bold4">
              At <b>{nextActiveMemberGoalAndPrice.activeMember.toLocaleString()} active members</b>
            </Text>
            <Text fontWeight={400} textStyle="bold4">
              token price will be <b>reduced to {nextActiveMemberGoalAndPrice.priceValue}</b>
            </Text>
          </VStack>
        )}
      <Gradients />
    </VStack>
  );
};

const activeMemberGoals = [0, 5000, 10000, 20000, 40000];

const tokenPriceDownItems = [
  { activeMember: 0, priceValue: '0.01$' },
  { activeMember: 5000, priceValue: '0.009$' },
  { activeMember: 10000, priceValue: '0.008$' },
  { activeMember: 20000, priceValue: '0.007$' },
  { activeMember: 40000, priceValue: '0.006$' },
];

export default ActiveMembersCard;
