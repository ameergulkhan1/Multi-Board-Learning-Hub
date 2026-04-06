import React from 'react';

interface Assessment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  type: 'quiz' | 'test' | 'assignment';
  priority: 'high' | 'medium' | 'low';
  score?: number;
}

interface Props {
  assessments: Assessment[];
}

export const PendingAssessments: React.FC<Props> = ({ assessments }) => {
  return (
    <div className="card dashboard-card">
      <h2 className="card-title">✅ Pending Assessments</h2>
      <div className="assessments-grid">
        {assessments.map((assessment) => (
          <div key={assessment.id} className={`assessment-card priority-${assessment.priority}`}>
            <div className="assessment-type">{assessment.type.toUpperCase()}</div>
            <h3>{assessment.title}</h3>
            <p className="subject">{assessment.subject}</p>
            <div className="assessment-footer">
              <span className="due-date">Due: {assessment.dueDate}</span>
              {assessment.score && <span className="score">Score: {assessment.score}%</span>}
            </div>
            <button className="btn btn-primary btn-sm">Start Assessment</button>
          </div>
        ))}
      </div>
    </div>
  );
};
