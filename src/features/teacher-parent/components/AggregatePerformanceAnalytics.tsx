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

const TabContainer = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};
  border-bottom: 2px solid ${theme.colors.border.light};
`;

const Tab = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${props => props.active ? theme.colors.primary.main : theme.colors.text.secondary};
  cursor: pointer;
  border-bottom: 3px solid ${props => props.active ? theme.colors.primary.main : 'transparent'};
  transition: all ${theme.transition.fast};
  
  &:hover {
    color: ${theme.colors.primary.main};
  }
`;

const ContentPanel = styled.div<{ show: boolean }>`
  display: ${props => props.show ? 'block' : 'none'};
`;

const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
`;

const MetricCard = styled.div`
  background: linear-gradient(135deg, ${theme.colors.success.light} 0%, ${theme.colors.success.light} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  text-align: center;
  border: 2px solid ${theme.colors.success.main};
`;

const MetricValue = styled.div`
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.success.main};
  margin-bottom: ${theme.spacing.sm};
`;

const MetricLabel = styled.div`
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.sm};
`;

const ChartContainer = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.secondary};
`;

const ClassList = styled.div`
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
`;

const ClassItem = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.md};
  padding: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.md};
  border-left: 4px solid ${theme.colors.primary.main};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ClassName = styled.div`
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const ClassStats = styled.div`
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const PerformanceBadge = styled.span<{ grade: string }>`
  background-color: ${props => {
    if (props.grade === 'A') return theme.colors.success.main;
    if (props.grade === 'B') return theme.colors.primary.main;
    if (props.grade === 'C') return theme.colors.warning.main;
    return theme.colors.danger.main;
  }};
  color: white;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const AggregateAnalytics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'classes' | 'trends'>('overview');

  const classData = [
    { id: '1', name: 'Biology 101', avgGrade: 'A', students: 35, attendance: 92 },
    { id: '2', name: 'Chemistry 201', avgGrade: 'B+', students: 28, attendance: 87 },
    { id: '3', name: 'Physics A1', avgGrade: 'A-', students: 32, attendance: 94 }
  ];

  return (
    <Container>
      <Title>📊 Aggregate Performance Analytics</Title>
      
      <TabContainer>
        <Tab active={activeTab === 'overview'} onClick={() => setActiveTab('overview')}>
          📈 Overview
        </Tab>
        <Tab active={activeTab === 'classes'} onClick={() => setActiveTab('classes')}>
          🎓 By Class
        </Tab>
        <Tab active={activeTab === 'trends'} onClick={() => setActiveTab('trends')}>
          📉 Trends
        </Tab>
      </TabContainer>
      
      <ContentPanel show={activeTab === 'overview'}>
        <AnalyticsGrid>
          <MetricCard>
            <MetricValue>856</MetricValue>
            <MetricLabel>Total Students</MetricLabel>
          </MetricCard>
          <MetricCard>
            <MetricValue>91%</MetricValue>
            <MetricLabel>Avg Attendance</MetricLabel>
          </MetricCard>
          <MetricCard>
            <MetricValue>87%</MetricValue>
            <MetricLabel>Avg Performance</MetricLabel>
          </MetricCard>
          <MetricCard>
            <MetricValue>4.2/5</MetricValue>
            <MetricLabel>Avg Satisfaction</MetricLabel>
          </MetricCard>
        </AnalyticsGrid>
        
        <ChartContainer>
          📊 Performance Distribution Chart (Placeholder)
        </ChartContainer>
      </ContentPanel>
      
      <ContentPanel show={activeTab === 'classes'}>
        <ClassList>
          {classData.map((cls) => (
            <ClassItem key={cls.id}>
              <div>
                <ClassName>{cls.name}</ClassName>
                <ClassStats>
                  👥 {cls.students} students | 📍 {cls.attendance}% attendance
                </ClassStats>
              </div>
              <PerformanceBadge grade={cls.avgGrade.charAt(0)}>
                {cls.avgGrade}
              </PerformanceBadge>
            </ClassItem>
          ))}
        </ClassList>
      </ContentPanel>
      
      <ContentPanel show={activeTab === 'trends'}>
        <ChartContainer>
          📈 Performance Trends Over Time (Placeholder)
        </ChartContainer>
        <ChartContainer style={{ marginTop: theme.spacing.lg }}>
          📉 Improvement Rate by Subject (Placeholder)
        </ChartContainer>
      </ContentPanel>
    </Container>
  );
};

export default AggregateAnalytics;
