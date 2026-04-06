import React from 'react';

interface StudentStatsProps {
  overallScore: number;
  currentStreak: number;
  completedTopics: number;
}

export const StudentStats: React.FC<StudentStatsProps> = ({
  overallScore,
  currentStreak,
  completedTopics,
}) => {
  return (
    <div className="stats-grid">
      {/* Progress Card */}
      <div className="stat-card">
        <div className="stat-content">
          <div className="stat-icon">📊</div>
          <div className="stat-label">Overall Score</div>
          <p className="stat-value">{overallScore}%</p>
          <div style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '600' }}>
            ↑ +5% from last week
          </div>
        </div>
      </div>

      {/* Streak Card */}
      <div className="stat-card stat-streak">
        <div className="stat-content">
          <div className="stat-icon">🔥</div>
          <div className="stat-label">Learning Streak</div>
          <p className="stat-value">{currentStreak} Days</p>
          <div style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: '600' }}>
            Keep it going! 💪
          </div>
        </div>
      </div>

      {/* Completed Topics Card */}
      <div className="stat-card stat-completed">
        <div className="stat-content">
          <div className="stat-icon">✅</div>
          <div className="stat-label">Completed Topics</div>
          <p className="stat-value">{completedTopics}</p>
          <div style={{ fontSize: '0.85rem', opacity: 0.9, fontWeight: '600' }}>
            5 more to reach goal
          </div>
        </div>
      </div>
    </div>
  );
};
