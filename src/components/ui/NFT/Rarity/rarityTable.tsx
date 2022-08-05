import { Box, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { memo } from 'react';

const RarityTable = () => {
  return (
    <TableContainer borderRadius={10} w="100%" sx={{ marginTop: '0px !important' }}>
      <Table variant="striped" colorScheme="whiteAlpha">
        <Thead style={{ display: 'table', width: '100%', tableLayout: 'fixed' }}>
          <Tr bgColor="#181821" height="73px">
            <Th
              textAlign="start"
              color="#FFFFFF"
              borderBottom={0}
              fontSize="20px"
              fontWeight="400"
              whiteSpace="normal"
              paddingLeft="56px"
              textTransform="capitalize"
            >
              Rarity
            </Th>
            <Th
              textAlign="start"
              color="#FFFFFF"
              borderBottom={0}
              fontSize="20px"
              fontWeight="400"
              textTransform="capitalize"
              whiteSpace="normal"
            >
              % of Supply
            </Th>
            <Th
              textAlign="start"
              color="#FFFFFF"
              borderBottom={0}
              fontSize="20px"
              fontWeight="400"
              textTransform="capitalize"
              whiteSpace="normal"
            >
              Available Worlds
            </Th>
            <Th
              textAlign="start"
              color="#FFFFFF"
              borderBottom={0}
              fontSize="20px"
              fontWeight="400"
              textTransform="capitalize"
              whiteSpace="normal"
              width="330px"
            >
              Avatar Perks
            </Th>
          </Tr>
        </Thead>
        <Tbody display="block" sx={{ overflowY: 'overlay' }}>
          <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }} height="73px">
            <Td color="#FEC417" paddingLeft="56px" textStyle="semiBold6" borderBottom={0}>
              Legendary
            </Td>

            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>1%</Text>
              </Box>
            </Td>
            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>7</Text>
              </Box>
            </Td>

            <Td borderBottom={0} width="330px" textStyle="semiBold6" color="#fff">
              Leading wings
            </Td>
          </Tr>
          <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }} height="73px">
            <Td color="#FEC417" paddingLeft="56px" textStyle="semiBold6" borderBottom={0}>
              Diamond
            </Td>

            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>2%</Text>
              </Box>
            </Td>
            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>6</Text>
              </Box>
            </Td>

            <Td borderBottom={0} width="330px" textStyle="semiBold6" color="#fff">
              Small wings
            </Td>
          </Tr>
          <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }} height="73px">
            <Td color="#FEC417" paddingLeft="56px" textStyle="semiBold6" borderBottom={0}>
              Gold
            </Td>

            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>15%</Text>
              </Box>
            </Td>
            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>4</Text>
              </Box>
            </Td>

            <Td borderBottom={0} textStyle="semiBold6" width="330px" color="#fff">
              Can change skin color
            </Td>
          </Tr>
          <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }} height="73px">
            <Td color="#FEC417" paddingLeft="56px" textStyle="semiBold6" borderBottom={0}>
              Silver
            </Td>

            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>25%</Text>
              </Box>
            </Td>
            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>3</Text>
              </Box>
            </Td>

            <Td borderBottom={0} width="330px" textStyle="semiBold6" color="#fff">
              Custom animation
            </Td>
          </Tr>
          <Tr display="table" width="100%" style={{ tableLayout: 'fixed' }} height="73px">
            <Td color="#FEC417" paddingLeft="56px" textStyle="semiBold6" borderBottom={0}>
              Bronze
            </Td>

            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>53%</Text>
              </Box>
            </Td>
            <Td borderBottom={0} py="0" color="#fff" textStyle="semiBold6">
              <Box
                backgroundColor="rgba(0, 2, 10, 0.4)"
                maxW="86px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                height="100%"
              >
                <Text>2</Text>
              </Box>
            </Td>

            <Td borderBottom={0} width="330px" textStyle="semiBold6" color="#fff">
              <Text>Can use NFTs: Avatars. </Text>
              <Text>Cosmetics, Coach, Music, Pets</Text>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
export default memo(RarityTable);
