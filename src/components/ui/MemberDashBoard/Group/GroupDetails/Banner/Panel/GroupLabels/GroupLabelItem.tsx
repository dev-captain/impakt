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
      bg="white"
      ml="0 !important"
      border="1px solid #D3E2F0"
      w={{ base: 'full', md: 'auto' }}
      borderRadius="8px"
      p="8px 12px 8px 8px"
      onClick={onClick}
      cursor="pointer"
    >
      <Box display="flex" justifyContent="flex-start" alignItems="center">
        {leftIcon}
        <Box marginLeft="12px">
          <Text
            textTransform="uppercase"
            letterSpacing="1px"
            color="fg2"
            fontSize="12px"
            lineHeight="100%"
            fontWeight="600"
          >
            {labelTitle}
          </Text>
          <Text color="fg-1" mt="8px" textTransform="capitalize" textStyle="semiBold5">
            {labelDescription}
          </Text>
        </Box>
        {rightIcon && <Box ml="12px">{rightIcon}</Box>}
      </Box>
    </Box>
  );
};

export default GroupLabelItem;
