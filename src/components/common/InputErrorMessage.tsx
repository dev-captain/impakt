import { Box, Text } from '@chakra-ui/react';
import * as React from 'react';

interface InputErrorMessagePropsI {
  errorMsg?: string;
}

const InputErrorMessage: React.FC<InputErrorMessagePropsI> = ({ errorMsg }) => {
  if (!errorMsg) return null;

  return (
    <Box w="full" mt="5px" ml="10px">
      <Text
        bgClip="text"
        textStyle="regular12"
        bgGradient="linear(to-r, rgba(220, 20, 60, 1), rgba(178, 34, 34, 1))"
      >
        {errorMsg}
      </Text>
    </Box>
  );
};
export default InputErrorMessage;
