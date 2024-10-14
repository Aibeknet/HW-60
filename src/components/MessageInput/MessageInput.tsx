import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';

interface MessageInputProps {
  onSendMessage: (message: string, author: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [author, setAuthor] = useState('');

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage, author);
      setNewMessage('');
      setAuthor('');
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <form onSubmit={handleSend}>
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
          type="submit" // Изменяем на тип submit
          variant="contained"
          color="primary"
          sx={{ mb: 2 }}
        >
          Send
        </Button>
      </form>
    </Box>
  );
};

export default MessageInput;


