import * as React from 'react';

// import { useTranslation } from 'react-i18next';
// import keys from 'i18n/types';

import {
  VStack,
  Box,
  Text,
  // OrderedList,
  // ListItem,
  // Grid,
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

const Excercise: React.FC = () => {
  return (
    <VStack
      w="100%"
      alignItems="start"
      padding={{ base: '30px', lg: '40px' }}
      minH="auto"
      maxH={{ base: 'auto' }}
      rowGap={{ base: '18px', lg: '32px' }}
      letterSpacing="-0.04em !important"
      backgroundColor="rgba(28, 28, 40, 0.65);"
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
          <Tbody display="block" maxHeight="312px" sx={{ overflowY: 'overlay' }}>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                Push Ups
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                124
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                Burpees
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                38
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                High Knees
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                566
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                Sit Ups
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                291
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                Leg Raises
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                93
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                Walk Outs
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                107
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                Walk Outs
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                107
              </Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td textStyle="regular3" borderBottom={0}>
                Walk Outs
              </Td>
              <Td borderBottom={0} textStyle="regular4">
                107
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};
export default Excercise;
