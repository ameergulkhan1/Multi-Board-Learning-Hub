import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import VirtualClassroomOrchestration from './VirtualClassroomOrchestration';
import AggregatePerformanceAnalytics from './AggregatePerformanceAnalytics';
import AutomatedAssessmentCreator from './AutomatedAssessmentCreator';
import PerformanceReportGenerator from './PerformanceReportGenerator';
import ContentModerationTools from './ContentModerationTools';

const Container = styled.div`
  padding: ${theme.spacing.xl};
  background: ${theme.colors.bg.secondary};
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Subtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FullWidth = styled.div`
  grid-column: 1 / -1;
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
  white-space: nowrap;
  transition: all ${theme.transition.fast};
`;

export const TeacherParentComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classroom' | 'analytics' | 'assessment' | 'reports' | 'moderation'>('classroom');

  return (
    <Container>
      <Header>
        <Title>👨‍🏫 Teacher & Parent Panel</Title>
        <Subtitle>Virtual classroom orchestration, performance analytics, assessment creation, and content moderation</Subtitle>
      </Header>

      <TabButtons>
        <TabButton $active={activeTab === 'classroom'} onClick={() => setActiveTab('classroom')}>
          🎓 Classroom
        </TabButton>
        <TabButton $active={activeTab === 'analytics'} onClick={() => setActiveTab('analytics')}>
          📊 Analytics
        </TabButton>
        <TabButton $active={activeTab === 'assessment'} onClick={() => setActiveTab('assessment')}>
          📝 Assessment
        </TabButton>
        <TabButton $active={activeTab === 'reports'} onClick={() => setActiveTab('reports')}>
          📈 Reports
        </TabButton>
        <TabButton $active={activeTab === 'moderation'} onClick={() => setActiveTab('moderation')}>
          🛡️ Moderation
        </TabButton>
      </TabButtons>

      <FeatureGrid>
        {activeTab === 'classroom' && (
          <FullWidth>
            <VirtualClassroomOrchestration />
          </FullWidth>
        )}
        {activeTab === 'analytics' && (
          <FullWidth>
            <AggregatePerformanceAnalytics />
          </FullWidth>
        )}
        {activeTab === 'assessment' && (
          <FullWidth>
            <AutomatedAssessmentCreator />
          </FullWidth>
        )}
        {activeTab === 'reports' && (
          <FullWidth>
            <PerformanceReportGenerator />
          </FullWidth>
        )}
        {activeTab === 'moderation' && (
          <FullWidth>
            <ContentModerationTools />
          </FullWidth>
        )}
      </FeatureGrid>
    </Container>
  );
};

export default TeacherParentComponent;
