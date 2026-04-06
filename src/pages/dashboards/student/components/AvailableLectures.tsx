import React from 'react';

interface Lecture {
  id: string;
  title: string;
  subject: string;
  duration: string;
  uploadDate: string;
  status: 'new' | 'in-progress' | 'completed';
}

interface Props {
  lectures: Lecture[];
}

export const AvailableLectures: React.FC<Props> = ({ lectures }) => {
  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📚 Available Lectures</h2>
      <div className="lectures-list">
        {lectures.map((lecture) => (
          <div key={lecture.id} className="lecture-item">
            <div className="lecture-header">
              <h3>{lecture.title}</h3>
              <span className={`status-badge status-${lecture.status}`}>
                {lecture.status.charAt(0).toUpperCase() + lecture.status.slice(1)}
              </span>
            </div>
            <p className="lecture-subject">{lecture.subject}</p>
            <div className="lecture-meta">
              <span>⏱️ {lecture.duration}</span>
              <span>📅 {lecture.uploadDate}</span>
            </div>
            <button className="btn btn-primary">Watch Lecture</button>
          </div>
        ))}
      </div>
    </div>
  );
};
