import React, { useState } from 'react';
import { MainLayout } from '../../../components/layout/MainLayout.tsx';
import { getAdminSidebarItems } from '../../../config/sidebarConfig.ts';
import type {} from './styles/AdminDashboard.css';

const AdminDashboard: React.FC = () => {
  const [adminName] = useState<string>('Administrator');

  const sidebarItems = getAdminSidebarItems('/admin/dashboard');

  const systemMetrics = {
    totalUsers: 5847,
    activeStudents: 3200,
    activeTeachers: 450,
    totalCourses: 184,
    systemHealth: 98,
  };

  const userStats = [
    { category: 'Students', count: 3200, percentage: 55, color: '#3b82f6' },
    { category: 'Teachers', count: 450, percentage: 8, color: '#10b981' },
    { category: 'Parents', count: 1800, percentage: 31, color: '#f59e0b' },
    { category: 'Admin Staff', count: 397, percentage: 6, color: '#8b5cf6' },
  ];

  const recentActivity = [
    { id: '1', type: 'user-created', action: 'New student registered', user: 'Ahmed Ali', timestamp: '2 hours ago' },
    { id: '2', type: 'content-approved', action: 'Lecture approved', user: 'Mrs. Johnson', timestamp: '4 hours ago' },
    { id: '3', type: 'course-added', action: 'New course added', user: 'Admin User', timestamp: '1 day ago' },
    { id: '4', type: 'user-created', action: 'New teacher registered', user: 'Mr. Hassan', timestamp: '2 days ago' },
    { id: '5', type: 'moderate', action: 'Content flagged for review', user: 'System', timestamp: '3 days ago' },
  ];

  const pendingApprovals = [
    { id: '1', type: 'Lecture', title: 'Advanced Calculus - Part 3', submittedBy: 'Dr. Khan', date: '3 hours ago' },
    { id: '2', type: 'Course', title: 'Web Development Basics', submittedBy: 'Mr. Ahmed', date: '5 hours ago' },
    { id: '3', type: 'User Account', title: 'Teacher Profile - Fatima Ahmed', submittedBy: 'System', date: '1 day ago' },
    { id: '4', type: 'Assignment', title: 'Final Project - AI App', submittedBy: 'Mrs. Johnson', date: '2 days ago' },
  ];

  const systemStatus = [
    { service: 'API Server', status: 'Operational', uptime: '99.9%' },
    { service: 'Database', status: 'Operational', uptime: '99.8%' },
    { service: 'Storage', status: 'Operational', uptime: '99.9%' },
    { service: 'CDN', status: 'Operational', uptime: '100%' },
  ];

  const handleApprove = (id: string) => {
    alert(`Approved item ${id}`);
  };

  const handleReject = (id: string) => {
    alert(`Rejected item ${id}`);
  };

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div className="dashboard-container">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Welcome, {adminName} 👋</h1>
          <p style={{ color: '#666', fontSize: '1rem' }}>Manage users, approve content, monitor system health, and generate reports</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ backgroundColor: '#f0f4ff', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Total Users</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#3b82f6', marginTop: '0.5rem' }}>{systemMetrics.totalUsers}</div>
          </div>
          <div style={{ backgroundColor: '#f0fdf4', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Active Students</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#10b981', marginTop: '0.5rem' }}>{systemMetrics.activeStudents}</div>
          </div>
          <div style={{ backgroundColor: '#fef3c7', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Teachers</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#f59e0b', marginTop: '0.5rem' }}>{systemMetrics.activeTeachers}</div>
          </div>
          <div style={{ backgroundColor: '#fce7f3', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>Courses</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#ec4899', marginTop: '0.5rem' }}>{systemMetrics.totalCourses}</div>
          </div>
          <div style={{ backgroundColor: '#dbeafe', padding: '1.5rem', borderRadius: '8px' }}>
            <div style={{ fontSize: '0.9rem', color: '#666' }}>System Health</div>
            <div style={{ fontSize: '2rem', fontWeight: 'bold', color: '#0284c7', marginTop: '0.5rem' }}>{systemMetrics.systemHealth}%</div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>👥 User Distribution</h2>
            <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1.5rem' }}>
              {userStats.map((stat) => (
                <div key={stat.category} style={{ marginBottom: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <span style={{ fontWeight: 'bold' }}>{stat.category}</span>
                    <span style={{ color: '#666', fontSize: '0.9rem' }}>{stat.count} ({stat.percentage}%)</span>
                  </div>
                  <div style={{ height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', backgroundColor: stat.color, width: `${stat.percentage}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>🔧 System Status</h2>
            <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
              {systemStatus.map((service) => (
                <div key={service.service} style={{ padding: '1rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <p style={{ fontWeight: 'bold', margin: '0 0 0.25rem 0' }}>{service.service}</p>
                    <p style={{ color: '#666', fontSize: '0.85rem', margin: 0 }}>Uptime: {service.uptime}</p>
                  </div>
                  <div style={{ width: '12px', height: '12px', backgroundColor: '#10b981', borderRadius: '50%' }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>⏳ Pending Approvals</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            {pendingApprovals.map((item) => (
              <div key={item.id} style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'inline-block', backgroundColor: '#e0e7ff', color: '#3730a3', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
                    {item.type}
                  </div>
                  <h3 style={{ fontWeight: 'bold', margin: '0.5rem 0' }}>{item.title}</h3>
                  <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.25rem 0' }}>By: {item.submittedBy}</p>
                  <p style={{ color: '#999', fontSize: '0.8rem', margin: 0 }}>{item.date}</p>
                </div>
                <div style={{ display: 'flex', gap: '0.5rem', marginLeft: '1rem' }}>
                  <button onClick={() => handleApprove(item.id)} style={{ backgroundColor: '#10b981', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}>Approve</button>
                  <button onClick={() => handleReject(item.id)} style={{ backgroundColor: '#ef4444', color: 'white', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '0.9rem' }}>Reject</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>📊 Recent Activity</h2>
          <div style={{ backgroundColor: '#fff', border: '1px solid #e5e7eb', borderRadius: '8px', overflow: 'hidden' }}>
            {recentActivity.map((activity) => (
              <div key={activity.id} style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', display: 'flex', gap: '1rem' }}>
                <div style={{ fontSize: '1.5rem' }}>
                  {activity.type === 'user-created' && '👤'}
                  {activity.type === 'content-approved' && '✅'}
                  {activity.type === 'course-added' && '📚'}
                  {activity.type === 'moderate' && '🚩'}
                  {activity.type === 'content-rejected' && '❌'}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ fontWeight: 'bold', margin: '0 0 0.5rem 0' }}>{activity.action}</p>
                  <p style={{ color: '#666', fontSize: '0.9rem', margin: '0.25rem 0' }}>By: {activity.user}</p>
                  <p style={{ color: '#999', fontSize: '0.8rem', margin: 0 }}>{activity.timestamp}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AdminDashboard;
