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

const TeacherExams: React.FC = () => {
  const sidebarItems = getTeacherSidebarItems('/examination');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>📝 Exam Management</PageTitle>
        <PageSubtitle>Create and administer course exams</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Exam Dashboard</h2>
          <p>Design, schedule, and monitor student exams.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Features:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Create exam questions</li>
            <li>Set exam schedules</li>
            <li>Monitor exam progress</li>
            <li>Auto-grade assessments</li>
            <li>Analyze exam results</li>
            <li>Generate performance reports</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default TeacherExams;
