import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';

interface GroupStatisticLabelPropsI {
  leftIcon: React.ReactElement<any, any>;
  rightIcon: React.ReactElement<any, any>;
  labelTitle: string;
  labelDescription: string;
  onClick: () => void;
}

const GroupLabelItem: React.FC<GroupStatisticLabelPropsI> = ({
  leftIcon,
  rightIcon,
  labelDescription,
  labelTitle,
  onClick,
}) => {
  return (
    <Box
      ml="0 !important"
      border="1px solid #D3E2F0"
      w={{ base: 'full', md: 'auto' }}
      borderRadius="12px"
      p="8px 12px 8px 8px"
      onClick={onClick}
    >
      <Box display="flex" justifyContent="space-between" alignItems="center">
        {leftIcon}
        <Box marginLeft="12px">
          <Text
            textTransform="uppercase"
            letterSpacing="1px"
            color="fitnessGray2"
            fontSize="12px"
            lineHeight="100%"
            fontWeight="600"
          >
            {labelTitle}
          </Text>
          <Text
            color="fitnessGrayMinus1"
            mt="8px"
            textTransform="capitalize"
            fontSize={{ base: '14px', md: '16px' }}
            lineHeight="100%"
            fontWeight="500"
          >
            {labelDescription}
          </Text>
        </Box>
        {rightIcon && <Box ml="12px">{rightIcon}</Box>}
      </Box>
    </Box>
  );
};

export default GroupLabelItem;
