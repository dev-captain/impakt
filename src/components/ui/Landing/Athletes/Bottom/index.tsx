import { VStack } from '@chakra-ui/react';
import * as React from 'react';
import AthletesApplyHere from './AthletesApplyHere';

const AthletesBottom: React.FC = () => {
  return (
    <VStack width="100%" mt="78px !important" mb="56px !important">
      <AthletesApplyHere />
    </VStack>
  );
};
export default AthletesBottom;
