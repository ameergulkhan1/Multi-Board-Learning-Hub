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

const StudentAssistant: React.FC = () => {
  const sidebarItems = getStudentSidebarItems('/assistant');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>🤖 AI Learning Assistant</PageTitle>
        <PageSubtitle>Get personalized learning support</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>AI Assistant</h2>
          <p>Leverage AI-powered learning tools for personalized support.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Ask questions about course material</li>
            <li>Get personalized study recommendations</li>
            <li>Generate practice questions</li>
            <li>Get instant explanations</li>
            <li>Identify weak areas</li>
            <li>Receive learning insights</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default StudentAssistant;
