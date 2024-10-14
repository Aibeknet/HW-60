import React, { useState, useEffect, useRef } from 'react';
import { Container, Typography } from '@mui/material';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Message } from '../types';
import MessageList from '../components/MessageList/MessageList.tsx';
import MessageInput from '../components/MessageInput/MessageInput.tsx';

dayjs.extend(localizedFormat);

const baseURL = 'http://146.185.154.90:8000/messages';

const App: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const lastMessageDate = useRef<string | null>(null);

  const getNewMessages = async () => {
    try {
      const formattedDate = lastMessageDate.current
        ? dayjs(lastMessageDate.current).format('LLLL')
        : '';

      const url = formattedDate
        ? `${baseURL}?datetime=${formattedDate}`
        : baseURL;

      const response = await fetch(url);
      const data: Message[] = await response.json();

      if (data.length > 0) {
        lastMessageDate.current = data[data.length - 1].datetime;
        setMessages((prev) => [...prev, ...data]);
      }
    } catch (e) {
      alert(e);
    }
  };

  useEffect(() => {
    const interval = setInterval(getNewMessages, 3000);
    return () => clearInterval(interval);
  }, []);

  const sendChatMessage = async (message: string, author: string) => {
    try {
      const data = new URLSearchParams();
      data.set('message', message);
      data.set('author', author);

      await fetch(baseURL, {
        method: 'POST',
        body: data,
      });

      getNewMessages();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        align="center"
      >
        Chat
      </Typography>
      <MessageInput onSendMessage={sendChatMessage} />
      <MessageList messages={messages} />
    </Container>
  );
};

export default App;