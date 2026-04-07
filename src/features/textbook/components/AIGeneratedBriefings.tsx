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

const BriefingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${theme.spacing.lg};
`;

const BriefingCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.secondary.light} 0%, ${theme.colors.secondary.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.secondary.main};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ChapterTitle = styled.h3`
  color: ${theme.colors.secondary.main};
  margin-bottom: ${theme.spacing.md};
`;

const BriefingContent = styled.div`
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.lg};
  font-size: ${theme.typography.fontSize.sm};
  margin-bottom: ${theme.spacing.lg};
`;

const KeyPoints = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: ${theme.spacing.lg};
`;

const KeyPoint = styled.li`
  color: ${theme.colors.text.secondary};
  padding: ${theme.spacing.sm} 0;
  padding-left: ${theme.spacing.md};
  border-left: 2px solid ${theme.colors.secondary.main};
  margin-bottom: ${theme.spacing.sm};
  
  &:before {
    content: "✓ ";
    color: ${theme.colors.secondary.main};
    font-weight: bold;
    margin-right: ${theme.spacing.sm};
  }
`;

const ReadMore = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.secondary.main};
  color: ${theme.colors.secondary.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.secondary.dark};
  }
`;

interface Briefing {
  id: string;
  chapter: string;
  content: string;
  keyPoints: string[];
}

const AIGeneratedBriefings: React.FC = () => {
  const [briefings] = useState<Briefing[]>([
    {
      id: '1',
      chapter: 'Chapter 5: Photosynthesis',
      content: 'Photosynthesis is the process by which plants use light energy to synthesize glucose from carbon dioxide and water. This process occurs in two stages: the light-dependent reactions in the thylakoid membrane and the light-independent reactions (Calvin cycle) in the stroma.',
      keyPoints: [
        'Light reactions produce ATP and NADPH',
        'Calvin cycle converts CO2 to glucose',
        'Chlorophyll absorbs light energy',
        'Water is split in photolysis'
      ]
    },
    {
      id: '2',
      chapter: 'Chapter 6: Cellular Respiration',
      content: 'Cellular respiration is the process that releases energy from organic molecules, primarily glucose, by breaking them down in a series of chemical reactions. The main stages are glycolysis, the citric acid cycle, and the electron transport chain.',
      keyPoints: [
        'Glycolysis occurs in cytoplasm',
        'Krebs cycle creates NADH and FADH2',
        'Electron transport produces most ATP',
        'Anaerobic respiration produces fewer ATP'
      ]
    },
    {
      id: '3',
      chapter: 'Chapter 7: Cell Division & Mitosis',
      content: 'Mitosis is the process of cell division that produces two identical daughter cells. It is preceded by a period called interphase where the cell grows and replicates its DNA. Mitosis is followed by cytokinesis, the physical division of the cell.',
      keyPoints: [
        'Prophase: Chromosomes condense',
        'Metaphase: Chromosomes align at center',
        'Anaphase: Sister chromatids separate',
        'Telophase: Nuclear envelopes reform'
      ]
    },
    {
      id: '4',
      chapter: 'Chapter 8: Meiosis & Genetic Variation',
      content: 'Meiosis is a specialized form of cell division that produces gametes (sperm and eggs) with half the chromosome number of the parent cell. It consists of two divisions and produces four genetically diverse haploid cells.',
      keyPoints: [
        'Produces four haploid cells',
        'Crossing over increases variation',
        'Separates homologous chromosomes',
        'Essential for sexual reproduction'
      ]
    }
  ]);

  return (
    <Container>
      <Title>📚 AI-Generated Chapter Briefings</Title>
      
      <BriefingGrid>
        {briefings.map((briefing) => (
          <BriefingCard key={briefing.id}>
            <ChapterTitle>{briefing.chapter}</ChapterTitle>
            <BriefingContent>{briefing.content}</BriefingContent>
            <KeyPoints>
              {briefing.keyPoints.map((point, idx) => (
                <KeyPoint key={idx}>{point}</KeyPoint>
              ))}
            </KeyPoints>
            <ReadMore>📖 Read Full Chapter</ReadMore>
          </BriefingCard>
        ))}
      </BriefingGrid>
    </Container>
  );
};

export default AIGeneratedBriefings;
