import React, { useState } from 'react';

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, `You: ${input}`]);
      setTimeout(() => setMessages(msgs => [...msgs, 'Provider: Thanks for reaching out!']), 1000);
      setInput('');
    }
  };
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-80 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-4 flex flex-col">
          <div className="flex justify-between items-center mb-2">
            <span className="font-bold text-blue-600 dark:text-blue-300">Chat with Provider</span>
            <button onClick={() => setOpen(false)} className="text-gray-500 hover:text-red-500">✕</button>
          </div>
          <div className="flex-1 overflow-y-auto mb-2" style={{ maxHeight: '180px' }}>
            {messages.length === 0 ? (
              <div className="text-gray-400 text-sm">Start the conversation...</div>
            ) : (
              messages.map((msg, i) => <div key={i} className="mb-1 text-sm">{msg}</div>)
            )}
          </div>
          <div className="flex gap-2">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 p-2 rounded border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
              placeholder="Type a message..."
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} className="bg-blue-500 text-white px-3 py-1 rounded font-bold hover:bg-blue-700">Send</button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-800 transition-all"
        >
          💬 Chat
        </button>
      )}
    </div>
  );
};

export default ChatWidget;
