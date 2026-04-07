import React from 'react';
import { MainLayout } from '../../../../components/layout/MainLayout.tsx';
import { getParentSidebarItems } from '../../../../config/sidebarConfig.ts';
import styled from 'styled-components';

const PageContainer = styled.div`
  padding: 2rem;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const PageSubtitle = styled.p`
  color: #666;
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const ContentCard = styled.div`
  background-color: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  padding: 2rem;
`;

const ParentAssignments: React.FC = () => {
  const sidebarItems = getParentSidebarItems('/examination');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>📝 Assignments & Homework</PageTitle>
        <PageSubtitle>Stay updated on your child's assignments</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Assignment Tracker</h2>
          <p>Monitor assignments and homework status.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>View pending assignments</li>
            <li>Check due dates</li>
            <li>See submission status</li>
            <li>View grades received</li>
            <li>Get deadline reminders</li>
            <li>Review teacher feedback</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default ParentAssignments;
