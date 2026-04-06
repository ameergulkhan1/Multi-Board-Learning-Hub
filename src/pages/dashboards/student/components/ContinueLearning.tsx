import React from 'react';

interface ContinueLearningProps {
  lastChapter: string;
  onResume: () => void;
}

export const ContinueLearning: React.FC<ContinueLearningProps> = ({
  lastChapter,
  onResume,
}) => {
  return (
    <div className="continue-learning" onClick={onResume}>
      <h3>📚 Continue Learning</h3>
      <p>Last opened: {lastChapter}</p>
      <button className="continue-btn">
        Resume Learning <span>→</span>
      </button>
    </div>
  );
};
