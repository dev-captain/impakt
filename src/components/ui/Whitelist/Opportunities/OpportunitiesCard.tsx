import { Box, Text } from '@chakra-ui/react';
import { Common } from '@/components';
import React, { memo } from 'react';

type Props = {
  icon?: any;
  iconText?: string;
  href?: string;
  children?: React.ReactNode;
  mBottom?: string;
};

const OpportunitiesCard = ({ icon, iconText, href, children, mBottom }: Props) => {
  return (
    <Box background="rgba(255, 255, 255, 0.04)" borderRadius="24px" padding="16px" height="100%">
      <Text fontWeight="400" fontSize="20px" color="#fff" marginBottom={mBottom}>
        {children}
      </Text>
      <Common.ImpaktButton
        as="a"
        href={href}
        leftIcon={<Box marginRight="8px">{icon}</Box>}
        size="lg"
        variant="secondary"
        justifyContent="flex-start"
        fontSize={{ base: '16px', lg: '20px' }}
        lineHeight={{ base: '24px', lg: '32px' }}
      >
        {iconText}
      </Common.ImpaktButton>
    </Box>
  );
};
export default memo(OpportunitiesCard);
