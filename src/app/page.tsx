'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto">
      <div className="flex-1 overflow-y-auto mb-4">
        {messages.map(m => (
          <div key={m.id} className={`mb-4 p-3 rounded-lg ${m.role === 'user' ? 'bg-blue-100 text-blue-900' : 'bg-gray-100 text-gray-900'}`}>
            <strong>{m.role === 'user' ? 'You: ' : 'AI: '}</strong>
            <span className="whitespace-pre-wrap">{m.content}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex">
        <input
          className="flex-1 text-black p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={input}
          placeholder="Type your message..."
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="bg-blue-500 text-black px-4 py-2 rounded-r-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Send
        </button>
      </form>
    </div>
  );
}