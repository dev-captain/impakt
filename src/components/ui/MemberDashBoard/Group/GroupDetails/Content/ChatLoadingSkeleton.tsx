import React from 'react';
import { HStack, Box, SkeletonCircle, VStack, Skeleton } from '@chakra-ui/react';

interface ChatLoadingSkeleton {
  isLoading: boolean;
}

const ChatLoadingSkeleton: React.FC<ChatLoadingSkeleton> = ({ isLoading }) => {
  return isLoading ? (
    <HStack alignItems="flex-start" justifyContent="flex-start" m="0 !important" w="full">
      <Box>
        <SkeletonCircle fadeDuration={3} speed={3} isLoaded={false} />
      </Box>
      <VStack w="full" align="flex-start" justifyContent="flex-start">
        <Box display="flex" w="full">
          <Skeleton
            fadeDuration={3}
            speed={3}
            borderRadius="100px"
            height="12px"
            w="20%"
            isLoaded={false}
          />

          <Skeleton
            fadeDuration={3}
            speed={3}
            borderRadius="100px"
            height="12px"
            ml="4px"
            w="40%"
            isLoaded={false}
          />
        </Box>

        <Skeleton
          fadeDuration={3}
          speed={3}
          borderRadius="100px"
          height="12px"
          w="75%"
          isLoaded={false}
        />
      </VStack>
    </HStack>
  ) : null;
};

export default ChatLoadingSkeleton;
