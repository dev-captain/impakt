import * as React from 'react';

import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import {
  VStack,
  Box,
  Text,
  // OrderedList,
  // ListItem,
  // Grid,
  //   GridItem,
  Tooltip,
  //   SimpleGrid,
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import TooltopIcon from '../../../../assets/svgs/tooltipIcon.svg';
// import useAppSelector from '../../../../hooks/useAppSelector';
// import useAppDispatch from '../../../../hooks/useAppDispatch';
// import { fetchReferrals } from '../../../../lib/redux/slices/referrals/actions/fetchReferrals';
// import { fetchReferralsChallenges } from '../../../../lib/redux/slices/referrals/actions/fetchReferralsChallenges';
// import { fetchReferralsReward } from '../../../../lib/redux/slices/referrals/actions/fetchReferralsReward';

const Exercises: React.FC = () => {
  const { t } = useTranslation().i18n;
  //   const dispatch = useAppDispatch();
  //   const member = useAppSelector((state) => state.memberAuth.member);
  return (
    <VStack
      w="100%"
      alignItems="start"
      minH="auto"
      maxH={{ base: 'auto' }}
      rowGap={{ base: '18px', lg: '32px' }}
      letterSpacing="-0.04em !important"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="0 !important"
        w="100%"
        id="whitelist-challange-description-box-2"
      >
        <Text textStyle={{ base: 'bold4', md: 'bold5' }} color="#FFFFFF">
          {t(keys.memberDashboard.exerciseList.headline)}
        </Text>
        <Tooltip
          hasArrow
          label={
            <Text
              dangerouslySetInnerHTML={{
                __html: t(keys.memberDashboard.exerciseList.toolTipDescription),
              }}
            />
          }
          mt="3"
          placement="auto"
          closeOnClick={false}
        >
          <Box width={{ base: '24px', md: '32px' }}>
            <img src={TooltopIcon} alt="TooltopIcon" sizes="10px" />
          </Box>
        </Tooltip>
      </Box>
      <TableContainer borderRadius={10} w="100%" sx={{ marginTop: '0px !important' }}>
        <Table variant="striped" w={{ base: '100%', md: '720px' }} colorScheme="whiteAlpha">
          <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <Tr bgColor="#121216">
              <Th
                textAlign="start"
                color="rgba(255, 255, 255, 0.4) "
                borderBottom={0}
                whiteSpace="normal"
                textTransform="capitalize"
                textStyle="normal14"
                width={{ base: '96px', md: '128px' }}
                paddingX="16px"
                paddingBottom="0px"
                height="48px"
              >
                {t(keys.memberDashboard.exerciseList.date)}
              </Th>
              <Th
                textAlign="start"
                color="rgba(255, 255, 255, 0.4)"
                borderBottom={0}
                paddingX="16px"
                textTransform="capitalize"
                whiteSpace="normal"
                textStyle="normal14"
                width={{ base: 'auto', md: '480px' }}
                paddingBottom="0px"
                height="48px"
              >
                {t(keys.memberDashboard.exerciseList.reason)}
              </Th>
              <Th
                textAlign="start"
                textStyle="normal14"
                color="rgba(255, 255, 255, 0.4)"
                borderBottom={0}
                textTransform="capitalize"
                whiteSpace="normal"
                paddingBottom="0px"
                height="48px"
                width={{ base: '88px', md: '112px' }}
              >
                {t(keys.memberDashboard.exerciseList.godl)}
              </Th>
            </Tr>
          </Thead>
          <Tbody display="block" maxHeight="260px" className="table_scroll">
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td
                borderBottom={0}
                width={{ base: '96px', md: '128px' }}
                paddingY="10px"
                paddingX="16px"
                textStyle="semiBold14"
                color="rgba(255, 255, 255, 0.4)"
              >
                06.20.2022
              </Td>
              <Td
                borderBottom={0}
                paddingX="16px"
                paddingY="10px"
                textStyle="semiBold14"
                width={{ base: 'auto', md: '480px' }}
                whiteSpace="pre-line"
              >
                Daily challenge by referred member
              </Td>
              <Td
                borderBottom={0}
                paddingY="10px"
                paddingX="16px"
                textStyle="semiBold14"
                width={{ base: '88px', md: '112px' }}
              >
                <Box display="flex">
                  <Text
                    backgroundColor="rgba(254, 196, 23, 0.15)"
                    paddingX="8px"
                    paddingY="4px"
                    borderRadius="8px"
                    color="#FEC417"
                  >
                    +120
                  </Text>
                </Box>
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td
                borderBottom={0}
                width={{ base: '96px', md: '128px' }}
                paddingX="16px"
                textStyle="semiBold14"
                paddingY="10px"
                color="rgba(255, 255, 255, 0.4)"
              >
                06.20.2022
              </Td>
              <Td
                borderBottom={0}
                paddingX="16px"
                paddingY="10px"
                textStyle="semiBold14"
                width={{ base: 'auto', md: '480px' }}
                whiteSpace="pre-line"
              >
                Weekly challenge
              </Td>
              <Td
                borderBottom={0}
                paddingY="10px"
                paddingX="16px"
                textStyle="semiBold14"
                width={{ base: '88px', md: '112px' }}
              >
                <Box display="flex">
                  <Text
                    backgroundColor="rgba(254, 196, 23, 0.15)"
                    paddingX="8px"
                    paddingY="4px"
                    borderRadius="8px"
                    color="#FEC417"
                  >
                    +120
                  </Text>
                </Box>
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td
                borderBottom={0}
                paddingX="16px"
                width={{ base: '96px', md: '128px' }}
                paddingY="10px"
                textStyle="semiBold14"
                color="rgba(255, 255, 255, 0.4)"
              >
                06.20.2022
              </Td>
              <Td
                borderBottom={0}
                paddingX="16px"
                paddingY="10px"
                textStyle="semiBold14"
                whiteSpace="pre-line"
                width={{ base: 'auto', md: '480px' }}
              >
                Weekly challenge by referred member
              </Td>
              <Td
                borderBottom={0}
                paddingY="10px"
                paddingX="16px"
                textStyle="semiBold14"
                width={{ base: '88px', md: '112px' }}
              >
                <Box display="flex">
                  <Text
                    backgroundColor="rgba(254, 196, 23, 0.15)"
                    paddingX="8px"
                    paddingY="4px"
                    borderRadius="8px"
                    color="#FEC417"
                  >
                    +120
                  </Text>
                </Box>
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td
                borderBottom={0}
                paddingX="16px"
                paddingY="10px"
                width={{ base: '96px', md: '128px' }}
                textStyle="semiBold14"
                color="rgba(255, 255, 255, 0.4)"
              >
                06.20.2022
              </Td>
              <Td
                borderBottom={0}
                paddingX="16px"
                paddingY="10px"
                textStyle="semiBold14"
                whiteSpace="pre-line"
                width={{ base: 'auto', md: '480px' }}
              >
                Daily challenge
              </Td>
              <Td
                borderBottom={0}
                paddingY="10px"
                paddingX="16px"
                textStyle="semiBold14"
                width={{ base: '88px', md: '112px' }}
              >
                <Box display="flex">
                  <Text
                    backgroundColor="rgba(254, 196, 23, 0.15)"
                    paddingX="8px"
                    paddingY="4px"
                    borderRadius="8px"
                    color="#FEC417"
                  >
                    +120
                  </Text>
                </Box>
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td
                borderBottom={0}
                width={{ base: '96px', md: '128px' }}
                paddingX="16px"
                textStyle="semiBold14"
                paddingY="10px"
                color="rgba(255, 255, 255, 0.4)"
              >
                06.20.2022
              </Td>
              <Td
                borderBottom={0}
                paddingX="16px"
                paddingY="10px"
                textStyle="semiBold14"
                whiteSpace="pre-line"
                width={{ base: 'auto', md: '480px' }}
              >
                Targeted challenge
              </Td>
              <Td
                borderBottom={0}
                paddingY="10px"
                paddingX="16px"
                textStyle="semiBold14"
                width={{ base: '88px', md: '112px' }}
              >
                <Box display="flex">
                  <Text
                    backgroundColor="rgba(254, 196, 23, 0.15)"
                    paddingX="8px"
                    paddingY="4px"
                    borderRadius="8px"
                    color="#FEC417"
                  >
                    +120
                  </Text>
                </Box>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};
export default Exercises;
