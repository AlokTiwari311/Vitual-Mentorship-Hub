import React, { useState } from 'react';
import Message from './Message';

const Chat = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState(''); // Controlled component state for the input

    // Send message function handles both the user and a mentor
    const sendMessage = () => {
        if (newMessage.trim()) {
            setMessages([...messages, { text: newMessage, sender: 'user' }]);
            setNewMessage(''); // Clear the input field after sending
            // Logic to send the message to the mentor could be added here
        }
    };

    return (
        <div className="flex flex-col h-screen bg-gray-50">
            <div className="flex-1 p-4 space-y-2 overflow-y-auto">
                {/* Render messages with different styling based on the sender */}
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`flex ${message.sender === 'mentor' ? 'justify-start' : 'justify-end'}`}
                    >
                        <Message text={message.text} sender={message.sender} />
                    </div>
                ))}
            </div>
            <div className="p-4 bg-white border-t border-gray-200">
                <div className="flex items-center rounded-lg bg-gray-100">
                    <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        placeholder="Type a message..."
                        className="flex-1 p-2 text-gray-800 bg-transparent rounded-l-lg focus:outline-none"
                        onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                sendMessage();
                            }
                        }}
                    />
                    <button
                        onClick={sendMessage}
                        className="px-4 py-2 text-white bg-[#2BB17A] rounded-r-lg hover:bg-[#23674b] focus:outline-none focus:bg-[#4fffb6]"
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Chat;