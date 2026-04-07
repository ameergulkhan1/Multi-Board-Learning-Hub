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

const StudentTextbooks: React.FC = () => {
  const sidebarItems = getStudentSidebarItems('/textbook');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>📚 My Textbooks</PageTitle>
        <PageSubtitle>Access course materials and learning resources</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Course Textbooks & Materials</h2>
          <p>Browse and download textbooks for your enrolled courses.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Browse course textbooks</li>
            <li>Download PDF materials</li>
            <li>View chapter breakdowns</li>
            <li>Bookmark pages</li>
            <li>Search within textbooks</li>
            <li>Take notes on materials</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default StudentTextbooks;
