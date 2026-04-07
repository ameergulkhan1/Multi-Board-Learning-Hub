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

const TeacherClassDiscussion: React.FC = () => {
  const sidebarItems = getTeacherSidebarItems('/collaboration');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>👥 Class Discussion</PageTitle>
        <PageSubtitle>Facilitate and moderate class discussions</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Discussion Forum</h2>
          <p>Manage class discussions and student engagement.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Create discussion topics</li>
            <li>Monitor student participation</li>
            <li>Moderate comments</li>
            <li>Pin important discussions</li>
            <li>Grade discussions</li>
            <li>View discussion analytics</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default TeacherClassDiscussion;
