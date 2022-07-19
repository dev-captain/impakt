import * as React from 'react';
import { Common } from 'components';
import { Box } from '@chakra-ui/react';

import { InputGroupPropsI } from './InputGroup';

interface InputBoxProps {
  inputItems: InputGroupPropsI[];
}
const InputItems: React.FC<InputBoxProps> = ({ inputItems }) => {
  return (
    <>
      {inputItems.map((props, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Box display="flex" ml="0 !important" w="full" justifyContent="space-between" key={index}>
          <Common.InputGroup {...props} />
        </Box>
      ))}
    </>
  );
};
export default InputItems;
