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

const SearchBox = styled.input`
  width: 100%;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.base};
  margin-bottom: ${theme.spacing.lg};
  transition: all ${theme.transition.fast};
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}12;
  }
`;

const GlossaryList = styled.div`
  display: grid;
  gap: ${theme.spacing.md};
`;

const GlossaryItem = styled.div`
  border: 1px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  
  &:hover {
    border-color: ${theme.colors.primary.main};
    background-color: ${theme.colors.primary.lighter};
    box-shadow: ${theme.shadows.md};
  }
`;

const Term = styled.h3`
  color: ${theme.colors.primary.main};
  font-size: ${theme.typography.fontSize.lg};
  margin-bottom: ${theme.spacing.sm};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const Definition = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.md};
`;

const Example = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-left: 3px solid ${theme.colors.warning.main};
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.sm};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

interface GlossaryEntry {
  id: string;
  term: string;
  definition: string;
  example: string;
  relatedTerms?: string[];
}

const InteractiveGlossary: React.FC = () => {
  const [glossary] = useState<GlossaryEntry[]>([
    {
      id: '1',
      term: 'Photosynthesis',
      definition: 'The process by which green plants use sunlight to synthesize foods with carbon dioxide and water.',
      example: 'Plants absorb sunlight and convert it into chemical energy through photosynthesis.',
      relatedTerms: ['Chlorophyll', 'Carbon Dioxide', 'Glucose']
    },
    {
      id: '2',
      term: 'Mitochondria',
      definition: 'The powerhouse of the cell, responsible for producing energy in the form of ATP.',
      example: 'Active cells like muscle cells contain many mitochondria to meet energy demands.',
      relatedTerms: ['ATP', 'Cellular Respiration', 'Organelle']
    },
    {
      id: '3',
      term: 'Osmosis',
      definition: 'The movement of water molecules across a semipermeable membrane to equalize concentration.',
      example: 'When a plant cell is placed in a hypotonic solution, water enters through osmosis.',
      relatedTerms: ['Diffusion', 'Semipermeable', 'Concentration']
    },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEntry, setSelectedEntry] = useState<GlossaryEntry | null>(null);

  const filteredGlossary = glossary.filter((entry) =>
    entry.term.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Title>📚 Interactive Glossary</Title>
      <SearchBox
        type="text"
        placeholder="🔍 Search for terms..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <GlossaryList>
        {filteredGlossary.map((entry) => (
          <GlossaryItem
            key={entry.id}
            onClick={() => setSelectedEntry(selectedEntry?.id === entry.id ? null : entry)}
          >
            <Term>{entry.term}</Term>
            <Definition>{entry.definition}</Definition>
            {selectedEntry?.id === entry.id && (
              <>
                <Example>
                  <strong>Example:</strong> {entry.example}
                </Example>
                {entry.relatedTerms && (
                  <div style={{ marginTop: theme.spacing.md }}>
                    <p style={{ fontSize: theme.typography.fontSize.sm, fontWeight: 'bold', marginBottom: theme.spacing.sm }}>Related Terms:</p>
                    <div style={{ display: 'flex', gap: theme.spacing.sm, flexWrap: 'wrap' }}>
                      {entry.relatedTerms.map((term) => (
                        <span key={term} style={{
                          backgroundColor: theme.colors.primary.lighter,
                          color: theme.colors.primary.main,
                          padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
                          borderRadius: theme.borderRadius.sm,
                          fontSize: theme.typography.fontSize.sm
                        }}>
                          {term}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </GlossaryItem>
        ))}
      </GlossaryList>
    </Container>
  );
};

export default InteractiveGlossary;
