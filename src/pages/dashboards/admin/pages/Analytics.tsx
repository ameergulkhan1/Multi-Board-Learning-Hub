import React from 'react';
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

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(170px, 1fr));
    gap: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.xl};
  }
`;

const StatCard = styled.div<{ $color?: string; $borderColor?: string }>`
  background: linear-gradient(135deg, ${props => props.$color || theme.colors.primary.lighter} 0%, ${theme.colors.bg.primary} 100%);
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.md};
  border-left: 4px solid ${props => props.$borderColor || theme.colors.primary.main};
  
  @media (min-width: 640px) {
    padding: ${theme.spacing.lg};
  }
`;

const StatValue = styled.div`
  font-size: ${theme.typography.fontSize.xl};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.xs};
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize['2xl']};
    margin-bottom: ${theme.spacing.sm};
  }
`;

const StatLabel = styled.div`
  font-size: ${theme.typography.fontSize.xs};
  color: ${theme.colors.text.secondary};
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.sm};
  }
`;

const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.xl};
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ChartCard = styled.div`
  background: white;
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.md};
`;

const ChartTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.lg};
`;

const ChartPlaceholder = styled.div`
  width: 100%;
  height: 250px;
  background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.bg.secondary} 100%);
  border-radius: ${theme.borderRadius.md};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.text.secondary};
  font-size: ${theme.typography.fontSize.base};
`;

const MetricsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: white;
  border-radius: ${theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};

  thead {
    background: linear-gradient(135deg, ${theme.colors.primary.lighter} 0%, ${theme.colors.bg.secondary} 100%);
    border-bottom: 2px solid ${theme.colors.border.light};
  }

  th {
    padding: ${theme.spacing.lg};
    text-align: left;
    font-weight: ${theme.typography.fontWeight.semibold};
    color: ${theme.colors.text.primary};
  }

  td {
    padding: ${theme.spacing.lg};
    border-bottom: 1px solid ${theme.colors.border.light};
  }

  tbody tr:hover {
    background-color: ${theme.colors.bg.secondary};
  }
`;

const Analytics: React.FC = () => {
  const sidebarItems = getAdminSidebarItems('/admin/analytics');

  const stats = {
    activeUsers: 3847,
    dailyActiveUsers: 1256,
    engagementRate: '78%',
    systemUptime: '99.9%',
  };

  const metrics = [
    { metric: 'Total Page Views', value: '45,234', change: '+12%' },
    { metric: 'Average Session Duration', value: '4m 32s', change: '+8%' },
    { metric: 'Bounce Rate', value: '28%', change: '-5%' },
    { metric: 'New Users (Today)', value: '342', change: '+15%' },
  ];

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <HeaderSection>
          <PageTitle>📈 Analytics & Reports</PageTitle>
          <PageSubtitle>Monitor system usage, performance, and user engagement</PageSubtitle>
        </HeaderSection>

        <StatsGrid>
          <StatCard $color={theme.colors.primary.lighter} $borderColor={theme.colors.primary.main}>
            <StatValue>{stats.activeUsers}</StatValue>
            <StatLabel>Total Active Users</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.success.bg} $borderColor={theme.colors.success.main}>
            <StatValue>{stats.dailyActiveUsers}</StatValue>
            <StatLabel>Daily Active Users</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.info.bg} $borderColor={theme.colors.info.main}>
            <StatValue>{stats.engagementRate}</StatValue>
            <StatLabel>Engagement Rate</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.warning.bg} $borderColor={theme.colors.warning.main}>
            <StatValue>{stats.systemUptime}</StatValue>
            <StatLabel>System Uptime</StatLabel>
          </StatCard>
        </StatsGrid>

        <ChartsGrid>
          <ChartCard>
            <ChartTitle>👥 User Growth (30 Days)</ChartTitle>
            <ChartPlaceholder>Interactive Line Chart</ChartPlaceholder>
          </ChartCard>
          <ChartCard>
            <ChartTitle>📊 Platform Usage by Role</ChartTitle>
            <ChartPlaceholder>Interactive Pie Chart</ChartPlaceholder>
          </ChartCard>
          <ChartCard>
            <ChartTitle>⏰ Peak Usage Hours</ChartTitle>
            <ChartPlaceholder>Interactive Bar Chart</ChartPlaceholder>
          </ChartCard>
          <ChartCard>
            <ChartTitle>🌍 Geographic Distribution</ChartTitle>
            <ChartPlaceholder>Interactive Map View</ChartPlaceholder>
          </ChartCard>
        </ChartsGrid>

        <div style={{ background: 'white', borderRadius: theme.borderRadius.lg, boxShadow: theme.shadows.md, overflow: 'hidden' }}>
          <div style={{ padding: theme.spacing.lg, borderBottom: `1px solid ${theme.colors.border.light}` }}>
            <ChartTitle>📊 Key Metrics</ChartTitle>
          </div>
          <MetricsTable>
            <thead>
              <tr>
                <th>Metric</th>
                <th>Value</th>
                <th>Change</th>
              </tr>
            </thead>
            <tbody>
              {metrics.map((m, idx) => (
                <tr key={idx}>
                  <td>{m.metric}</td>
                  <td style={{ fontWeight: 'bold' }}>{m.value}</td>
                  <td style={{ color: theme.colors.success.main, fontWeight: 'bold' }}>{m.change}</td>
                </tr>
              ))}
            </tbody>
          </MetricsTable>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default Analytics;
