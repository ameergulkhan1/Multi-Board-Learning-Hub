import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout.tsx';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig.ts';
import { useAuth } from '../hooks/useAuth.ts';

interface Conversation {
  id: number;
  name: string;
  role: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  unread: boolean;
  status: string;
}

export const TeacherParentPage = () => {
  const { user } = useAuth();
  const sidebarItems = getRoleAwareSidebarItems('/teacher-parent', user?.role);

  return <TeacherParentView sidebarItems={sidebarItems} userRole={user?.role} />;
};

const TeacherParentView: React.FC<{ sidebarItems: any[]; userRole?: string }> = ({ sidebarItems, userRole }) => {
  const [activeConversation, setActiveConversation] = useState<number | null>(1);
  const [filterStatus, setFilterStatus] = useState<string>('all');

  const getPageTitle = () => {
    return userRole === 'teacher' ? '👨‍🏫 Parent Communication' : '👨‍🏫 Teacher Communication';
  };

  const getPageSubtitle = () => {
    return userRole === 'teacher' 
      ? 'Connect with parents and share student progress updates'
      : 'Communicate with teachers about your child\'s progress';
  };

  const conversations: Conversation[] = [
    {
      id: 1,
      name: 'Mrs. Sarah Johnson',
      role: 'Parent - Grade 10',
      avatar: '👩',
      lastMessage: 'Thank you for the update on Alex\'s progress.',
      timestamp: '2 mins ago',
      unread: true,
      status: 'active',
    },
    {
      id: 2,
      name: 'Dr. Michael Chen',
      role: 'Teacher - Mathematics',
      avatar: '👨‍🏫',
      lastMessage: 'The assignment deadline has been extended.',
      timestamp: '15 mins ago',
      unread: true,
      status: 'active',
    },
    {
      id: 3,
      name: 'Mr. James Wilson',
      role: 'Parent - Grade 9',
      avatar: '👨',
      lastMessage: 'Can we schedule a meeting this week?',
      timestamp: '1 hour ago',
      unread: false,
      status: 'active',
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      role: 'Teacher - English',
      avatar: '👩‍🏫',
      lastMessage: 'Summer semester registration is open.',
      timestamp: '3 hours ago',
      unread: false,
      status: 'archived',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Parent - Grade 11',
      avatar: '👩',
      lastMessage: 'Looking forward to the parent-teacher conference.',
      timestamp: '5 hours ago',
      unread: false,
      status: 'active',
    },
    {
      id: 6,
      name: 'Prof. David Kumar',
      role: 'Coordinator - Science',
      avatar: '👨‍🔬',
      lastMessage: 'Lab safety guidelines have been updated.',
      timestamp: '1 day ago',
      unread: false,
      status: 'active',
    },
  ];

  const filteredConversations = filterStatus === 'all' 
    ? conversations 
    : conversations.filter(c => c.status === filterStatus);

  const unreadCount = conversations.filter(c => c.unread).length;
  const activeCount = conversations.filter(c => c.status === 'active').length;

  const activeChat = conversations.find(c => c.id === activeConversation);

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .communication-page {
          padding: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          min-height: 100vh;
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

        .comm-container {
          display: grid;
          grid-template-columns: 350px 1fr;
          gap: 1.5rem;
          height: 65vh;
        }

        .conversations-panel {
          background: white;
          border-radius: 1.25rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .conversations-header {
          padding: 1.5rem;
          border-bottom: 2px solid #f3f4f6;
        }

        .conversations-header h3 {
          font-size: 1.1rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 1rem 0;
        }

        .filter-tabs {
          display: flex;
          gap: 0.5rem;
        }

        .filter-btn {
          flex: 1;
          padding: 0.5rem;
          background: #f3f4f6;
          border: none;
          border-radius: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
          color: #6b7280;
        }

        .filter-btn.active {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
        }

        .conversations-list {
          flex: 1;
          overflow-y: auto;
          padding: 0.75rem;
        }

        .conversation-item {
          padding: 1rem;
          border-radius: 0.75rem;
          margin-bottom: 0.5rem;
          cursor: pointer;
          transition: all 200ms ease;
          border: 2px solid transparent;
        }

        .conversation-item:hover {
          background: #f9fafb;
          border-color: #e5e7eb;
        }

        .conversation-item.active {
          background: linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%);
          border-color: #4f46e5;
        }

        .conversation-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          margin-bottom: 0.5rem;
        }

        .conversation-name {
          font-weight: 700;
          color: #1f2937;
          margin: 0;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .unread-badge {
          display: inline-block;
          width: 8px;
          height: 8px;
          background: #ff6b6b;
          border-radius: 50%;
        }

        .conversation-time {
          font-size: 0.75rem;
          color: #9ca3af;
        }

        .conversation-role {
          font-size: 0.75rem;
          color: #6b7280;
          margin-bottom: 0.5rem;
        }

        .conversation-preview {
          font-size: 0.85rem;
          color: #9ca3af;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .chat-panel {
          background: white;
          border-radius: 1.25rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .chat-header {
          padding: 1.5rem;
          border-bottom: 2px solid #f3f4f6;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chat-user-info {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .user-info-text h3 {
          font-size: 1rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0;
        }

        .user-info-text p {
          font-size: 0.8rem;
          color: #6b7280;
          margin: 0.25rem 0 0 0;
        }

        .chat-actions {
          display: flex;
          gap: 0.5rem;
        }

        .action-icon-btn {
          width: 40px;
          height: 40px;
          border: none;
          background: #f3f4f6;
          border-radius: 0.75rem;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 200ms ease;
        }

        .action-icon-btn:hover {
          background: #e5e7eb;
        }

        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          background: #f9fafb;
        }

        .message-bubble {
          display: flex;
          gap: 0.5rem;
          align-items: flex-end;
        }

        .message-bubble.own {
          justify-content: flex-end;
        }

        .bubble {
          max-width: 60%;
          padding: 0.75rem 1rem;
          border-radius: 1rem;
          font-size: 0.9rem;
          line-height: 1.4;
        }

        .message-bubble.own .bubble {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
        }

        .message-bubble:not(.own) .bubble {
          background: white;
          color: #1f2937;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .chat-input {
          padding: 1.5rem;
          border-top: 2px solid #f3f4f6;
          display: flex;
          gap: 0.75rem;
        }

        .input-field {
          flex: 1;
          padding: 0.75rem 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 0.75rem;
          font-size: 0.9rem;
          font-family: inherit;
          transition: all 200ms ease;
        }

        .input-field:focus {
          outline: none;
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.1);
        }

        .send-message-btn {
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .send-message-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(79, 70, 229, 0.3);
        }

        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: #6b7280;
        }

        .empty-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .communication-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .comm-container {
            grid-template-columns: 1fr;
            height: auto;
            max-height: none;
          }

          .conversations-panel {
            max-height: 300px;
          }

          .chat-panel {
            max-height: 400px;
          }
        }

        /* Scrollbar styling */
        .conversations-list::-webkit-scrollbar,
        .chat-messages::-webkit-scrollbar {
          width: 6px;
        }

        .conversations-list::-webkit-scrollbar-thumb,
        .chat-messages::-webkit-scrollbar-thumb {
          background: #d1d5db;
          border-radius: 3px;
        }

        .conversations-list::-webkit-scrollbar-thumb:hover,
        .chat-messages::-webkit-scrollbar-thumb:hover {
          background: #9ca3af;
        }
      `}</style>

      <div className="communication-page">
        {/* Header */}
        <div className="page-header">
          <h1>{getPageTitle()}</h1>
          <p>{getPageSubtitle()}</p>
        </div>

        {/* Main Container */}
        <div className="comm-container">
          {/* Conversations Panel */}
          <div className="conversations-panel">
            <div className="conversations-header">
              <h3>
                Messages {unreadCount > 0 && <span style={{ color: '#ff6b6b' }}>({unreadCount})</span>}
              </h3>
              <div className="filter-tabs">
                <button
                  className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('all')}
                >
                  All
                </button>
                <button
                  className={`filter-btn ${filterStatus === 'active' ? 'active' : ''}`}
                  onClick={() => setFilterStatus('active')}
                >
                  Active ({activeCount})
                </button>
              </div>
            </div>

            <div className="conversations-list">
              {filteredConversations.map((conv) => (
                <div
                  key={conv.id}
                  className={`conversation-item ${activeConversation === conv.id ? 'active' : ''}`}
                  onClick={() => setActiveConversation(conv.id)}
                >
                  <div className="conversation-header">
                    <h4 className="conversation-name">
                      {conv.unread && <span className="unread-badge"></span>}
                      {conv.avatar} {conv.name}
                    </h4>
                    <span className="conversation-time">{conv.timestamp}</span>
                  </div>
                  <div className="conversation-role">{conv.role}</div>
                  <div className="conversation-preview">{conv.lastMessage}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Panel */}
          {activeChat ? (
            <div className="chat-panel">
              <div className="chat-header">
                <div className="chat-user-info">
                  <span style={{ fontSize: '2rem' }}>{activeChat.avatar}</span>
                  <div className="user-info-text">
                    <h3>{activeChat.name}</h3>
                    <p>{activeChat.role}</p>
                  </div>
                </div>
                <div className="chat-actions">
                  <button className="action-icon-btn">📞</button>
                  <button className="action-icon-btn">📹</button>
                  <button className="action-icon-btn">ℹ️</button>
                </div>
              </div>

              <div className="chat-messages">
                <div className="message-bubble">
                  <div className="bubble">Hi, how is {activeChat.name.split(' ')[0].toLowerCase()} doing in class?</div>
                </div>
                <div className="message-bubble own">
                  <div className="bubble">Great! The student has been very engaged recently.</div>
                </div>
                <div className="message-bubble">
                  <div className="bubble">That's wonderful to hear! Keep up the good work. 👏</div>
                </div>
              </div>

              <div className="chat-input">
                <input 
                  type="text" 
                  className="input-field" 
                  placeholder="Type your message..."
                />
                <button className="send-message-btn">Send</button>
              </div>
            </div>
          ) : (
            <div className="chat-panel">
              <div className="empty-state">
                <div className="empty-icon">💬</div>
                <p>Select a conversation to start messaging</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
