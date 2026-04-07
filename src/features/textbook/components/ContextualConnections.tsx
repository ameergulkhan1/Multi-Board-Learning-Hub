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

const ConnectionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${theme.spacing.lg};
`;

const ConnectionCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.warning.light} 0%, ${theme.colors.warning.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.warning.main};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ConnecTitle = styled.h3`
  color: ${theme.colors.warning.main};
  margin-bottom: ${theme.spacing.md};
`;

const RealWorldExample = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const ExampleTitle = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const ExampleContent = styled.p`
  color: ${theme.colors.text.secondary};
  line-height: ${theme.typography.lineHeight.lg};
  font-size: ${theme.typography.fontSize.sm};
`;

const ConnectionLink = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  padding: ${theme.spacing.sm} 0;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  cursor: pointer;
  
  &:hover {
    color: ${theme.colors.warning.main};
  }
`;

const LearnMoreButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.warning.main};
  color: ${theme.colors.warning.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.warning.dark};
  }
`;

interface Connection {
  id: string;
  concept: string;
  category: string;
  realWorldExamples: string[];
  connectedTopics: string[];
}

const ContextualConnections: React.FC = () => {
  const [connections] = useState<Connection[]>([
    {
      id: '1',
      concept: 'Photosynthesis',
      category: 'Biology',
      realWorldExamples: [
        'How plants feed themselves using sunlight',
        'Why leaves are green (chlorophyll absorbs light)',
        'How oxygen is produced for us to breathe',
        'The basis of food chains in nature'
      ],
      connectedTopics: ['Cellular Respiration', 'Energy Flow', 'Plant Structure']
    },
    {
      id: '2',
      concept: 'Enzymes',
      category: 'Biochemistry',
      realWorldExamples: [
        'How our stomach digests food',
        'Why yeast helps bread rise (fermentation)',
        'How detergents break down oil stains',
        'Industrial uses in food production'
      ],
      connectedTopics: ['Cellular Respiration', 'Protein Structure', 'Catalysis']
    },
    {
      id: '3',
      concept: 'pH and Buffers',
      category: 'Chemistry',
      realWorldExamples: [
        'Why antacids relief stomach acid',
        'How soil pH affects plant growth',
        'Blood pH balance in human body',
        'Water treatment in aquariums'
      ],
      connectedTopics: ['Acid-Base Chemistry', 'Salts', 'Biological Systems']
    },
    {
      id: '4',
      concept: 'Osmosis',
      category: 'Biology',
      realWorldExamples: [
        'Why salt preserves food (drying bacteria)',
        'How plants absorb water from soil',
        'Why we get wrinkled in the pool',
        'Kidney function and water balance'
      ],
      connectedTopics: ['Cell Membrane', 'Diffusion', 'Transport']
    }
  ]);

  return (
    <Container>
      <Title>🔗 Contextual Connections to Real World</Title>
      
      <ConnectionsGrid>
        {connections.map((connection) => (
          <ConnectionCard key={connection.id}>
            <ConnecTitle>{connection.concept}</ConnecTitle>
            
            {connection.realWorldExamples.map((example, idx) => (
              <RealWorldExample key={idx}>
                <ExampleTitle>💡 Example {idx + 1}</ExampleTitle>
                <ExampleContent>{example}</ExampleContent>
              </RealWorldExample>
            ))}
            
            <div style={{ marginBottom: theme.spacing.lg }}>
              <ExampleTitle>🔗 Connected Topics</ExampleTitle>
              {connection.connectedTopics.map((topic, idx) => (
                <ConnectionLink key={idx}>→ {topic}</ConnectionLink>
              ))}
            </div>
            
            <LearnMoreButton>📖 Learn More Connections</LearnMoreButton>
          </ConnectionCard>
        ))}
      </ConnectionsGrid>
    </Container>
  );
};

export default ContextualConnections;
