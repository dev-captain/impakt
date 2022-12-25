import * as React from 'react';

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
import keys from '@/i18n/types';

const Exercises: React.FC = () => {
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
                {keys.memberDashboard.exerciseList.date}
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
                {keys.memberDashboard.exerciseList.reason}
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
                {keys.memberDashboard.exerciseList.godl}
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
