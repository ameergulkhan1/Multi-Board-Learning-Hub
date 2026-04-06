import React from 'react';

interface PerformanceData {
  subject: string;
  score: number;
  maxScore: number;
  grade: string;
  trend: 'up' | 'down' | 'stable';
}

interface Props {
  childName: string;
  class: string;
  performance: PerformanceData[];
}

export const ChildPerformance: React.FC<Props> = ({ childName, class: className, performance }) => {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return '📈';
      case 'down':
        return '📉';
      case 'stable':
        return '➡️';
      default:
        return '—';
    }
  };

  const getGradeColor = (grade: string) => {
    if (grade >= 'A') return 'grade-excellent';
    if (grade >= 'B') return 'grade-good';
    if (grade >= 'C') return 'grade-average';
    return 'grade-needsimprovement';
  };

  return (
    <div className="card dashboard-card">
      <h2 className="card-title">📊 {childName}'s Performance - {className}</h2>
      <div className="performance-grid">
        {performance.map((subject, index) => (
          <div key={index} className="performance-item">
            <div className="performance-header">
              <h3>{subject.subject}</h3>
              <span className={`grade-badge ${getGradeColor(subject.grade)}`}>
                Grade: {subject.grade}
              </span>
            </div>
            <div className="performance-score">
              <div className="score-bar">
                <div className="score-fill" style={{ width: `${(subject.score / subject.maxScore) * 100}%` }}></div>
              </div>
              <span className="score-text">{subject.score}/{subject.maxScore}</span>
            </div>
            <div className="trend">{getTrendIcon(subject.trend)} {subject.trend.toUpperCase()}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
