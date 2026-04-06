import React from 'react';

interface ClassData {
  id: string;
  name: string;
  subject: string;
  students: number;
  averageScore: number;
  pendingAssignments: number;
}

interface ClassCardsProps {
  classes: ClassData[];
}

export const ClassCards: React.FC<ClassCardsProps> = ({ classes }) => {
  return (
    <div>
      <div className="section-header">📚 Your Classes</div>
      <div className="classes-grid">
        {classes.map((cls) => (
          <div key={cls.id} className="class-card">
            <h3 className="class-name">{cls.name}</h3>
            <p className="class-subject">{cls.subject}</p>

            <div className="class-stats">
              <div className="class-stat-item">
                <div className="class-stat-value">{cls.students}</div>
                <div className="class-stat-label">Students</div>
              </div>
              <div className="class-stat-item">
                <div className="class-stat-value">{cls.averageScore}%</div>
                <div className="class-stat-label">Avg Score</div>
              </div>
              <div className="class-stat-item">
                <div className="class-stat-value">{cls.pendingAssignments}</div>
                <div className="class-stat-label">Pending</div>
              </div>
            </div>

            {cls.pendingAssignments > 0 && (
              <span className="pending-badge">
                ⚠️ {cls.pendingAssignments} assignments
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
