import React from 'react';
import { Box } from '@mui/material';
import { Message } from '../../types.ts';
import MessageItem from '../MessageItem/MessageItem.tsx';

interface MessageListProps {
  messages: Message[];
}

const MessageList: React.FC<MessageListProps> = ({ messages }) => {
  return (
    <Box>
      {messages.map((msg) => (
        <MessageItem key={msg.id} message={msg} />
      ))}
    </Box>
  );
};

export default MessageList;