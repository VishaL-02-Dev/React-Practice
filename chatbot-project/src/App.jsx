import { useState } from 'react'
import { ChatInput } from './components/ChatInput'
import { ChatMessage } from './components/ChatMessage'
import { ChatMessages } from './components/ChatMessages'
import './App.css'

function App() {

  // const [chatMessages, setChatMessage] = React.useState([{
  //   msg: "Hello ChatBot",
  //   sender: "user",
  //   id: 'id1'
  // }, {
  //   msg: "Hello! How can I help you?",
  //   sender: 'robot',
  //   id: 'id2'
  // }, {
  //   msg: "What is today's date?",
  //   sender: 'user',
  //   id: 'id3'
  // }, {
  //   msg: "Today is January 8",
  //   sender: 'robot',
  //   id: 'id4'
  // }])
  const [chatMessages, setChatMessage] = useState([]);
  // const [chatMessages, setChatMessage] = array; 
  // const chatMessages = array[0];
  // const setChatMessage = array[1]; 

  return (
    <div className="app-container">
      {chatMessages.length === 0 && (
        <p className='welcome-msg'>
          Welcome to the chatbot project! Send a message using the textbox below.
        </p>
      )}
      <ChatMessages
        chatMessages={chatMessages}
      />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessage={setChatMessage}
      />
    </div>
  );
}

export default App
