import React from 'react';

interface Assignment {
  id: string;
  studentName: string;
  assignmentTitle: string;
  subject: string;
  submittedDate: string;
  status: 'submitted' | 'pending' | 'graded';
  score?: number;
  maxScore: number;
}

interface Props {
  assignments: Assignment[];
  onGrade?: (assignmentId: string) => void;
}

export const StudentAssignments: React.FC<Props> = ({ assignments, onGrade }) => {
  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📋 Student Assignments</h2>
      <div className="assignments-table">
        <table>
          <thead>
            <tr>
              <th>Student</th>
              <th>Assignment</th>
              <th>Subject</th>
              <th>Submitted</th>
              <th>Status</th>
              <th>Score</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.id}>
                <td>{assignment.studentName}</td>
                <td>{assignment.assignmentTitle}</td>
                <td>{assignment.subject}</td>
                <td>{assignment.submittedDate}</td>
                <td>
                  <span className={`status-badge status-${assignment.status}`}>
                    {assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
                  </span>
                </td>
                <td>{assignment.score ? `${assignment.score}/${assignment.maxScore}` : '-'}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => onGrade?.(assignment.id)}
                  >
                    {assignment.status === 'graded' ? 'View' : 'Grade'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
