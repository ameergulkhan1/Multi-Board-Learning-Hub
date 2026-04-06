import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout.tsx';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig.ts';
import { useAuth } from '../hooks/useAuth.ts';

interface Discussion {
  id: number;
  title: string;
  category: string;
  author: string;
  avatar: string;
  replies: number;
  views: number;
  lastActivity: string;
  icon: string;
}

export const CollaborationPage = () => {
  const { user } = useAuth();
  const sidebarItems = getRoleAwareSidebarItems('/collaboration', user?.role);

  return <CollaborationView sidebarItems={sidebarItems} userRole={user?.role} />;
};

const CollaborationView: React.FC<{ sidebarItems: any[]; userRole?: string }> = ({ sidebarItems, userRole }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getPageTitle = () => {
    switch (userRole) {
      case 'teacher':
        return '👥 Class Discussion & Forums';
      case 'parent':
        return '💬 Community & Support';
      default:
        return '👥 Community & Study Groups';
    }
  };

  const getPageSubtitle = () => {
    switch (userRole) {
      case 'teacher':
        return 'Facilitate classroom discussions and manage student communities';
      case 'parent':
        return 'Connect with other parents and access community resources';
      default:
        return 'Collaborate with peers, join study groups, and share ideas';
    }
  };

  const discussions: Discussion[] = [
    {
      id: 1,
      title: 'Best strategies for learning calculus',
      category: 'Mathematics',
      author: 'Alex Johnson',
      avatar: '👨‍🎓',
      replies: 24,
      views: 456,
      lastActivity: '2 hours ago',
      icon: '📐',
    },
    {
      id: 2,
      title: 'Tips for the upcoming physics exam',
      category: 'Physics',
      author: 'Sarah Chen',
      avatar: '👩‍🎓',
      replies: 18,
      views: 342,
      lastActivity: '5 hours ago',
      icon: '🔬',
    },
    {
      id: 3,
      title: 'Shakespeare\'s influence on modern literature',
      category: 'Literature',
      author: 'James Wilson',
      avatar: '👨‍💼',
      replies: 32,
      views: 521,
      lastActivity: '1 hour ago',
      icon: '📚',
    },
    {
      id: 4,
      title: 'Group project collaboration guidelines',
      category: 'General',
      author: 'Emma Davis',
      avatar: '👩‍💼',
      replies: 15,
      views: 298,
      lastActivity: '3 hours ago',
      icon: '👥',
    },
    {
      id: 5,
      title: 'Python programming tips and tricks',
      category: 'Computer Science',
      author: 'Michael Park',
      avatar: '👨‍💻',
      replies: 42,
      views: 678,
      lastActivity: '30 mins ago',
      icon: '💻',
    },
    {
      id: 6,
      title: 'Historical events and their impact',
      category: 'History',
      author: 'Lisa Anderson',
      avatar: '👩‍🏫',
      replies: 28,
      views: 412,
      lastActivity: '4 hours ago',
      icon: '🏛️',
    },
  ];

  const categories = ['All', 'Mathematics', 'Physics', 'Literature', 'Computer Science', 'History', 'General'];
  const filteredDiscussions = activeCategory === 'all' 
    ? discussions 
    : discussions.filter(d => d.category === activeCategory);

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <style>{`
        .collaboration-page {
          padding: 2rem;
          background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%);
          min-height: 100vh;
        }

        .page-header {
          margin-bottom: 2.5rem;
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

        .action-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .category-filter {
          display: flex;
          gap: 0.5rem;
          overflow-x: auto;
          padding-bottom: 0.5rem;
        }

        .category-btn {
          padding: 0.5rem 1rem;
          border: 2px solid #e5e7eb;
          background: white;
          border-radius: 0.75rem;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.9rem;
          white-space: nowrap;
          transition: all 200ms ease;
        }

        .category-btn:hover {
          border-color: #4f46e5;
        }

        .category-btn.active {
          background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
          color: white;
          border-color: #4f46e5;
        }

        .create-btn {
          padding: 0.75rem 1.5rem;
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
          border: none;
          border-radius: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 200ms ease;
        }

        .create-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
        }

        .discussions-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .discussion-card {
          background: white;
          border-radius: 1.25rem;
          padding: 1.75rem;
          box-shadow: 0 4px 15px rgba(79, 70, 229, 0.08);
          transition: all 300ms ease;
          border: 2px solid transparent;
          display: grid;
          grid-template-columns: 1fr auto;
          gap: 1.5rem;
          align-items: start;
        }

        .discussion-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(79, 70, 229, 0.15);
          border-color: #4f46e5;
        }

        .discussion-content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .discussion-header {
          display: flex;
          align-items: start;
          gap: 1rem;
        }

        .discussion-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .discussion-title-group {
          flex: 1;
        }

        .discussion-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #1f2937;
          margin: 0 0 0.35rem 0;
          cursor: pointer;
        }

        .discussion-title:hover {
          color: #4f46e5;
        }

        .discussion-meta {
          display: flex;
          gap: 1rem;
          font-size: 0.85rem;
          color: #6b7280;
          flex-wrap: wrap;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }

        .category-badge {
          display: inline-block;
          padding: 0.35rem 0.75rem;
          background: #f3f4f6;
          border-radius: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          color: #4f46e5;
          text-transform: uppercase;
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.9rem;
          color: #6b7280;
        }

        .author-avatar {
          font-size: 1.25rem;
        }

        .discussion-stats {
          display: grid;
          grid-template-columns: auto auto auto;
          gap: 2rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, #f0f4ff 0%, #f5f3ff 100%);
          border-radius: 0.75rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .stat-number {
          font-size: 1.5rem;
          font-weight: 900;
          color: #4f46e5;
        }

        .stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
          margin-top: 0.25rem;
        }

        .activity-time {
          text-align: right;
          padding: 0.75rem 1.25rem;
          background: linear-gradient(135deg, #dbeafe 0%, #f3f4f6 100%);
          border-radius: 0.75rem;
          font-size: 0.85rem;
          font-weight: 600;
          color: #0c4a6e;
          white-space: nowrap;
        }

        .no-results {
          text-align: center;
          padding: 3rem 2rem;
          color: #6b7280;
        }

        .no-results-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        @media (max-width: 768px) {
          .collaboration-page {
            padding: 1rem;
          }

          .page-header h1 {
            font-size: 1.75rem;
          }

          .action-bar {
            flex-direction: column;
            align-items: stretch;
          }

          .create-btn {
            width: 100%;
          }

          .discussion-card {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .discussion-stats {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 1rem;
            padding: 1rem;
          }

          .activity-time {
            width: 100%;
            text-align: center;
          }

          .discussion-meta {
            flex-direction: column;
            gap: 0.5rem;
          }
        }
      `}</style>

      <div className="collaboration-page">
        {/* Header */}
        <div className="page-header">
          <h1>{getPageTitle()}</h1>
          <p>{getPageSubtitle()}</p>
        </div>

        {/* Action Bar */}
        <div className="action-bar">
          <div className="category-filter">
            <button
              className={`category-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Discussions
            </button>
            {categories.slice(1).map((cat) => (
              <button
                key={cat}
                className={`category-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
          <button className="create-btn">+ Start Discussion</button>
        </div>

        {/* Discussions List */}
        <div className="discussions-list">
          {filteredDiscussions.length > 0 ? (
            filteredDiscussions.map((discussion) => (
              <div key={discussion.id} className="discussion-card">
                <div className="discussion-content">
                  <div className="discussion-header">
                    <span className="discussion-icon">{discussion.icon}</span>
                    <div className="discussion-title-group">
                      <h3 className="discussion-title">{discussion.title}</h3>
                      <div className="discussion-meta">
                        <div className="meta-item">
                          <span className="category-badge">{discussion.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="author-info">
                    <span className="author-avatar">{discussion.avatar}</span>
                    <span>Started by <strong>{discussion.author}</strong></span>
                  </div>

                  <div className="discussion-stats">
                    <div className="stat">
                      <div className="stat-number">{discussion.replies}</div>
                      <div className="stat-label">Replies</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">{discussion.views}</div>
                      <div className="stat-label">Views</div>
                    </div>
                    <div className="stat">
                      <div className="stat-number">👁️</div>
                      <div className="stat-label">Watching</div>
                    </div>
                  </div>
                </div>

                <div className="activity-time">
                  ⏱️ {discussion.lastActivity}
                </div>
              </div>
            ))
          ) : (
            <div className="no-results">
              <div className="no-results-icon">🔍</div>
              <p>No discussions found in this category</p>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};
