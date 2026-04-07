// Main routes
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../features/dashboard/pages/DashboardPage.tsx';
import { TextbookPage } from '../features/textbook/pages/TextbookPage.tsx';
import { AssessmentPage } from '../features/assessment/pages/AssessmentPage.tsx';
import { ExaminationPage } from '../features/examination/pages/ExaminationPage.tsx';
import { AssistantPage } from '../features/assistant/pages/AssistantPage.tsx';
import { CollaborationPage } from '../features/collaboration/pages/CollaborationPage.tsx';
import { TeacherParentPage } from '../features/teacher-parent/pages/TeacherParentPage.tsx';

// Admin Dashboard Pages
import AdminDashboard from '../pages/dashboards/admin/AdminDashboard.tsx';
import UserManagement from '../pages/dashboards/admin/pages/UserManagement.tsx';
import CourseManagement from '../pages/dashboards/admin/pages/CourseManagement.tsx';
import Analytics from '../pages/dashboards/admin/pages/Analytics.tsx';
import ContentModeration from '../pages/dashboards/admin/pages/ContentModeration.tsx';
import AdminSettings from '../pages/dashboards/admin/pages/AdminSettings.tsx';
import Security from '../pages/dashboards/admin/pages/Security.tsx';
import Reports from '../pages/dashboards/admin/pages/Reports.tsx';

// Student Dashboard Pages
import StudentDashboard from '../pages/dashboards/student/StudentDashboard.tsx';
import StudentTextbooks from '../pages/dashboards/student/pages/StudentTextbooks.tsx';
import StudentAssessments from '../pages/dashboards/student/pages/StudentAssessments.tsx';
import StudentExams from '../pages/dashboards/student/pages/StudentExams.tsx';
import StudentAssistant from '../pages/dashboards/student/pages/StudentAssistant.tsx';
import StudentCommunity from '../pages/dashboards/student/pages/StudentCommunity.tsx';

// Teacher Dashboard Pages
import TeacherDashboard from '../pages/dashboards/teacher/TeacherDashboard.tsx';
import TeacherCourseContent from '../pages/dashboards/teacher/pages/TeacherCourseContent.tsx';
import TeacherAssignments from '../pages/dashboards/teacher/pages/TeacherAssignments.tsx';
import TeacherExams from '../pages/dashboards/teacher/pages/TeacherExams.tsx';
import TeacherAITools from '../pages/dashboards/teacher/pages/TeacherAITools.tsx';
import TeacherClassDiscussion from '../pages/dashboards/teacher/pages/TeacherClassDiscussion.tsx';

// Parent Dashboard Pages
import ParentDashboard from '../pages/dashboards/parent/ParentDashboard.tsx';
import ParentReports from '../pages/dashboards/parent/pages/ParentReports.tsx';
import ParentProgress from '../pages/dashboards/parent/pages/ParentProgress.tsx';
import ParentAssignments from '../pages/dashboards/parent/pages/ParentAssignments.tsx';
import ParentMessages from '../pages/dashboards/parent/pages/ParentMessages.tsx';
import ParentTeacherContact from '../pages/dashboards/parent/pages/ParentTeacherContact.tsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/textbook" element={<TextbookPage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
        <Route path="/examination" element={<ExaminationPage />} />
        <Route path="/assistant" element={<AssistantPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/teacher-parent" element={<TeacherParentPage />} />
        
        {/* Admin Dashboard Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/courses" element={<CourseManagement />} />
        <Route path="/admin/analytics" element={<Analytics />} />
        <Route path="/admin/moderation" element={<ContentModeration />} />
        <Route path="/admin/settings" element={<AdminSettings />} />
        <Route path="/admin/security" element={<Security />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* Student Dashboard Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/textbooks" element={<StudentTextbooks />} />
        <Route path="/student/assessments" element={<StudentAssessments />} />
        <Route path="/student/exams" element={<StudentExams />} />
        <Route path="/student/assistant" element={<StudentAssistant />} />
        <Route path="/student/community" element={<StudentCommunity />} />

        {/* Teacher Dashboard Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/courses" element={<TeacherCourseContent />} />
        <Route path="/teacher/assignments" element={<TeacherAssignments />} />
        <Route path="/teacher/exams" element={<TeacherExams />} />
        <Route path="/teacher/ai-tools" element={<TeacherAITools />} />
        <Route path="/teacher/discussions" element={<TeacherClassDiscussion />} />

        {/* Parent Dashboard Routes */}
        <Route path="/parent/dashboard" element={<ParentDashboard />} />
        <Route path="/parent/reports" element={<ParentReports />} />
        <Route path="/parent/progress" element={<ParentProgress />} />
        <Route path="/parent/assignments" element={<ParentAssignments />} />
        <Route path="/parent/messages" element={<ParentMessages />} />
        <Route path="/parent/teacher-contact" element={<ParentTeacherContact />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
