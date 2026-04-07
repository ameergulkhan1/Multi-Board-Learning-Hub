import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';

const Container = styled.div`
  padding: ${theme.spacing.lg};
  background: white;
  border-radius: ${theme.borderRadius.lg};
  box-shadow: ${theme.shadows.md};
`;

const Title = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const ReportContainer = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success.light} 0%, ${theme.colors.success.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing.lg};
`;

const ReportTitle = styled.h3`
  color: ${theme.colors.success.main};
  font-size: ${theme.typography.fontSize.lg};
`;

const PeriodBadge = styled.span`
  background-color: ${theme.colors.success.main};
  color: ${theme.colors.success.contrast};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const MetricCard = styled.div`
  background: white;
  padding: ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  text-align: center;
  border: 2px solid ${theme.colors.border.light};
`;

const MetricValue = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.success.main};
  margin-bottom: ${theme.spacing.sm};
`;

const MetricLabel = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const DetailsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const DetailItem = styled.li`
  padding: ${theme.spacing.sm} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  
  &:last-child {
    border-bottom: none;
  }
`;

const DetailLabel = styled.span`
  color: ${theme.colors.text.primary};
  font-weight: ${theme.typography.fontWeight.semibold};
`;

const DetailValue = styled.span`
  color: ${theme.colors.success.main};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const DownloadButton = styled.button`
  background-color: ${theme.colors.primary.main};
  color: ${theme.colors.primary.contrast};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  transition: all ${theme.transition.fast};
  margin-top: ${theme.spacing.lg};
  
  &:hover {
    background-color: ${theme.colors.primary.dark};
  }
`;

interface Report {
  id: string;
  period: string;
  studentName: string;
  overallGrade: string;
  attendance: number;
  assignments: number;
  tests: number;
  participation: number;
  strengths: string[];
  improvements: string[];
}

const PerformanceReport: React.FC = () => {
  const [reports] = useState<Report[]>([
    {
      id: '1',
      period: 'Term 1 (Sep-Dec 2024)',
      studentName: 'Ali Ahmed',
      overallGrade: 'A-',
      attendance: 95,
      assignments: 92,
      tests: 88,
      participation: 85,
      strengths: ['Strong Mathematics skills', 'Excellent attendance', 'Active participation'],
      improvements: ['Work on essay writing', 'Improve time management']
    },
    {
      id: '2',
      period: 'Term 2 (Jan-Apr 2025)',
      studentName: 'Ayesha Khan',
      overallGrade: 'B+',
      attendance: 88,
      assignments: 85,
      tests: 82,
      participation: 78,
      strengths: ['Good comprehension', 'Consistent progress', 'Creative thinking'],
      improvements: ['Increase classroom participation', 'Focus on science subjects']
    }
  ]);

  const handleDownload = (reportId: string) => {
    console.log('Downloading report:', reportId);
  };

  return (
    <Container>
      <Title>📊 Performance Reports</Title>
      
      {reports.map((report) => (
        <ReportContainer key={report.id}>
          <ReportHeader>
            <div>
              <ReportTitle>{report.studentName}</ReportTitle>
            </div>
            <PeriodBadge>{report.period}</PeriodBadge>
          </ReportHeader>
          
          <MetricsGrid>
            <MetricCard>
              <MetricValue>{report.overallGrade}</MetricValue>
              <MetricLabel>Overall Grade</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricValue>{report.attendance}%</MetricValue>
              <MetricLabel>Attendance</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricValue>{report.assignments}%</MetricValue>
              <MetricLabel>Assignments</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricValue>{report.tests}%</MetricValue>
              <MetricLabel>Tests</MetricLabel>
            </MetricCard>
            <MetricCard>
              <MetricValue>{report.participation}%</MetricValue>
              <MetricLabel>Participation</MetricLabel>
            </MetricCard>
          </MetricsGrid>
          
          <DetailsList>
            <DetailItem>
              <DetailLabel>✅ Strengths</DetailLabel>
              <DetailValue>{report.strengths.join(', ')}</DetailValue>
            </DetailItem>
            <DetailItem>
              <DetailLabel>📈 Areas for Improvement</DetailLabel>
              <DetailValue>{report.improvements.join(', ')}</DetailValue>
            </DetailItem>
          </DetailsList>
          
          <DownloadButton onClick={() => handleDownload(report.id)}>📥 Download PDF Report</DownloadButton>
        </ReportContainer>
      ))}
    </Container>
  );
};

export default PerformanceReport;
