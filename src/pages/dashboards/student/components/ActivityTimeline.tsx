import React from 'react';

interface LearningActivity {
  id: string;
  type: 'quiz' | 'chapter' | 'assignment' | 'exam';
  title: string;
  subject: string;
  status: 'completed' | 'in-progress' | 'pending';
  date: string;
  score?: number;
}

interface ActivityTimelineProps {
  activities: LearningActivity[];
}

export const ActivityTimeline: React.FC<ActivityTimelineProps> = ({ activities }) => {
  return (
    <div>
      <div className="section-header">📅 Activity Timeline</div>
      <div className="timeline-container">
        {activities.map((activity) => (
          <div key={activity.id} className="timeline-item">
            <div className="timeline-header">
              <div className="timeline-title">
                <span className="timeline-type-badge">{activity.type}</span>
                {activity.title}
              </div>
              <div className={`status-badge status-${activity.status}`}>
                {activity.status}
              </div>
            </div>
            <p className="timeline-subject">📌 {activity.subject}</p>
            <div className="timeline-meta">
              <span>⏰ {activity.date}</span>
              {activity.score && <div className="timeline-score">Score: {activity.score}%</div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
