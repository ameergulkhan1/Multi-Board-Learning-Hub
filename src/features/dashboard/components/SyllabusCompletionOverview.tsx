import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.bg.primary} 100%);
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const SyllabusGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
`;

const SyllabusCard = styled.div<{ $progress: number }>`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  box-shadow: ${theme.shadows.sm};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateY(-2px);
  }
  
  transition: all ${theme.transition.fast};
`;

const CardTitle = styled.p`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: ${theme.colors.border.light};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: ${theme.spacing.sm};
`;

const Progress = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${(props) => props.$progress}%;
  background: linear-gradient(90deg, ${theme.colors.success.main}, ${theme.colors.success.light});
  transition: width 0.3s ease;
`;

const ProgressText = styled.span`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
`;

interface Syllabus {
  id: string;
  title: string;
  progress: number;
}

const SyllabusCompletionOverview: React.FC = () => {
  const [syllabuses] = useState<Syllabus[]>([
    { id: '1', title: 'Chapter 1: Basics', progress: 100 },
    { id: '2', title: 'Chapter 2: Intermediate', progress: 75 },
    { id: '3', title: 'Chapter 3: Advanced', progress: 45 },
    { id: '4', title: 'Chapter 4: Expert', progress: 20 },
    { id: '5', title: 'Chapter 5: Mastery', progress: 0 },
  ]);

  return (
    <Container>
      <Title>📚 Syllabus Completion Overview</Title>
      <SyllabusGrid>
        {syllabuses.map((syllabus) => (
          <SyllabusCard key={syllabus.id} $progress={syllabus.progress}>
            <CardTitle>{syllabus.title}</CardTitle>
            <ProgressBar>
              <Progress $progress={syllabus.progress} />
            </ProgressBar>
            <ProgressText>{syllabus.progress}% Complete</ProgressText>
          </SyllabusCard>
        ))}
      </SyllabusGrid>
    </Container>
  );
};

export default SyllabusCompletionOverview;
