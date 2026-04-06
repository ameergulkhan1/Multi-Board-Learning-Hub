import React from 'react';

interface ChildData {
  id: string;
  name: string;
  class: string;
  overallScore: number;
  attendance: number;
  nextExam: string;
  subjects: string[];
}

interface ChildProgressCardProps {
  children: ChildData[];
}

export const ChildProgressCard: React.FC<ChildProgressCardProps> = ({ children }) => {
  return (
    <div>
      <div className="section-header">👶 Your Children</div>
      <div className="children-grid">
        {children.map((child) => (
          <div key={child.id} className="child-card">
            <div className="child-header">
              <div className="child-avatar">👤</div>
              <div className="child-info">
                <h3>{child.name}</h3>
                <p>{child.class}</p>
              </div>
            </div>

            <div className="progress-section">
              <div className="progress-label">Overall Score</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${child.overallScore}%` }}></div>
              </div>
              <div className="progress-value">{child.overallScore}%</div>
            </div>

            <div className="progress-section">
              <div className="progress-label">Attendance</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${child.attendance}%` }}></div>
              </div>
              <div className="progress-value">{child.attendance}%</div>
            </div>

            <div>
              <p style={{ fontSize: '0.9rem', color: '#6b7280', margin: '0.75rem 0' }}>
                📚 Subjects:
              </p>
              <div className="subjects-list">
                {child.subjects.map((subject) => (
                  <span key={subject} className="subject-tag">{subject}</span>
                ))}
              </div>
            </div>

            <div className="exam-info">
              <strong>📅 Next Exam:</strong> {child.nextExam}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
