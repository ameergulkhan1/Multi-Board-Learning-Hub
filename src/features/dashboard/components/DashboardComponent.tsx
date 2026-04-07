import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import SyllabusCompletionOverview from './SyllabusCompletionOverview';
import PerformanceHeatMap from './PerformanceHeatMap';
import IntelligentLearningRecommendations from './IntelligentLearningRecommendations';
import ActivityTimeline from './ActivityTimeline';
import GoalSettingRewards from './GoalSettingRewards';

const DashboardContainer = styled.div`
  padding: ${theme.spacing.xl};
  background: ${theme.colors.bg.secondary};
  min-height: 100vh;
`;

const PageHeader = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Subtitle = styled.p`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.secondary};
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  margin-bottom: ${theme.spacing.xl};
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const FullWidthSection = styled.div`
  grid-column: 1 / -1;
`;

const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TabButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  border-bottom: 2px solid ${theme.colors.border.light};
  overflow-x: auto;
`;

const TabButton = styled.button<{ $active?: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  background: none;
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${props => props.$active ? theme.colors.primary.main : theme.colors.text.secondary};
  border-bottom: 3px solid ${props => props.$active ? theme.colors.primary.main : 'transparent'};
  transition: all ${theme.transition.fast};
  white-space: nowrap;
  
  &:hover {
    color: ${theme.colors.primary.main};
  }
`;

export const DashboardComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'analytics' | 'goals'>('overview');

  return (
    <DashboardContainer>
      <PageHeader>
        <Title>📊 Learning Intelligence Dashboard</Title>
        <Subtitle>Track your learning progress, performance analytics, and personalized recommendations</Subtitle>
      </PageHeader>

      <TabButtons>
        <TabButton $active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
          📋 Overview
        </TabButton>
        <TabButton $active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')}>
          📈 Performance
        </TabButton>
        <TabButton $active={activeTab === 'goals'} onClick={() => setActiveTab('goals')}>
          🎯 Goals & Rewards
        </TabButton>
      </TabButtons>

      {activeTab === 'overview' && (
        <SectionGrid>
          <div>
            <SyllabusCompletionOverview />
          </div>
          <div>
            <ActivityTimeline />
          </div>
          <FullWidthSection>
            <IntelligentLearningRecommendations />
          </FullWidthSection>
        </SectionGrid>
      )}

      {activeTab === 'analytics' && (
        <AnalyticsGrid>
          <PerformanceHeatMap />
          <div>
            <SyllabusCompletionOverview />
          </div>
        </AnalyticsGrid>
      )}

      {activeTab === 'goals' && (
        <div>
          <GoalSettingRewards />
        </div>
      )}
    </DashboardContainer>
  );
};

export default DashboardComponent;
