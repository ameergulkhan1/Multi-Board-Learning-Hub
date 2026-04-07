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

const SearchContainer = styled.div`
  position: relative;
  margin-bottom: ${theme.spacing.lg};
`;

const SearchBox = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.lg};
  transition: all ${theme.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}12;
  }
`;

const ResultsContainer = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
`;

const ResultCard = styled.div`
  border-left: 4px solid ${theme.colors.primary.main};
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  
  &:hover {
    box-shadow: ${theme.shadows.md};
    transform: translateX(4px);
  }
`;

const ResultTitle = styled.h3`
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.sm};
`;

const ResultDescription = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.md};
`;

const SourceAttribution = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid ${theme.colors.border.light};
`;

const SourceTag = styled.span`
  display: inline-block;
  background-color: ${theme.colors.primary.lighter};
  color: ${theme.colors.primary.main};
  padding: 2px 8px;
  border-radius: ${theme.borderRadius.sm};
  margin-right: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

interface SearchResult {
  id: string;
  title: string;
  description: string;
  source: string;
  confidence: number;
}

const NaturalLanguageSearch: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results] = useState<SearchResult[]>([
    {
      id: '1',
      title: 'What is Photosynthesis?',
      description: 'Photosynthesis is the process by which plants use sunlight, water, and carbon dioxide to create oxygen and energy in the form of glucose.',
      source: 'Biology Textbook - Chapter 3',
      confidence: 0.98
    },
    {
      id: '2',
      title: 'Photosynthesis Equation',
      description: '6CO₂ + 6H₂O + light energy → C₆H₁₂O₆ + 6O₂. This equation shows the chemical process of photosynthesis.',
      source: 'Advanced Biology Notes',
      confidence: 0.95
    },
    {
      id: '3',
      title: 'Light-dependent Reactions',
      description: 'These reactions occur in the thylakoid membranes of chloroplasts and require light energy to produce ATP and NADPH.',
      source: 'Biology Lecture Video - Episode 5',
      confidence: 0.92
    },
  ]);

  const filteredResults = searchQuery.trim().length > 0 ? results.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.description.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  return (
    <Container>
      <Title>🔍 Natural Language Search Bar</Title>
      <SearchContainer>
        <SearchBox
          type="text"
          placeholder="Ask your question... e.g., 'What is photosynthesis?'"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>
      
      {filteredResults.length > 0 && (
        <ResultsContainer>
          {filteredResults.map((result) => (
            <ResultCard key={result.id}>
              <ResultTitle>{result.title}</ResultTitle>
              <ResultDescription>{result.description}</ResultDescription>
              <SourceAttribution>
                <SourceTag>📚 {result.source}</SourceTag>
                <SourceTag>Confidence: {Math.round(result.confidence * 100)}%</SourceTag>
              </SourceAttribution>
            </ResultCard>
          ))}
        </ResultsContainer>
      )}
      
      {searchQuery.trim().length > 0 && filteredResults.length === 0 && (
        <div style={{ textAlign: 'center', padding: theme.spacing.lg, color: theme.colors.text.secondary }}>
          <p>No results found. Try a different search query.</p>
        </div>
      )}
    </Container>
  );
};

export default NaturalLanguageSearch;
