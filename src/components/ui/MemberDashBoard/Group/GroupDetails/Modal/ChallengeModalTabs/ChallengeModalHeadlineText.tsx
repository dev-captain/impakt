import React from 'react';
import { Text, TextProps } from '@chakra-ui/react';

const ChallengeModalHeadlineText: React.FC<{ title: string } & TextProps> = ({
  title,
  ...props
}) => {
  return (
    <Text
      w="100%"
      fontSize={{ base: '20px', md: '32px' }}
      color="#29323B"
      lineHeight="100%"
      fontWeight="500"
      letterSpacing="-0.01em"
      {...props}
    >
      {title}
    </Text>
  );
};

export default ChallengeModalHeadlineText;
