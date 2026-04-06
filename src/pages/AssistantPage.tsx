import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout.tsx';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig.ts';
import { useAuth } from '../hooks/useAuth.ts';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: string;
}

export const AssistantPage = () => {
  const { user } = useAuth();
  const sidebarItems = getRoleAwareSidebarItems('/assistant', user?.role);

  return <AIAssistantView sidebarItems={sidebarItems} userRole={user?.role} />;
};

const AIAssistantView: React.FC<{ sidebarItems: any[]; userRole?: string }> = ({ sidebarItems, userRole }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: userRole === 'teacher' 
        ? 'Hello! I\'m your AI Teaching Assistant. I can help you create lesson plans, generate assignments, and answer pedagogical questions.'
        : userRole === 'parent'
        ? 'Hello! I\'m your AI Learning Assistant. I can help you understand your child\'s curriculum and provide learning tips.'
        : 'Hello! I\'m your AI Learning Assistant. I\'m here to help you with any questions about your subjects, assignments, or learning goals.',
      sender: 'assistant',
      timestamp: '10:30 AM',
    },
    {
      id: 2,
      text: 'Can you help me understand photosynthesis?',
      sender: 'user',
      timestamp: '10:31 AM',
    },
    {
      id: 3,
      text: 'Absolutely! Photosynthesis is the process by which plants use sunlight to synthesize foods. It involves taking CO2 from the atmosphere and water from the soil, then using light energy to convert them into glucose and oxygen.',
      sender: 'assistant',
      timestamp: '10:32 AM',
    },
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickQuestions = [
    { id: 1, text: '❓ What is the capital of France?', category: 'Geography' },
    { id: 2, text: '🔬 Explain Newton\'s Second Law', category: 'Physics' },
    { id: 3, text: '📚 Summarize Chapter 5', category: 'Literature' },
    { id: 4, text: '✏️ How to solve quadratic equations?', category: 'Mathematics' },
  ];

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: messages.length + 1,
        text: inputValue,
        sender: 'user',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate assistant response
      setTimeout(() => {
        const assistantMessage: Message = {
          id: messages.length + 2,
          text: 'That\'s a great question! Let me provide you with a comprehensive answer. Based on current learning standards and best practices...',
          sender: 'assistant',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
        setMessages(prev => [...prev, assistantMessage]);
      }, 500);
    }
  };

  const handleQuickQuestion = (question: string) => {
    const newMessage: Message = {
      id: messages.length + 1,
      text: question,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .assistant-page {
          padding: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .page-header {
          margin-bottom: 2rem;
        }

        .page-header h1 {
          font-size: 2.5rem;
          font-weight: 900;
          color: #1f2937;
          margin: 0 0 0.5rem 0;
        }

        .page-header p {
          font-size: 1.1rem;
          color: #6b7280;
          margin: 0;
        }

        .assistant-container {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 1.5rem;
          flex: 1;
          max-height: 70vh;
        }

        .chat-section {
          background: white;
          border-radius: 1.25rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .messages-container {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .message {
          display: flex;
          gap: 0.75rem;
          animation: slideIn 300ms ease;
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .message.user {
          justify-content: flex-end;
        }

        .message-icon {
          font-size: 1.5rem;
          flex-shrink: 0;
        }

        .message-content {
          max-width: 70%;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          word-wrap: break-word;
        }

        .message.assistant .message-content {
          background: #f3f4f6;
          color: #1f2937;
          border-radius: 1rem 1rem 1rem 0.25rem;
        }

        .message.user .message-content {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border-radius: 1rem 1rem 0.25rem 1rem;
        }

        .message-time {
          font-size: 0.75rem;
          color: #9ca3af;
          padding: 0.25rem 0.75rem;
        }

        .input-section {
          padding: 1.5rem;
          border-top: 2px solid #f3f4f6;
          display: flex;
          gap: 0.75rem;
        }

        .input-wrapper {
          flex: 1;
          display: flex;
          gap: 0.75rem;
        }

        .message-input {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.95rem;
          transition: all 200ms ease;
          font-family: inherit;
        }

        .message-input:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .send-btn {
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .send-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
        }

        .send-btn:active {
          transform: scale(0.95);
        }

        .suggestions-panel {
          background: white;
          border-radius: 1.25rem;
          padding: 1.5rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .suggestions-title {
          font-size: 1rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .quick-question {
          padding: 1rem;
          background: linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%);
          border: 2px solid transparent;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: all 200ms ease;
          font-size: 0.85rem;
          font-weight: 600;
          color: #1f2937;
          text-align: left;
          line-height: 1.4;
        }

        .quick-question:hover {
          border-color: #4f46e5;
          background: white;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.15);
        }

        .quick-category {
          font-size: 0.7rem;
          color: #6b7280;
          text-transform: uppercase;
          font-weight: 700;
        }

        .quick-text {
          margin-top: 0.25rem;
        }

        @media (max-width: 768px) {
          .assistant-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .assistant-container {
            grid-template-columns: 1fr;
            max-height: none;
            gap: 1rem;
          }

          .message-content {
            max-width: 85%;
          }

          .message.assistant,
          .message.user {
            max-width: 100%;
          }

          .suggestions-panel {
            display: none;
          }
        }

        /* Scrollbar styling */
        .messages-container::-webkit-scrollbar {
          width: 6px;
        }

        .messages-container::-webkit-scrollbar-track {
          background: transparent;
        }

        .messages-container::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }

        .messages-container::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>

      <div className="assistant-page">
        {/* Header */}
        <div className="page-header">
          <h1>🤖 AI Learning Assistant</h1>
          <p>Ask me anything about your studies. I'm here to help 24/7</p>
        </div>

        {/* Main Content */}
        <div className="assistant-container">
          {/* Chat Section */}
          <div className="chat-section">
            {/* Messages */}
            <div className="messages-container">
              {messages.map((message) => (
                <div key={message.id} className={`message ${message.sender}`}>
                  <span className="message-icon">
                    {message.sender === 'user' ? '👤' : '🤖'}
                  </span>
                  <div>
                    <div className="message-content">{message.text}</div>
                    <div className="message-time">{message.timestamp}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Section */}
            <div className="input-section">
              <div className="input-wrapper">
                <input
                  type="text"
                  className="message-input"
                  placeholder="Ask me anything..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSendMessage();
                    }
                  }}
                />
                <button className="send-btn" onClick={handleSendMessage}>
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Suggestions Panel */}
          <div className="suggestions-panel">
            <h3 className="suggestions-title">Quick Questions</h3>
            {quickQuestions.map((question) => (
              <button
                key={question.id}
                className="quick-question"
                onClick={() => handleQuickQuestion(question.text)}
              >
                <div className="quick-category">{question.category}</div>
                <div className="quick-text">{question.text}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
