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

const ConceptsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
`;

const ConceptCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.warning.light} 0%, ${theme.colors.warning.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.warning.main};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ConceptTitle = styled.h3`
  color: ${theme.colors.warning.main};
  margin-bottom: ${theme.spacing.md};
`;

const DifficultyLevel = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const Star = styled.span<{ filled: boolean }>`
  font-size: 20px;
  color: ${props => props.filled ? theme.colors.warning.main : theme.colors.border.light};
`;

const PracticeButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.warning.main};
  color: ${theme.colors.warning.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.warning.dark};
  }
`;

const StatsBar = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing.lg};
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatValue = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

interface WeakConcept {
  id: string;
  name: string;
  difficulty: number;
  timesAttempted: number;
  averageScore: number;
}

const ConceptReinforcement: React.FC = () => {
  const [weakConcepts] = useState<WeakConcept[]>([
    { id: '1', name: 'Photosynthesis Details', difficulty: 3, timesAttempted: 4, averageScore: 62 },
    { id: '2', name: 'Enzyme Kinetics', difficulty: 4, timesAttempted: 3, averageScore: 58 },
    { id: '3', name: 'Osmosis Process', difficulty: 2, timesAttempted: 5, averageScore: 68 },
    { id: '4', name: 'ATP Production', difficulty: 4, timesAttempted: 2, averageScore: 55 },
    { id: '5', name: 'Genetic Mutations', difficulty: 3, timesAttempted: 4, averageScore: 65 },
    { id: '6', name: 'Population Genetics', difficulty: 4, timesAttempted: 3, averageScore: 60 }
  ]);

  return (
    <Container>
      <Title>🔄 Concept Reinforcement</Title>
      
      <StatsBar>
        <StatItem>
          <StatValue>{weakConcepts.length}</StatValue>
          <StatLabel>Concepts to Master</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>
            {Math.round(weakConcepts.reduce((a, c) => a + c.averageScore, 0) / weakConcepts.length)}%
          </StatValue>
          <StatLabel>Avg Score</StatLabel>
        </StatItem>
        <StatItem>
          <StatValue>{weakConcepts.reduce((a, c) => a + c.timesAttempted, 0)}</StatValue>
          <StatLabel>Total Attempts</StatLabel>
        </StatItem>
      </StatsBar>
      
      <ConceptsGrid>
        {weakConcepts.map((concept) => (
          <ConceptCard key={concept.id}>
            <ConceptTitle>{concept.name}</ConceptTitle>
            
            <div style={{ marginBottom: theme.spacing.lg }}>
              <label style={{ display: 'block', marginBottom: theme.spacing.sm, fontSize: theme.typography.fontSize.sm }}>
                Difficulty Level
              </label>
              <DifficultyLevel>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} filled={star <= concept.difficulty}>
                    ⭐
                  </Star>
                ))}
              </DifficultyLevel>
            </div>
            
            <div style={{ 
              fontSize: theme.typography.fontSize.sm,
              marginBottom: theme.spacing.lg,
              color: theme.colors.text.secondary
            }}>
              <div>Attempts: {concept.timesAttempted}</div>
              <div>Avg Score: {concept.averageScore}%</div>
            </div>
            
            <PracticeButton>
              💪 Practice & Master
            </PracticeButton>
          </ConceptCard>
        ))}
      </ConceptsGrid>
    </Container>
  );
};

export default ConceptReinforcement;
