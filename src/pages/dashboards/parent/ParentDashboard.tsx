import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout.tsx';
import { getParentSidebarItems } from '../../../config/sidebarConfig.ts';
import type {} from './styles/ParentDashboard.css';

export const ParentDashboard = () => {
  const [parentName] = useState('Mr. & Mrs. Smith');

  const sidebarItems = getParentSidebarItems('/dashboard');

  const children = [
    { id: '1', name: 'Alex Smith', class: 'Class 10-A', overallScore: 82, attendance: 95, nextExam: 'Mathematics Final - Mar 15' },
    { id: '2', name: 'Emma Smith', class: 'Class 9-B', overallScore: 88, attendance: 98, nextExam: 'Science Quiz - Mar 12' },
  ];

  const parentAlerts = [
    { id: '1', type: 'warning', title: 'Low Score Alert', message: 'Alex scored below average in Mathematics', date: '1 day ago' },
    { id: '2', type: 'info', title: 'Assignment Submission', message: 'Emma submitted the History essay successfully', date: '2 days ago' },
    { id: '3', type: 'achievement', title: 'Achievement Unlocked', message: 'Alex achieved a 14-day study streak', date: '3 days ago' },
  ];

  const attendanceRecords = [
    { id: '1', childName: 'Alex Smith', subject: 'Mathematics', attendance: 92, daysPresent: 23, daysMissed: 2 },
    { id: '2', childName: 'Alex Smith', subject: 'Science', attendance: 96, daysPresent: 24, daysMissed: 1 },
    { id: '3', childName: 'Emma Smith', subject: 'English', attendance: 98, daysPresent: 25, daysMissed: 0 },
    { id: '4', childName: 'Emma Smith', subject: 'History', attendance: 94, daysPresent: 23, daysMissed: 2 },
  ];

  const upcomingExams = [
    { id: '1', childName: 'Alex Smith', subject: 'Mathematics', examDate: 'Mar 15', topics: 'Algebra, Geometry, Calculus', importance: 'high' },
    { id: '2', childName: 'Alex Smith', subject: 'Science', examDate: 'Mar 20', topics: 'Physics, Chemistry, Biology', importance: 'high' },
    { id: '3', childName: 'Emma Smith', subject: 'English', examDate: 'Mar 18', topics: 'Literature, Grammar', importance: 'medium' },
  ];

  const parentReports = [
    { id: '1', childName: 'Alex Smith', type: 'Monthly Progress', date: 'Mar 1', link: 'View' },
    { id: '2', childName: 'Alex Smith', type: 'Behavior Report', date: 'Feb 28', link: 'View' },
    { id: '3', childName: 'Emma Smith', type: 'Academic Report', date: 'Mar 1', link: 'View' },
  ];

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div className="dashboard-container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome, {parentName} 👋</h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>Monitor your children's performance, attendance, and assignments</p>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👨‍👩‍👧 Children&apos;s Overview</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {children.map((child) => (
              <div key={child.id} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem', margin: '0 0 0.5rem 0' }}>{child.name}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>Class: {child.class}</p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                  <div style={{ backgroundColor: '#f0f4ff', padding: '0.75rem', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>Overall Score</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6', margin: '0.25rem 0 0 0' }}>{child.overallScore}%</p>
                  </div>
                  <div style={{ backgroundColor: '#f0fdf4', padding: '0.75rem', borderRadius: '4px' }}>
                    <p style={{ fontSize: '0.8rem', color: '#666', margin: 0 }}>Attendance</p>
                    <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#10b981', margin: '0.25rem 0 0 0' }}>{child.attendance}%</p>
                  </div>
                </div>
                <p style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 'bold', margin: '1rem 0 0 0' }}>📅 {child.nextExam}</p>
                <button style={{ width: '100%', backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}>View Details</button>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🔔 Alerts & Notifications</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
            {parentAlerts.map((alert) => (
              <div key={alert.id} style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>
                  {alert.type === 'warning' && '⚠️'}
                  {alert.type === 'info' && 'ℹ️'}
                  {alert.type === 'achievement' && '🏆'}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{alert.title}</p>
                  <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>{alert.message}</p>
                  <p style={{ color: '#999', fontSize: '0.8rem', margin: 0 }}>{alert.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📊 Attendance Report</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f3f4f6' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Child Name</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Subject</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Attendance</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Present</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Absent</th>
                </tr>
              </thead>
              <tbody>
                {attendanceRecords.map((record) => (
                  <tr key={record.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem' }}>{record.childName}</td>
                    <td style={{ padding: '1rem' }}>{record.subject}</td>
                    <td style={{ padding: '1rem', color: '#3b82f6', fontWeight: 'bold' }}>{record.attendance}%</td>
                    <td style={{ padding: '1rem', color: '#10b981' }}>{record.daysPresent}</td>
                    <td style={{ padding: '1rem', color: '#f59e0b' }}>{record.daysMissed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📝 Upcoming Exams</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
            {upcomingExams.map((exam) => (
              <div key={exam.id} style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', padding: '1.5rem', borderRadius: '8px' }}>
                <h3 style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{exam.subject}</h3>
                <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.5rem 0' }}>Student: {exam.childName}</p>
                <p style={{ color: '#f59e0b', fontSize: '0.9rem', fontWeight: 'bold', margin: '0.5rem 0' }}>📅 {exam.examDate}</p>
                <p style={{ color: '#666', fontSize: '0.85rem', margin: '0.5rem 0' }}>Topics: {exam.topics}</p>
                <div style={{ display: 'inline-block', backgroundColor: exam.importance === 'high' ? '#fee2e2' : '#fef3c7', color: exam.importance === 'high' ? '#991b1b' : '#b45309', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.8rem', marginTop: '0.5rem' }}>
                  {exam.importance === 'high' ? 'Important' : 'Medium'}
                </div>
                <button style={{ width: '100%', backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '1rem' }}>View Study Materials</button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📄 Reports</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead style={{ backgroundColor: '#f3f4f6' }}>
                <tr>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Child Name</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Report Type</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}>Date</th>
                  <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid #e5e7eb' }}></th>
                </tr>
              </thead>
              <tbody>
                {parentReports.map((report) => (
                  <tr key={report.id} style={{ borderBottom: '1px solid #e5e7eb' }}>
                    <td style={{ padding: '1rem' }}>{report.childName}</td>
                    <td style={{ padding: '1rem' }}>{report.type}</td>
                    <td style={{ padding: '1rem' }}>{report.date}</td>
                    <td style={{ padding: '1rem' }}>
                      <button style={{ backgroundColor: '#3b82f6', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ParentDashboard;
