import { useState, useRef, useEffect } from 'react'
import { Chatbot } from 'supersimpledev'
import RobotProfile from './assets/robot.png'
import UserProfile from './assets/user.png'
import './App.css'

    function ChatInput({ chatMessages, setChatMessage }) {
      const [inputText, setInputText] = useState('');

      function saveInputText(event) {
        setInputText(event.target.value);
      }

      function sendMessage() {
        const newChatMessages = [
          ...chatMessages,
          {
            msg: inputText,
            sender: 'user',
            id: crypto.randomUUID()
          }
        ];

        setChatMessage(newChatMessages);

        // console.log(inputText);
        const response = Chatbot.getResponse(inputText);
        // console.log(response);
        setChatMessage([
          ...newChatMessages,
          {
            msg: response,
            sender: 'robot',
            id: crypto.randomUUID()
          }
        ]);

        setInputText('')
      }

      return (
        <div className="chat-input-container">
          <input
            placeholder="Send a message"
            size="30"
            onChange={saveInputText}
            value={inputText}
            className='chat-input'
          />
          <button
            onClick={sendMessage}
            className="send-button">
            Send</button>
        </div>
      );
    }

    function ChatMessage({ msg, sender }) {
      // const msg = props.msg;
      // const sender = props.sender;
      // const { msg, sender } = props;
      /*
      if (sender == 'robot') {
        return (
          <div>
            <img src="/robot.png" width="50" />
            {msg}
          </div>
        );
      }
      */

      return (
        <div className={sender === 'user' ? 'chat-msg-user' : 'chat-msg-robot'}>
          {sender === 'robot' && <img src={ RobotProfile } className='chat-msg-prof' />}
          <div className="msg-text">
            {msg}
          </div>
          {sender === 'user' && <img src={ UserProfile } className='chat-msg-prof' />}
        </div>
      );

    }

    function ChatMessages({ chatMessages }) {
      const chatMessagesRef= useRef(null)

      useEffect(()=>{
        const containerElem=chatMessagesRef.current;
        if(containerElem){
          containerElem.scrollTop=containerElem.scrollHeight;
        }
        console.log('updated');
      },[chatMessages])

      return (
        <div className="chat-msg-container" ref={chatMessagesRef}>
          {chatMessages.map((chatMessage) => {
            return (
              <ChatMessage
                msg={chatMessage.msg}
                sender={chatMessage.sender}
                key={chatMessage.id}
              />
            )
          })}
        </div>
      );

    }

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
      const [chatMessages,setChatMessage] = useState([]);
      // const [chatMessages, setChatMessage] = array; 
      // const chatMessages = array[0];
      // const setChatMessage = array[1]; 

      return (
        <div className="app-container">
          {chatMessages.length===0 && (
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
