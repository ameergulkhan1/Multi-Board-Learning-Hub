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

const ParentProgress: React.FC = () => {
  const sidebarItems = getParentSidebarItems('/assessment');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>📈 Learning Progress</PageTitle>
        <PageSubtitle>Monitor your child's learning progress</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Progress Tracking</h2>
          <p>Track your child's academic progress in real-time.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>View current grades</li>
            <li>Track progress over time</li>
            <li>Identify improvement areas</li>
            <li>View learning milestones</li>
            <li>Receive progress alerts</li>
            <li>Compare with class average</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default ParentProgress;
