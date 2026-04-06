import React from 'react';

interface ActivityRecord {
  id: string;
  type: 'user-created' | 'content-approved' | 'content-rejected' | 'course-added' | 'moderate';
  action: string;
  user: string;
  timestamp: string;
}

interface RecentActivityProps {
  activities: ActivityRecord[];
}

const getActivityIcon = (type: string): string => {
  switch (type) {
    case 'user-created':
      return '👤';
    case 'content-approved':
      return '✅';
    case 'content-rejected':
      return '❌';
    case 'course-added':
      return '📚';
    case 'moderate':
      return '🛡️';
    default:
      return '📝';
  }
};

export const RecentActivity: React.FC<RecentActivityProps> = ({ activities }) => {
  return (
    <div className="activity-container">
      <div className="section-header">📝 Recent Activity</div>
      <div className="activity-timeline">
        {activities.map((activity, index) => (
          <div key={activity.id} className="activity-item">
            <div className="activity-dot"></div>
            {index < activities.length - 1 && <div className="activity-line"></div>}
            <div className="activity-content">
              <div className="activity-icon">{getActivityIcon(activity.type)}</div>
              <div className="activity-details">
                <div className="activity-action">{activity.action}</div>
                <div className="activity-meta">
                  <span className="activity-user">{activity.user}</span>
                  <span className="activity-time">{activity.timestamp}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
