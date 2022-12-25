import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { I } from 'components';
import { PromoBarCounter } from './PromoBarCounter';

const PromoBar: React.FC = () => {
  const [show, setShow] = React.useState(true);

  return show ? (
    <HStack
      p="1em"
      h={{ base: 'auto', md: '80px' }}
      bg="orangeGradient"
      position="fixed"
      bottom="0"
      w="full"
    >
      <HStack
        w="full"
        justifyContent="space-between"
        alignItems={{ base: 'flex-start', md: 'center' }}
      >
        <HStack justifyContent="center" w="full">
          <HStack
            w="full"
            maxW={{ base: 'full', md: '1000px' }}
            flexDir={{ base: 'column', md: 'row' }}
            justifyContent={{ base: 'flex-start', md: 'space-between' }}
            alignItems={{ base: 'flex-start', md: 'center' }}
            rowGap="1em"
          >
            <Box>
              <Text textStyle={{ base: 'semiBold3', md: 'semiBold20' }} color="white">
                Be an Impakt First Investor. Join our family.
              </Text>
            </Box>
            <HStack
              ml="0 !important"
              flexWrap={{ base: 'wrap', md: 'unset' }}
              rowGap="1em"
              spacing={{ base: '0', md: '24px' }}
            >
              <PromoBarCounter />
            </HStack>
          </HStack>
        </HStack>
        <Box cursor="pointer" onClick={() => setShow(false)} color="white">
          <I.CloseIcon />
        </Box>
      </HStack>
    </HStack>
  ) : null;
};

export default PromoBar;
