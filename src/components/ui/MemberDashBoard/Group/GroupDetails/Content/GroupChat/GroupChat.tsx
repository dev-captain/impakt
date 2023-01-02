import * as React from 'react';
import { useCallback } from 'react';
import { Box, Text, Skeleton, HStack } from '@chakra-ui/react';
import { Forms } from '@/components';
import { usePersistedGroupStore } from '@/lib/zustand';
import { useConversationContext } from '@/context/ConversationContext';
import { getCreatedBefore } from '@/utils';
import MemberDashboardCard from '../../../../MemberDashBoardCard';
import GroupChatCard from './GroupChatCard';
import EmojiPickerPopover from './EmojiPickerPopover';
import { useGroupsControllerV1FindOne } from '../../../../../../../lib/impakt-dev-api-client/react-query/groups/groups';

const GroupChat: React.FC = () => {
  const [stopAutoScrollToBottom, setStopAutoScrollToBottom] = React.useState(false);
  const chatBoxRef = React.useRef<HTMLDivElement>(null);
  const chatInputRef = React.useRef<HTMLInputElement>(null);
  const { activeGroup } = usePersistedGroupStore();
  const { messages, sendMessage, setConversationId, isMessagesLoading, fetchOlderMessages } =
    useConversationContext();
  const [inputValue, setInputValue] = React.useState<string>('');
  const groupFallback = useGroupsControllerV1FindOne(activeGroup?.id ?? -1, {
    query: { enabled: false },
  });

  const handleMessageSend = useCallback(() => {
    if (inputValue && inputValue.length > 0) {
      sendMessage(inputValue);
      setInputValue('');
    }
  }, [inputValue]);

  /**
   * Set the conversation id when the component mounts
   */
  React.useEffect(() => {
    if (activeGroup?.conversationId) {
      setConversationId(activeGroup?.conversationId);
    } else {
      groupFallback.refetch().then((res) => {
        if (res.data?.conversationId) {
          setConversationId(res.data?.conversationId);
        }
      });
    }
  }, [activeGroup?.conversationId]);

  React.useEffect(() => {
    if (!stopAutoScrollToBottom) {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current?.scrollHeight;
      }
    }
  }, [messages, stopAutoScrollToBottom]);

  const chatBoxOnScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    if (e.currentTarget.scrollTop === 0) {
      const isFetchedOlderMessage = fetchOlderMessages();
      if (chatBoxRef.current && isFetchedOlderMessage) {
        chatBoxRef.current.scrollTop = 50;
      }
    }
    if (e.currentTarget.scrollTop + e.currentTarget.clientHeight < e.currentTarget.scrollHeight) {
      if (stopAutoScrollToBottom === false) {
        setStopAutoScrollToBottom(true);
      }
    } else if (
      e.currentTarget.scrollTop + e.currentTarget.clientHeight ===
      e.currentTarget.scrollHeight
    ) {
      if (stopAutoScrollToBottom === true) {
        setStopAutoScrollToBottom(false);
      }
    }
  };

  return (
    <Box marginStart="0 !important" width={{ base: '100%', md: '100%', lgx: '100%' }}>
      <MemberDashboardCard p={{ base: '16px', md: '24px' }} marginLeft="auto">
        <Box w="full">
          <Box display="flex" justifyContent="space-between" alignItems="center" width="100%">
            <Box display="flex" alignItems="center" justifyContent="space-between" width="100%">
              <Text fontSize="28px" color="#29323B" fontWeight="700" marginRight="14px">
                Group Chat
              </Text>
              {/* <Button
                background="transparent"
                _hover={{ backgroundColor: 'transparent' }}
                padding="0"
              >
                <I.FullScreenIcon color="#B0C3D6" width="20px" />
              </Button> */}
            </Box>
          </Box>
          <Box
            ref={chatBoxRef}
            onScroll={chatBoxOnScroll}
            maxHeight="350px"
            overflowY="auto"
            overflowX="hidden"
            css={{
              '&::-webkit-scrollbar': {
                width: '4px',
              },
              '&::-webkit-scrollbar-track': {
                width: '6px',
              },
              '&::-webkit-scrollbar-thumb': {
                visibility: 'initial',
                width: '10px',
                background: '#D3E2F0',
                borderRadius: '24px',
              },
            }}
            wordBreak="break-all"
          >
            {isMessagesLoading && (
              <Skeleton h="100px">
                <GroupChatCard name="" msg="" time="" />
              </Skeleton>
            )}
            {[...messages].reverse().map((msg) => (
              <GroupChatCard
                key={msg.id}
                name={msg.username}
                msg={msg.text}
                time={getCreatedBefore(msg.createdAt)}
              />
            ))}
          </Box>
          <Box marginTop="16px">
            {/* <Common.InputItems inputItems={inputItems} /> */}
            <HStack>
              <EmojiPickerPopover inputRef={chatInputRef} setValue={setInputValue} />
              <Forms.GroupChatForm
                ref={chatInputRef}
                setValue={setInputValue}
                value={inputValue}
                handleMessageSend={handleMessageSend}
              />
            </HStack>
          </Box>
        </Box>
      </MemberDashboardCard>
    </Box>
  );
};

export default GroupChat;
