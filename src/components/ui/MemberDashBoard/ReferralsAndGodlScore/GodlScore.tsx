import { VStack, Box, Text } from '@chakra-ui/react';
import * as React from 'react';

import useAppSelector from '../../../../hooks/useAppSelector';

const GodlScore: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuthReducer.member);
  const godlBalanceScore = useAppSelector((state) => state.godlReducer.godlBalanceScore);
  const memberName = member?.username;
  const memberInfo = memberName?.split('#');

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
        <Text textStyle="bold6">
          {memberInfo?.map((data, i) => (
            <span style={{ color: `${i === 1 ? 'gray' : 'white'}` }}>
              {i === 1 ? `#` : `Hi, `}
              {data}
            </span>
          ))}
        </Text>
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
