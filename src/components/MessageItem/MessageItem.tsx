import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { Message } from '../../types.ts';

dayjs.extend(localizedFormat);

interface MessageItemProps {
  message: Message;
}

const MessageItem: React.FC<MessageItemProps> = ({ message }) => {

  return (
    <Card variant="outlined" sx={{ marginBottom: 2 }}>
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
          {message.author}
        </Typography>
        <Typography variant="body1">{message.message}</Typography>
        <Typography variant="caption" color="textSecondary">
          {dayjs(message.datetime).format('LLLL')}
          {/*{new Date(message.datetime).toLocaleString()}*/}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MessageItem;