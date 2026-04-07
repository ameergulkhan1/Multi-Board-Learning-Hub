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

const SimulationContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.primary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

const ExamTitle = styled.h3`
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.lg};
`;

const Timer = styled.div<{ timeLeft: number }>`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.timeLeft < 300 ? theme.colors.danger.main : theme.colors.primary.main};
  background-color: white;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
`;

const QuestionContainer = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const QuestionText = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
`;

const Option = styled.label<{ selected: boolean }>`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.md};
  border: 2px solid ${props => props.selected ? theme.colors.primary.main : theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  background-color: ${props => props.selected ? theme.colors.primary.lighter : 'white'};
  transition: all ${theme.transition.fast};
  
  &:hover {
    border-color: ${theme.colors.primary.main};
    background-color: ${theme.colors.primary.lighter};
  }
`;

const Checkbox = styled.input`
  margin-right: ${theme.spacing.md};
  width: 20px;
  height: 20px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: ${theme.spacing.xl};
`;

const NavigationButton = styled.button`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover:not(:disabled) {
    background-color: ${theme.colors.primary.dark};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ProgressInfo = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const SubmitButton = styled(NavigationButton)`
  background-color: ${theme.colors.success.main};
  
  &:hover:not(:disabled) {
    background-color: ${theme.colors.success.dark};
  }
`;

interface Question {
  id: number;
  text: string;
  options: string[];
}

const TimedExamination: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [timeLeft] = useState(3600); // 1 hour
  const [answers, setAnswers] = useState<{ [key: number]: string }>({});

  const questions: Question[] = [
    {
      id: 1,
      text: 'What is the chemical formula for table salt?',
      options: ['NaCl', 'KCl', 'CaCl2', 'MgCl2']
    },
    {
      id: 2,
      text: 'Which organ is responsible for filtering blood in the human body?',
      options: ['Heart', 'Liver', 'Kidney', 'Pancreas']
    },
    {
      id: 3,
      text: 'What is the correct sequence of mitosis?',
      options: ['Anaphase, Metaphase, Prophase, Telophase', 'Prophase, Metaphase, Anaphase, Telophase', 'Metaphase, Anaphase, Prophase, Telophase', 'Telophase, Anaphase, Metaphase, Prophase']
    }
  ];

  const handleOptionChange = (option: string) => {
    setAnswers({ ...answers, [currentQuestion]: option });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Exam submitted with answers:', answers);
  };

  const question = questions[currentQuestion];

  return (
    <Container>
      <Title>⏱️ Timed Examination Simulation</Title>
      
      <SimulationContainer>
        <Header>
          <ExamTitle>Biology - Cell Division Test</ExamTitle>
          <Timer timeLeft={timeLeft}>
            {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
          </Timer>
        </Header>
        
        <QuestionContainer>
          <QuestionText>
            Q{currentQuestion + 1}. {question.text}
          </QuestionText>
          
          <OptionsContainer>
            {question.options.map((option, idx) => (
              <Option 
                key={idx}
                selected={answers[currentQuestion] === option}
              >
                <Checkbox
                  type="radio"
                  name={`question-${currentQuestion}`}
                  checked={answers[currentQuestion] === option}
                  onChange={() => handleOptionChange(option)}
                />
                {option}
              </Option>
            ))}
          </OptionsContainer>
        </QuestionContainer>
        
        <Navigation>
          <NavigationButton 
            onClick={handlePrevious} 
            disabled={currentQuestion === 0}
          >
            ← Previous
          </NavigationButton>
          
          <ProgressInfo>
            Question {currentQuestion + 1} of {questions.length}
          </ProgressInfo>
          
          {currentQuestion === questions.length - 1 ? (
            <SubmitButton onClick={handleSubmit}>
              ✓ Submit Exam
            </SubmitButton>
          ) : (
            <NavigationButton onClick={handleNext}>
              Next →
            </NavigationButton>
          )}
        </Navigation>
      </SimulationContainer>
    </Container>
  );
};

export default TimedExamination;
