import React from 'react';
import { MainLayout } from '../../../../components/layout/MainLayout.tsx';
import { getStudentSidebarItems } from '../../../../config/sidebarConfig.ts';
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

const StudentCommunity: React.FC = () => {
  const sidebarItems = getStudentSidebarItems('/collaboration');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>👥 Community & Collaboration</PageTitle>
        <PageSubtitle>Connect and collaborate with peers</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Student Community</h2>
          <p>Engage with classmates and build your learning network.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Join study groups</li>
            <li>Participate in discussions</li>
            <li>Share learning resources</li>
            <li>Find study partners</li>
            <li>View class announcements</li>
            <li>Network with peers</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default StudentCommunity;
