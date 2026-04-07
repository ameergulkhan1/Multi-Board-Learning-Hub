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

const SourceCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success.light} 0%, ${theme.colors.success.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  border-left: 4px solid ${theme.colors.success.main};
`;

const Content = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const ContentText = styled.p`
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const SourceInfo = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.lg};
  border: 1px solid ${theme.colors.border.light};
`;

const SourceTitle = styled.h3`
  color: ${theme.colors.success.main};
  margin-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.base};
`;

const SourceDetail = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.sm} 0;
  border-bottom: 1px solid ${theme.colors.border.light};
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.span`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const DetailValue = styled.span`
  color: ${theme.colors.text.secondary};
  text-decoration: underline;
  cursor: pointer;
  
  &:hover {
    color: ${theme.colors.primary.main};
  }
`;

const VerificationBadge = styled.span<{ verified: boolean }>`
  display: inline-block;
  background-color: ${props => props.verified ? theme.colors.success.main : theme.colors.warning.main};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.bold};
  font-size: ${theme.typography.fontSize.xs};
  margin-bottom: ${theme.spacing.lg};
`;

const ViewSourceButton = styled.button`
  width: 100%;
  padding: ${theme.spacing.md};
  background-color: ${theme.colors.success.main};
  color: ${theme.colors.success.contrast};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  
  &:hover {
    background-color: ${theme.colors.success.dark};
  }
`;

interface Source {
  id: string;
  content: string;
  verified: boolean;
  sourceType: string;
  author: string;
  url: string;
  accessDate: string;
}

const SourceAttribution: React.FC = () => {
  const [sources] = useState<Source[]>([
    {
      id: '1',
      content: 'Photosynthesis occurs in the chloroplasts of plant cells. The process converts light energy into chemical energy stored in glucose molecules. It consists of two main stages: the light-dependent reactions and the Calvin cycle.',
      verified: true,
      sourceType: 'Biology Textbook',
      author: 'Campbell Biology, 12th Edition',
      url: 'https://www.pearson.com/en-us/subject-catalog/p/Campbell-Biology/P200000006183',
      accessDate: '2024-11-15'
    },
    {
      id: '2',
      content: 'The light reactions occur in the thylakoid membrane where chlorophyll absorbs photons and excites electrons. These electrons pass through electron transport chains, ultimately driving ATP synthesis.',
      verified: true,
      sourceType: 'Scientific Article',
      author: 'Nature Photosynthesis Review',
      url: 'https://www.nature.com/articles/nature-photosynthesis',
      accessDate: '2024-11-14'
    },
    {
      id: '3',
      content: 'The Calvin cycle, also known as the light-independent reactions, occurs in the stroma. This cycle uses ATP and NADPH from the light reactions to fix carbon dioxide into organic molecules.',
      verified: true,
      sourceType: 'Educational Resource',
      author: 'Khan Academy Biology',
      url: 'https://www.khanacademy.org/science/biology/photosynthesis',
      accessDate: '2024-11-13'
    }
  ]);

  return (
    <Container>
      <Title>📚 Source Attribution</Title>
      
      {sources.map((source) => (
        <SourceCard key={source.id}>
          <VerificationBadge verified={source.verified}>
            {source.verified ? '✓ Verified Source' : '⚠️ Unverified'}
          </VerificationBadge>
          
          <Content>
            <ContentText>"{source.content}"</ContentText>
          </Content>
          
          <SourceInfo>
            <SourceTitle>📖 Source Information</SourceTitle>
            <SourceDetail>
              <DetailLabel>Source Type:</DetailLabel>
              <DetailValue>{source.sourceType}</DetailValue>
            </SourceDetail>
            <SourceDetail>
              <DetailLabel>Author/Publication:</DetailLabel>
              <DetailValue>{source.author}</DetailValue>
            </SourceDetail>
            <SourceDetail>
              <DetailLabel>URL:</DetailLabel>
              <DetailValue>{source.url}</DetailValue>
            </SourceDetail>
            <SourceDetail>
              <DetailLabel>Last Accessed:</DetailLabel>
              <DetailValue>{source.accessDate}</DetailValue>
            </SourceDetail>
          </SourceInfo>
          
          <ViewSourceButton style={{ marginTop: theme.spacing.lg }}>
            🔗 View Original Source
          </ViewSourceButton>
        </SourceCard>
      ))}
    </Container>
  );
};

export default SourceAttribution;
