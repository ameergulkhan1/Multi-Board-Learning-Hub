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

const TeacherCourseContent: React.FC = () => {
  const sidebarItems = getTeacherSidebarItems('/textbook');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>📚 Course Content Management</PageTitle>
        <PageSubtitle>Create and manage your course materials</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Content Management</h2>
          <p>Build and organize comprehensive course content for your students.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Create course modules</li>
            <li>Upload textbooks and slides</li>
            <li>Organize content by chapters</li>
            <li>Add multimedia content</li>
            <li>Create reading assignments</li>
            <li>Manage content versions</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default TeacherCourseContent;
