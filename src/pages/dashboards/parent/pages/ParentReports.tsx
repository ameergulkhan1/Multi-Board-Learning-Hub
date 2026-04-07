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

const ParentReports: React.FC = () => {
  const sidebarItems = getParentSidebarItems('/textbook');

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <PageTitle>📋 Student Reports</PageTitle>
        <PageSubtitle>Access comprehensive student performance reports</PageSubtitle>
        
        <ContentCard>
          <h2 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>Academic Reports</h2>
          <p>View detailed reports about your child's academic performance.</p>
          <p style={{ marginTop: '1rem', color: '#666' }}>Available Reports:</p>
          <ul style={{ marginLeft: '2rem', color: '#666' }}>
            <li>Semester performance reports</li>
            <li>Grade breakdowns by subject</li>
            <li>Attendance reports</li>
            <li>Teacher feedback summaries</li>
            <li>Assignment completion reports</li>
            <li>Download as PDF</li>
          </ul>
        </ContentCard>
      </PageContainer>
    </MainLayout>
  );
};

export default ParentReports;
