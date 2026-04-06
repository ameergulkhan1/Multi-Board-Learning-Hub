import React from 'react';

interface Recommendation {
  id: string;
  icon: string;
  title: string;
  description: string;
  priority: 'high' | 'medium';
}

interface AIRecommendationsProps {
  recommendations: Recommendation[];
}

export const AIRecommendations: React.FC<AIRecommendationsProps> = ({ recommendations }) => {
  return (
    <div className="recommendations-section">
      <div className="section-header">🤖 AI Recommendations</div>
      {recommendations.map((rec) => (
        <div
          key={rec.id}
          className={`recommendation-card ${rec.priority}`}
          onClick={() => alert(`Navigate to: ${rec.title}`)}
        >
          <div className="recommendation-icon">{rec.icon}</div>
          <div className="recommendation-content">
            <div className="recommendation-title">{rec.title}</div>
            <p className="recommendation-description">{rec.description}</p>
          </div>
          <div className={`priority-badge priority-${rec.priority}`}>
            {rec.priority}
          </div>
        </div>
      ))}
    </div>
  );
};
