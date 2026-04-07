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

const InputSection = styled.div`
  background: linear-gradient(135deg, ${theme.colors.secondary.light} 0%, ${theme.colors.secondary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const FormGroup = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const FormLabel = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary.main};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  min-height: 100px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.secondary.main};
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  background-color: ${props => props.variant === 'secondary' ? theme.colors.secondary.main : theme.colors.secondary.dark};
  color: white;
  
  &:hover {
    opacity: 0.9;
  }
`;

const GeneratedQuestions = styled.div`
  margin-top: ${theme.spacing.xl};
`;

const QuestionList = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const QuestionCard = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.secondary.main};
`;

const QuestionNumber = styled.div`
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.secondary.main};
  margin-bottom: ${theme.spacing.md};
`;

const QuestionText = styled.div`
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.lg};
`;

const AutoCreator: React.FC = () => {
  const [formData, setFormData] = useState({
    topic: '',
    difficultyLevel: 'medium',
    numQuestions: '5',
    description: ''
  });

  const [generatedQuestions, setGeneratedQuestions] = useState<any[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate API call
    setTimeout(() => {
      setGeneratedQuestions([
        { id: 1, text: 'What is the primary function of mitochondria in cells?' },
        { id: 2, text: 'Explain the process of photosynthesis in plants.' },
        { id: 3, text: 'How does ATP production occur in the mitochondria?' },
        { id: 4, text: 'What is the relationship between glucose and ATP?' },
        { id: 5, text: 'Describe the light-dependent and light-independent reactions.' }
      ]);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <Container>
      <Title>🤖 Automated Assessment Creator</Title>
      
      <InputSection>
        <h3 style={{ marginBottom: theme.spacing.lg, color: theme.colors.secondary.main }}>Generate Questions Automatically</h3>
        
        <FormGroup>
          <FormLabel>Topic/Concept</FormLabel>
          <FormInput 
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleInputChange}
            placeholder="e.g., Cellular Respiration, Photosynthesis"
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Difficulty Level</FormLabel>
          <FormInput 
            as="select"
            name="difficultyLevel"
            value={formData.difficultyLevel}
            onChange={handleInputChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </FormInput>
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Number of Questions</FormLabel>
          <FormInput 
            type="number"
            name="numQuestions"
            value={formData.numQuestions}
            onChange={handleInputChange}
            min="1"
            max="20"
          />
        </FormGroup>
        
        <FormGroup>
          <FormLabel>Additional Instructions (Optional)</FormLabel>
          <FormTextarea 
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Add any specific requirements or focus areas..."
          />
        </FormGroup>
        
        <ButtonGroup>
          <Button onClick={handleGenerate} disabled={isGenerating || !formData.topic}>
            {isGenerating ? '⏳ Generating...' : '✨ Generate Questions'}
          </Button>
          <Button variant="secondary" onClick={() => setFormData({ topic: '', difficultyLevel: 'medium', numQuestions: '5', description: '' })}>
            Clear
          </Button>
        </ButtonGroup>
      </InputSection>
      
      {generatedQuestions.length > 0 && (
        <GeneratedQuestions>
          <h3 style={{ marginBottom: theme.spacing.lg }}>Generated Questions ({generatedQuestions.length})</h3>
          <QuestionList>
            {generatedQuestions.map((q) => (
              <QuestionCard key={q.id}>
                <QuestionNumber>Q{q.id}:</QuestionNumber>
                <QuestionText>{q.text}</QuestionText>
              </QuestionCard>
            ))}
          </QuestionList>
          <ButtonGroup style={{ marginTop: theme.spacing.lg }}>
            <Button>📥 Import to Assessment</Button>
            <Button variant="secondary">⬇️ Download as PDF</Button>
          </ButtonGroup>
        </GeneratedQuestions>
      )}
    </Container>
  );
};

export default AutoCreator;
