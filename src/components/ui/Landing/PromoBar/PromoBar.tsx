import React from 'react';
import { Box, HStack, Text } from '@chakra-ui/react';
import { Common, I } from 'components';
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
              <Text textStyle={{ base: 'semiBold3', md: 'semiBold24' }} color="white">
                Become part of the Impakt family
              </Text>
            </Box>
            <HStack
              ml="0 !important"
              flexWrap={{ base: 'wrap', md: 'unset' }}
              rowGap="1em"
              spacing={{ base: '0', md: '24px' }}
            >
              <PromoBarCounter />
              <Common.ImpaktButton
                ml={{ base: '0', md: '24px' }}
                target="_blank"
                as="a"
                variant="white"
                h="full"
                href="https://wefunder.com/vsports"
                p={{ base: '10px 20px', md: '18px 32px' }}
              >
                <Text textStyle="semibold20">Invest Now</Text>
              </Common.ImpaktButton>
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
