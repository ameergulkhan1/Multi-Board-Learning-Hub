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
      </Routes>
    </Router>
  );
};

export default AppRoutes;
