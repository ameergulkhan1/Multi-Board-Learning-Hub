import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import BilingualNoteToggling from './BilingualNoteToggling';
import EnglishUrduTranslation from './EnglishUrduTranslation';
import ScientificTerminologyTransliteration from './ScientificTerminologyTransliteration';
import CulturallyAdaptedExamples from './CulturallyAdaptedExamples';
import VoiceActivatedInput from './VoiceActivatedInput';

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

const VoiceInputSection = styled.div`
  margin-bottom: ${theme.spacing.xl};
  display: flex;
  justify-content: center;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const FullWidthSection = styled.div`
  grid-column: 1 / -1;
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

export const MultilingualComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'notes' | 'translation' | 'terminology' | 'examples'>('notes');

  return (
    <Container>
      <Header>
        <Title>🌍 Multilingual Access Gateway</Title>
        <Subtitle>Bilingual learning with English-Urdu translation, scientific terminology, and culturally adapted content</Subtitle>
      </Header>

      <VoiceInputSection>
        <VoiceActivatedInput />
      </VoiceInputSection>

      <TabButtons>
        <TabButton $active={activeTab === 'notes'} onClick={() => setActiveTab('notes')}>
          📝 Bilingual Notes
        </TabButton>
        <TabButton $active={activeTab === 'translation'} onClick={() => setActiveTab('translation')}>
          🔄 Translation
        </TabButton>
        <TabButton $active={activeTab === 'terminology'} onClick={() => setActiveTab('terminology')}>
          🔬 Terminology
        </TabButton>
        <TabButton $active={activeTab === 'examples'} onClick={() => setActiveTab('examples')}>
          🌏 Examples
        </TabButton>
      </TabButtons>

      <ContentGrid>
        {activeTab === 'notes' && (
          <FullWidthSection>
            <BilingualNoteToggling />
          </FullWidthSection>
        )}
        {activeTab === 'translation' && (
          <FullWidthSection>
            <EnglishUrduTranslation />
          </FullWidthSection>
        )}
        {activeTab === 'terminology' && (
          <FullWidthSection>
            <ScientificTerminologyTransliteration />
          </FullWidthSection>
        )}
        {activeTab === 'examples' && (
          <FullWidthSection>
            <CulturallyAdaptedExamples />
          </FullWidthSection>
        )}
      </ContentGrid>
    </Container>
  );
};

export default MultilingualComponent;
