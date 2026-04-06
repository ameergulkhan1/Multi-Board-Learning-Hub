import React from 'react';

interface Achievement {
  id: string;
  title: string;
  icon: string;
  description: string;
  date: string;
  category: 'milestone' | 'streak' | 'quiz' | 'chapter';
}

interface AchievementsProps {
  achievements: Achievement[];
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="section-header">🏆 Achievements & Badges</div>
      <div className="achievements-grid">
        {achievements.map((achievement) => (
          <div key={achievement.id} className="achievement-badge">
            <div className="achievement-icon">{achievement.icon}</div>
            <div className="achievement-title">{achievement.title}</div>
            <p className="achievement-description">{achievement.description}</p>
            <div className="achievement-date">{achievement.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
