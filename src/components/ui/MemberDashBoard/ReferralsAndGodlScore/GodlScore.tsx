import { VStack, Box, Text, GridItem, SimpleGrid } from '@chakra-ui/react';
import * as React from 'react';
import NumberFormat from 'react-number-format';
import useAppDispatch from '../../../../hooks/useAppDispatch';

import useAppSelector from '../../../../hooks/useAppSelector';
import { fetchActiveDays } from '../../../../lib/redux/slices/fitness/actions/fetchActiveDays';
import { fetchGodlBalanceScore } from '../../../../lib/redux/slices/godl/actions/fetchGodlBalanceScore';
import Whitelist from '../../../../assets/svgs/Vector.svg';

const GodlScore: React.FC = () => {
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);
  const activeDays = useAppSelector((state) => state.fitnessReducer.activeDays);
  const godlBalanceScore = useAppSelector((state) => state.godl.godlBalanceScore);
  const isWhitelisted = useAppSelector((state) => state.whitelistReducer.isWhitelisted);
  const memberName = member?.username;
  const memberInfo = memberName?.split('#');

  React.useEffect(() => {
    dispatch(fetchGodlBalanceScore());
  }, []);

  React.useEffect(() => {
    if (member) {
      dispatch(fetchActiveDays(member.id));
    }
  }, []);

  return (
    <VStack
      w="100%"
      alignItems="start"
      padding={{ base: '30px', lg: '40px' }}
      maxH={{ base: 'auto', lg: '548px' }}
      rowGap={{ base: '18px', lg: '32px' }}
      letterSpacing="-0.04em !important"
      backgroundColor="rgba(28, 28, 40, 0.65);"
      backdropBlur="40px"
    >
      <Box
        display="flex"
        alignItems="baseline"
        mt="0 !important"
        id="whitelist-challange-description-box-2"
      >
        <Text textStyle={{ base: 'bold4', lg: 'bold5' }} color="#FFFFFF">
          {memberInfo?.map((data, i) => (
            <span key={data} style={{ color: `${i === 1 ? 'gray' : 'white'}` }}>
              {i === 1 ? `#` : `Hi, `}
              {data}
            </span>
          ))}
        </Text>
        {isWhitelisted && (
          <Box ms={3}>
            <img src={Whitelist} alt="Whitelist" />
          </Box>
        )}
      </Box>
      <Box id="whitelist-challange-description-box-2 " sx={{ marginTop: '0px !important' }}>
        <Text color="#FEC417" textStyle="regular4">
          Nice to see you!
        </Text>
        {isWhitelisted && (
          <Text mt={{ base: '0px', lg: '8px' }} textStyle="regular3">
            You are whitelisted. Congrats!
          </Text>
        )}
      </Box>

      {/* <Grid templateColumns="repeat(2, 1fr)" gap={4}>

      </Grid> */}
      <SimpleGrid display="flex" flexWrap="wrap" width={{ base: '100%' }} gap={{ base: 3, lg: 4 }}>
        <GridItem
          w={{ base: '100%', md: '48%', lg: 'auto', xl: 'auto' }}
          h="auto"
          borderRadius="20px"
          bg="rgba(254, 196, 23, 0.15)"
          padding="12px 24px"
        >
          <Box color="#FEC417" mt="0 !important" id="whitelist-challange-description-box-2">
            <Text textAlign="center" textStyle="bold5">
              <NumberFormat
                thousandsGroupStyle="thousand"
                value={godlBalanceScore}
                decimalSeparator="."
                displayType="text"
                thousandSeparator
                allowNegative
              />
            </Text>
            <Text textAlign="center" mt="2px" textStyle="regular3" fontWeight={500}>
              GODL Balance
            </Text>
          </Box>
        </GridItem>
        {/* <GridItem
          w={{ base: '100%', md: '48%', lg: '155px', xl: '155px' }}
          borderRadius="20px"
          padding="12px 24px"
          h="auto"
          bg="rgba(9, 9, 11, 0.4)"
        >
          <Box mt="0 !important" id="whitelist-challange-description-box-2">
            <Text color="#FFFFFF" textAlign="center" textStyle="bold5">
              0
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.4)"
              textAlign="center"
              mt="2px"
              textStyle="regular3"
              fontWeight={500}
            >
              XP
            </Text>
          </Box>
        </GridItem> */}
        <GridItem
          w={{ base: '100%', md: '48%', lg: '142px', xl: '142px' }}
          borderRadius="20px"
          padding="12px 24px"
          h="auto"
          bg="rgba(9, 9, 11, 0.4)"
        >
          <Box mt="0 !important" id="whitelist-challange-description-box-2">
            <Text color="#FFFFFF" textAlign="center" textStyle="bold5">
              {activeDays}
            </Text>
            <Text
              color="rgba(255, 255, 255, 0.4)"
              textAlign="center"
              mt="2px"
              textStyle="regular3"
              fontWeight={500}
            >
              Active days
            </Text>
          </Box>
        </GridItem>
      </SimpleGrid>
    </VStack>
  );
};
export default GodlScore;
