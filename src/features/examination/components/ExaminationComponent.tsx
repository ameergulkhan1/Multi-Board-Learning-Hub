import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import CustomTestPaperConfiguration from './CustomTestPaperConfiguration';
import BoardPatternCompliance from './BoardPatternCompliance';
import DynamicQuestionCompilation from './DynamicQuestionCompilation';
import TimedExaminationSimulation from './TimedExaminationSimulation';
import PDFExportPrint from './PDFExportPrint';

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

const StepContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
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
`;

export const ExaminationComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'configure' | 'compliance' | 'compile' | 'simulate' | 'export'>('configure');

  return (
    <Container>
      <Header>
        <Title>📝 Examination Design Suite</Title>
        <Subtitle>Create custom test papers with board compliance and real-time simulation</Subtitle>
      </Header>

      <TabButtons>
        <TabButton $active={activeTab === 'configure'} onClick={() => setActiveTab('configure')}>
          ⚙️ Configure
        </TabButton>
        <TabButton $active={activeTab === 'compliance'} onClick={() => setActiveTab('compliance')}>
          ✅ Board Pattern
        </TabButton>
        <TabButton $active={activeTab === 'compile'} onClick={() => setActiveTab('compile')}>
          🔍 Compile
        </TabButton>
        <TabButton $active={activeTab === 'simulate'} onClick={() => setActiveTab('simulate')}>
          ⏱️ Simulate
        </TabButton>
        <TabButton $active={activeTab === 'export'} onClick={() => setActiveTab('export')}>
          📄 Export
        </TabButton>
      </TabButtons>

      <StepContainer>
        {activeTab === 'configure' && <CustomTestPaperConfiguration />}
        {activeTab === 'compliance' && <BoardPatternCompliance />}
        {activeTab === 'compile' && <DynamicQuestionCompilation />}
        {activeTab === 'simulate' && <TimedExaminationSimulation />}
        {activeTab === 'export' && <PDFExportPrint />}
      </StepContainer>
    </Container>
  );
};

export default ExaminationComponent;
