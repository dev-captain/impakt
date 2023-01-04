import * as React from 'react';
import { Box } from '@chakra-ui/react';
import { Common } from '@/components';

import { InputGroupPropsI } from './InputGroup';

interface InputBoxProps {
  inputItems: InputGroupPropsI[];
}
const InputItems: React.FC<InputBoxProps> = ({ inputItems }) => {
  return (
    <>
      {inputItems.map((props) => (
        <Box
          display="flex"
          flexDir={{ base: 'column', lg: 'row' }}
          ml="0 !important"
          w="full"
          columnGap="1em"
          rowGap="1em"
          justifyContent="space-between"
          // eslint-disable-next-line react/no-array-index-key
          key={props.inputProps?.name}
        >
          <Common.InputGroup {...props} />
        </Box>
      ))}
    </>
  );
};
export default InputItems;
