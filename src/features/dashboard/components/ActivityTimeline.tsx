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

const Timeline = styled.div`
  position: relative;
  padding: ${theme.spacing.lg} 0;
`;

const TimelineItem = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  position: relative;
`;

const TimelineMarker = styled.div<{ $color: string }>`
  min-width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.lg};
  position: relative;
  z-index: 2;
  box-shadow: ${theme.shadows.md};
`;

const TimelineContent = styled.div`
  flex: 1;
  padding-top: ${theme.spacing.md};
`;

const TimelineTitle = styled.p`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const TimelineTime = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

interface Activity {
  id: string;
  title: string;
  timestamp: string;
  icon: string;
  type: 'completion' | 'achievement' | 'activity';
}

const ActivityTimeline: React.FC = () => {
  const [activities] = useState<Activity[]>([
    { id: '1', title: 'Completed Chapter 3 Quiz', timestamp: '2 hours ago', icon: '✓', type: 'completion' },
    { id: '2', title: 'Earned Streak Badge (7 days)', timestamp: '5 hours ago', icon: '⭐', type: 'achievement' },
    { id: '3', title: 'Answered 5 peer questions', timestamp: '1 day ago', icon: '💬', type: 'activity' },
    { id: '4', title: 'Completed Chapter 2', timestamp: '3 days ago', icon: '✓', type: 'completion' },
  ]);

  const getColorByType = (type: string) => {
    switch(type) {
      case 'completion': return theme.colors.success.main;
      case 'achievement': return theme.colors.warning.main;
      case 'activity': return theme.colors.primary.main;
      default: return theme.colors.border.medium;
    }
  };

  return (
    <Container>
      <Title>📅 Activity Timeline & Streaks</Title>
      <Timeline>
        {activities.map((activity) => (
          <TimelineItem key={activity.id}>
            <TimelineMarker $color={getColorByType(activity.type)}>
              {activity.icon}
            </TimelineMarker>
            <TimelineContent>
              <TimelineTitle>{activity.title}</TimelineTitle>
              <TimelineTime>{activity.timestamp}</TimelineTime>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Container>
  );
};

export default ActivityTimeline;
