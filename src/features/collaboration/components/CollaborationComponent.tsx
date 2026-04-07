import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import TopicDiscussionSpaces from './TopicDiscussionSpaces';
import PostDoubt from './PostDoubt';
import PeerResponseUpvoting from './PeerResponseUpvoting';
import VerifiedExpertContributions from './VerifiedExpertContributions';
import RealTimeInteractionAlerts from './RealTimeInteractionAlerts';

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

const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.xl};
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 300px;
  }
`;

const ContentArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const SidebarArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
  
  @media (max-width: 1023px) {
    display: none;
  }
`;

const TabButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  overflow-x: auto;
`;

const TabButton = styled.button<{ $active?: boolean }>`
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border: 2px solid ${props => props.$active ? theme.colors.primary.main : theme.colors.border.light};
  background: ${props => props.$active ? theme.colors.primary.lighter : 'white'};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${props => props.$active ? theme.colors.primary.main : theme.colors.text.primary};
  white-space: nowrap;
  transition: all ${theme.transition.fast};
`;

export const CollaborationComponent: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'discussions' | 'doubts' | 'experts'>('discussions');

  return (
    <Container>
      <Header>
        <Title>🤝 Collaborative Learning Network</Title>
        <Subtitle>Topic-centric discussion spaces with peer support and verified expert contributions</Subtitle>
      </Header>

      <TabButtons>
        <TabButton $active={activeTab === 'discussions'} onClick={() => setActiveTab('discussions')}>
          💬 Discussions
        </TabButton>
        <TabButton $active={activeTab === 'doubts'} onClick={() => setActiveTab('doubts')}>
          ❓ Doubts
        </TabButton>
        <TabButton $active={activeTab === 'experts'} onClick={() => setActiveTab('experts')}>
          ⭐ Experts
        </TabButton>
      </TabButtons>

      <MainGrid>
        <ContentArea>
          {activeTab === 'discussions' && (
            <>
              <TopicDiscussionSpaces />
              <PeerResponseUpvoting />
            </>
          )}
          {activeTab === 'doubts' && <PostDoubt />}
          {activeTab === 'experts' && <VerifiedExpertContributions />}
        </ContentArea>
        <SidebarArea>
          <RealTimeInteractionAlerts />
        </SidebarArea>
      </MainGrid>
    </Container>
  );
};

export default CollaborationComponent;
