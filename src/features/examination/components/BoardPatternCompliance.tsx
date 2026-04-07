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

const PatternGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const PatternCard = styled.div<{ selected: boolean }>`
  border: 2px solid ${props => props.selected ? theme.colors.primary.main : theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  background-color: ${props => props.selected ? theme.colors.primary.lighter : 'white'};
  
  &:hover {
    border-color: ${theme.colors.primary.main};
    box-shadow: ${theme.shadows.md};
  }
`;

const PatternName = styled.h3`
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.md};
`;

const PatternDescription = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  line-height: ${theme.typography.lineHeight.lg};
`;

const SelectionIndicator = styled.div`
  margin-top: ${theme.spacing.md};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border.light};
  text-align: center;
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const ConfigSection = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const ConfigTitle = styled.h3`
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.lg};
`;

const ConfigItem = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ConfigLabel = styled.label`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const ConfigInput = styled.input<{ type?: string }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
  }
`;

const CreateButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.base};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

interface BoardPattern {
  id: string;
  name: string;
  description: string;
  questionCount: number;
  sections: number;
}

const BoardPatternCompliance: React.FC = () => {
  const [selectedPattern, setSelectedPattern] = useState<string | null>(null);
  
  const [patterns] = useState<BoardPattern[]>([
    { id: '1', name: 'Federal Board (FBISE)', description: 'Multiple Choice + Short & Long Questions', questionCount: 50, sections: 4 },
    { id: '2', name: 'KPK Board', description: 'Objective & Subjective Mix', questionCount: 45, sections: 3 },
    { id: '3', name: 'Sindh Board', description: 'Part A & B format', questionCount: 55, sections: 5 },
    { id: '4', name: 'Custom Pattern', description: 'Create your own test format', questionCount: 0, sections: 0 }
  ]);

  const [config, setConfig] = useState({
    totalQuestions: 50,
    duration: 120,
    totalMarks: 100
  });

  const handleConfigChange = (field: string, value: string) => {
    setConfig({ ...config, [field]: parseInt(value) });
  };

  return (
    <Container>
      <Title>🏫 Board Pattern Compliance</Title>
      
      <h3 style={{ marginBottom: theme.spacing.lg }}>Select Examination Board</h3>
      <PatternGrid>
        {patterns.map((pattern) => (
          <PatternCard 
            key={pattern.id}
            selected={selectedPattern === pattern.id}
            onClick={() => setSelectedPattern(pattern.id)}
          >
            <PatternName>{pattern.name}</PatternName>
            <PatternDescription>{pattern.description}</PatternDescription>
            {pattern.questionCount > 0 && (
              <PatternDescription>
                📊 {pattern.questionCount} questions | {pattern.sections} sections
              </PatternDescription>
            )}
            {selectedPattern === pattern.id && (
              <SelectionIndicator>✓ Selected</SelectionIndicator>
            )}
          </PatternCard>
        ))}
      </PatternGrid>
      
      {selectedPattern && (
        <ConfigSection>
          <ConfigTitle>⚙️ Configure Test Paper</ConfigTitle>
          
          <ConfigItem>
            <ConfigLabel>Total Questions:</ConfigLabel>
            <ConfigInput 
              type="number" 
              value={config.totalQuestions}
              onChange={(e) => handleConfigChange('totalQuestions', e.target.value)}
            />
          </ConfigItem>
          
          <ConfigItem>
            <ConfigLabel>Duration (minutes):</ConfigLabel>
            <ConfigInput 
              type="number" 
              value={config.duration}
              onChange={(e) => handleConfigChange('duration', e.target.value)}
            />
          </ConfigItem>
          
          <ConfigItem>
            <ConfigLabel>Total Marks:</ConfigLabel>
            <ConfigInput 
              type="number" 
              value={config.totalMarks}
              onChange={(e) => handleConfigChange('totalMarks', e.target.value)}
            />
          </ConfigItem>
          
          <CreateButton>✓ Create Compliant Test Paper</CreateButton>
        </ConfigSection>
      )}
    </Container>
  );
};

export default BoardPatternCompliance;
