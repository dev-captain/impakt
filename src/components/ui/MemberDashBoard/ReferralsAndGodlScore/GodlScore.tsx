import { VStack, Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { useMemberDashBoardContext } from '../../../../context/MemberDashBoardContext';
import { useUserContext } from '../../../../context/UserContext';

const GodlScore: React.FC = () => {
  const { user } = useUserContext();
  const { godlBalanceScore } = useMemberDashBoardContext();

  const hiMessage = `Hi, ${user?.username}`;

  return (
    <VStack
      w="100%"
      alignItems="center"
      justifyContent="center"
      padding={{ base: '30px', lg: '40px' }}
      minH="439px"
      maxH={{ base: 'auto', lg: '548px' }}
      rowGap="43px !important"
      letterSpacing="-0.04em !important"
    >
      <Box textAlign="center" mt="0 !important" id="whitelist-challange-description-box-2">
        <Text textStyle="bold6">{hiMessage}</Text>
        <Text mt="20px" textStyle="regular4">
          Nice to see you!
        </Text>
      </Box>

      <Box
        color="#FEC417"
        mt="0 !important"
        textAlign="center"
        id="whitelist-challange-description-box-2"
      >
        <Text textStyle="bold7">{godlBalanceScore}</Text>
        <Text mt="10px" textStyle="regular4">
          Your GODL Balance
        </Text>
      </Box>
    </VStack>
  );
};
export default GodlScore;
