import * as React from 'react';

import { useTranslation } from 'react-i18next';
import keys from 'i18n/types';

import {
  VStack,
  Box,
  Text,
  OrderedList,
  ListItem,
  Grid,
  GridItem,
  Tooltip,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import ReferralCopyClipboard from '../ReferralCopyClipBoard';
import TooltopIcon from '../../../../assets/svgs/tooltipIcon.svg';
import useAppSelector from '../../../../hooks/useAppSelector';

const Referrals: React.FC = () => {
  const member = useAppSelector((state) => state.memberAuth.member);
  const { t } = useTranslation().i18n;

  return (
    <VStack
      w="100%"
      alignItems="start"
      padding={{ base: '30px', lg: '40px' }}
      minH="auto"
      maxH={{ base: 'auto' }}
      rowGap="32px !important"
      letterSpacing="-0.04em !important"
      backgroundColor="rgba(28, 28, 40, 0.65);"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        mt="0 !important"
        w="100%"
        id="whitelist-challange-description-box-2"
        position="relative"
      >
        <Text textStyle="bold5" color="#FFFFFF">
          Referrals
        </Text>
        <Tooltip hasArrow label="You can see me" mt="3" placement="auto" closeOnClick={false}>
          <img
            style={{ position: 'absolute', right: '-16px', bottom: '20px' }}
            src={TooltopIcon}
            alt="TooltopIcon"
          />
        </Tooltip>
      </Box>
      <Box w="100%" mt="32 !important" id="whitelist-challange-description-box-2">
        <ReferralCopyClipboard animate userId={member?.id} />
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} width={{ base: '100%' }} gap={4}>
        <GridItem
          w="100%"
          h="auto"
          borderRadius="20px"
          bg="rgba(254, 196, 23, 0.15)"
          padding="12px 24px"
        >
          <Box color="#FEC417" mt="0 !important" id="whitelist-challange-description-box-2">
            <Text textAlign="center" textStyle="bold5">
              3,240
            </Text>
            <Text textAlign="center" mt="6px" textStyle="regular3">
              GODL earned
              <br /> from referrals
            </Text>
          </Box>
        </GridItem>
        <GridItem
          w="100%"
          borderRadius="20px"
          padding="12px 24px"
          h="auto"
          bg="rgba(9, 9, 11, 0.4)"
        >
          <Box mt="0 !important" id="whitelist-challange-description-box-2">
            <Text color="#FFFFFF" textAlign="center" textStyle="bold5">
              75
            </Text>
            <Text color="rgba(255, 255, 255, 0.4)" textAlign="center" mt="6px" textStyle="regular3">
              registered <br />
              with your link
            </Text>
          </Box>
        </GridItem>
      </SimpleGrid>
      <TableContainer borderRadius={10} w="100%">
        <Table variant="striped" colorScheme="whiteAlpha">
          <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <Tr bgColor="#121216">
              <Th textAlign="start" color="rgba(255, 255, 255, 0.4) " borderBottom={0}>
                Challenges completed
              </Th>
              <Th textAlign="start" color="rgba(255, 255, 255, 0.4)" borderBottom={0}>
                Number of referrals
              </Th>
            </Tr>
          </Thead>
          <Tbody display="block" maxHeight="210px" overflowY="scroll">
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#FEC417" borderBottom={0}>
                1
              </Td>
              <Td borderBottom={0}>24</Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#FEC417" borderBottom={0}>
                1
              </Td>
              <Td borderBottom={0}>24</Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#FEC417" borderBottom={0}>
                1
              </Td>
              <Td borderBottom={0}>24</Td>
            </Tr>
            <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }}>
              <Td color="#FEC417" borderBottom={0}>
                1
              </Td>
              <Td borderBottom={0}>24</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};
export default Referrals;
