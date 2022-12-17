import React from 'react';
import * as SocketIOClient from 'socket.io-client';

const API_SERVER_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000';

interface ConversationContext {
  conversationId: number | null;
  setConversationId: React.Dispatch<React.SetStateAction<number | null>>;
  messages: any[];
  sendMessage: (data: string) => void;
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

export const GroupChatContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [conversationId, setConversationId] = React.useState<number | null>(null);
  const [messages, setMessages] = React.useState<any[]>([]);
  const socketRef = React.useRef<SocketIOClient.Socket>();

  /**
   * Connect to the socket server
   * Disconnect from the socket server
   */
  React.useEffect(() => {
    socketRef.current = SocketIOClient.io(API_SERVER_URL);

    return () => {
      socketRef.current?.disconnect();
    };
  }, []);

  /**
   * Join the conversation
   * Listen for new messages
   * Add new messages to the state when received
   */
  React.useEffect(() => {
    if (conversationId) {
      socketRef.current?.emit('join', conversationId);

      socketRef.current?.on('message', (data: any) => {
        setMessages((prev) => [...prev, data]);
      });
    }
  }, [conversationId]);

  /**
   * Send a message to the server
   */
  async function sendMessage(data: string) {
    socketRef.current?.emit('message', { conversationId, data });
  }

  return (
    <ConversationContext.Provider
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{
        conversationId,
        setConversationId,
        messages,
        sendMessage,
      }}
    >
      {children}
    </ConversationContext.Provider>
  );
};
