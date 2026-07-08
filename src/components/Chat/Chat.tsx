import { useState } from 'react';
import { CHAT_PLACEHOLDER, CHAT_SEND } from '../../local';
import './Chat.css';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'other';
  time: string;
}

function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Привет! Как у тебя дела?',
      sender: 'other',
      time: '14:30',
    },
    {
      id: 2,
      text: 'Здравствуйте! Спасибо, что откликнулись. Я чувствую себя немного потерянно в последнее время.',
      sender: 'user',
      time: '14:31',
    },
    {
      id: 3,
      text: 'Понимаю. Хочешь поговорить о том, что тебя беспокоит? Я здесь, чтобы выслушать.',
      sender: 'other',
      time: '14:32',
    },
    {
      id: 4,
      text: 'Да, было бы здорово. Мне кажется, я не справляюсь с нагрузкой на работе и дома.',
      sender: 'user',
      time: '14:33',
    },
    {
      id: 5,
      text: 'Это нормально — чувствовать себя перегруженным. Ты уже сделал большой шаг, обратившись за помощью.',
      sender: 'other',
      time: '14:34',
    },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const message: Message = {
        id: messages.length + 1,
        text: newMessage.trim(),
        sender: 'user',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, message]);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`chat-message ${msg.sender === 'user' ? 'message-user' : 'message-other'}`}
          >
            <div className="message-bubble">
              <p className="message-text">{msg.text}</p>
              <span className="message-time">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>
      <form className="chat-input-form" onSubmit={handleSendMessage}>
        <input
          type="text"
          className="chat-input"
          placeholder={CHAT_PLACEHOLDER}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button type="submit" className="chat-send-btn">
          {CHAT_SEND}
        </button>
      </form>
    </div>
  );
}

export default Chat;
