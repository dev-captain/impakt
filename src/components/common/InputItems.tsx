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
          key={props.name}
        >
          <Common.InputGroup {...props} />
        </Box>
      ))}
    </>
  );
};
export default InputItems;
