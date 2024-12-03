import React, { useState } from 'react';
import ChatBox from './components/ChatBox';
import ChatInput from './components/ChatInput';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);

  const sendMessage = (text) => {
    setMessages([...messages, { text, sender: 'You', time: new Date().toLocaleTimeString() }]);
  };

  return (
    <div className="app-container">
      <h1 className="app-header">React Chat UI</h1>
      <ChatBox messages={messages} />
      <ChatInput onSendMessage={sendMessage} />
    </div>
  );
};

export default App;
