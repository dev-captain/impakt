import { VStack, Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import useAppDispatch from '../../../../hooks/useAppDispatch';

import useAppSelector from '../../../../hooks/useAppSelector';
import { fetchGodlBalanceScore } from '../../../../lib/redux/slices/godl/actions/fetchGodlBalanceScore';

const GodlScore: React.FC = () => {
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);
  const godlBalanceScore = useAppSelector((state) => state.godl.godlBalanceScore);
  const memberName = member?.username;
  const memberInfo = memberName?.split('#');

  React.useEffect(() => {
    dispatch(fetchGodlBalanceScore());
  }, []);

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
