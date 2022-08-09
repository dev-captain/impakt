import {
  baseStyle,
  Box,
  HStack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { memo } from 'react';

const RarityTable = () => {
  return (
    <VStack align={{ base: 'center' }} w="100%" marginStart="0px !important">
      <HStack
        background="#121216"
        color="#fff"
        backdropFilter="blur(40px)"
        fontWeight="400"
        fontSize={{ base: '10px', md: '20px' }}
        w="100%"
        m="0 !important"
        borderRadius="16px 16px 0px 0px "
        h={{ base: '52px', md: '73px' }}
      >
        <Box paddingLeft={{ base: '16px', md: '56px' }} maxW="303px" minW="89px" w="full">
          <Text>Rarity</Text>
        </Box>
        <HStack
          marginLeft="0 !important"
          justifyContent="space-between"
          maxW="447px"
          minW="105px"
          w="full"
        >
          <Box>
            <Text>% of Supply</Text>
          </Box>
          <Box marginLeft={{ base: '25px !important', md: '0' }}>
            <Text>Available Worlds</Text>
          </Box>
        </HStack>
        <Box maxW="450px" minW="150px" display="flex" justifyContent="flex-end" w="full">
          <Box w={{ base: '90%', md: '70%' }}>
            <Text>Avatart Perks</Text>
          </Box>
        </Box>
      </HStack>
      {items.map(({ rarity, supplyNumber, worlds, perks }, index) => (
        <HStack
          w="full"
          fontSize={{ base: '10px', md: '18px' }}
          fontStyle="normal"
          fontWeight="500"
          lineHeight={{ base: '12px', md: '21.6px' }}
          borderRadius={index + 1 === items.length ? '0 0 1em 1em' : '0'}
          key={`${rarity + index}-row`}
          bgColor={(index + 1) % 2 === 0 ? '#20202E' : '#1C1C28'}
          h={{ base: '42px', md: '73px' }}
          m="0!important"
          color="rgba(255,255,255,0.7)"
          justifyContent="flex-start"
          alignItems="center"
        >
          <Box
            paddingLeft={{ base: '16px', md: '56px' }}
            color="gold"
            maxW="303px"
            minW="87px"
            w="full"
          >
            <Text>{rarity}</Text>
          </Box>
          <HStack
            minW="108px"
            marginLeft="0 !important"
            w="full"
            maxW="359px"
            justifyContent="space-between"
          >
            <Box
              bgColor="rgba(0, 2, 10, 0.4);"
              justifyContent="center"
              alignItems="center"
              display="flex"
              minW="48px"
              maxW="86px"
              w="50%"
              alignSelf="center"
              justifySelf="center"
              h={{ base: '42px', md: '73px' }}
            >
              <Text>{supplyNumber}</Text>
            </Box>
            <Box
              bgColor="rgba(0, 2, 10, 0.4);"
              justifyContent="center"
              alignItems="center"
              display="flex"
              minW="48px"
              maxW="86px"
              w="50%"
              alignSelf="center"
              justifySelf="center"
              h={{ base: '42px', md: '73px' }}
            >
              <Text>{worlds}</Text>
            </Box>
          </HStack>
          <Box
            display="flex"
            paddingRight="35px"
            justifyContent="flex-end"
            alignItems="center"
            maxW="538px"
            w="full"
            minW="149px"
          >
            <Box w={{ base: '85%', md: '55%' }}>
              <Text>{perks}</Text>
            </Box>
          </Box>
        </HStack>
      ))}
      {/* <HStack></HStack>
    <HStack></HStack>
    <HStack></HStack>
    <HStack></HStack> */}
    </VStack>
  );
};
const items = [
  { rarity: 'Legendary', supplyNumber: '1%', worlds: '7', perks: 'Leading wings' },
  { rarity: 'Diamond', supplyNumber: '2%', worlds: '6', perks: 'Small wings' },
  { rarity: 'Gold', supplyNumber: '15%', worlds: '4', perks: 'Can change skin color' },
  { rarity: 'Silver', supplyNumber: '25%', worlds: '3', perks: 'Custom animation' },
  {
    rarity: 'Bronze',
    supplyNumber: '53%',
    worlds: '2',
    perks: 'Can use NFTs: Avatars. Cosmetics, Coach, Music, Pets',
  },
];
export default memo(RarityTable);
