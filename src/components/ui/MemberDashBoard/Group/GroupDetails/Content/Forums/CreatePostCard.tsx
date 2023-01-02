import * as React from 'react';
import { Box, Text, HStack, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import { I } from '@/components';
import { usePersistedAuthStore, usePersistedGroupStore } from '../../../../../../../lib/zustand';
import { renderToast } from '../../../../../../../utils';
import routes from '../../../../../../../data/routes';
import ChatLoadingSkeleton from '../ChatLoadingSkeleton';

interface CreatePostCardPropsI {
  onClick: () => void;
}
const CreatePostCard: React.FC<CreatePostCardPropsI> = ({ onClick }) => {
  const navigate = useNavigate();
  const { member } = usePersistedAuthStore();
  const { role, activeGroup } = usePersistedGroupStore();

  return (
    <Box
      border="1px solid #D3E2F0"
      as="button"
      w="full"
      _hover={{
        boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;',
      }}
      onClick={
        role !== 'Guest'
          ? onClick
          : () => {
              renderToast(
                'warning',
                'You have to be member of the group to create a topic.',
                'dark',
                2200,
              );
              navigate(routes.guestRedirect(activeGroup?.id));
            }
      }
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
            <ChatLoadingSkeleton isLoading />
          </VStack>
        </VStack>
      </Box>
    </Box>
  );
};

export default CreatePostCard;
