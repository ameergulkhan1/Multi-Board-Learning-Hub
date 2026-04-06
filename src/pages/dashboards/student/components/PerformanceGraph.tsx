import React from 'react';

interface WeeklyData {
  day: string;
  score: number;
}

interface PerformanceGraphProps {
  weeklyData: WeeklyData[];
}

export const PerformanceGraph: React.FC<PerformanceGraphProps> = ({ weeklyData }) => {
  const maxScore = 100;
  const getBarHeight = (score: number) => (score / maxScore) * 100;

  return (
    <div className="performance-section">
      <div className="section-header">📊 Weekly Performance</div>
      <p style={{ color: '#6b7280', margin: '0 0 1rem 0' }}>Your quiz scores throughout the week</p>
      <div className="performance-chart">
        {weeklyData.map((data) => (
          <div key={data.day} className="chart-bar">
            <div
              className="bar"
              style={{ height: `${getBarHeight(data.score)}%` }}
              title={`${data.day}: ${data.score}%`}
            >
              <div className="bar-value">{data.score}%</div>
            </div>
            <div className="bar-label">{data.day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
