import React from 'react';

interface Assignment {
  id: string;
  title: string;
  subject: string;
  dueDate: string;
  status: 'completed' | 'pending' | 'overdue';
  submittedDate?: string;
}

interface Props {
  childName: string;
  assignments: Assignment[];
}

export const AssignmentStatus: React.FC<Props> = ({ childName, assignments }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return '✅';
      case 'pending':
        return '⏳';
      case 'overdue':
        return '⚠️';
      default:
        return '—';
    }
  };

  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📝 Assignments - {childName}</h2>
      <div className="assignments-list">
        {assignments.map((assignment) => (
          <div key={assignment.id} className={`assignment-item status-${assignment.status}`}>
            <div className="assignment-info">
              <div className="assignment-header">
                <span className="status-icon">{getStatusIcon(assignment.status)}</span>
                <h4>{assignment.title}</h4>
              </div>
              <p className="subject">{assignment.subject}</p>
            </div>
            <div className="assignment-dates">
              <span>Due: {assignment.dueDate}</span>
              {assignment.submittedDate && <span>Submitted: {assignment.submittedDate}</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
