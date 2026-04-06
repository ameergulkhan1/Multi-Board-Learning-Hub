import React from 'react';

interface UserStat {
  category: string;
  count: number;
  percentage: number;
  color: string;
}

interface UserDistributionProps {
  userStats: UserStat[];
}

export const UserDistribution: React.FC<UserDistributionProps> = ({ userStats }) => {
  return (
    <div className="distribution-container">
      <div className="section-header">📊 User Distribution</div>
      {userStats.map((stat) => (
        <div key={stat.category} className="distribution-item">
          <div className="distribution-label">{stat.category}</div>
          <div className="distribution-bar-container">
            <div className="distribution-header">
              <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>
                {stat.count.toLocaleString()}
              </span>
              <span style={{ color: '#6b7280', fontSize: '0.8rem' }}>
                {stat.percentage}%
              </span>
            </div>
            <div className="distribution-bar">
              <div
                className="distribution-fill"
                style={{
                  width: `${stat.percentage}%`,
                  background: stat.color,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
