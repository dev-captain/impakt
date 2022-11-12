import * as React from 'react';
import {
  Box,
  Text,
  SkeletonCircle,
  HStack,
  Skeleton,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import CreatePostModal from './CreatePostModal';

const CreatePostCard: React.FC = () => {
  const { onOpen, isOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        border="1px solid #D3E2F0"
        onClick={onOpen}
        padding={{ sm: '16px', base: '10px' }}
        borderRadius="12px"
        marginTop="12px"
      >
        <Box display="flex" justifyContent="space-between" flexWrap={{ base: 'wrap', md: 'unset' }}>
          <VStack rowGap="1em" columnGap="1em" w="full">
            <HStack w="full" justifyContent="space-between">
              <Text color="#B0C3D6" fontWeight="600" fontSize="18px" lineHeight="100%;">
                Create a thread
              </Text>
              <HStack>
                <Skeleton
                  endColor="#EEF4F6"
                  startColor="#EEF4F6"
                  height="16px"
                  borderRadius="100px"
                  w="32px"
                  fadeDuration={0}
                  speed={0}
                />
                <Skeleton
                  endColor="#EEF4F6"
                  startColor="#EEF4F6"
                  fadeDuration={0}
                  speed={0}
                  height="16px"
                  borderRadius="100px"
                  w="32px"
                />
                <Skeleton
                  endColor="#EEF4F6"
                  startColor="#EEF4F6"
                  fadeDuration={0}
                  speed={0}
                  height="16px"
                  borderRadius="100px"
                  w="32px"
                />
              </HStack>
            </HStack>
            <HStack w="full">
              <HStack w="full">
                <SkeletonCircle
                  endColor="#EEF4F6"
                  startColor="#EEF4F6"
                  fadeDuration={0}
                  speed={0}
                  w="40px"
                  h="40px"
                />
                <VStack w="full" align="flex-start" justifyContent="flex-start">
                  <Skeleton
                    endColor="#EEF4F6"
                    startColor="#EEF4F6"
                    fadeDuration={0}
                    speed={0}
                    borderRadius="100px"
                    height="10px"
                    w="60%"
                    isLoaded={false}
                  />
                  <Skeleton
                    endColor="#EEF4F6"
                    startColor="#EEF4F6"
                    fadeDuration={0}
                    speed={0}
                    borderRadius="100px"
                    height="10px"
                    w="70%"
                    isLoaded={false}
                  />
                </VStack>
              </HStack>
              <HStack m="0 !important" justifyContent="flex-start" alignItems="flex-start">
                <AddIcon
                  mr="10px"
                  mb="5px"
                  boxSize="15px"
                  border="5px"
                  color="#728BA3"
                  cursor="pointer"
                />
              </HStack>
            </HStack>
          </VStack>
        </Box>
      </Box>
      <CreatePostModal isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default CreatePostCard;
