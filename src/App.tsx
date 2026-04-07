import React, { useMemo } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ErrorBoundary } from './components/feedback/ErrorBoundary.tsx';
import { Providers } from './app/providers.tsx';
import { useAuth } from './hooks/useAuth.ts';
import { AuthLandingPage } from './pages/AuthLandingPage.tsx';
import { StudentDashboard } from './pages/dashboards/student/StudentDashboard.tsx';
import { TeacherDashboard } from './pages/dashboards/teacher/TeacherDashboard.tsx';
import { ParentDashboard } from './pages/dashboards/parent/ParentDashboard.tsx';
import AdminDashboard from './pages/dashboards/admin/AdminDashboard.tsx';
import UserManagement from './pages/dashboards/admin/pages/UserManagement.tsx';
import CourseManagement from './pages/dashboards/admin/pages/CourseManagement.tsx';
import Analytics from './pages/dashboards/admin/pages/Analytics.tsx';
import ContentModeration from './pages/dashboards/admin/pages/ContentModeration.tsx';
import AdminSettings from './pages/dashboards/admin/pages/AdminSettings.tsx';
import Security from './pages/dashboards/admin/pages/Security.tsx';
import Reports from './pages/dashboards/admin/pages/Reports.tsx';

import { TextbookPage } from './pages/TextbookPage.tsx';
import { AssessmentPage } from './pages/AssessmentPage.tsx';
import { ExaminationPage } from './pages/ExaminationPage.tsx';
import { AssistantPage } from './pages/AssistantPage.tsx';
import { CollaborationPage } from './pages/CollaborationPage.tsx';
import { TeacherParentPage } from './pages/TeacherParentPage.tsx';
import './styles/globals.css';
import './styles/layout.css';
import './styles/components.css';
import './styles/loaders.css';

// Protected route wrapper that checks authentication and role
const ProtectedRoute: React.FC<{ element: React.ReactElement; requiredRole?: string }> = ({ element, requiredRole }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to={getDashboardForRole(user.role)} replace />;
  }

  return element;
};

// Helper function to get dashboard route for a specific role
const getDashboardForRole = (role: string): string => {
  switch (role) {
    case 'student':
      return '/student-dashboard';
    case 'teacher':
      return '/teacher-dashboard';
    case 'parent':
      return '/parent-dashboard';
    case 'admin':
      return '/admin-dashboard';
    default:
      return '/';
  }
};

// Smart Route Component that shows role-specific content
const RoleSensitiveRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" replace />;
  }

  return element;
};

function AppContent() {
  const { user, getDashboardRoute } = useAuth();

  // Redirect authenticated users to their dashboard on root
  const rootElement = useMemo(() => {
    if (user) {
      return <Navigate to={getDashboardRoute()} replace />;
    }
    return <AuthLandingPage />;
  }, [user, getDashboardRoute]);

  return (
    <Routes>
      {/* Auth and Landing */}
      <Route path="/" element={rootElement} />

      {/* Role-specific Dashboards */}
      <Route 
        path="/student-dashboard" 
        element={<ProtectedRoute element={<StudentDashboard />} requiredRole="student" />} 
      />
      <Route 
        path="/teacher-dashboard" 
        element={<ProtectedRoute element={<TeacherDashboard />} requiredRole="teacher" />} 
      />
      <Route 
        path="/parent-dashboard" 
        element={<ProtectedRoute element={<ParentDashboard />} requiredRole="parent" />} 
      />
      <Route 
        path="/admin-dashboard" 
        element={<ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />} 
      />
      
      {/* Admin Sub-pages */}
      <Route 
        path="/admin/dashboard" 
        element={<ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />} 
      />
      <Route 
        path="/admin/users" 
        element={<ProtectedRoute element={<UserManagement />} requiredRole="admin" />} 
      />
      <Route 
        path="/admin/courses" 
        element={<ProtectedRoute element={<CourseManagement />} requiredRole="admin" />} 
      />
      <Route 
        path="/admin/analytics" 
        element={<ProtectedRoute element={<Analytics />} requiredRole="admin" />} 
      />
      <Route 
        path="/admin/moderation" 
        element={<ProtectedRoute element={<ContentModeration />} requiredRole="admin" />} 
      />
      <Route 
        path="/admin/settings" 
        element={<ProtectedRoute element={<AdminSettings />} requiredRole="admin" />} 
      />
      <Route 
        path="/admin/security" 
        element={<ProtectedRoute element={<Security />} requiredRole="admin" />} 
      />
      <Route 
        path="/admin/reports" 
        element={<ProtectedRoute element={<Reports />} requiredRole="admin" />} 
      />

      {/* Generic Dashboard (redirects to role-specific) */}
      <Route 
        path="/dashboard" 
        element={
          user ? (
            <Navigate to={getDashboardRoute()} replace />
          ) : (
            <Navigate to="/" replace />
          )
        } 
      />

      {/* Feature Pages (Protected, accessible to authenticated users) */}
      <Route path="/textbook" element={<RoleSensitiveRoute element={<TextbookPage />} />} />
      <Route path="/assessment" element={<RoleSensitiveRoute element={<AssessmentPage />} />} />
      <Route path="/examination" element={<RoleSensitiveRoute element={<ExaminationPage />} />} />
      <Route path="/assistant" element={<RoleSensitiveRoute element={<AssistantPage />} />} />
      <Route path="/collaboration" element={<RoleSensitiveRoute element={<CollaborationPage />} />} />
      <Route path="/teacher-parent" element={<RoleSensitiveRoute element={<TeacherParentPage />} />} />

      {/* Catch all - redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <Providers>
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </Providers>
    </ErrorBoundary>
  );
}

export default App;
