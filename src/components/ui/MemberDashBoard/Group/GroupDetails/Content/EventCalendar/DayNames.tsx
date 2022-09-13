import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const DayNames: React.FC = () => {
  return (
    <Box
      width="100%"
      height="30%"
      backgroundColor="white"
      color="rgb(170, 170, 170)"
      padding="16px 15px 10px 12px"
      display="flex"
      justifyContent={{ base: 'space-between', md: 'center' }}
      alignItems="center"
    >
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="52px"
        transition="all 0.4s ease-in-out 0s"
        color="rgb(170, 170, 170)"
      >
        Su
      </Text>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="52px"
        transition="all 0.4s ease-in-out 0s"
        color="rgb(170, 170, 170)"
      >
        Mo
      </Text>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="52px"
        transition=" all 0.4s ease-in-out 0s"
        color="rgb(170, 170, 170)"
      >
        Tu
      </Text>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="52px"
        transition=" ll 0.4s ease-in-out 0s"
        color="rgb(170, 170, 170)"
      >
        We
      </Text>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="52px"
        transition="all 0.4s ease-in-out 0s"
        color="rgb(170, 170, 170)"
      >
        Th
      </Text>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="52px"
        transition="all 0.4s ease-in-out 0s"
        color="rgb(170, 170, 170)"
      >
        Fr
      </Text>
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="52px"
        transition="all 0.4s ease-in-out 0s"
        color="rgb(170, 170, 170)"
      >
        Sa
      </Text>
    </Box>
  );
};

export default DayNames;
