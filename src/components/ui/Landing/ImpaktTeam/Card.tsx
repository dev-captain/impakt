import * as React from 'react';
import { Text, Box, VStack, Image } from '@chakra-ui/react';

interface CardProps {
  company: string;
  title?: string;
  fname: string;
  lname: string;
  image: any;
}

const Card: React.FC<CardProps> = ({ company, title, fname, lname, image }) => {
  return (
    <VStack>
      <VStack pos="relative" zIndex={1}>
        <Box maxW="330px" w="full" rounded="lg">
          <Box>
            <Image
              rounded="lg"
              objectFit="cover"
              src={image}
              width={{ md: '221px', base: '130px' }}
              height={{ md: '221px', base: '130px' }}
              boxSizing="border-box"
              borderRadius="50%"
            />
          </Box>
        </Box>
      </VStack>
      <Box>
        <Text
          color="#728BA3"
          fontSize={{ lg: '24px', base: '18px' }}
          lineHeight="100%"
          fontWeight="600"
          mt="10px"
        >
          <Text as="span" color="#1C1C28">
            {fname}
          </Text>{' '}
          {lname}
        </Text>
        {title && (
          <Text
            color="#728BA3"
            fontWeight="500"
            fontSize={{ lg: '18px', base: '16px' }}
            lineHeight="100%"
            mt="10px"
          >
            {title}{' '}
            <Text as="span" color="#1C1C28">
              {company}
            </Text>
          </Text>
        )}

        {!title && (
          <Text as="span" color="#1C1C28">
            {company}
          </Text>
        )}
      </Box>
    </VStack>
  );
};

export default Card;
