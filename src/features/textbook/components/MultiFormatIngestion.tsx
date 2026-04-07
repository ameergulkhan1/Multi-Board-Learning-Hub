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

const FormatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.lg};
`;

const FormatCard = styled.div<{ $active?: boolean }>`
  border: 2px solid ${(props) => props.$active ? theme.colors.primary.main : theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  text-align: center;
  
  &:hover {
    border-color: ${theme.colors.primary.main};
    box-shadow: ${theme.shadows.md};
  }
`;

const FormatIcon = styled.div`
  font-size: 3rem;
  margin-bottom: ${theme.spacing.md};
`;

const FormatName = styled.p`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const FormatDescription = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const UploadArea = styled.div`
  border: 2px dashed ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing['2xl']};
  text-align: center;
  cursor: pointer;
  transition: all ${theme.transition.fast};
  margin-top: ${theme.spacing.lg};
  
  &:hover {
    border-color: ${theme.colors.primary.main};
    background-color: ${theme.colors.primary.lighter};
  }
`;

interface Format {
  id: string;
  name: string;
  icon: string;
  description: string;
}

const MultiFormatIngestion: React.FC = () => {
  const [formats] = useState<Format[]>([
    { id: '1', name: 'PDF', icon: '📄', description: 'Import PDF textbooks' },
    { id: '2', name: 'EPUB', icon: '📕', description: 'Upload EPUB format books' },
    { id: '3', name: 'Video', icon: '🎥', description: 'Embed video lectures' },
    { id: '4', name: 'Interactive', icon: '🎨', description: 'Create interactive content' },
    { id: '5', name: 'Audio', icon: '🎙️', description: 'Add audio explanations' },
    { id: '6', name: 'Documents', icon: '📋', description: 'Import Word/Google Docs' },
  ]);

  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);

  return (
    <Container>
      <Title>📚 Multi-Format Textbook Ingestion</Title>
      <FormatGrid>
        {formats.map((format) => (
          <FormatCard 
            key={format.id} 
            $active={selectedFormat === format.id}
            onClick={() => setSelectedFormat(format.id)}
          >
            <FormatIcon>{format.icon}</FormatIcon>
            <FormatName>{format.name}</FormatName>
            <FormatDescription>{format.description}</FormatDescription>
          </FormatCard>
        ))}
      </FormatGrid>
      {selectedFormat && (
        <UploadArea>
          <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>📤 Drag and drop your file here</p>
          <p style={{ color: theme.colors.text.secondary }}>or click to browse</p>
        </UploadArea>
      )}
    </Container>
  );
};

export default MultiFormatIngestion;
