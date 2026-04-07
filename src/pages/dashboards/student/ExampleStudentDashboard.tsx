import React from 'react';
import styled from 'styled-components';
import theme from '../../../styles/theme';
import {
  DashboardPanel,
  StatisticsGrid,
  DashboardCommandBar,
} from '../../../components/fluent-ui';
import { DataGridComponent } from '../../../components/data-display';
import { Button } from '../../../components/ui';

// ============================================
// STYLED COMPONENTS
// ============================================

const PageContainer = styled.div`
  padding: ${theme.spacing.xl};
  background-color: ${theme.colors.bg.secondary};
  min-height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
`;

const WelcomeSection = styled.div`
  background: linear-gradient(135deg, ${theme.colors.primary.light} 0%, ${theme.colors.primary.main} 100%);
  color: ${theme.colors.primary.contrast};
  padding: ${theme.spacing['2xl']};
  border-radius: ${theme.borderRadius.lg};
  margin-bottom: ${theme.spacing.xl};
  box-shadow: ${theme.shadows.lg};
`;

const WelcomeTitle = styled.h1`
  margin: 0 0 ${theme.spacing.md} 0;
  font-size: ${theme.typography.fontSize['4xl']};
  font-weight: ${theme.typography.fontWeight.bold};
`;

const WelcomeSubtitle = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.lg};
  opacity: 0.95;
`;

const SectionTitle = styled.h2`
  font-size: ${theme.typography.fontSize['2xl']};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
  margin: ${theme.spacing.xl} 0 ${theme.spacing.lg} 0;
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 2px solid ${theme.colors.border.light};
`;

const ActionBar = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  flex-wrap: wrap;

  @media (max-width: ${theme.breakpoints.md}) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

// ============================================
// EXAMPLE STUDENT DASHBOARD PAGE
// Demonstrates how to use all the new components together
// ============================================

export const ExampleStudentDashboard: React.FC = () => {
  // Mock statistics data
  const statistics = [
    {
      label: 'GPA',
      value: '3.85',
      icon: 'Award',
      color: 'success' as const,
      change: 5,
      changeLabel: 'from last semester',
    },
    {
      label: 'Courses Enrolled',
      value: '5',
      icon: 'BookStack',
      color: 'primary' as const,
      change: -1,
      changeLabel: 'course dropped',
    },
    {
      label: 'Assignments Completed',
      value: '24 / 28',
      icon: 'CheckMark',
      color: 'warning' as const,
      percentage: 85,
    },
    {
      label: 'Attendance Rate',
      value: '96%',
      icon: 'Calendar',
      color: 'success' as const,
      percentage: 96,
    },
  ];

  // Mock course data for DataGrid
  const courseData = [
    {
      id: 1,
      name: 'Introduction to React',
      instructor: 'Dr. Jane Smith',
      status: 'Active',
      grade: 'A',
      credits: 3,
    },
    {
      id: 2,
      name: 'Advanced JavaScript',
      instructor: 'Prof. John Doe',
      status: 'Active',
      grade: 'A-',
      credits: 4,
    },
    {
      id: 3,
      name: 'Web Design Principles',
      instructor: 'Ms. Emily Johnson',
      status: 'Active',
      grade: 'B+',
      credits: 3,
    },
    {
      id: 4,
      name: 'Database Management',
      instructor: 'Dr. Robert Wilson',
      status: 'Active',
      grade: 'A-',
      credits: 4,
    },
    {
      id: 5,
      name: 'Data Structures',
      instructor: 'Prof. Michael Lee',
      status: 'Completed',
      grade: 'A',
      credits: 3,
    },
  ];

  const courseColumns = [
    { dataField: 'name', caption: 'Course Name', width: 220 },
    { dataField: 'instructor', caption: 'Instructor', width: 180 },
    { dataField: 'status', caption: 'Status', width: 120 },
    { dataField: 'grade', caption: 'Current Grade', width: 120 },
    { dataField: 'credits', caption: 'Credits', width: 100, alignment: 'center' as const },
  ];

  const handleSearch = (query: string) => {
    console.log('Searching for:', query);
  };

  return (
    <PageContainer>
      {/* Welcome Section */}
      <WelcomeSection>
        <WelcomeTitle>Welcome back, Sarah! 👋</WelcomeTitle>
        <WelcomeSubtitle>
          You're doing great this semester. Keep up the excellent work!
        </WelcomeSubtitle>
      </WelcomeSection>

      {/* Dashboard Command Bar */}
      <DashboardCommandBar
        showSearch={true}
        searchPlaceholder="Search courses..."
        onSearch={handleSearch}
        actions={[
          {
            key: 'download',
            name: 'Download Report',
            iconProps: { iconName: 'Download' },
            onClick: () => console.log('Download report clicked'),
          },
          {
            key: 'export',
            name: 'Export Data',
            iconProps: { iconName: 'Export' },
            onClick: () => console.log('Export data clicked'),
          },
          {
            key: 'settings',
            name: 'Settings',
            iconProps: { iconName: 'Settings' },
            onClick: () => console.log('Settings clicked'),
          },
        ]}
      />

      {/* Key Statistics Section */}
      <SectionTitle>Academic Performance</SectionTitle>
      <StatisticsGrid statistics={statistics} columns={4} />

      {/* Course Data Section */}
      <SectionTitle>My Courses</SectionTitle>

      <DashboardPanel
        title="Enrolled Courses"
        subtitle="View and manage your current course enrollments"
        variant="elevated"
      >
        <ActionBar>
          <Button variant="primary" size="md">
            Add Course
          </Button>
          <Button variant="secondary" size="md">
            View Schedule
          </Button>
          <Button variant="tertiary" size="md">
            Request Support
          </Button>
        </ActionBar>

        <DataGridComponent
          data={courseData}
          columns={courseColumns}
          allowPaging={true}
          allowSorting={true}
          allowFiltering={true}
          pageSize={10}
          height={500}
          onSelectionChanged={(selectedRows) => console.log('Rows selected:', selectedRows)}
          onRowClick={(rowData) => console.log('Row clicked:', rowData)}
        />
      </DashboardPanel>

      {/* Additional Panels */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: theme.spacing.xl,
          marginTop: theme.spacing.xl,
        }}
      >
        {/* Assignments Panel */}
        <DashboardPanel
          title="Upcoming Assignments"
          subtitle="Next 7 days"
          variant="default"
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.lg,
            }}
          >
            <AssignmentItem
              title="React Component Design Project"
              dueDate="2 days left"
              priority="high"
            />
            <AssignmentItem
              title="JavaScript Arrays and Methods"
              dueDate="4 days left"
              priority="medium"
            />
            <AssignmentItem
              title="CSS Grid Layout Challenge"
              dueDate="5 days left"
              priority="medium"
            />
          </div>
        </DashboardPanel>

        {/* Resources Panel */}
        <DashboardPanel title="Quick Resources" variant="default">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: theme.spacing.lg,
            }}
          >
            <ResourceLink
              title="Course Materials"
              description="Access lecture notes and slides"
              icon="📚"
            />
            <ResourceLink
              title="Study Groups"
              description="Connect with classmates"
              icon="👥"
            />
            <ResourceLink
              title="Office Hours"
              description="Meet with professors"
              icon="💬"
            />
            <ResourceLink
              title="Tutoring Services"
              description="Get personalized help"
              icon="🎓"
            />
          </div>
        </DashboardPanel>
      </div>
    </PageContainer>
  );
};

// ============================================
// MICRO COMPONENTS
// ============================================

interface AssignmentItemProps {
  title: string;
  dueDate: string;
  priority: 'high' | 'medium' | 'low';
}

const AssignmentItemContainer = styled.div<{ $priority: 'high' | 'medium' | 'low' }>`
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.bg.secondary};
  border-left: 3px solid
    ${(props) => {
      switch (props.$priority) {
        case 'high':
          return theme.colors.danger.main;
        case 'medium':
          return theme.colors.warning.main;
        case 'low':
          return theme.colors.success.main;
      }
    }};
  border-radius: ${theme.borderRadius.md};
  transition: all ${theme.transition.fast};

  &:hover {
    background-color: ${theme.colors.bg.tertiary};
    transform: translateX(4px);
  }
