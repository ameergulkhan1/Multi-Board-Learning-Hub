import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout.tsx';
import { getStudentSidebarItems } from '../../../config/sidebarConfig.ts';
import type {} from './styles/StudentDashboard.css';

export const StudentDashboard = () => {
  const [studentName] = useState('Ali');
  const [currentStreak] = useState(14);
  const [completedTopics] = useState(23);
  const [overallScore] = useState(87);

  const sidebarItems = getStudentSidebarItems('/dashboard');

  const availableLectures = [
    { id: '1', subject: 'Mathematics', topic: 'Quadratic Equations', duration: '45 min', instructor: 'Mr. Ahmed' },
    { id: '2', subject: 'Science', topic: 'Photosynthesis', duration: '50 min', instructor: 'Dr. Lisa' },
    { id: '3', subject: 'English', topic: 'Shakespeare - Hamlet', duration: '60 min', instructor: 'Ms. Sarah' },
  ];

  const pendingAssessments = [
    { id: '1', subject: 'Mathematics', title: 'Algebra Quiz', dueDate: 'Tomorrow', score: null },
    { id: '2', subject: 'Science', title: 'Biology Assignment', dueDate: 'Mar 15', score: null },
    { id: '3', subject: 'History', title: 'Essay - Ancient Rome', dueDate: 'Mar 20', score: null },
  ];

  const studyMaterials = [
    { id: '1', subject: 'Mathematics', title: 'Algebra Notes', type: 'PDF', downloadCount: 234 },
    { id: '2', subject: 'Science', title: 'Physics Formulas', type: 'PDF', downloadCount: 156 },
    { id: '3', subject: 'English', title: 'Literature Summary', type: 'Document', downloadCount: 89 },
  ];

  const activityTimeline = [
    { id: '1', type: 'quiz', title: 'Math Quiz Completed', date: 'Today', score: 88 },
    { id: '2', type: 'lecture', title: 'Science Lecture Watched', date: '2 days ago' },
    { id: '3', type: 'assignment', title: 'Assignment Submitted', date: '3 days ago' },
  ];

  const achievements = [
    { id: '1', title: 'Quick Learner', icon: '⚡', achievement: '5 chapters completed' },
    { id: '2', title: 'Quiz Master', icon: '🎯', achievement: '90%+ on 3 quizzes' },
    { id: '3', title: 'Consistency King', icon: '👑', achievement: '14-day streak' },
  ];

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div className="dashboard-container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome Back, {studentName} 👋</h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>Access lectures, complete assessments, and track your learning progress</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#f0f4ff', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Overall Score</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', marginTop: '0.5rem' }}>{overallScore}%</div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Study Streak</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginTop: '0.5rem' }}>{currentStreak} days</div>
          </div>
          <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Topics Completed</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginTop: '0.5rem' }}>{completedTopics}</div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📖 Available Lectures</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {availableLectures.map((lecture) => (
              <div key={lecture.id} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '8px' }}>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{lecture.topic}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>{lecture.subject}</p>
                <p style={{ color: '#999', fontSize: '0.85rem', margin: '0.5rem 0' }}>By {lecture.instructor}</p>
                <p style={{ color: '#666', fontSize: '0.85rem' }}>{lecture.duration}</p>
                <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '0.5rem' }}>Watch Lecture</button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>✅ Pending Assessments</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
            {pendingAssessments.map((assessment) => (
              <div key={assessment.id} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '1rem', borderRadius: '8px' }}>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{assessment.title}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>{assessment.subject}</p>
                <p style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 'bold' }}>Due: {assessment.dueDate}</p>
                <button style={{ backgroundColor: '#10b981', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '0.5rem' }}>Take Assessment</button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📚 Study Materials</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f3f4f6' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Material</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Subject</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Type</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Downloads</th>
                </tr>
              </thead>
              <tbody>
                {studyMaterials.map((material) => (
                  <tr key={material.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem' }}>{material.title}</td>
                    <td style={{ padding: '1rem' }}>{material.subject}</td>
                    <td style={{ padding: '1rem' }}>{material.type}</td>
                    <td style={{ padding: '1rem' }}>{material.downloadCount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Recent Activity</h2>
            <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
              {activityTimeline.map((activity) => (
                <div key={activity.id} style={{ paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                  <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{activity.title}</p>
                  <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>{activity.date}</p>
                  {activity.score && <p style={{ color: '#3b82f6', fontWeight: 'bold', margin: '0.5rem 0 0 0' }}>Score: {activity.score}%</p>}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🏆 Achievements</h2>
            <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem' }}>
              {achievements.map((achievement) => (
                <div key={achievement.id} style={{ paddingBottom: '1rem', borderBottom: '1px solid #e5e7eb' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{achievement.icon}</div>
                  <p style={{ fontWeight: 'bold', margin: '0 0 0.25rem 0' }}>{achievement.title}</p>
                  <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>{achievement.achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StudentDashboard;
