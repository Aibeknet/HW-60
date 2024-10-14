import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

interface MessageInputProps {
  onSendMessage: (message: string, author: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [author, setAuthor] = useState('');

  const handleSend = () => {
    if (newMessage.trim()) {
      onSendMessage(newMessage, author);
      setNewMessage('');
      setAuthor('');
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <TextField
        label="Your message"
        variant="outlined"
        fullWidth
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Author"
        variant="outlined"
        fullWidth
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        sx={{ mb: 2 }}
        onClick={handleSend}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;