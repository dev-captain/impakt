import * as React from 'react';
import { Box, Text } from '@chakra-ui/react';
// import { I } from 'components';

interface MyGroupCardWrapperHeaderStatisticTagropsI {
  value: string;
  icon: any;
  name: string;
  color: string;
  width: string;
}
const MyGroupCardWrapperHeaderStatisticTag: React.FC<MyGroupCardWrapperHeaderStatisticTagropsI> = ({
  value,
  icon,
  name,
  color,
  width,
}) => {
  return (
    <Box display={{ sm: 'none', lg: 'flex' }} alignItems="center" mb="2em">
      {icon}
      <Text
        as="h1"
        textStyle="TitleBold64"
        fontSize="48px"
        letterSpacing="-1.5px"
        marginLeft="12px"
        color={color}
      >
        {value}
      </Text>
      <Text
        as="h1"
        textStyle="TitleBold64"
        fontSize="16px"
        color="rgba(28, 28, 40, 0.7)"
        marginLeft="12px"
        maxW={width}
      >
        {name}
      </Text>
    </Box>
  );
};
export default MyGroupCardWrapperHeaderStatisticTag;
