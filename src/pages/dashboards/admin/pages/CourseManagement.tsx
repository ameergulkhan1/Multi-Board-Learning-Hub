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
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    font-size: ${theme.typography.fontSize.base};
  }
`;

const ControlPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.md};
  margin-bottom: ${theme.spacing.lg};
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: ${theme.spacing.xl};
    gap: ${theme.spacing.lg};
  }
`;

const SearchInput = styled.input`
  flex: 1;
  padding: ${theme.spacing.md};
  border: 2px solid ${theme.colors.border.light};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.sm};
  width: 100%;
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.base};
  }
  
  &:focus {
    outline: none;
    border-color: ${theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${theme.colors.primary.main}20;
  }
`;

const CreateButton = styled.button`
  background: linear-gradient(135deg, ${theme.colors.primary.main} 0%, ${theme.colors.primary.dark} 100%);
  color: ${theme.colors.primary.contrast};
  border: none;
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  font-weight: ${theme.typography.fontWeight.semibold};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  font-size: ${theme.typography.fontSize.sm};
  white-space: nowrap;
  width: 100%;
  
  @media (min-width: 640px) {
    font-size: ${theme.typography.fontSize.base};
    width: auto;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.lg};
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

const CoursesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${theme.spacing.md};
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.spacing.lg};
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CourseCard = styled.div`
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

const CourseTitle = styled.h3`
  font-size: ${theme.typography.fontSize.lg};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  margin-bottom: ${theme.spacing.sm};
`;

const CourseInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.md};
  font-size: ${theme.typography.fontSize.sm};
  color: ${theme.colors.text.secondary};
`;

const CourseMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.lg};
  font-size: ${theme.typography.fontSize.sm};
`;

const Badge = styled.span<{ type: 'active' | 'draft' | 'archived' }>`
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  text-transform: uppercase;
  
  ${props => {
    switch (props.type) {
      case 'active':
        return `background-color: ${theme.colors.success.bg}; color: ${theme.colors.success.main};`;
      case 'draft':
        return `background-color: ${theme.colors.warning.bg}; color: ${theme.colors.warning.main};`;
      case 'archived':
        return `background-color: ${theme.colors.border.light}; color: ${theme.colors.text.secondary};`;
      default:
        return '';
    }
  }}
`;

const ProgressBar = styled.div`
  background-color: ${theme.colors.border.light};
  height: 8px;
  border-radius: ${theme.borderRadius.circle};
  overflow: hidden;
  margin-bottom: ${theme.spacing.md};
`;

const ProgressFill = styled.div<{ percentage: number }>`
  background: linear-gradient(90deg, ${theme.colors.primary.main}, ${theme.colors.primary.light});
  height: 100%;
  width: ${props => props.percentage}%;
  transition: width 0.3s ease;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.sm};
`;

const ActionButton = styled.button`
  flex: 1;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border: 1px solid ${theme.colors.border.light};
  background-color: white;
  color: ${theme.colors.primary.main};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  transition: all ${theme.transition.fast};
  font-size: ${theme.typography.fontSize.xs};
  font-weight: ${theme.typography.fontWeight.semibold};
  
  &:hover {
    background-color: ${theme.colors.primary.lighter};
    border-color: ${theme.colors.primary.main};
  }
`;

const CourseManagement: React.FC = () => {
  const sidebarItems = getAdminSidebarItems('/admin/courses');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    { id: '1', title: 'Math 101', status: 'active', students: 45, modules: 12, progress: 85 },
    { id: '2', title: 'English Literature', status: 'active', students: 38, modules: 10, progress: 70 },
    { id: '3', title: 'Science Basics', status: 'draft', students: 0, modules: 8, progress: 45 },
    { id: '4', title: 'History Overview', status: 'active', students: 52, modules: 15, progress: 90 },
    { id: '5', title: 'Physics Advanced', status: 'active', students: 28, modules: 14, progress: 60 },
    { id: '6', title: 'Chemistry Lab', status: 'archived', students: 0, modules: 11, progress: 100 },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const stats = {
    total: courses.length,
    active: courses.filter(c => c.status === 'active').length,
    students: courses.reduce((sum, c) => sum + c.students, 0),
    modules: courses.reduce((sum, c) => sum + c.modules, 0),
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <HeaderSection>
          <PageTitle>📚 Course Management</PageTitle>
          <PageSubtitle>Create, manage, and monitor all courses</PageSubtitle>
        </HeaderSection>

        <StatsGrid>
          <StatCard $color={theme.colors.primary.lighter} $borderColor={theme.colors.primary.main}>
            <StatValue>{stats.total}</StatValue>
            <StatLabel>Total Courses</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.success.bg} $borderColor={theme.colors.success.main}>
            <StatValue>{stats.active}</StatValue>
            <StatLabel>Active Courses</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.info.bg} $borderColor={theme.colors.info.main}>
            <StatValue>{stats.students}</StatValue>
            <StatLabel>Enrolled Students</StatLabel>
          </StatCard>
          <StatCard $color={theme.colors.warning.bg} $borderColor={theme.colors.warning.main}>
            <StatValue>{stats.modules}</StatValue>
            <StatLabel>Total Modules</StatLabel>
          </StatCard>
        </StatsGrid>

        <ControlPanel>
          <SearchInput
            type="text"
            placeholder="Search courses..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <CreateButton>+ Create Course</CreateButton>
        </ControlPanel>

        <CoursesGrid>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id}>
              <CourseTitle>{course.title}</CourseTitle>
              <CourseMeta>
                <Badge type={course.status as 'active' | 'draft' | 'archived'}>{course.status}</Badge>
              </CourseMeta>
              <CourseInfo>
                <div>👥 {course.students} students</div>
                <div>📖 {course.modules} modules</div>
              </CourseInfo>
              <div style={{ marginBottom: theme.spacing.sm, fontSize: theme.typography.fontSize.xs }}>
                Completion: {course.progress}%
              </div>
              <ProgressBar>
                <ProgressFill percentage={course.progress} />
              </ProgressBar>
              <ActionButtons>
                <ActionButton onClick={() => alert(`Edit course ${course.id}`)}>Edit</ActionButton>
                <ActionButton onClick={() => alert(`View course ${course.id}`)}>View</ActionButton>
              </ActionButtons>
            </CourseCard>
          ))}
        </CoursesGrid>
      </PageContainer>
    </MainLayout>
  );
};

export default CourseManagement;
