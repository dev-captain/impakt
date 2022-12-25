/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { VStack, HStack, Box, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Keys from '@/i18n/types';
import { I, Common } from '@/components';
import routes from '../../../data/routes';

interface ImpaktFooterV2PropsI {
  wFull: boolean;
  isWhiteMode: boolean;
}

const ImpaktFooterV2: React.FC<ImpaktFooterV2PropsI> = ({
  wFull = false,
  isWhiteMode = false,
  children,
}) => {
  const navigate = useNavigate();
  const bgColor = isWhiteMode ? 'a5' : 'dark-2';

  return (
    <VStack
      zIndex="999999 !important"
      py="80px"
      px={{ base: '24px', md: '48px' }}
      borderTop={isWhiteMode ? '1px solid #D3E2F0' : ''}
      bg={bgColor}
      as="footer"
      width="100%"
    >
      <VStack rowGap="2em" w="full">
        <HStack
          w="full"
          rowGap={{ base: '32px', md: '24px' }}
          display="flex"
          flexWrap={{ base: 'wrap', md: 'nowrap' }}
          justify={{
            base: 'center',
            lg: wFull ? 'flex-start' : 'space-between',
          }}
        >
          <HStack
            columnGap="2em"
            display="flex"
            justifyContent="flex-start"
            width={{ base: '100%', md: 'auto' }}
          >
            <I.ImpaktIcon variant="lg" minW="111px" w="111px" whiteMode={!isWhiteMode} />
            <Box onClick={() => navigate(routes.download)}>
              <Common.ImpaktButton variant={isWhiteMode ? 'orange' : 'primary'}>
                Download
              </Common.ImpaktButton>
            </Box>
          </HStack>

          <HStack
            justifyContent={{ base: 'space-between', md: 'flex-start' }}
            mb={{ base: '32px !important', md: '0px !important ' }}
            spacing="8px"
            pl={{ base: '0px', md: '64px', lg: wFull ? '50px' : '64px' }}
            w={{ base: '100%', lg: wFull ? 'min-content' : '100%' }}
          >
            <Common.SocialIcons
              color={isWhiteMode ? 'fg' : 'whiteAlpha.700'}
              _hover={{ color: isWhiteMode ? 'fg1' : 'white' }}
            />
          </HStack>
        </HStack>
        <HStack
          spacing="2em"
          mt="0 !important"
          justifyContent={{ base: 'space-between', md: 'flex-start' }}
          alignItems={{ base: 'center', md: 'flex-start' }}
          w="full"
        >
          {children}
        </HStack>
        <HStack
          display={{ base: 'block', md: 'flex' }}
          textAlign={{ base: 'start', md: 'start' }}
          w="full"
          justifyContent={{ base: 'center', md: 'flex-start' }}
          flexDir="row"
        >
          <Text color={isWhiteMode ? 'fg1' : 'rgba(255, 255, 255, 0.4)'} textStyle="regular3">
            {Keys.footer.madeBy}
          </Text>
          <Text color={isWhiteMode ? 'fg1' : 'rgba(255, 255, 255, 0.4)'} textStyle="regular3">
            {Keys.footer.allRightReserved}
          </Text>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default ImpaktFooterV2;
