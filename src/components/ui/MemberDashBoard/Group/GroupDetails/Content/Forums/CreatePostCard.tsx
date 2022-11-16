import * as React from 'react';
import { Box, Text, SkeletonCircle, HStack, Skeleton, VStack } from '@chakra-ui/react';
import { I } from 'components';

import { usePersistedAuthStore } from '../../../../../../../lib/zustand';

interface CreatePostCardPropsI {
  onClick: () => void;
}
const CreatePostCard: React.FC<CreatePostCardPropsI> = ({ onClick }) => {
  const { member } = usePersistedAuthStore();

  return (
    <Box
      border="1px solid #D3E2F0"
      as="button"
      w="full"
      _hover={{
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',
      }}
      onClick={onClick}
      p="16px"
      borderRadius="12px"
      marginTop="12px"
    >
      <Box display="flex" justifyContent="space-between" flexWrap={{ base: 'wrap', md: 'unset' }}>
        <VStack rowGap="0.5em" columnGap="1em" w="full">
          <HStack w="full" justifyContent="space-between">
            <Text color="#728BA3" fontWeight="400" fontSize="12px" lineHeight="100%;">
              {member?.firstName?.replace(' ', '') ?? member?.username.replace(' ', '')} • just now
            </Text>
            <HStack>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Text color="#91A8BD" fontSize="12px" fontWeight="500" marginLeft="3px">
                  0
                </Text>
                <I.CommentIcon marginLeft="4px" color="#91A8BD" width="12px" height="12px" />
              </Box>
            </HStack>
          </HStack>
          <VStack
            rowGap="16px"
            mt="0 !important"
            justifyContent="flex-start"
            alignItems="flex-start"
            w="full"
          >
            <Box>
              <Text color="#29323B" fontWeight="500" fontSize="16px" lineHeight="100%">
                Create your first post
              </Text>
            </Box>
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
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default CreatePostCard;
