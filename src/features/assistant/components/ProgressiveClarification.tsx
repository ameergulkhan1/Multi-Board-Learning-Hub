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

const QueryBox = styled.div`
  background: linear-gradient(135deg, ${theme.colors.secondary.light} 0%, ${theme.colors.secondary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const Input = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  margin-bottom: ${theme.spacing.lg};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary.main};
  }
`;

const SearchButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.secondary.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.bold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.secondary.dark};
  }
`;

const ClarificationLevels = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const LevelCard = styled.div<{ level: 1 | 2 | 3 }>`
  background: linear-gradient(135deg, 
    ${props => {
      if (props.level === 1) return theme.colors.primary.lighter;
      if (props.level === 2) return theme.colors.warning.light;
      return theme.colors.success.light;
    }} 0%, 
    ${props => {
      if (props.level === 1) return theme.colors.primary.light;
      if (props.level === 2) return theme.colors.warning.light;
      return theme.colors.success.light;
    }} 100%
  );
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${props => {
    if (props.level === 1) return theme.colors.primary.main;
    if (props.level === 2) return theme.colors.warning.main;
    return theme.colors.success.main;
  }};
`;

const LevelTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const LevelContent = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.md};
`;

const ClarifyButton = styled.button`
  background-color: transparent;
  border: 2px solid currentColor;
  color: ${theme.colors.text.primary};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.bg.secondary};
  }
`;

const ProgressiveClarification: React.FC = () => {
  const [query, setQuery] = useState('');
  const [currentLevel, setCurrentLevel] = useState<1 | 2 | 3>(1);
  const [expanded, setExpanded] = useState(false);

  const handleSearch = () => {
    setExpanded(true);
  };

  const clarificationData = {
    query: 'What is photosynthesis?',
    level1: {
      title: 'Level 1: Basic Overview',
      content: 'Photosynthesis is the process plants use to make their own food using sunlight, water, and carbon dioxide from the air.'
    },
    level2: {
      title: 'Level 2: Intermediate Details',
      content: 'Photosynthesis occurs primarily in leaves where chlorophyll absorbs light energy. This energy is used to split water molecules and convert carbon dioxide into glucose. The process has two main stages: light-dependent reactions and the Calvin cycle.'
    },
    level3: {
      title: 'Level 3: Advanced Explanation',
      content: 'In the light-dependent reactions (thylakoid membrane), photons excite electrons in PSII, creating an electron transport chain that generates ATP and NADPH through chemiosmosis. In the Calvin cycle (stroma), these molecules reduce 3-PGA to G3P, regenerating RuBP through complex enzyme-catalyzed reactions.'
    }
  };

  return (
    <Container>
      <Title>🎓 Progressive Clarification System</Title>
      
      <QueryBox>
        <p style={{ marginBottom: theme.spacing.lg, fontWeight: 'bold' }}>Ask your question and get answers at different levels of complexity</p>
        <Input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="e.g., What is photosynthesis? How does DNA replication work?"
        />
        <SearchButton onClick={handleSearch}>🔍 Search & Clarify</SearchButton>
      </QueryBox>
      
      {expanded && (
        <ClarificationLevels>
          <LevelCard level={1}>
            <LevelTitle>{clarificationData.level1.title}</LevelTitle>
            <LevelContent>{clarificationData.level1.content}</LevelContent>
            <ClarifyButton onClick={() => setCurrentLevel(1)}>
              {currentLevel === 1 ? '✓ Selected' : 'Select This Level'}
            </ClarifyButton>
          </LevelCard>
          
          <LevelCard level={2}>
            <LevelTitle>{clarificationData.level2.title}</LevelTitle>
            <LevelContent>{clarificationData.level2.content}</LevelContent>
            <ClarifyButton onClick={() => setCurrentLevel(2)}>
              {currentLevel === 2 ? '✓ Selected' : 'Select This Level'}
            </ClarifyButton>
          </LevelCard>
          
          <LevelCard level={3}>
            <LevelTitle>{clarificationData.level3.title}</LevelTitle>
            <LevelContent>{clarificationData.level3.content}</LevelContent>
            <ClarifyButton onClick={() => setCurrentLevel(3)}>
              {currentLevel === 3 ? '✓ Selected' : 'Select This Level'}
            </ClarifyButton>
          </LevelCard>
        </ClarificationLevels>
      )}
    </Container>
  );
};

export default ProgressiveClarification;
