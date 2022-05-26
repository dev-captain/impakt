import { Text, Box } from '@chakra-ui/react';
import * as React from 'react';

interface GenerateNumberPropsI {
  onClick: () => void;
}

const GenerateDigitNumber: React.FC<GenerateNumberPropsI> = ({ onClick }) => {
  return (
    <Box
      position="absolute"
      cursor="pointer"
      onClick={onClick}
      top={{ base: '0', md: '5' }}
      right={{ base: '5', md: '50' }}
    >
      <Text fontWeight="bold" textStyle="regular1">
        Generate ID
      </Text>
    </Box>
  );
};
export default GenerateDigitNumber;
