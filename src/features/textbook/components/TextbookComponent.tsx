import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import MultiFormatIngestion from './MultiFormatIngestion';
import HierarchicalNavigation from './HierarchicalNavigation';
import AIGeneratedBriefings from './AIGeneratedBriefings';
import ContextualConnections from './ContextualConnections';
import InteractiveGlossary from './InteractiveGlossary';

const Container = styled.div`
  padding: ${theme.spacing.xl};
  background: ${theme.colors.bg.secondary};
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const Title = styled.h1`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const Subtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const TabButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  border-bottom: 2px solid ${theme.colors.border.light};
  overflow-x: auto;
`;

const TabButton = styled.button<{ $active?: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: none;
  background: none;
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${props => props.$active ? theme.colors.primary.main : theme.colors.text.secondary};
  border-bottom: 3px solid ${props => props.$active ? theme.colors.primary.main : 'transparent'};
  transition: all ${theme.transition.fast};
  white-space: nowrap;
`;

export const TextbookComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'library' | 'reading' | 'glossary'>('library');

  return (
    <Container>
      <Header>
        <Title>📚 Smart Textbook Studio</Title>
        <Subtitle>Multi-format content with AI-powered learning assistance and contextual understanding</Subtitle>
      </Header>

      <TabButtons>
        <TabButton $active={activeTab === 'library'} onClick={() => setActiveTab('library')}>
          📖 Library
        </TabButton>
        <TabButton $active={activeTab === 'reading'} onClick={() => setActiveTab('reading')}>
          ✨ Reading
        </TabButton>
        <TabButton $active={activeTab === 'glossary'} onClick={() => setActiveTab('glossary')}>
          📚 Glossary
        </TabButton>
      </TabButtons>

      {activeTab === 'library' && (
        <Grid>
          <MultiFormatIngestion />
          <div><HierarchicalNavigation /></div>
        </Grid>
      )}

      {activeTab === 'reading' && (
        <Grid>
          <AIGeneratedBriefings />
          <ContextualConnections />
        </Grid>
      )}

      {activeTab === 'glossary' && <InteractiveGlossary />}
    </Container>
  );
};

export default TextbookComponent;
