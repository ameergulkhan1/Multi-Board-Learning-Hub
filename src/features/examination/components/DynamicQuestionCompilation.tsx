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

const BuilderContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const SelectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const SelectionBox = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
`;

const SelectionLabel = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const SelectInput = styled.select`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
  }
`;

const PreviewSection = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const PreviewTitle = styled.h3`
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.lg};
`;

const QuestionPreview = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const QuestionItem = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  border-left: 3px solid ${theme.colors.primary.main};
`;

const QuestionNum = styled.div`
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.primary.main};
  margin-bottom: ${theme.spacing.sm};
`;

const QuestionText = styled.div`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const Difficulty = styled.span`
  display: inline-block;
  background-color: ${theme.colors.warning.light};
  color: ${theme.colors.warning.main};
  padding: 2px 8px;
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const GenerateButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.base};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

const DynamicQuestionCompilation: React.FC = () => {
  const [config, setConfig] = useState({
    topic: 'photosynthesis',
    difficulty: 'mixed',
    questionType: 'multiple',
    numQuestions: '10'
  });

  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerated(true);
  };

  const handleChange = (field: string, value: string) => {
    setConfig({ ...config, [field]: value });
  };

  const sampleQuestions = [
    { num: 1, text: 'What is the primary function of chlorophyll in photosynthesis?', difficulty: 'Easy' },
    { num: 2, text: 'Explain the relationship between the light reactions and Calvin cycle.', difficulty: 'Medium' },
    { num: 3, text: 'Compare and contrast photosynthesis in C3 and C4 plants.', difficulty: 'Hard' },
    { num: 4, text: 'What is the role of ATP in the Calvin cycle?', difficulty: 'Medium' },
    { num: 5, text: 'How would photosynthesis be affected by increased atmospheric CO2?', difficulty: 'Hard' }
  ];

  return (
    <Container>
      <Title>🎯 Dynamic Question Compilation</Title>
      
      <BuilderContainer>
        <h3 style={{ marginBottom: theme.spacing.lg, color: theme.colors.primary.main }}>Configure Question Paper</h3>
        
        <SelectionGrid>
          <SelectionBox>
            <SelectionLabel>Topic</SelectionLabel>
            <SelectInput 
              value={config.topic}
              onChange={(e) => handleChange('topic', e.target.value)}
            >
              <option value="photosynthesis">Photosynthesis</option>
              <option value="respiration">Cellular Respiration</option>
              <option value="mitosis">Mitosis & Meiosis</option>
              <option value="dna">DNA & Genetics</option>
            </SelectInput>
          </SelectionBox>
          
          <SelectionBox>
            <SelectionLabel>Difficulty Level</SelectionLabel>
            <SelectInput 
              value={config.difficulty}
              onChange={(e) => handleChange('difficulty', e.target.value)}
            >
              <option value="easy">Easy Only</option>
              <option value="medium">Medium Only</option>
              <option value="hard">Hard Only</option>
              <option value="mixed">Mixed (Easy + Medium + Hard)</option>
            </SelectInput>
          </SelectionBox>
          
          <SelectionBox>
            <SelectionLabel>Question Type</SelectionLabel>
            <SelectInput 
              value={config.questionType}
              onChange={(e) => handleChange('questionType', e.target.value)}
            >
              <option value="multiple">Multiple Choice</option>
              <option value="short">Short Answer</option>
              <option value="essay">Essay</option>
              <option value="mixed">Mixed Types</option>
            </SelectInput>
          </SelectionBox>
          
          <SelectionBox>
            <SelectionLabel>Number of Questions</SelectionLabel>
            <SelectInput 
              value={config.numQuestions}
              onChange={(e) => handleChange('numQuestions', e.target.value)}
            >
              <option value="5">5 Questions</option>
              <option value="10">10 Questions</option>
              <option value="15">15 Questions</option>
              <option value="20">20 Questions</option>
              <option value="25">25 Questions</option>
            </SelectInput>
          </SelectionBox>
        </SelectionGrid>
        
        <GenerateButton onClick={handleGenerate}>✨ Generate Compilation</GenerateButton>
      </BuilderContainer>
      
      {generated && (
        <PreviewSection>
          <PreviewTitle>📋 Generated Question Paper Preview</PreviewTitle>
          <div style={{ marginBottom: theme.spacing.lg, color: theme.colors.text.secondary }}>
            Topic: <strong>{config.topic.toUpperCase()}</strong> | 
            Difficulty: <strong>{config.difficulty}</strong> | 
            Total Questions: <strong>{config.numQuestions}</strong>
          </div>
          <QuestionPreview>
            {sampleQuestions.map((q) => (
              <QuestionItem key={q.num}>
                <QuestionNum>Q{q.num}:</QuestionNum>
                <QuestionText>{q.text}</QuestionText>
                <Difficulty>{q.difficulty}</Difficulty>
              </QuestionItem>
            ))}
          </QuestionPreview>
          <button style={{
            width: '100%',
            padding: theme.spacing.md,
            backgroundColor: theme.colors.primary.main,
            color: theme.colors.primary.contrast,
            border: 'none',
            borderRadius: theme.borderRadius.md,
            cursor: 'pointer',
            fontWeight: 'bold',
            marginTop: theme.spacing.lg
          }}>
            ⬇️ Download as PDF
          </button>
        </PreviewSection>
      )}
    </Container>
  );
};

export default DynamicQuestionCompilation;
