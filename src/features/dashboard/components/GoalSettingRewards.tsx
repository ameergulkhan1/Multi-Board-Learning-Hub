import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const GoalsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
`;

const GoalCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, white 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-top: 4px solid ${theme.colors.primary.main};
  box-shadow: ${theme.shadows.sm};
`;

const GoalTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const GoalProgress = styled.div`
  margin-bottom: ${theme.spacing.md};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: ${theme.colors.border.light};
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: ${theme.spacing.sm};
`;

const ProgressFill = styled.div<{ $percentage: number }>`
  height: 100%;
  width: ${(props) => props.$percentage}%;
  background: linear-gradient(90deg, ${theme.colors.success.main}, ${theme.colors.success.light});
  transition: width 0.3s ease;
`;

const ProgressText = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const RewardBadge = styled.div`
  display: inline-block;
  background-color: ${theme.colors.warning.main};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
`;

const MilestoneList = styled.ul`
  list-style: none;
  padding: 0;
  margin: ${theme.spacing.md} 0 0 0;
`;

const MilestoneItem = styled.li<{ $completed: boolean }>`
  padding: ${theme.spacing.sm} 0;
  color: ${(props) => props.$completed ? theme.colors.success.main : theme.colors.text.secondary};
  text-decoration: ${(props) => props.$completed ? 'line-through' : 'none'};
  font-size: ${theme.typography.fontSize.sm};
  
  &:before {
    content: ${(props) => props.$completed ? '"✓ "' : '"○ "'};
    margin-right: ${theme.spacing.xs};
  }
`;

interface Goal {
  id: string;
  title: string;
  target: string;
  current: number;
  total: number;
  reward: string;
  milestones: { text: string; completed: boolean }[];
}

const GoalSettingRewards: React.FC = () => {
  const [goals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Complete Chapter 1',
      target: '100%',
      current: 100,
      total: 100,
      reward: '50 XP',
      milestones: [
        { text: 'Read all sections', completed: true },
        { text: 'Take practice quiz', completed: true },
        { text: 'Achieve 80% on test', completed: true }
      ]
    },
    {
      id: '2',
      title: '7-Day Learning Streak',
      target: 'Maintain',
      current: 6,
      total: 7,
      reward: 'Streak Badge',
      milestones: [
        { text: 'Study today', completed: true },
        { text: 'Study tomorrow', completed: false },
        { text: 'Maintain for 7 days', completed: false }
      ]
    },
    {
      id: '3',
      title: 'Master Algebra',
      target: '90%',
      current: 75,
      total: 100,
      reward: 'Master Badge',
      milestones: [
        { text: 'Complete all problems', completed: true },
        { text: 'Score above 85%', completed: false },
        { text: 'Help 3 peers', completed: false }
      ]
    }
  ]);

  return (
    <Container>
      <Title>🎯 Goal Setting & Milestone Rewards</Title>
      <GoalsGrid>
        {goals.map((goal) => (
          <GoalCard key={goal.id}>
            <GoalTitle>{goal.title}</GoalTitle>
            <GoalProgress>
              <ProgressBar>
                <ProgressFill $percentage={(goal.current / goal.total) * 100} />
              </ProgressBar>
              <ProgressText>{goal.current}/{goal.total} - {goal.target}</ProgressText>
            </GoalProgress>
            <RewardBadge>🏆 {goal.reward}</RewardBadge>
            <MilestoneList>
              {goal.milestones.map((milestone, idx) => (
                <MilestoneItem key={idx} $completed={milestone.completed}>
                  {milestone.text}
                </MilestoneItem>
              ))}
            </MilestoneList>
          </GoalCard>
        ))}
      </GoalsGrid>
    </Container>
  );
};

export default GoalSettingRewards;
