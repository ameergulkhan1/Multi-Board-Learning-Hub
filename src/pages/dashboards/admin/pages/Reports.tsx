import React, { useState } from 'react';
import { MainLayout } from '../../../../components/layout/MainLayout.tsx';
import { getAdminSidebarItems } from '../../../../config/sidebarConfig.ts';
import styled from 'styled-components';
import theme from '../../../../styles/theme';

const PageContainer = styled.div`
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.bg.secondary};
  min-height: 100vh;
  
  @media (min-width: 768px) {
    padding: ${theme.spacing.xl};
  }
`;

const HeaderSection = styled.div`
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    margin-bottom: ${theme.spacing.xl};
  }
`;

const PageTitle = styled.h1`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize['3xl']};
  }
`;

const PageSubtitle = styled.p`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing.lg};
  }
`;

const Select = styled.select`
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  background-color: white;
  cursor: pointer;
  font-size: ${theme.typography.fontSize.base};
  flex: 1;
  
  @media (min-width: 768px) {
    flex: auto;
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
  }
`;

const Button = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%);
  color: white;
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  font-size: ${theme.typography.fontSize.base};
  width: 100%;
  
  @media (min-width: 768px) {
    width: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ReportsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ReportCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
  transition: all ${theme.transition.fast};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.lg};
  }
`;

const ReportIcon = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  margin-bottom: ${theme.spacing.md};
`;

const ReportTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ReportDesc = styled.p`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
  margin-bottom: ${theme.spacing.lg};
`;

const ReportButton = styled.button`
  background-color: ${theme.colors.primary.lighter};
  color: ${theme.colors.primary.main};
  border: 2px solid ${theme.colors.primary.main};
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  transition: all ${theme.transition.fast};
  width: 100%;
  
  &:hover {
    background-color: ${theme.colors.primary.main};
    color: white;
  }
`;

const Reports: React.FC = () => {
  const sidebarItems = getAdminSidebarItems('/admin/reports');
  const [reportType, setReportType] = useState('all');
  const [dateRange, setDateRange] = useState('monthly');

  const reports = [
    { icon: '👥', title: 'User Report', desc: 'Detailed user statistics and demographics', action: 'Generate' },
    { icon: '📚', title: 'Course Report', desc: 'Course enrollment and completion rates', action: 'Generate' },
    { icon: '📊', title: 'Performance Report', desc: 'System performance and uptime metrics', action: 'Download' },
    { icon: '💰', title: 'Financial Report', desc: 'Revenue and transaction history', action: 'Generate' },
    { icon: '⚠️', title: 'Issue Report', desc: 'Bug reports and system issues', action: 'Generate' },
    { icon: '📈', title: 'Growth Report', desc: 'Platform growth and retention metrics', action: 'Generate' },
  ];

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <HeaderSection>
          <PageTitle>📋 Reports</PageTitle>
          <PageSubtitle>Generate and download comprehensive system reports</PageSubtitle>
        </HeaderSection>

        <ControlPanel>
          <Select value={reportType} onChange={(e) => setReportType(e.target.value)}>
            <option value="all">All Report Types</option>
            <option value="users">User Reports</option>
            <option value="courses">Course Reports</option>
            <option value="performance">Performance Reports</option>
          </Select>
          <Select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="weekly">Last Week</option>
            <option value="monthly">Last Month</option>
            <option value="quarterly">Last Quarter</option>
            <option value="yearly">Last Year</option>
          </Select>
          <Button onClick={() => alert(`Generating ${reportType} report for ${dateRange}...`)}>⬇️ Download All</Button>
        </ControlPanel>

        <ReportsGrid>
          {reports.map((report, idx) => (
            <ReportCard key={idx}>
              <ReportIcon>{report.icon}</ReportIcon>
              <ReportTitle>{report.title}</ReportTitle>
              <ReportDesc>{report.desc}</ReportDesc>
              <ReportButton onClick={() => alert(`${report.action}ing ${report.title}...`)}>📧 {report.action}</ReportButton>
            </ReportCard>
          ))}
        </ReportsGrid>
      </PageContainer>
    </MainLayout>
  );
};

export default Reports;
