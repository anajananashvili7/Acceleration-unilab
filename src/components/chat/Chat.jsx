import React, { useState } from 'react';


const Chat = ({ onClose, pet }) => {
    const [messages, setMessages] = useState([]);
    const [userMessage, setUserMessage] = useState('');

    const handleButtonClick = (message) => {
        setMessages((prevMessages) => [...prevMessages, { text: message, type: 'sent' }]);
        setTimeout(() => {
            const response = getResponse(message);
            setMessages((prevMessages) => [...prevMessages, { text: response, type: 'received' }]);
        }, 1000);
    };

    const getResponse = (message) => {
        switch (message) {
            case "🤔 What is WappGPT?":
                return "WappGPT is a chatbot service that helps you with your queries.";
            case "💰 Pricing":
                return "Our pricing starts at $10 per month.";
            case "🙋‍♂️ FAQs":
                return "You can find FAQs on our website.";
            default:
                return "I'm here to assist you!";
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();
        if (userMessage.trim()) {
            setMessages((prevMessages) => [...prevMessages, { text: userMessage, type: 'sent' }]);
            setUserMessage('');
        }
    };

    const handleClearChat = () => {
        setMessages([]);
    };

    return (
        <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-4 z-50">
            <div className="relative w-full">
                <img 
                    src={pet.image} 
                    alt={pet.name} 
                    className="w-full h-56 object-cover" 
                />
                <button onClick={onClose} className="absolute top-2 left-2">
                    <img src="/arrow-white.png" alt="Back" className="w-3 h-3" /> {/* Adjust size as needed */}
                </button>
            </div>

            <div className="w-full max-w-md flex flex-col flex-grow mt-4">
                {/* Button Row */}
                <div className="flex justify-between mb-2">
                    <button onClick={() => handleButtonClick("🤔 What is WappGPT?")} className="bg-[#F3F5F6] text-[#444444] px-2 py-1 rounded-md">
                        🤔 What is WappGPT?
                    </button>
                    <button onClick={() => handleButtonClick("💰 Pricing")} className="bg-[#F3F5F6] text-[#444444] px-2 py-1 rounded-md">
                        💰 Pricing
                    </button>
                    <button onClick={() => handleButtonClick("🙋‍♂️ FAQs")} className="bg-[#F3F5F6] text-[#444444] px-2 py-1 rounded-md">
                        🙋‍♂️ FAQs
                    </button>
                    <button onClick={handleClearChat} className="bg-[#FF6B6B] text-[#444444] px-2 py-1 rounded-md text-sm">Clear</button>
                </div>

                {/* Chat Messages */}
                <div className="overflow-y-auto mb-4 border-t border-gray-300 p-2">
                    {messages.map((msg, index) => (
                        <div key={index} className={`mb-2 ${msg.type === 'sent' ? 'text-right' : 'text-left'}`}>
                            <div className={`inline-block p-2 rounded-lg ${msg.type === 'sent' ? 'bg-[#AEEEEE]' : 'bg-[#E0E0E0]'}`}>
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Textarea for user message */}
                <form onSubmit={handleSendMessage} className="flex mb-2">
                    <textarea 
                        placeholder="Type your message here..." 
                        className="border rounded-md p-2 h-20 resize-none bg-[#E8EBF0] outline-none w-full"
                        value={userMessage}
                        onChange={(e) => setUserMessage(e.target.value)}
                    />
                    <button type="submit" className="bg-[#003459] text-white rounded ml-2 px-4">Send</button>
                </form>
            </div>
        </div>
    );
};

export default Chat;
