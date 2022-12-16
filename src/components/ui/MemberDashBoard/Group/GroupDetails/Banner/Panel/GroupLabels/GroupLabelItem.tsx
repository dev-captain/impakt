import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';
import { usePersistedGroupStore } from 'lib/zustand';

interface GroupStatisticLabelPropsI {
  leftIcon: React.ReactElement<any, any>;
  rightIcon: React.ReactElement<any, any>;
  labelDescription: string;
  onClick: () => void;
}

const GroupLabelItem: React.FC<GroupStatisticLabelPropsI> = ({
  leftIcon,
  rightIcon,
  labelDescription,
  onClick,
}) => {
  const { role } = usePersistedGroupStore();
  const isMember = role === 'Member';
  const isNone = role === 'None';
  return (
    <Box
      bg={labelDescription === 'Pin a challenge' ? 'orangeGradient' : 'white'}
      ml="0 !important"
      border="1px solid #D3E2F0"
      w={{ base: 'full', md: 'auto' }}
      borderRadius="8px"
      p="8px 12px 8px 8px"
      onClick={onClick}
      cursor="pointer"
      position="relative"
    >
      <Box display="flex" justifyContent="space-between" alignItems="center" position="relative">
        <Box display="flex" justifyContent="flex-start" alignItems="center">
          {leftIcon}
          <Box marginLeft="12px">
            {(isMember || isNone) && (
              <Text color="fg2" textStyle="bold1" mb="8px">
                PINNED CHALLENGE
              </Text>
            )}
            <Text
              color={labelDescription === 'Pin a challenge' ? 'white' : 'fg-1'}
              textStyle="semiBold17"
            >
              {labelDescription}
            </Text>
          </Box>
        </Box>
        {rightIcon && <Box ml="20px">{rightIcon}</Box>}
      </Box>
    </Box>
  );
};

export default GroupLabelItem;
