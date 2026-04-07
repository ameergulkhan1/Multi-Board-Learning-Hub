import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const TrackingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const TrackingCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  text-align: center;
  border: 2px solid ${theme.colors.primary.main};
`;

const TrackingValue = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.sm};
`;

const TrackingLabel = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const ProgressBar = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const ProgressTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const QuizItem = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const QuizName = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.md};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const ProgressBase = styled.div`
  background-color: ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.circle};
  height: 10px;
  overflow: hidden;
`;

const ProgressFill = styled.div<{ percentage: number; color: string }>`
  height: 100%;
  width: ${props => props.percentage}%;
  background-color: ${props => props.color};
  border-radius: ${theme.borderRadius.circle};
  transition: width 0.3s ease;
`;

interface Progress {
  topic: string;
  percentage: number;
  color: string;
}

const QuizTracking: React.FC = () => {
  const [progressData] = useState<Progress[]>([
    { topic: 'Mitosis & Meiosis', percentage: 95, color: theme.colors.success.main },
    { topic: 'Photosynthesis', percentage: 72, color: theme.colors.primary.main },
    { topic: 'Cellular Respiration', percentage: 58, color: theme.colors.warning.main },
    { topic: 'Protein Synthesis', percentage: 82, color: theme.colors.success.main }
  ]);

  return (
    <Container>
      <Title>📊 Quiz Performance Tracking</Title>
      
      <TrackingGrid>
        <TrackingCard>
          <TrackingValue>24</TrackingValue>
          <TrackingLabel>Quizzes Completed</TrackingLabel>
        </TrackingCard>
        <TrackingCard>
          <TrackingValue>85%</TrackingValue>
          <TrackingLabel>Overall Score</TrackingLabel>
        </TrackingCard>
        <TrackingCard>
          <TrackingValue>6</TrackingValue>
          <TrackingLabel>Topics Mastered</TrackingLabel>
        </TrackingCard>
        <TrackingCard>
          <TrackingValue>3</TrackingValue>
          <TrackingLabel>Weak Topics</TrackingLabel>
        </TrackingCard>
      </TrackingGrid>
      
      <ProgressBar>
        <ProgressTitle>📈 Topic Mastery Levels</ProgressTitle>
        {progressData.map((item, idx) => (
          <QuizItem key={idx}>
            <QuizName>
              <span>{item.topic}</span>
              <span>{item.percentage}%</span>
            </QuizName>
            <ProgressBase>
              <ProgressFill percentage={item.percentage} color={item.color} />
            </ProgressBase>
          </QuizItem>
        ))}
      </ProgressBar>
      
      <div style={{ 
        backgroundColor: theme.colors.bg.secondary, 
        borderRadius: theme.borderRadius.lg,
        padding: theme.spacing.lg 
      }}>
        <h3 style={{ color: theme.colors.text.primary, marginBottom: theme.spacing.lg }}>
          📚 Recent Quiz Attempts
        </h3>
        <div style={{ 
          display: 'grid', 
          gap: theme.spacing.md,
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'
        }}>
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} style={{
              backgroundColor: 'white',
              padding: theme.spacing.md,
              borderRadius: theme.borderRadius.md,
              borderLeft: `4px solid ${theme.colors.primary.main}`
            }}>
              <div style={{ fontWeight: 'bold', marginBottom: theme.spacing.sm }}>
                Quiz {item}
              </div>
              <div style={{ fontSize: theme.typography.fontSize.sm, color: theme.colors.text.secondary }}>
                Score: {80 + item * 2}%
              </div>
              <div style={{ fontSize: theme.typography.fontSize.xs, color: theme.colors.text.secondary }}>
                {2 - (item % 3)} days ago
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default QuizTracking;
