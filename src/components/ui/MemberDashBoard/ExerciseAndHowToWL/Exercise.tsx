import * as React from 'react';
import { usePascalCase } from 'hooks';
// import { useTranslation } from 'react-i18next';
// import keys from 'i18n/types';

import { Box, Text, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';
import MemberDashboardCard from '../MemberDashBoardCard';
import { usePersistedFitnessStore } from '../../../../lib/zustand';

const Excercise: React.FC = () => {
  // const { t } = useTranslation().i18n;
  const { convertToPascalCase } = usePascalCase();
  const excerciseStatistics = usePersistedFitnessStore();
  const [pascalCasedExerciseStates, setPascalCasedExerciseStates] = React.useState<
    ({
      repetitions: any;
      exercise: string;
    } | null)[]
  >();

  React.useEffect(() => {
    if (excerciseStatistics.exerciseState.length > 0) {
      const pascalCasedExStatics = excerciseStatistics.exerciseState.map((stats: any) => {
        if (stats && stats.exercise) {
          const convertedLabel = convertToPascalCase(stats.exercise);

          return { repetitions: stats.repetitions, exercise: convertedLabel };
        }

        return null;
      });
      setPascalCasedExerciseStates(pascalCasedExStatics);
    }
  }, [excerciseStatistics.exerciseState]);

  return (
    <MemberDashboardCard
      w="100%"
      border="2px solid rgba(255,255,255,0.03)"
      flexDir="column"
      alignItems="start"
      rowGap={{ base: '18px', lg: '32px' }}
      letterSpacing="-0.04em !important"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="0 !important"
        w="100%"
        id="whitelist-challange-description-box-2"
        position="relative"
      >
        <Text textStyle={{ base: 'bold4', lg: 'bold5' }}>Exercise Statistics</Text>
      </Box>

      <TableContainer borderRadius={10} w="100%" sx={{ marginTop: '0px !important' }}>
        <Table variant="striped" colorScheme="whiteAlpha">
          <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <Tr bgColor="#121216">
              <Th
                textAlign="start"
                color="#fff"
                borderBottom={0}
                textTransform="capitalize"
                whiteSpace="normal"
              >
                Exercise
              </Th>
              <Th
                textAlign="start"
                color="#fff"
                borderBottom={0}
                whiteSpace="normal"
                textTransform="capitalize"
              >
                Reps
              </Th>
            </Tr>
          </Thead>
          <Tbody
          // display="block"
          // maxHeight="312px"
          // sx={{ overflowY: 'overlay' }}
          // className="table_scroll"
          >
            {pascalCasedExerciseStates &&
              pascalCasedExerciseStates.length > 0 &&
              pascalCasedExerciseStates.map(
                (pascalCasedStatistics) =>
                  pascalCasedStatistics && (
                    <Tr
                      display="table"
                      width="100%"
                      style={{ tableLayout: 'fixed' }}
                      key={`${pascalCasedStatistics.exercise}-tr`}
                    >
                      <Td textStyle="regular3" borderBottom={0}>
                        {pascalCasedStatistics.exercise}
                      </Td>
                      <Td borderBottom={0} textStyle="regular4">
                        {pascalCasedStatistics.repetitions}
                      </Td>
                    </Tr>
                  ),
              )}
            {/* {excerciseStatistics &&
              excerciseStatistics.map((stats: any) => {
                return (
                  <Tr
                    display="table"
                    width="100%"
                    style={{ tableLayout: 'fixed' }}
                    key={stats.exercisei}
                  >
                    <Td textStyle="regular3" borderBottom={0}>
                      {stats && stats.exercise ? usePascalCase(stats.exercise) : null}
                    </Td>
                    <Td borderBottom={0} textStyle="regular4">
                      {stats.repetitions}
                    </Td>
                  </Tr>
                );
              })} */}
          </Tbody>
        </Table>
      </TableContainer>
    </MemberDashboardCard>
  );
};
export default Excercise;
