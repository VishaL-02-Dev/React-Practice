import { useRef, useEffect } from 'react'
import { ChatMessage } from '../components/ChatMessage'

export function ChatMessages({ chatMessages }) {
    const chatMessagesRef = useRef(null)

    useEffect(() => {
        const containerElem = chatMessagesRef.current;
        if (containerElem) {
            containerElem.scrollTop = containerElem.scrollHeight;
        }
        console.log('updated');
    }, [chatMessages])

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