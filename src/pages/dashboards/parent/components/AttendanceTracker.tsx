import React from 'react';

interface AttendanceRecord {
  month: string;
  presentDays: number;
  totalDays: number;
  percentage: number;
}

interface Props {
  childName: string;
  attendanceRecords: AttendanceRecord[];
}

export const AttendanceTracker: React.FC<Props> = ({ childName, attendanceRecords }) => {
  const currentAttendance = attendanceRecords[attendanceRecords.length - 1];
  const getAttendanceColor = (percentage: number) => {
    if (percentage >= 90) return 'color-excellent';
    if (percentage >= 75) return 'color-good';
    if (percentage >= 60) return 'color-average';
    return 'color-critical';
  };

  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📅 Attendance - {childName}</h2>
      <div className="attendance-summary">
        <div className={`attendance-card ${getAttendanceColor(currentAttendance.percentage)}`}>
          <h3>Current Attendance</h3>
          <div className="attendance-percentage">{currentAttendance.percentage}%</div>
          <p className="attendance-details">
            {currentAttendance.presentDays} of {currentAttendance.totalDays} days present
          </p>
        </div>
      </div>
      <div className="attendance-history">
        <h3>Monthly History</h3>
        <table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Present</th>
              <th>Total</th>
              <th>Percentage</th>
            </tr>
          </thead>
          <tbody>
            {attendanceRecords.map((record, index) => (
              <tr key={index}>
                <td>{record.month}</td>
                <td>{record.presentDays}</td>
                <td>{record.totalDays}</td>
                <td>
                  <span className={`percent-badge ${getAttendanceColor(record.percentage)}`}>
                    {record.percentage}%
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
