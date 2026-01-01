
import React, { useState } from 'react';
import Icon from './Icon';
import { getInsuranceAdvice } from '../services/geminiService';

const AIAdvisor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: 'Hello! I am your InsurePro assistant. How can I help you protect your future today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const advice = await getInsuranceAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: advice }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col overflow-hidden border border-slate-200 animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-blue-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Icon name="Bot" />
              <span className="font-semibold">InsurePro AI Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <Icon name="ChevronRight" className="rotate-90" />
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4 space-y-4 bg-slate-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none' 
                  : 'bg-white text-slate-800 shadow-sm rounded-tl-none border border-slate-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm rounded-tl-none border border-slate-200 animate-pulse text-xs text-slate-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>
          <div className="p-3 border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about insurance..."
              className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button 
              onClick={handleSend}
              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Icon name="Send" size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all hover:scale-110 active:scale-95 flex items-center gap-2 group"
        >
          <Icon name="MessageSquare" />
          <span className="hidden group-hover:block font-medium pr-2">Ask Assistant</span>
        </button>
      )}
    </div>
  );
};

export default AIAdvisor;