`;

const AssignmentTitle = styled.h4`
  margin: 0 0 ${theme.spacing.sm} 0;
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const AssignmentDueDate = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const AssignmentItem: React.FC<AssignmentItemProps> = ({
  title,
  dueDate,
  priority,
}) => (
  <AssignmentItemContainer $priority={priority}>
    <AssignmentTitle>{title}</AssignmentTitle>
    <AssignmentDueDate>{dueDate}</AssignmentDueDate>
  </AssignmentItemContainer>
);

interface ResourceLinkProps {
  title: string;
  description: string;
  icon: string;
}

const ResourceLinkContainer = styled.a`
  display: flex;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
  padding: ${theme.spacing.lg};
  background-color: ${theme.colors.bg.secondary};
  border-radius: ${theme.borderRadius.md};
  text-decoration: none;
  color: inherit;
  transition: all ${theme.transition.fast};
  cursor: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: ${theme.colors.primary.lighter};
    border-color: ${theme.colors.primary.main};
    transform: translateX(4px);
  }
`;

const ResourceIcon = styled.div`
  font-size: ${theme.typography.fontSize['2xl']};
  flex-shrink: 0;
`;

const ResourceContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xs};
`;

const ResourceTitle = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.base};
  font-weight: ${theme.typography.fontWeight.semibold};
  color: ${theme.colors.text.primary};
`;

const ResourceDescription = styled.p`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const ResourceLink: React.FC<ResourceLinkProps> = ({
  title,
  description,
  icon,
}) => (
  <ResourceLinkContainer>
    <ResourceIcon>{icon}</ResourceIcon>
    <ResourceContent>
      <ResourceTitle>{title}</ResourceTitle>
      <ResourceDescription>{description}</ResourceDescription>
    </ResourceContent>
  </ResourceLinkContainer>
);

ExampleStudentDashboard.displayName = 'ExampleStudentDashboard';
