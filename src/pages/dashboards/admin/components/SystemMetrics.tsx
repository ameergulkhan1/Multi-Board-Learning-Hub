import React from 'react';
import '../styles/AdminDashboard.css';

interface SystemMetrics {
  totalUsers: number;
  activeStudents: number;
  activeTeachers: number;
  totalCourses: number;
  systemHealth: number;
}

interface SystemMetricsProps {
  metrics: SystemMetrics;
}

export const SystemMetrics: React.FC<SystemMetricsProps> = ({ metrics }) => {
  return (
    <div className="metrics-grid">
      <div className="metric-card">
        <div className="metric-content">
          <div className="metric-icon">👥</div>
          <div className="metric-label">Total Users</div>
          <p className="metric-value">{metrics.totalUsers.toLocaleString()}</p>
          <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
            ↑ +125 this week
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-content">
          <div className="metric-icon">🎓</div>
          <div className="metric-label">Active Students</div>
          <p className="metric-value">{metrics.activeStudents.toLocaleString()}</p>
          <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
            59% of total users
          </div>
        </div>
      </div>

      <div className="metric-card">
        <div className="metric-content">
          <div className="metric-icon">👨‍🏫</div>
          <div className="metric-label">Active Teachers</div>
          <p className="metric-value">{metrics.activeTeachers.toLocaleString()}</p>
          <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
            450 instructors online
          </div>
        </div>
      </div>

      <div className="metric-card health-card">
        <div className="metric-content">
          <div className="metric-icon">🏥</div>
          <div className="metric-label">System Health</div>
          <p className="metric-value">{metrics.systemHealth}%</p>
          <div className="health-indicator">
            <div className="health-dot"></div>
            <span>All systems operational</span>
          </div>
        </div>
      </div>
    </div>
  );
};
