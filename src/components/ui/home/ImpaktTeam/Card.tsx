import * as React from 'react';
import { Text, Box, Image } from '@chakra-ui/react';

interface CardProps {
  img: any;
  title: string;
  name: string;
  post: string;
}

const Card: React.FC<CardProps> = ({ img, title, name, post }) => {
  return (
    <Box
      boxShadow="0px 8px 15px 3px rgba(0, 0, 0, 0.05)"
      backgroundColor="#fff"
      borderRadius="20px"
      padding={{ lg: '21px 0 21px 35px', base: '20px' }}
      display="flex"
      alignItems="center"
      width={{ lg: '31%', md: '30%', base: '100%' }}
      maxWidth={{ md: '476px', base: 'initial' }}
    >
      <Box>
        <Image
          src={img}
          borderRadius="50%"
          width={{ lg: '126px', base: '70px' }}
          minWidth={{ lg: '126px', base: '70px' }}
          height={{ lg: '126px', base: '70px' }}
        />
      </Box>
      <Box ml="16px">
        <Text
          color="#728BA3"
          fontWeight="500"
          fontSize={{ lg: '18px', base: '16px' }}
          lineHeight="100%"
        >
          {title}
        </Text>
        <Text
          color="#1C1C28"
          fontSize={{ lg: '24px', base: '18px' }}
          lineHeight="100%"
          fontWeight="600"
          mt="7px"
        >
          {name}
        </Text>
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
