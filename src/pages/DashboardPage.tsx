import { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig';
import { useAuth } from '../hooks/useAuth';
import styled from 'styled-components';
import theme from '../styles/theme';
import DashboardComponent from '../features/dashboard/components/DashboardComponent';
import TextbookComponent from '../features/textbook/components/TextbookComponent';
import AssessmentComponent from '../features/assessment/components/AssessmentComponent';
import ExaminationComponent from '../features/examination/components/ExaminationComponent';
import AssistantComponent from '../features/assistant/components/AssistantComponent';
import CollaborationComponent from '../features/collaboration/components/CollaborationComponent';
import TeacherParentComponent from '../features/teacher-parent/components/TeacherParentComponent';
import MultilingualComponent from '../features/multilingual/components/MultilingualComponent';

const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${theme.colors.bg.secondary};
`;

const NavBar = styled.nav`
  background: white;
  border-bottom: 2px solid ${theme.colors.border.light};
  padding: ${theme.spacing.md} ${theme.spacing.lg};
  display: flex;
  gap: ${theme.spacing.md};
  overflow-x: auto;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: ${theme.shadows.sm};
`;

const NavButton = styled.button<{ $active?: boolean }>`
  padding: ${theme.spacing.sm} ${theme.spacing.lg};
  border: 2px solid ${props => props.$active ? theme.colors.primary.main : theme.colors.border.light};
  background: ${props => props.$active ? theme.colors.primary.lighter : 'white'};
  color: ${props => props.$active ? theme.colors.primary.main : theme.colors.text.primary};
  border-radius: ${theme.borderRadius.md};
  cursor: pointer;
  font-weight: ${theme.typography.fontWeight.semibold};
  font-size: ${theme.typography.fontSize.sm};
  white-space: nowrap;
  transition: all ${theme.transition.fast};
  
  &:hover {
    border-color: ${theme.colors.primary.main};
    color: ${theme.colors.primary.main};
  }
`;

const ContentSection = styled.div`
  width: 100%;
`;

export const DashboardPage = () => {
  const { user } = useAuth();
  const sidebarItems = getRoleAwareSidebarItems('/dashboard', user?.role);
  const [activeModule, setActiveModule] = useState<
    'dashboard' | 'textbook' | 'assessment' | 'examination' | 'assistant' | 'collaboration' | 'teacher-parent' | 'multilingual'
  >('dashboard');

  // Define modules with their display info
  const modules = [
    { id: 'dashboard', label: '📊 Dashboard', component: DashboardComponent },
    { id: 'textbook', label: '📚 Textbook', component: TextbookComponent },
    { id: 'assessment', label: '🧪 Assessment', component: AssessmentComponent },
    { id: 'examination', label: '📝 Exam', component: ExaminationComponent },
    { id: 'assistant', label: '🤖 Assistant', component: AssistantComponent },
    { id: 'collaboration', label: '🤝 Collaborate', component: CollaborationComponent },
    { id: 'teacher-parent', label: '👨‍🏫 Teacher', component: TeacherParentComponent },
    { id: 'multilingual', label: '🌍 Languages', component: MultilingualComponent },
  ];

  const ActiveComponent = modules.find(m => m.id === activeModule)?.component || DashboardComponent;

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <PageContainer>
        <NavBar>
          {modules.map((module) => (
            <NavButton
              key={module.id}
              $active={activeModule === module.id}
              onClick={() => setActiveModule(module.id as any)}
            >
              {module.label}
            </NavButton>
          ))}
        </NavBar>
        <ContentSection>
          <ActiveComponent />
        </ContentSection>
      </PageContainer>
    </MainLayout>
  );
};

export default DashboardPage;
