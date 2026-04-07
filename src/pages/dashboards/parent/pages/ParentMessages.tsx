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

const ParentMessages: React.FC = () => {
  const sidebarItems = getParentSidebarItems('/assistant');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>💬 Messages</PageTitle>
        <PageSubtitle>Communicate with teachers and staff</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Messaging Portal</h2>
          <p>Stay connected with school staff and teachers.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Send messages to teachers</li>
            <li>Receive school announcements</li>
            <li>View message history</li>
            <li>Get instant notifications</li>
            <li>Schedule meetings</li>
            <li>Share documents</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default ParentMessages;
