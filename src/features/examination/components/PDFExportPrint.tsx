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

const ExportContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success.light} 0%, ${theme.colors.success.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const OptionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const OptionCard = styled.div<{ selected: boolean }>`
  background: ${props => props.selected ? 'white' : theme.colors.bg.secondary};
  border: 2px solid ${props => props.selected ? theme.colors.success.main : theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  text-align: center;
  
  &:hover {
    border-color: ${theme.colors.success.main};
  }
`;

const OptionIcon = styled.div`
  font-size: 32px;
  margin-bottom: ${theme.spacing.md};
`;

const OptionLabel = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const OptionDescription = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin-top: ${theme.spacing.sm};
`;

const PreviewBox = styled.div`
  background-color: white;
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  min-height: 300px;
`;

const PreviewTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
  border-bottom: 2px solid ${theme.colors.border.light};
  padding-bottom: ${theme.spacing.lg};
`;

const PreviewContent = styled.div`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.lg};
`;

const ExportButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.success.main};
  color: ${theme.colors.success.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.base};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.success.dark};
  }
`;

interface ExportFormat {
  id: string;
  name: string;
  icon: string;
  description: string;
  type: 'pdf' | 'word' | 'html' | 'print';
}

const PDFExportPrint: React.FC = () => {
  const [selectedFormat, setSelectedFormat] = useState<string>('pdf');

  const formats: ExportFormat[] = [
    { 
      id: '1', 
      name: 'PDF Document', 
      icon: '📄', 
      description: 'Professional PDF format', 
      type: 'pdf' 
    },
    { 
      id: '2', 
      name: 'Word Document', 
      icon: '📝', 
      description: 'Editable Word format', 
      type: 'word' 
    },
    { 
      id: '3', 
      name: 'HTML Web Page', 
      icon: '🌐', 
      description: 'View in browser', 
      type: 'html' 
    },
    { 
      id: '4', 
      name: 'Print Ready', 
      icon: '🖨️', 
      description: 'Optimized for printing', 
      type: 'print' 
    }
  ];

  const previewContent = {
    title: 'Biology Test Paper - Photosynthesis & Cellular Respiration',
    content: `
      Examination Board: Federal Board (FBISE)
      Class: 10
      Subject: Biology
      Total Marks: 100
      Duration: 120 minutes
      
      Part A: Multiple Choice Questions (25 marks)
      1. Which organelle is responsible for photosynthesis?
      2. What is the main product of photosynthesis?
      ...
      
      Part B: Short Questions (30 marks)
      Section I: Answer any 5 questions (5 × 2 = 10 marks)
      Section II: Answer any 5 questions (5 × 4 = 20 marks)
      
      Part C: Long Questions (45 marks)
      Answer any 3 questions out of 5 (3 × 15 = 45 marks)
    `
  };

  return (
    <Container>
      <Title>📑 PDF Export & Print</Title>
      
      <ExportContainer>
        <h3 style={{ marginBottom: theme.spacing.lg, color: theme.colors.success.main }}>Select Export Format</h3>
        
        <OptionGrid>
          {formats.map((format) => (
            <OptionCard 
              key={format.id}
              selected={selectedFormat === format.id}
              onClick={() => setSelectedFormat(format.id)}
            >
              <OptionIcon>{format.icon}</OptionIcon>
              <OptionLabel>{format.name}</OptionLabel>
              <OptionDescription>{format.description}</OptionDescription>
            </OptionCard>
          ))}
        </OptionGrid>
      </ExportContainer>
      
      <PreviewBox>
        <PreviewTitle>📋 Export Preview</PreviewTitle>
        <PreviewContent>
          {previewContent.content.split('\n').map((line, idx) => (
            <div key={idx} style={{ marginBottom: line.trim() ? theme.spacing.sm : theme.spacing.lg }}>
              {line}
            </div>
          ))}
        </PreviewContent>
      </PreviewBox>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: theme.spacing.lg }}>
        <ExportButton style={{ backgroundColor: theme.colors.success.main }}>
          ⬇️ Export {selectedFormat.toUpperCase()}
        </ExportButton>
        <ExportButton style={{ backgroundColor: theme.colors.secondary.main }}>
          🖨️ Print Preview
        </ExportButton>
      </div>
    </Container>
  );
};

export default PDFExportPrint;
