import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import RapidQuizzing from './RapidQuizzing';
import CodeSandbox from './CodeSandbox';
import QuizPerformanceTracking from './QuizPerformanceTracking';
import ConceptReinforcement from './ConceptReinforcement';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const TabButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  overflow-x: auto;
`;

const TabButton = styled.button<{ $active?: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: 2px solid ${props => props.$active ? theme.colors.primary.main : theme.colors.border.light};
  background: ${props => props.$active ? theme.colors.primary.lighter : 'white'};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${props => props.$active ? theme.colors.primary.main : theme.colors.text.primary};
  white-space: nowrap;
  transition: all ${theme.transition.fast};
`;

export const AssessmentComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'quiz' | 'code' | 'tracking' | 'concepts'>('quiz');

  return (
    <Container>
      <Header>
        <Title>🧪 Micro-Assessment Console</Title>
        <Subtitle>Topic-level rapid quizzing with instant validation and performance tracking</Subtitle>
      </Header>

      <TabButtons>
        <TabButton $active={activeTab === 'quiz'} onClick={() => setActiveTab('quiz')}>
          ❓ Quick Quiz
        </TabButton>
        <TabButton $active={activeTab === 'code'} onClick={() => setActiveTab('code')}>
          💻 Code Sandbox
        </TabButton>
        <TabButton $active={activeTab === 'tracking'} onClick={() => setActiveTab('tracking')}>
          📊 Progress
        </TabButton>
        <TabButton $active={activeTab === 'concepts'} onClick={() => setActiveTab('concepts')}>
          🎓 Concept Drill
        </TabButton>
      </TabButtons>

      {activeTab === 'quiz' && (
        <Grid>
          <RapidQuizzing />
          <ConceptReinforcement />
        </Grid>
      )}

      {activeTab === 'code' && <CodeSandbox />}

      {activeTab === 'tracking' && <QuizPerformanceTracking />}

      {activeTab === 'concepts' && <ConceptReinforcement />}
    </Container>
  );
};

export default AssessmentComponent;
