import * as React from 'react';
import { Text, Box } from '@chakra-ui/react';

interface CardProps {
  company: string;
  title?: string;
  fname: string;
  lname: string;
  post: string;
}

const Card: React.FC<CardProps> = ({ company, title, fname, lname, post }) => {
  return (
    <Box
      padding={{ lg: '21px 0 21px 35px', base: '20px' }}
      display="flex"
      alignItems="center"
      width="100%"
      maxWidth={{ md: '476px', base: 'initial' }}
      justifyContent="center"
      textAlign="center"
    >
      <Box ml="16px">
        <Text
          color="#728BA3"
          fontSize={{ lg: '24px', base: '18px' }}
          lineHeight="100%"
          fontWeight="600"
          mt="7px"
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
        <Text
          color="#1C1C2899"
          mt={{ lg: '16px', base: '8px' }}
          fontSize={{ lg: '18px', base: '14px' }}
        >
          {post}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
