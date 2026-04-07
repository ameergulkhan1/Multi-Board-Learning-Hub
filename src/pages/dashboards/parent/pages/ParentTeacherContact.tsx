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

const ParentTeacherContact: React.FC = () => {
  const sidebarItems = getParentSidebarItems('/collaboration');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>👨‍🏫 Teacher Contact & Meeting</PageTitle>
        <PageSubtitle>Connect directly with your child's teachers</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Teacher Directory</h2>
          <p>Find contact information and schedule meetings with teachers.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>View all teachers</li>
            <li>Check teacher profiles</li>
            <li>Schedule conferences</li>
            <li>Book office hours</li>
            <li>View response times</li>
            <li>Download contact information</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default ParentTeacherContact;
