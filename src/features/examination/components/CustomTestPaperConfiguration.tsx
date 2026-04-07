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

const ConfigurationGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
`;

const ConfigCard = styled.div`
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
  }
`;

const ConfigLabel = styled.label`
  display: block;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
`;

const ConfigInput = styled.input<{ $type?: string }>`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.md};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
  }
`;

const ConfigSelect = styled.select`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.md};
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
  }
`;

const PreviewBox = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-top: ${theme.spacing.lg};
`;

const PreviewTitle = styled.p`
  font-weight: bold;
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const CreateButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.success.main};
  color: white;
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.success.dark};
  }
`;

const CustomTestPaperConfiguration: React.FC = () => {
  const [config, setConfig] = useState({
    testName: '',
    totalQuestions: 50,
    duration: 120,
    passingMarks: 40,
    board: 'FBISE',
    class: '10',
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setConfig({ ...config, [name]: value });
  };

  return (
    <Container>
      <Title>📋 Custom Test Paper Configuration</Title>
      <ConfigurationGrid>
        <ConfigCard>
          <ConfigLabel>Test Name</ConfigLabel>
          <ConfigInput
            type="text"
            name="testName"
            value={config.testName}
            onChange={handleChange}
            placeholder="e.g., Final Exam 2024"
          />
        </ConfigCard>
        
        <ConfigCard>
          <ConfigLabel>Total Questions</ConfigLabel>
          <ConfigInput
            type="number"
            name="totalQuestions"
            value={config.totalQuestions}
            onChange={handleChange}
            min="1"
            max="200"
          />
        </ConfigCard>
        
        <ConfigCard>
          <ConfigLabel>Duration (minutes)</ConfigLabel>
          <ConfigInput
            type="number"
            name="duration"
            value={config.duration}
            onChange={handleChange}
            min="15"
            max="480"
          />
        </ConfigCard>
        
        <ConfigCard>
          <ConfigLabel>Passing Marks %</ConfigLabel>
          <ConfigInput
            type="number"
            name="passingMarks"
            value={config.passingMarks}
            onChange={handleChange}
            min="0"
            max="100"
          />
        </ConfigCard>
        
        <ConfigCard>
          <ConfigLabel>Board Pattern</ConfigLabel>
          <ConfigSelect name="board" value={config.board} onChange={handleChange}>
            <option>FBISE</option>
            <option>SINDH</option>
            <option>PUNJAB</option>
            <option>KPK</option>
          </ConfigSelect>
        </ConfigCard>
        
        <ConfigCard>
          <ConfigLabel>Class Level</ConfigLabel>
          <ConfigSelect name="class" value={config.class} onChange={handleChange}>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </ConfigSelect>
        </ConfigCard>
      </ConfigurationGrid>
      
      <PreviewBox>
        <PreviewTitle>📄 Test Preview</PreviewTitle>
        <p><strong>Name:</strong> {config.testName || 'Not set'}</p>
        <p><strong>Questions:</strong> {config.totalQuestions}</p>
        <p><strong>Duration:</strong> {config.duration} minutes</p>
        <p><strong>Passing Marks:</strong> {config.passingMarks}%</p>
        <p><strong>Board:</strong> {config.board}</p>
        <CreateButton>✓ Create Test Paper</CreateButton>
      </PreviewBox>
    </Container>
  );
};

export default CustomTestPaperConfiguration;
