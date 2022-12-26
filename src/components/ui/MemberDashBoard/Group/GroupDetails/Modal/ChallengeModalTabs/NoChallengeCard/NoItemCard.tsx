import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { Common } from '@/components';

interface NoItemCardPropsI {
  noItemTitle: string;
  noItemButtonTitle: string;
  noItemButtonOnClick: () => void;
}

const NoItemCard: React.FC<NoItemCardPropsI> = ({
  children,
  noItemTitle,
  noItemButtonTitle,
  noItemButtonOnClick,
}) => {
  return (
    <VStack p="24px" border="1px solid #D3E2F0" borderRadius="24px" w="full" rowGap="4px">
      <VStack textAlign="center" color="#4E6070" fontWeight="400" fontSize="18px" lineHeight="26px">
        <Box>
          <Text>{noItemTitle}</Text>
        </Box>
        {children}
      </VStack>
      <Box>
        <Common.ImpaktButton onClick={noItemButtonOnClick} variant="orange-black">
          {noItemButtonTitle}
        </Common.ImpaktButton>
      </Box>
    </VStack>
  );
};

export default NoItemCard;
