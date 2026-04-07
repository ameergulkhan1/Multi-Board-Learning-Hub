import React from 'react';
import { MainLayout } from '../../../../components/layout/MainLayout.tsx';
import { getTeacherSidebarItems } from '../../../../config/sidebarConfig.ts';
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

const TeacherAssignments: React.FC = () => {
  const sidebarItems = getTeacherSidebarItems('/assessment');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>✅ Assignment Management</PageTitle>
        <PageSubtitle>Create and grade student assignments</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Assignment Dashboard</h2>
          <p>Design, distribute, and assess student assignments.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Create assignments</li>
            <li>Set deadlines and rubrics</li>
            <li>View submissions</li>
            <li>Grade assignments</li>
            <li>Provide feedback</li>
            <li>Track assignment completion</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default TeacherAssignments;
