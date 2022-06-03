import * as React from 'react';
import { VStack, Box, Text } from '@chakra-ui/react';

import Gradients from '../../home/RoadmapHero/Gradients';

interface ActiveMembersCardPropsI {
  activeMembersValue: number;
}

const ActiveMembersCard: React.FC<ActiveMembersCardPropsI> = ({ activeMembersValue }) => {
  const nextActiveMemberGoalInstancesIndex =
    activeMembersValue === 20000
      ? 4
      : tokenPriceDownItems.findIndex(({ activeMember }) => activeMember > activeMembersValue);

  const nextActiveMemberGoalInstance = tokenPriceDownItems[nextActiveMemberGoalInstancesIndex];
  const nextActiveMemberGoalNumber = nextActiveMemberGoalInstance.activeMember.toLocaleString();
  const nextActiveMemberGoalPriceValue = nextActiveMemberGoalInstance.priceValue;

  return (
    <VStack
      w="470px"
      h="256px"
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
        w="138px"
        h="98px"
        color="rgba(11, 23, 37, 1)"
        bgColor="rgba(254, 196, 23, 1)"
        border="1px solid #FEC417"
        borderRadius="8px"
      >
        <Text textStyle="bold6">{activeMembersValue}</Text>
        <Text textStyle="regular2">Active members</Text>
      </Box>
      <VStack id="active-members-description-box">
        {activeMembersValue !== 20000 ? (
          <>
            <Text fontWeight={400} textStyle="bold4">
              At <b>{nextActiveMemberGoalNumber} active members</b>
            </Text>
            <Text fontWeight={400} textStyle="bold4">
              token price will be <b>reduced to {nextActiveMemberGoalPriceValue}</b>
            </Text>
          </>
        ) : (
          <Text fontWeight={400} textStyle="bold4">
            Token price is <b>{nextActiveMemberGoalPriceValue}</b>
          </Text>
        )}
      </VStack>
      <Gradients />
    </VStack>
  );
};

const tokenPriceDownItems = [
  { activeMember: 0, priceValue: '0.01$' },
  { activeMember: 5000, priceValue: '0.009$' },
  { activeMember: 10000, priceValue: '0.008$' },
  { activeMember: 15000, priceValue: '0.007$' },
  { activeMember: 20000, priceValue: '0.006$' },
];

export default ActiveMembersCard;
