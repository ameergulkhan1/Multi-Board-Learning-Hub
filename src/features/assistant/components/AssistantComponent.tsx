import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import NaturalLanguageSearch from './NaturalLanguageSearch';
import SemanticRetrieval from './SemanticRetrieval';
import SourceAttribution from './SourceAttribution';
import ProgressiveClarification from './ProgressiveClarification';
import QueryHistory from './QueryHistory';

const Container = styled.div`
  padding: ${theme.spacing.xl};
  background: ${theme.colors.bg.secondary};
  min-height: 100vh;
`;

const Header = styled.div`
  margin-bottom: ${theme.spacing.xl};
  text-align: center;
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
  max-width: 600px;
  margin: 0 auto;
`;

const SearchSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
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
  white-space: nowrap;
  transition: all ${theme.transition.fast};
`;

export const AssistantComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'search' | 'clarify' | 'history'>('search');

  return (
    <Container>
      <Header>
        <Title>🤖 Cognitive Query Assistant</Title>
        <Subtitle>Natural language search with semantic understanding, source attribution, and contextual clarification</Subtitle>
      </Header>

      <SearchSection>
        <NaturalLanguageSearch />
      </SearchSection>

      <TabButtons>
        <TabButton $active={activeTab === 'search'} onClick={() => setActiveTab('search')}>
          🔍 Results
        </TabButton>
        <TabButton $active={activeTab === 'clarify'} onClick={() => setActiveTab('clarify')}>
          🔄 Clarify
        </TabButton>
        <TabButton $active={activeTab === 'history'} onClick={() => setActiveTab('history')}>
          📚 History
        </TabButton>
      </TabButtons>

      <ContentGrid>
        {activeTab === 'search' && (
          <>
            <SemanticRetrieval />
            <SourceAttribution />
          </>
        )}
        {activeTab === 'clarify' && <ProgressiveClarification />}
        {activeTab === 'history' && <QueryHistory />}
      </ContentGrid>
    </Container>
  );
};

export default AssistantComponent;
