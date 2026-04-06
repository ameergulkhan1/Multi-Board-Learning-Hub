import React from 'react';

interface StudentProgress {
  id: string;
  name: string;
  class: string;
  score: number;
  attendance: number;
  status: 'excellent' | 'good' | 'needs-improvement';
}

interface StudentPerformanceTableProps {
  students: StudentProgress[];
}

export const StudentPerformanceTable: React.FC<StudentPerformanceTableProps> = ({ students }) => {
  return (
    <div className="table-container">
      <div className="section-header">📈 Student Performance</div>
      <table className="table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Class</th>
            <th>Score</th>
            <th>Attendance</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td className="student-name">{student.name}</td>
              <td>{student.class}</td>
              <td className="score-cell">{student.score}%</td>
              <td>
                <div className="attendance">
                  <span>✅</span>
                  <span>{student.attendance}%</span>
                </div>
              </td>
              <td>
                <span className={`status-badge status-${student.status}`}>
                  {student.status.replace('-', ' ')}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
