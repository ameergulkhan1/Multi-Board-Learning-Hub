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

const AlertsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
`;

const AlertCard = styled.div<{ type: 'new' | 'reply' | 'upvote' | 'expert' }>`
  background: linear-gradient(135deg, 
    ${props => {
      if (props.type === 'new') return theme.colors.primary.lighter;
      if (props.type === 'reply') return theme.colors.secondary.light;
      if (props.type === 'upvote') return theme.colors.success.light;
      return theme.colors.warning.light;
    }} 0%, 
    ${props => {
      if (props.type === 'new') return theme.colors.primary.light;
      if (props.type === 'reply') return theme.colors.secondary.light;
      if (props.type === 'upvote') return theme.colors.success.light;
      return theme.colors.warning.light;
    }} 100%
  );
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${props => {
    if (props.type === 'new') return theme.colors.primary.main;
    if (props.type === 'reply') return theme.colors.secondary.main;
    if (props.type === 'upvote') return theme.colors.success.main;
    return theme.colors.warning.main;
  }};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateX(4px);
    box-shadow: ${theme.shadows.md};
  }
`;

const AlertIcon = styled.span`
  font-size: 24px;
  margin-bottom: ${theme.spacing.md};
  display: block;
`;

const AlertTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const AlertContent = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.md};
`;

const AlertMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: ${theme.spacing.md};
`;

const ViewButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  background-color: transparent;
  color: ${theme.colors.text.primary};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.bg.secondary};
  }
`;

const NotificationSettings = styled.div`
  background: linear-gradient(135deg, ${theme.colors.bg.secondary} 0%, white 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.xl};
`;

const SettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${theme.spacing.md} 0;
  border-bottom: 1px solid ${theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const Toggle = styled.input`
  width: 50px;
  height: 25px;
  cursor: pointer;
`;

interface Alert {
  id: string;
  type: 'new' | 'reply' | 'upvote' | 'expert';
  title: string;
  content: string;
  author?: string;
  time: string;
}

const RealTimeInteractionAlerts: React.FC = () => {
  const [alerts] = useState<Alert[]>([
    {
      id: '1',
      type: 'new',
      title: 'New Question Posted',
      content: 'Someone asked about photosynthesis in your favorite topic',
      author: 'Ahmed Khan',
      time: '2 minutes ago'
    },
    {
      id: '2',
      type: 'reply',
      title: 'New Reply to Your Question',
      content: 'Dr. Hassan replied to your question about mitosis with detailed explanation',
      author: 'Dr. Hassan',
      time: '15 minutes ago'
    },
    {
      id: '3',
      type: 'upvote',
      title: 'Your Answer Got Upvotes!',
      content: 'Your answer about cellular respiration gained 5 upvotes',
      author: 'Community',
      time: '45 minutes ago'
    },
    {
      id: '4',
      type: 'expert',
      title: 'Expert Guidance Available',
      content: 'Dr. Chemistry Ali is now online and available for questions',
      author: 'Dr. Chemistry Ali',
      time: '1 hour ago'
    }
  ]);

  const getAlertIcon = (type: Alert['type']) => {
    if (type === 'new') return '💬';
    if (type === 'reply') return '💭';
    if (type === 'upvote') return '👍';
    return '⭐';
  };

  return (
    <Container>
      <Title>🔔 Real-Time Interaction Alerts</Title>
      
      <AlertsGrid>
        {alerts.map((alert) => (
          <AlertCard key={alert.id} type={alert.type}>
            <AlertIcon>{getAlertIcon(alert.type)}</AlertIcon>
            <AlertTitle>{alert.title}</AlertTitle>
            <AlertContent>{alert.content}</AlertContent>
            <AlertMeta>
              <span>👤 {alert.author}</span>
              <span>{alert.time}</span>
            </AlertMeta>
            <ViewButton>View →</ViewButton>
          </AlertCard>
        ))}
      </AlertsGrid>
      
      <NotificationSettings>
        <h3 style={{ marginBottom: theme.spacing.lg }}>⚙️ Notification Preferences</h3>
        <SettingItem>
          <label>New Questions in My Topics</label>
          <Toggle type="checkbox" defaultChecked />
        </SettingItem>
        <SettingItem>
          <label>Replies to My Questions</label>
          <Toggle type="checkbox" defaultChecked />
        </SettingItem>
        <SettingItem>
          <label>Upvotes on My Answers</label>
          <Toggle type="checkbox" defaultChecked />
        </SettingItem>
        <SettingItem>
          <label>Expert Availability Updates</label>
          <Toggle type="checkbox" defaultChecked />
        </SettingItem>
        <SettingItem>
          <label>Trending Topics in My Interests</label>
          <Toggle type="checkbox" />
        </SettingItem>
      </NotificationSettings>
    </Container>
  );
};

export default RealTimeInteractionAlerts;
