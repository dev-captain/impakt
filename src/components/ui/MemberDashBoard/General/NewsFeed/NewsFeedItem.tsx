import { HStack, Box, Text, StackProps } from '@chakra-ui/react';
import * as React from 'react';
import { I } from '@/components';

const NewsFeedItem: React.FC<StackProps & { title: string; href?: string; order: number }> = ({
  href,
  order,
  title,
  ...props
}) => {
  const [isOver, setIsOver] = React.useState(false);

  return (
    <HStack
      as="a"
      onMouseEnter={() => href && setIsOver(true)}
      onMouseLeave={() => href && setIsOver(false)}
      href={href}
      target="_blank"
      w="full"
      background="#F5F8FA"
      color="#29323B"
      _hover={{
        background: href && 'rgba(242, 121, 97, 1)',
        color: href && 'white',
      }}
      borderRadius="1em"
      border="0"
      position="relative"
      p="1em"
      columnGap="12px"
      justifyContent="space-between"
      {...props}
    >
      <Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          id="order-box-dot"
          w="24px"
          h="24px"
          color="inherit"
          bg={isOver ? 'white' : '#4E6070'}
          borderRadius="50%"
        >
          <Text color={isOver ? '#4E6070' : 'white'} lineHeight="100%">
            {order}
          </Text>
        </Box>
      </Box>
      <Box w="full" color="inherit" id="news-">
        <Text color="inherit" fontWeight="400" fontSize="18px" lineHeight="26px">
          {title}
        </Text>
      </Box>

      {href && (
        <Box color="inherit" transform="rotate(270deg)">
          <I.DropIcon color="inherit" />
        </Box>
      )}
    </HStack>
  );
};
export default NewsFeedItem;
