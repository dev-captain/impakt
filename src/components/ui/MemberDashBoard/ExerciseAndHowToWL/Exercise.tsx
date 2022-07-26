import * as React from 'react';
import { usePascalCase } from 'hooks';
// import { useTranslation } from 'react-i18next';
// import keys from 'i18n/types';

import {
  VStack,
  Box,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';
import useAppDispatch from '../../../../hooks/useAppDispatch';
import useAppSelector from '../../../../hooks/useAppSelector';
import { fetchExerciseStats } from '../../../../lib/redux/slices/fitness/actions/fetchExerciseStats';
import MemberDashboardCard from '../MemberDashBoardCard';

const Excercise: React.FC = () => {
  // const { t } = useTranslation().i18n;
  const dispatch = useAppDispatch();
  const member = useAppSelector((state) => state.memberAuth.member);
  const excerciseStatistics = useAppSelector((state) => state.fitnessReducer.exerciseState);
  React.useEffect(() => {
    if (member) {
      dispatch(fetchExerciseStats(member.id));
    }
  }, []);

  return (
    <MemberDashboardCard
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
        <Text textStyle={{ base: 'bold4', lg: 'bold5' }} color="#FFFFFF">
          Exercise Statistics
        </Text>
      </Box>

      <TableContainer borderRadius={10} w="100%" sx={{ marginTop: '0px !important' }}>
        <Table variant="striped" colorScheme="whiteAlpha">
          <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <Tr bgColor="#121216">
              <Th
                textAlign="start"
                color="rgba(255, 255, 255, 0.4) "
                borderBottom={0}
                textTransform="capitalize"
                whiteSpace="normal"
              >
                Exercise
              </Th>
              <Th
                textAlign="start"
                color="rgba(255, 255, 255, 0.4)"
                borderBottom={0}
                whiteSpace="normal"
                textTransform="capitalize"
              >
                Reps
              </Th>
            </Tr>
          </Thead>
          <Tbody
            display="block"
            maxHeight="312px"
            sx={{ overflowY: 'overlay' }}
            className="table_scroll"
          >
            {excerciseStatistics &&
              excerciseStatistics.map((stats: any) => {
                return (
                  <Tr
                    display="table"
                    width="100%"
                    style={{ tableLayout: 'fixed' }}
                    key={stats.exercisei}
                  >
                    <Td textStyle="regular3" borderBottom={0}>
                      {usePascalCase(stats.exercise)}
                    </Td>
                    <Td borderBottom={0} textStyle="regular4">
                      {stats.repetitions}
                    </Td>
                  </Tr>
                );
              })}
          </Tbody>
        </Table>
      </TableContainer>
    </MemberDashboardCard>
  );
};
export default Excercise;
