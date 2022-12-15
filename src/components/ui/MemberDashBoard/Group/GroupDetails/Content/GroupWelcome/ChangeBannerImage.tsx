import { Box, Text, useDisclosure } from '@chakra-ui/react';
import * as React from 'react';
import { I } from 'components';
import { ChevronRightIcon } from '@chakra-ui/icons';
import colors from 'theme/colors';
import textStyles from 'theme';
import BannerImageChangeModal from './BannerImageChangeModal';

const ChangeBannerImage: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Box
        border="1px solid #D3E2F0"
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderRadius="12px"
        padding={{ base: '10px', md: '18px' }}
        _hover={{ cursor: 'pointer' }}
        onClick={() => {
          onOpen();
        }}
      >
        <Box display="flex" alignItems="center">
          <Box
            background="rgba(242, 121, 97, 0.1)"
            w={{ base: '40px', md: '64px' }}
            h={{ base: '40px', md: '64px' }}
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <I.FrameIcon color={colors.nextOrange} w={{ base: '20px', md: '32px' }} />
          </Box>
          <Box />
          <Text
            color={colors['fg-1']}
            fontSize={{ base: textStyles.regular2, md: textStyles.regular201 }}
            maxW={{ base: '240px' }}
            marginLeft={{ base: '16px' }}
          >
            Personalize the group with cover image{' '}
          </Text>
        </Box>
        <ChevronRightIcon
          color={colors.fg1}
          w={{ base: '20px', md: '30px' }}
          h={{ base: '20px', md: '30px' }}
        />
      </Box>
      <BannerImageChangeModal open={isOpen} close={onClose} />
    </Box>
  );
};
export default ChangeBannerImage;
