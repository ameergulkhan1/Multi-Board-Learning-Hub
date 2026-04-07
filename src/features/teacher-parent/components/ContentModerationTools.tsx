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

const TabContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  border-bottom: 2px solid ${theme.colors.border.light};
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${props => props.active ? theme.colors.danger.main : theme.colors.text.secondary};
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? theme.colors.danger.main : 'transparent'};
  transition: all ${theme.transition.fast};
`;

const ContentList = styled.div`
  display: grid;
  gap: ${theme.spacing.lg};
`;

const ContentReviewCard = styled.div<{ status: 'pending' | 'approved' | 'rejected' }>`
  background: ${props => {
    if (props.status === 'pending') return `linear-gradient(135deg, ${theme.colors.warning.light} 0%, ${theme.colors.warning.light} 100%)`;
    if (props.status === 'approved') return `linear-gradient(135deg, ${theme.colors.success.light} 0%, ${theme.colors.success.light} 100%)`;
    return `linear-gradient(135deg, ${theme.colors.danger.light} 0%, ${theme.colors.danger.light} 100%)`;
  }};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  border-left: 4px solid ${props => {
    if (props.status === 'pending') return theme.colors.warning.main;
    if (props.status === 'approved') return theme.colors.success.main;
    return theme.colors.danger.main;
  }};
`;

const ContentTitle = styled.h3`
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.md};
`;

const ContentText = styled.p`
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.md};
  line-height: ${theme.typography.lineHeight.lg};
`;

const ContentMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const StatusBadge = styled.span<{ status: 'pending' | 'approved' | 'rejected' }>`
  background-color: ${props => {
    if (props.status === 'pending') return theme.colors.warning.main;
    if (props.status === 'approved') return theme.colors.success.main;
    return theme.colors.danger.main;
  }};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
`;

const ActionButton = styled.button<{ variant: 'approve' | 'reject' }>`
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  background-color: ${props => props.variant === 'approve' ? theme.colors.success.main : theme.colors.danger.main};
  color: white;
  
  &:hover {
    opacity: 0.8;
  }
`;

interface Content {
  id: string;
  title: string;
  content: string;
  author: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
}

const ContentModeration: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'approved' | 'rejected'>('pending');
  
  const [contentList] = useState<Content[]>([
    {
      id: '1',
      title: 'Advanced Photosynthesis Notes',
      content: 'Comprehensive notes on light reactions, electron transport chain, and Calvin cycle with detailed diagrams.',
      author: 'Dr. Ahmed Khan',
      submittedDate: '2 hours ago',
      status: 'pending'
    },
    {
      id: '2',
      title: 'Cellular Biology Quick Reference',
      content: 'Quick reference guide for cell organelles, their functions, and interactions.',
      author: 'Prof. Fatima Ali',
      submittedDate: '1 day ago',
      status: 'approved'
    },
    {
      id: '3',
      title: 'Incomplete Biology Notes',
      content: 'Notes that are missing key information and contain incomplete sentences.',
      author: 'Student User',
      submittedDate: '3 days ago',
      status: 'rejected'
    }
  ]);

  const filteredContent = contentList.filter(c => c.status === activeTab);

  const handleApprove = (id: string) => {
    console.log('Approving content:', id);
  };

  const handleReject = (id: string) => {
    console.log('Rejecting content:', id);
  };

  return (
    <Container>
      <Title>🛡️ Content Moderation Tools</Title>
      
      <TabContainer>
        <Tab active={activeTab === 'pending'} onClick={() => setActiveTab('pending')}>
          ⏳ Pending ({contentList.filter(c => c.status === 'pending').length})
        </Tab>
        <Tab active={activeTab === 'approved'} onClick={() => setActiveTab('approved')}>
          ✅ Approved ({contentList.filter(c => c.status === 'approved').length})
        </Tab>
        <Tab active={activeTab === 'rejected'} onClick={() => setActiveTab('rejected')}>
          ❌ Rejected ({contentList.filter(c => c.status === 'rejected').length})
        </Tab>
      </TabContainer>
      
      <ContentList>
        {filteredContent.map((content) => (
          <ContentReviewCard key={content.id} status={content.status}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: theme.spacing.lg }}>
              <ContentTitle>{content.title}</ContentTitle>
              <StatusBadge status={content.status}>
                {content.status === 'pending' ? '⏳ Pending' : content.status === 'approved' ? '✅ Approved' : '❌ Rejected'}
              </StatusBadge>
            </div>
            
            <ContentText>{content.content}</ContentText>
            
            <ContentMeta>
              <span>👤 {content.author}</span>
              <span>📅 {content.submittedDate}</span>
            </ContentMeta>
            
            {activeTab === 'pending' && (
              <ActionButtons>
                <ActionButton variant="approve" onClick={() => handleApprove(content.id)}>
                  ✅ Approve
                </ActionButton>
                <ActionButton variant="reject" onClick={() => handleReject(content.id)}>
                  ❌ Reject
                </ActionButton>
              </ActionButtons>
            )}
          </ContentReviewCard>
        ))}
      </ContentList>
    </Container>
  );
};

export default ContentModeration;
