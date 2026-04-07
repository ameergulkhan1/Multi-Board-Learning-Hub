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

const ExamplesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
`;

const ExampleCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.warning.light} 0%, ${theme.colors.warning.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border: 2px solid ${theme.colors.warning.main};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ConceptTitle = styled.h3`
  color: ${theme.colors.warning.main};
  margin-bottom: ${theme.spacing.lg};
`;

const ExampleSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
`;

const SectionTitle = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const ExampleContent = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.lg};
  font-size: ${theme.typography.fontSize.sm};
`;

const CulturallyAdaptedExamples: React.FC = () => {
  const [examples] = useState<any[]>([
    {
      id: '1',
      concept: 'Photosynthesis',
      globalExample: 'A corn field converts sunlight into corn stalks and grain',
      culturalExample: 'Rice paddies in Pakistan convert sunlight into rice crops, essential for our food',
      connection: 'Both show how plants capture light energy to make food',
      relevance: 'Pakistan is a major rice and wheat producer'
    },
    {
      id: '2',
      concept: 'Water Cycle',
      globalExample: 'Evaporation from the ocean causes cloud formation',
      culturalExample: 'The monsoon rains that come to Pakistan in summer are part of the water cycle bringing life-giving water',
      connection: 'Both involve water movement through atmosphere',
      relevance: 'Monsoons are crucial for Pakistan\'s agriculture and seasons'
    },
    {
      id: '3',
      concept: 'Osmosis',
      globalExample: 'Salt preserves food by drawing out water',
      culturalExample: 'Achar (pickles) in Pakistan use salt to preserve vegetables and fruits, extending shelf life',
      connection: 'Both use osmosis to achieve preservation',
      relevance: 'Traditional food preservation methods used across South Asia'
    },
    {
      id: '4',
      concept: 'Enzyme Activity',
      globalExample: 'Yeast fermentation creates bread',
      culturalExample: 'Fermentation of milk creates yogurt and dahi, common in Pakistani cuisine',
      connection: 'Both use enzymes to break down and transform food',
      relevance: 'Fermented foods are staple nutrition in our culture'
    },
    {
      id: '5',
      concept: 'Energy Transfer',
      globalExample: 'A food chain from grass to cattle to humans',
      culturalExample: 'In Pakistan: Wheat crops → livestock (goats, chickens) → people\'s meals',
      connection: 'Both show energy transfer through food chains',
      relevance: 'Agricultural system specific to Pakistani farming practices'
    },
    {
      id: '6',
      concept: 'Biodiversity',
      globalExample: 'Rainforest ecosystems have many species',
      culturalExample: 'Pakistan\'s diverse ecosystems: Himalayan mountains, deserts, wetlands host unique wildlife',
      connection: 'Both showcase range of organisms in specific environments',
      relevance: 'Pakistan has unique endemic species not found elsewhere'
    }
  ]);

  return (
    <Container>
      <Title>🌍 Culturally Adapted Examples for Pakistan</Title>
      
      <div style={{ marginBottom: theme.spacing.xl, padding: theme.spacing.lg, backgroundColor: theme.colors.bg.secondary, borderRadius: theme.borderRadius.lg }}>
        <p style={{ color: theme.colors.text.secondary, lineHeight: theme.typography.lineHeight.lg }}>
          Understanding scientific concepts becomes easier when we relate them to familiar examples from our own culture and environment. Below are scientific concepts explained with examples from Pakistan and South Asian context.
        </p>
      </div>
      
      <ExamplesGrid>
        {examples.map((example) => (
          <ExampleCard key={example.id}>
            <ConceptTitle>{example.concept}</ConceptTitle>
            
            <ExampleSection>
              <SectionTitle>🌍 Global Example</SectionTitle>
              <ExampleContent>{example.globalExample}</ExampleContent>
            </ExampleSection>
            
            <ExampleSection>
              <SectionTitle>🇵🇰 Pakistan/Local Example</SectionTitle>
              <ExampleContent>{example.culturalExample}</ExampleContent>
            </ExampleSection>
            
            <ExampleSection>
              <SectionTitle>🔗 Connection</SectionTitle>
              <ExampleContent>{example.connection}</ExampleContent>
            </ExampleSection>
            
            <ExampleSection>
              <SectionTitle>✨ Relevance</SectionTitle>
              <ExampleContent>{example.relevance}</ExampleContent>
            </ExampleSection>
          </ExampleCard>
        ))}
      </ExamplesGrid>
    </Container>
  );
};

export default CulturallyAdaptedExamples;
