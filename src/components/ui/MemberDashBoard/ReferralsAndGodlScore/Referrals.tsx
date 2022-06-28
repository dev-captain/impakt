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
  GridItem,
  Tooltip,
  SimpleGrid,
  Table,
  Thead,
  Tbody,
  // Tfoot,
  Tr,
  Th,
  Td,
  // TableCaption,
  TableContainer,
  Link,
} from '@chakra-ui/react';
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
          Referrals
        </Text>
        <Tooltip
          hasArrow
          label={
            <Text
              dangerouslySetInnerHTML={{ __html: t(keys.memberDashboard.referrals.description) }}
            />
          }
          mt="3"
          placement="auto"
          closeOnClick={false}
        >
          <Box
            position="absolute"
            right={{ base: '-14px', md: '-16px' }}
            bottom={{ base: '22px', md: '20px' }}
            width={{ base: '24px', md: '32px' }}
          >
            <Link href="https://knowledgebase.impakt.com/referral-rewards-2?category=all-resources">
              <img src={TooltopIcon} alt="TooltopIcon" sizes="10px" />
            </Link>
          </Box>
        </Tooltip>
      </Box>
      <Box w="100%" id="whitelist-challange-description-box-2" sx={{ marginTop: '0px !important' }}>
        <ReferralCopyClipboard animate userId={member?.id} />
      </Box>

      <SimpleGrid
        columns={{ base: 2 }}
        width={{ base: '100%' }}
        gap={4}
        sx={{ marginTop: '0px !important' }}
      >
        <GridItem
          w="100%"
          h="auto"
          borderRadius="20px"
          bg="rgba(254, 196, 23, 0.15)"
          padding={{ base: '12px 0px', sm: '12px 10px', md: '12px 20px', lg: '12px 24px' }}
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
          padding={{ base: '12px 0px', sm: '12px 10px', md: '12px 20px', lg: '12px 24px' }}
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
      <TableContainer borderRadius={10} w="100%" sx={{ marginTop: '0px !important' }}>
        <Table variant="striped" colorScheme="whiteAlpha">
          <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
            <Tr bgColor="#121216">
              <Th
                textAlign="start"
                color="rgba(255, 255, 255, 0.4) "
                borderBottom={0}
                whiteSpace="normal"
                textTransform="capitalize"
              >
                Challenges completed
              </Th>
              <Th
                textAlign="start"
                color="rgba(255, 255, 255, 0.4)"
                borderBottom={0}
                textTransform="capitalize"
                whiteSpace="normal"
              >
                Number of referrals
              </Th>
            </Tr>
          </Thead>
          <Tbody display="block" maxHeight="208px" sx={{ overflowY: 'overlay' }}>
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
