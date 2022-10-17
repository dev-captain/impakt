import * as React from 'react';
import { Text, Box, Image } from '@chakra-ui/react';

interface CardProps {
  company: string;
  title?: string;
  fname: string;
  lname: string;
  image: any;
}

const Card: React.FC<CardProps> = ({ company, title, fname, lname, image }) => {
  return (
    <Box
      padding={{ lg: '26px 0', base: '20px' }}
      backgroundColor="#fff"
      width="100%"
      maxWidth={{ md: '310px', base: 'initial' }}
      textAlign="center"
      borderRadius="30px"
    >
      <Box>
        <Image
          rounded="lg"
          objectFit="cover"
          src={image}
          width={{ md: '150px', base: '130px' }}
          height={{ md: '150px', base: '130px' }}
          boxSizing="border-box"
          margin="auto"
          borderRadius="50%"
        />
      </Box>
      <Box>
        <Text
          color="#728BA3"
          fontSize={{ lg: '24px', base: '18px' }}
          lineHeight="100%"
          fontWeight="600"
          mt="26px"
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
    </Box>
  );
};

export default Card;
