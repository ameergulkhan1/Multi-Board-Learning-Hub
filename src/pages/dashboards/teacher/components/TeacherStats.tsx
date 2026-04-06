import React from 'react';
import '../styles/TeacherDashboard.css';

interface TeacherStatsProps {
  totalStudents: number;
  averageScore: number;
  pendingReviews: number;
  needsAttention: number;
}

export const TeacherStats: React.FC<TeacherStatsProps> = ({
  totalStudents,
  averageScore,
  pendingReviews,
  needsAttention,
}) => {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-icon">👥</div>
          <div className="stat-label">Total Students</div>
          <p className="stat-value">{totalStudents}</p>
          <div style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: '600' }}>
            Across 4 classes
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-icon">📊</div>
          <div className="stat-label">Average Score</div>
          <p className="stat-value">{averageScore}%</p>
          <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
            ↑ Classes performing well
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-icon">📝</div>
          <div className="stat-label">Pending Reviews</div>
          <p className="stat-value">{pendingReviews}</p>
          <div style={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: '600' }}>
            Assignments to review
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-icon">⚠️</div>
          <div className="stat-label">Need Attention</div>
          <p className="stat-value">{needsAttention}</p>
          <div style={{ fontSize: '0.85rem', color: '#f59e0b', fontWeight: '600' }}>
            Students below 75%
          </div>
        </div>
      </div>
    </div>
  );
};
