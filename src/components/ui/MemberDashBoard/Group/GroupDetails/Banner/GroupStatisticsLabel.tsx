import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';

interface GroupStatisticLabelPropsI {
  icon: () => React.ReactElement<any, string | React.JSXElementConstructor<any>>;
  labelTitle: string;
  labelDescription: string;
}

const GroupStatisticLabel: React.FC<GroupStatisticLabelPropsI> = ({
  icon,
  labelDescription,
  labelTitle,
}) => {
  return (
    <Box
      ml="0 !important"
      border="1px solid #D3E2F0"
      w={{ base: 'full', md: 'auto' }}
      borderRadius="12px"
      p="12px 24px  12px 12px"
    >
      <Box display="flex" alignItems="center">
        {icon()}
        <Box marginLeft="12px">
          <Text textTransform="uppercase" color="#B0C3D6" fontSize="12px" fontWeight="700">
            {labelTitle}
          </Text>
          <Text
            color="#4E6070"
            textTransform="capitalize"
            fontSize={{ base: '14px', md: '20px' }}
            fontWeight="600"
          >
            {labelDescription}
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default GroupStatisticLabel;
