import * as React from 'react';

import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import {
  VStack,
  // Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  // Td,
  TableContainer,
} from '@chakra-ui/react';
// import {  usePascalCase } from 'hooks';

const ExercisesList: React.FC = () => {
  const { t } = useTranslation().i18n;

  // const { convertToPascalCase } = usePascalCase();
  // const [pascalCasedRewardHistoryStatistics, setPascalCasedRewardHistoryStatistics] =
  //   React.useState<typeof rewardHistoryStatistics>([]);

  // React.useEffect(() => {
  //   if (rewardHistoryStatistics && rewardHistoryStatistics.length > 0) {
  //     const pascalCasedExStatics = rewardHistoryStatistics.map((stats) => {
  //       const convertedPurpose = convertToPascalCase(stats.purpose);

  //       return { ...stats, purpose: convertedPurpose };
  //     });
  //     setPascalCasedRewardHistoryStatistics(pascalCasedExStatics);
  //   }
  // }, [rewardHistoryStatistics]);

  return (
    <VStack
      w="100%"
      alignItems="start"
      minH="auto"
      maxH={{ base: 'auto' }}
      rowGap={{ base: '18px', lg: '32px' }}
      letterSpacing="-0.04em !important"
    >
      <TableContainer borderRadius={10} w="100%" sx={{ marginTop: '0px !important' }}>
        <Table variant="striped" w="100%" colorScheme="whiteAlpha" background="#1C1C28">
          <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <Tr bgColor="#121216">
              <Th
                textAlign="start"
                color="#fff"
                borderBottom={0}
                whiteSpace="normal"
                textTransform="capitalize"
                width={{ base: '96px', md: '138px' }}
                paddingX={{ base: '15px', md: '16px' }}
                paddingBottom="0px"
                height="58px"
              >
                <Text textStyle={{ md: 'semiBold20', base: 'normal14' }}>
                  {t(keys.memberDashboard.exerciseList.date)}
                </Text>
              </Th>
              <Th
                textAlign="start"
                color="#fff"
                borderBottom={0}
                paddingX={{ base: '15px', md: '20px' }}
                textTransform="capitalize"
                whiteSpace="normal"
                width="auto"
                paddingBottom="0px"
                height="58px"
              >
                <Text textStyle={{ md: 'semiBold20', base: 'normal14' }}>
                  {t(keys.memberDashboard.exerciseList.reason)}
                </Text>
              </Th>
              <Th
                textAlign="start"
                color="#fff"
                borderBottom={0}
                paddingX={{ base: '15px', md: '24px' }}
                textTransform="capitalize"
                whiteSpace="normal"
                paddingBottom="0px"
                height="58px"
                width={{ base: '88px', sm: '118px', md: '150px' }}
              >
                <Text textStyle={{ md: 'semiBold20', base: 'normal14' }}>
                  {t(keys.memberDashboard.exerciseList.koin)}
                </Text>
              </Th>
            </Tr>
          </Thead>
          <Tbody display="block" maxHeight="auto" className="table_scroll" overflow="auto">
            {/* <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td
                borderBottom={0}
                width={{ base: '96px', md: '138px' }}
                paddingY="10px"
                paddingX="16px"
                textStyle={{ md: 'semiBold6', base: 'semiBold12' }}
                color="rgba(255, 255, 255, 0.4)"
              >
                DD.MM.YYYY
              </Td>
              <Td
                borderBottom={0}
                paddingX="20px"
                paddingY="10px"
                textStyle={{ md: 'semiBold6', base: 'semiBold12' }}
                width="auto"
                color="rgba(255, 255, 255, 0.75)"
                whiteSpace="pre-line"
              >
                Daily challenge by referred member
              </Td>
              <Td
                borderBottom={0}
                paddingY="10px"
                paddingX={{ base: '15px', md: '24px' }}
                width={{ base: '88px', sm: '118px', md: '150px' }}
              >
                <Box display="flex">
                  <Text
                    backgroundColor="rgba(254, 196, 23, 0.15)"
                    paddingX={{ base: '8px', md: '15px' }}
                    paddingY={{ base: '4px', md: '15px' }}
                    borderRadius="8px"
                    textStyle={{ md: 'semiBold24', base: 'normal14' }}
                    color="#FEC417"
                  >
                    +120
                  </Text>
                </Box>
              </Td>
            </Tr> */}
            {/* {excerciseStatistics.length > 0 && */}
            {/* excerciseStatistics.map((exercise: any) => ( */}
            {/* {pascalCasedRewardHistoryStatistics.length > 0 &&
              pascalCasedRewardHistoryStatistics.map(
                ({ purpose, timestamp, value }) =>
                  value !== 0 && (
                    <Tr
                      display="table"
                      width="100%"
                      style={{ tableLayout: 'fixed' }}
                      // key={exercise.date}
                    >
                      <Td
                        borderBottom={0}
                        width={{ base: '96px', md: '138px' }}
                        paddingY="10px"
                        paddingX="16px"
                        textStyle={{ md: 'semiBold6', base: 'semiBold12' }}
                        color="rgba(255, 255, 255, 0.4)"
                      >
                        {Day.build(
                          timestamp.getFullYear(),
                          timestamp.getMonth(),
                          timestamp.getDate(),
                        ).format('DD.MM.YYYY')}
                      </Td>
                      <Td
                        borderBottom={0}
                        paddingX="20px"
                        paddingY="10px"
                        textStyle={{ md: 'semiBold6', base: 'semiBold12' }}
                        width="auto"
                        color="rgba(255, 255, 255, 0.75)"
                        whiteSpace="pre-line"
                      >
                        {purpose}
                        {/* {exercise.purpose} */}
            {/* </Td>
                      <Td
                        borderBottom={0}
                        paddingY="10px"
                        paddingX={{ base: '15px', md: '24px' }}
                        width={{ base: '88px', sm: '118px', md: '150px' }}
                      >
                        <Box display="flex">
                          <Text
                            backgroundColor="rgba(254, 196, 23, 0.15)"
                            paddingX={{ base: '8px', md: '15px' }}
                            paddingY={{ base: '4px', md: '15px' }}
                            borderRadius="8px"
                            textStyle={{ md: 'semiBold24', base: 'normal14' }}
                            color="#FEC417"
                          >
                            +{value} */}
            {/* {exercise.godl} */}
            {/* </Text>
                        </Box>
                      </Td>
                    </Tr> */}
            {/* ), */}
            {/* ))} */}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

// const dummyExercisesListData = [
//   { purpose: 'Test reason 1', date: '28.07.2022', godl: 500 },
//   { purpose: 'Test reason 2', date: '27.06.2022', godl: 700 },
//   { purpose: 'Test reason 3', date: '26.05.2022', godl: 800 },
//   { purpose: 'Test reason 4', date: '25.04.2022', godl: 1000 },
//   { purpose: 'Test reason 5', date: '24.03.2022', godl: 500 },
//   { purpose: 'Test reason 6', date: '23.02.2022', godl: 200 },
// ];

export default ExercisesList;
