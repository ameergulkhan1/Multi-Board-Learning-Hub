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

const TeacherAITools: React.FC = () => {
  const sidebarItems = getTeacherSidebarItems('/assistant');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>🤖 AI Teaching Tools</PageTitle>
        <PageSubtitle>Leverage AI to enhance your teaching</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>AI Tools Dashboard</h2>
          <p>Use AI-powered tools to improve teaching effectiveness.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Generate exam questions</li>
            <li>Create lesson plans</li>
            <li>Analyze student performance</li>
            <li>Get personalized teaching suggestions</li>
            <li>Identify struggling students</li>
            <li>Generate feedback at scale</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default TeacherAITools;
