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

const SearchContainer = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const SearchBox = styled.input`
  width: 100%;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: 2px solid ${theme.colors.primary.main};
  border-radius: ${theme.borderRadius.lg};
  font-size: ${theme.typography.fontSize.base};
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}12;
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const ResultCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.secondary.light} 0%, ${theme.colors.secondary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.secondary.main};
  transition: all ${theme.transition.fast};
  
  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateX(4px);
  }
`;

const ResultTitle = styled.h3`
  color: ${theme.colors.secondary.main};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.md};
`;

const ResultContent = styled.p`
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.md};
`;

const ResultMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  padding-top: ${theme.spacing.md};
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const SourceBadge = styled.span`
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.secondary.contrast};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.xs};
`;

const RelevanceScore = styled.span`
  color: ${theme.colors.success.main};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const ViewButton = styled.button`
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.secondary.contrast};
  border: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.secondary.dark};
  }
`;

interface SearchResult {
  id: string;
  title: string;
  content: string;
  source: string;
  relevance: number;
  type: 'textbook' | 'notes' | 'summary';
}

const SemanticRetrieval: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const [results] = useState<SearchResult[]>([
    {
      id: '1',
      title: 'Understanding Photosynthesis: Light Reactions',
      content: 'The light reactions occur in the thylakoid membrane of chloroplasts. These reactions capture light energy and convert it into chemical energy (ATP and NADPH)...',
      source: 'Biology Textbook - Chapter 8',
      relevance: 98,
      type: 'textbook'
    },
    {
      id: '2',
      title: 'Photosynthesis Summary Notes',
      content: 'Key points: Photosynthesis = Light reactions + Calvin cycle. Light reactions produce ATP and NADPH. Calvin cycle produces glucose...',
      source: 'Class Notes',
      relevance: 85,
      type: 'notes'
    },
    {
      id: '3',
      title: 'Chlorophyll\'s Role in Light Absorption',
      content: 'Chlorophyll absorbs specific wavelengths of light. The absorbed energy excites electrons in the photosystem II complex, initiating the electron transport chain...',
      source: 'Textbook - Advanced Biology',
      relevance: 78,
      type: 'summary'
    }
  ]);

  const filteredResults = results.filter(result => 
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Title>🔍 Semantic Retrieval Engine</Title>
      
      <SearchContainer>
        <SearchBox 
          type="text"
          placeholder="Search for concepts, topics, or questions..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </SearchContainer>
      
      {searchQuery && filteredResults.length > 0 && (
        <div>
          <p style={{ marginBottom: theme.spacing.lg, color: theme.colors.text.secondary }}>
            Found {filteredResults.length} results for "{searchQuery}"
          </p>
          
          <ResultsGrid>
            {filteredResults.map((result) => (
              <ResultCard key={result.id}>
                <ResultTitle>{result.title}</ResultTitle>
                <ResultContent>{result.content}</ResultContent>
                <ResultMeta>
                  <div style={{ display: 'flex', gap: theme.spacing.lg, alignItems: 'center' }}>
                    <SourceBadge>{result.source}</SourceBadge>
                    <RelevanceScore>{result.relevance}% Match</RelevanceScore>
                  </div>
                  <ViewButton>View Full Content →</ViewButton>
                </ResultMeta>
              </ResultCard>
            ))}
          </ResultsGrid>
        </div>
      )}
      
      {!searchQuery && (
        <div style={{ textAlign: 'center', padding: theme.spacing.xl }}>
          <p style={{ color: theme.colors.text.secondary, fontSize: theme.typography.fontSize.lg }}>
            💡 Try searching for concepts like "photosynthesis", "quadratic equations", or "world war 2"
          </p>
        </div>
      )}
    </Container>
  );
};

export default SemanticRetrieval;
