import React, { useState } from 'react';
import { MainLayout } from '../../../../components/layout/MainLayout.tsx';
import { getAdminSidebarItems } from '../../../../config/sidebarConfig.ts';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

const PageContainer = styled.div`
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.bg.secondary};
  min-height: 100vh;
  
  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
  }
`;

const HeaderSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const PageSubtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

const ModerationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ModerationCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  text-align: center;
`;

const CardNumber = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${props => props.color || theme.colors.primary.main};
  margin-bottom: ${theme.spacing.md};
`;

const CardLabel = styled.div`
  font-size: ${theme.typography.fontSize.base};
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const ContentList = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  margin-top: ${theme.spacing.xl};
`;

const ContentItem = styled.div`
  padding: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border.light};
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

const ContentInfo = styled.div`
  flex: 1;
  margin-bottom: ${theme.spacing.md};
  
  @media (min-width: 640px) {
    margin-bottom: 0;
  }
`;

const ContentTitle = styled.h4`
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
`;

const ContentMeta = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin: 0;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
  margin-top: ${theme.spacing.md};
  
  @media (min-width: 640px) {
    margin-top: 0;
    flex-direction: column;
  }
`;

const ActionButton = styled.button<{ variant: 'approve' | 'reject' }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: none;
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  white-space: nowrap;
  transition: all ${theme.transition.fast};
  
  ${props => props.variant === 'approve' 
    ? `background-color: ${theme.colors.success.main}; color: white; &:hover { background-color: ${theme.colors.success.dark}; }`
    : `background-color: ${theme.colors.danger.main}; color: white; &:hover { background-color: ${theme.colors.danger.dark}; }`
  }
`;

const ContentModeration: React.FC = () => {
  const sidebarItems = getAdminSidebarItems('/admin/moderation');
  const [pendingItems] = useState([
    { id: '1', title: 'Advanced Math Lesson', type: 'Course Content', submittedBy: 'Dr. Khan', status: 'pending' },
    { id: '2', title: 'Physics Lab Project', type: 'Assignment', submittedBy: 'Mrs. Ahmed', status: 'pending' },
    { id: '3', title: 'Student Forum Post', type: 'Discussion', submittedBy: 'Ali Hassan', status: 'pending' },
  ]);

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <HeaderSection>
          <PageTitle>🛡️ Content Moderation</PageTitle>
          <PageSubtitle>Review and approve user-generated content</PageSubtitle>
        </HeaderSection>

        <ModerationGrid>
          <ModerationCard>
            <CardNumber color={theme.colors.warning.main}>12</CardNumber>
            <CardLabel>Pending Review</CardLabel>
          </ModerationCard>
          <ModerationCard>
            <CardNumber color={theme.colors.success.main}>287</CardNumber>
            <CardLabel>Approved</CardLabel>
          </ModerationCard>
          <ModerationCard>
            <CardNumber color={theme.colors.danger.main}>8</CardNumber>
            <CardLabel>Rejected</CardLabel>
          </ModerationCard>
        </ModerationGrid>

        <ContentList>
          <div style={{ padding: theme.spacing.lg, borderBottom: `2px solid ${theme.colors.border.light}` }}>
            <h3 style={{ color: theme.colors.text.primary, margin: 0 }}>📋 Pending Moderation</h3>
          </div>
          {pendingItems.map((item) => (
            <ContentItem key={item.id}>
              <ContentInfo>
                <ContentTitle>{item.title}</ContentTitle>
                <ContentMeta>{item.type} • By {item.submittedBy}</ContentMeta>
              </ContentInfo>
              <ActionButtons>
                <ActionButton variant="approve" onClick={() => alert(`Approved: ${item.title}`)}>Approve</ActionButton>
                <ActionButton variant="reject" onClick={() => alert(`Rejected: ${item.title}`)}>Reject</ActionButton>
              </ActionButtons>
            </ContentItem>
          ))}
        </ContentList>
      </PageContainer>
    </MainLayout>
  );
};

export default ContentModeration;
