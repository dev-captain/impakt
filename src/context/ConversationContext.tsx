import { useQuery } from '@tanstack/react-query';
import React from 'react';
import * as SocketIOClient from 'socket.io-client';
import { messageControllerV1GetMessages } from '../lib/impakt-dev-api-client/react-query/chat/chat';
import { MessageV1Dto } from '../lib/impakt-dev-api-client/react-query/types/messageV1Dto';
import { userControllerGetUser } from '../lib/impakt-dev-api-client/react-query/users/users';
import { usePersistedGroupStore } from '../lib/zustand';

const API_SERVER_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000';

interface ConversationContext {
  setConversationId: React.Dispatch<React.SetStateAction<number | null>>;
  messages: MessageType[];
  sendMessage: (data: string) => void;
  isMessagesLoading: boolean;
  fetchOlderMessages: () => boolean;
}

const ConversationContext = React.createContext<ConversationContext | null>(null);

export function useConversationContext() {
  const context = React.useContext(ConversationContext);
  if (!context) {
    throw new Error(
      'use ConversationContext provider must be used within the ConversationContext.Provider',
    );
  }

  return context;
}

type MessageType = MessageV1Dto & { username?: string };

export const ConversationContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [take] = React.useState(20);
  const [skip, setSkip] = React.useState(0);
  const [cursorId, setCursorId] = React.useState<number>();
  const { membersOfGroup, role } = usePersistedGroupStore();
  const [conversationId, setConversationId] = React.useState<number | null>(null);
  const socketRef = React.useRef<SocketIOClient.Socket>();
  const [messages, setMessages] = React.useState<MessageType[]>([]);

  const fetchMessages = async () => {
    const data = await messageControllerV1GetMessages(conversationId!, { skip, take, cursorId });
    const message = await matchMessagesandUser(data.messages);

    return { message, count: data.count };
  };

  const useGroupMessageQuery = () =>
    useQuery({
      queryKey: ['messages', cursorId],
      queryFn: fetchMessages,
      keepPreviousData: true,
      enabled: conversationId !== null && role !== 'None',
      refetchOnWindowFocus: false,
      staleTime: 0,
      onSuccess: (data) => {
        setMessages([...messages, ...data.message]);
      },
    });
  const groupMessages = useGroupMessageQuery();

  const matchMessagesandUser = async (currentMessages: MessageV1Dto[]) => {
    const matchedMessages: MessageType[] = [];
    for (let index = 0; index < currentMessages.length; index += 1) {
      matchMessage(currentMessages[index]).then((data) => {
        matchedMessages[index] = data;
      });
    }

    return matchedMessages;
  };

  const matchMessage = async (message: MessageV1Dto) => {
    let matchedMessage: MessageType;
    const member = membersOfGroup?.Members.filter(({ User }) => User.id === message.userId);
    if (member?.length) {
      const getMember = member.find(({ User }) => User.id === message.userId);
      matchedMessage = {
        ...message,
        username: getMember?.User.firstName ?? getMember?.User.username,
      };
    } else {
      const user = await userControllerGetUser(message.userId);

      matchedMessage = {
        ...message,
        username: user.firstName ?? user?.username,
      };
    }

    return matchedMessage;
  };
  const fetchOlderMessages = () => {
    if (groupMessages.data?.message && groupMessages.data.message.length > 0) {
      setSkip(1);
      setCursorId(groupMessages.data.message[groupMessages.data.message.length - 1].id);

      return true;
    }

    return false;
  };
  /**
   * Connect to the socket server
   * Disconnect from the socket server
   */
  React.useEffect(() => {
    if (role !== 'None') {
      socketRef.current = SocketIOClient.io(API_SERVER_URL, { withCredentials: true });

      socketRef.current.on('new-message', async (data: string) => {
        const parsedMessage = JSON.parse(data) as MessageV1Dto;
        const matchMessageUser = await matchMessage(parsedMessage);
        setMessages((prev) => [matchMessageUser, ...prev]);

        return true;
      });
      // TODO: pre-load previous messages
    }

    return () => {
      socketRef.current?.disconnect();
    };
  }, [role]);

  /**
   * Join the conversation
   * Listen for new messages
   * Add new messages to the state when received
   */
  React.useEffect(() => {
    if (conversationId && role !== 'None') {
      socketRef.current?.emit('join-conversation', conversationId);
    }
  }, [conversationId, role]);

  /**
   * Send a message to the server
   */
  async function sendMessage(data: string) {
    socketRef.current?.emit('new-message', { conversationId, data });
  }

  return (
    <ConversationContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        setConversationId,
        messages,
        sendMessage,
        isMessagesLoading: groupMessages.isLoading || groupMessages.isRefetching,
        fetchOlderMessages,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
