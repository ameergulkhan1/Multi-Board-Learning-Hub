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

const StudentExams: React.FC = () => {
  const sidebarItems = getStudentSidebarItems('/examination');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>📝 My Exams</PageTitle>
        <PageSubtitle>Prepare and take your course exams</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Examination Dashboard</h2>
          <p>View upcoming exams and manage exam preparation.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>View scheduled exams</li>
            <li>Access exam guidelines</li>
            <li>Take practice tests</li>
            <li>Participate in online exams</li>
            <li>View exam results</li>
            <li>Review answer sheets</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default StudentExams;
