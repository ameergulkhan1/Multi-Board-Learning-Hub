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

const StudentAssessments: React.FC = () => {
  const sidebarItems = getStudentSidebarItems('/assessment');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>✅ My Assessments</PageTitle>
        <PageSubtitle>Complete assignments and check your progress</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Assessment Dashboard</h2>
          <p>Track and complete your assigned assessments.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>View pending assessments</li>
            <li>Complete assignments</li>
            <li>Submit work</li>
            <li>View feedback from instructors</li>
            <li>Check scores and grades</li>
            <li>Review assessment history</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default StudentAssessments;
