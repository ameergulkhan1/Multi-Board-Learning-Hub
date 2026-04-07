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

const DoubtForm = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
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
  margin-bottom: ${theme.spacing.lg};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}12;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  min-height: 120px;
  margin-bottom: ${theme.spacing.lg};
  font-family: inherit;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}12;
  }
`;

const SubmitButton = styled.button`
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

const DoubtsListContainer = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const DoubtCard = styled.div`
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const DoubtTitle = styled.h3`
  color: ${theme.colors.text.primary};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.md};
`;

const DoubtContent = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.md};
`;

const DoubtMeta = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  padding-bottom: ${theme.spacing.md};
  border-bottom: 1px solid ${theme.colors.border.light};
  margin-bottom: ${theme.spacing.md};
`;

const ResponseCount = styled.span`
  color: ${theme.colors.primary.main};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

interface Doubt {
  id: string;
  title: string;
  content: string;
  author: string;
  time: string;
  responses: number;
}

const PostDoubt: React.FC = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const [doubts] = useState<Doubt[]>([
    {
      id: '1',
      title: 'What is the difference between mitosis and meiosis?',
      content: 'I am confused about the main differences between these two types of cell division. Can someone explain?',
      author: 'Ahmed Khan',
      time: '2 hours ago',
      responses: 5
    },
    {
      id: '2',
      title: 'How to solve quadratic equations?',
      content: 'I struggle with quadratic equations. Could someone walk me through the process step by step?',
      author: 'Fatima Ali',
      time: '4 hours ago',
      responses: 8
    },
    {
      id: '3',
      title: 'History of the Industrial Revolution',
      content: 'What were the main causes and effects of the Industrial Revolution?',
      author: 'Hassan Ahmed',
      time: '1 day ago',
      responses: 12
    }
  ]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Doubt posted:', formData);
    setFormData({ title: '', content: '' });
  };

  return (
    <Container>
      <Title>❓ Post a Doubt</Title>
      
      <DoubtForm>
        <h3 style={{ marginBottom: theme.spacing.lg }}>Ask Your Question</h3>
        <FormLabel>Question Title</FormLabel>
        <FormInput
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="What do you want to ask?"
        />
        
        <FormLabel>Details</FormLabel>
        <FormTextarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Provide more details about your doubt..."
        />
        
        <SubmitButton onClick={handleSubmit}>? Post Question</SubmitButton>
      </DoubtForm>
      
      <h3 style={{ marginBottom: theme.spacing.lg }}>Recent Doubts</h3>
      <DoubtsListContainer>
        {doubts.map((doubt) => (
          <DoubtCard key={doubt.id}>
            <DoubtTitle>{doubt.title}</DoubtTitle>
            <DoubtContent>{doubt.content}</DoubtContent>
            <DoubtMeta>
              <span>👤 {doubt.author}</span>
              <span>🕐 {doubt.time}</span>
              <ResponseCount>💬 {doubt.responses} responses</ResponseCount>
            </DoubtMeta>
            <button style={{
              backgroundColor: theme.colors.primary.lighter,
              color: theme.colors.primary.main,
              border: 'none',
              padding: `${theme.spacing.sm} ${theme.spacing.md}`,
              borderRadius: theme.borderRadius.md,
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              View & Respond
            </button>
          </DoubtCard>
        ))}
      </DoubtsListContainer>
    </Container>
  );
};

export default PostDoubt;
