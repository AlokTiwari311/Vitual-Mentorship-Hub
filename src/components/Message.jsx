// src/components/Message.js
import React from 'react';

const Message = ({ text, sender }) => {
    return (
        <div className={`flex ${sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}>
            <div
                className={`p-4 max-w-xs rounded-lg ${sender === 'user' ? 'bg-[#2BB17A] text-white' : 'bg-gray-200 text-black'}`}
            >
                {text}
            </div>
        </div>
    );
};

export default Message;
