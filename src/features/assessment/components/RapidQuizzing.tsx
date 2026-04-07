import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const QuizContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, white 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
`;

const Question = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const OptionsGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
`;

const OptionButton = styled.button<{ $selected?: boolean; $correct?: boolean; $wrong?: boolean }>`
  padding: ${theme.spacing.md};
  border: 2px solid ${(props) => {
    if (props.$selected && props.$correct) return theme.colors.success.main;
    if (props.$selected && props.$wrong) return theme.colors.danger.main;
    return theme.colors.border.light;
  }};
  background-color: ${(props) => {
    if (props.$correct) return theme.colors.success.light;
    if (props.$wrong) return theme.colors.danger.light;
    if (props.$selected) return theme.colors.primary.light;
    return 'white';
  }};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  text-align: left;
  transition: all ${theme.transition.fast};
  font-weight: ${(props) => props.$selected ? theme.typography.fontWeight.semibold : theme.typography.fontWeight.normal};
  color: ${theme.colors.text.primary};
  
  &:hover {
    border-color: ${theme.colors.primary.main};
  }
`;

const FeedbackMessage = styled.div<{ $type: 'correct' | 'incorrect' | 'none' }>`
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  background-color: ${(props) => {
    if (props.$type === 'correct') return theme.colors.success.light;
    if (props.$type === 'incorrect') return theme.colors.danger.light;
    return 'transparent';
  }};
  color: ${(props) => {
    if (props.$type === 'correct') return theme.colors.success.main;
    if (props.$type === 'incorrect') return theme.colors.danger.main;
    return 'transparent';
  }};
  margin-bottom: ${theme.spacing.lg};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
}

const RapidQuizzing: React.FC = () => {
  const [questions] = useState<QuizQuestion[]>([
    {
      id: '1',
      question: 'What is the capital of France?',
      options: ['London', 'Berlin', 'Paris', 'Madrid'],
      correctAnswer: 2
    },
    {
      id: '2',
      question: 'Which planet is known as the Red Planet?',
      options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
      correctAnswer: 1
    },
    {
      id: '3',
      question: 'What is the smallest prime number?',
      options: ['1', '2', '3', '0'],
      correctAnswer: 1
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswer === currentQuestion.correctAnswer;

  const handleAnswerSelect = (index: number) => {
    if (!answered) {
      setSelectedAnswer(index);
      setAnswered(true);
      if (index === currentQuestion.correctAnswer) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
    }
  };

  return (
    <Container>
      <Title>⚡ Topic-Level Rapid Quizzing</Title>
      <QuizContainer>
        <p style={{ marginBottom: theme.spacing.lg, color: theme.colors.text.secondary }}>
          Question {currentQuestionIndex + 1} of {questions.length} | Score: {score}/{questions.length}
        </p>
        <Question>{currentQuestion.question}</Question>
        {answered && (
          <FeedbackMessage $type={isCorrect ? 'correct' : 'incorrect'}>
            {isCorrect ? '✓ Correct!' : '✗ Incorrect. The correct answer is: ' + currentQuestion.options[currentQuestion.correctAnswer]}
          </FeedbackMessage>
        )}
        <OptionsGrid>
          {currentQuestion.options.map((option, index) => (
            <OptionButton
              key={index}
              $selected={selectedAnswer === index}
              $correct={answered && index === currentQuestion.correctAnswer}
              $wrong={answered && selectedAnswer === index && !isCorrect}
              onClick={() => handleAnswerSelect(index)}
              disabled={answered}
            >
              {option}
            </OptionButton>
          ))}
        </OptionsGrid>
        {answered && (
          <button
            onClick={handleNext}
            style={{
              backgroundColor: theme.colors.primary.main,
              color: theme.colors.primary.contrast,
              border: 'none',
              padding: `${theme.spacing.md} ${theme.spacing.lg}`,
              borderRadius: theme.borderRadius.md,
              cursor: 'pointer',
              fontWeight: 'bold',
              width: '100%'
            }}
          >
            {currentQuestionIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        )}
      </QuizContainer>
    </Container>
  );
};

export default RapidQuizzing;
