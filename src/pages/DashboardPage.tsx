import React, { useState } from 'react';
import { MainLayout } from '../components/layout/MainLayout.tsx';
import { DashboardCard } from '../components/ui/DashboardCard.tsx';
import { getRoleAwareSidebarItems } from '../config/sidebarConfig.ts';
import { useAuth } from '../hooks/useAuth.ts';

export const DashboardPage = () => {
  const { user } = useAuth();
  const [isLoading] = useState(false);
  const sidebarItems = getRoleAwareSidebarItems('/dashboard', user?.role);

  return (
    <MainLayout showSidebar={true} sidebarItems={sidebarItems}>
      <div>
        <h1>Dashboard</h1>
        <p>Welcome to your learning dashboard. Track your progress and achievements.</p>

        <div className="grid grid-3" style={{ marginTop: 'var(--spacing-xl)' }}>
          <DashboardCard
            title="Total Points"
            value="2,450"
            icon="🏆"
            isLoading={isLoading}
            trend="up"
            trendValue="+12% from last week"
          />
          <DashboardCard
            title="Assignments"
            value="8/12"
            icon="📋"
            isLoading={isLoading}
            trend="up"
            trendValue="4 completed"
          />
          <DashboardCard
            title="Average Score"
            value="87%"
            icon="⭐"
            isLoading={isLoading}
            trend="up"
            trendValue="+5% improvement"
          />
        </div>

        <div style={{ marginTop: 'var(--spacing-2xl)' }}>
          <h2>Recent Activity</h2>
          <div className="card">
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid var(--border-color)' }}>
                  <th style={{ textAlign: 'left', padding: 'var(--spacing-md)' }}>
                    Activity
                  </th>
                  <th style={{ textAlign: 'left', padding: 'var(--spacing-md)' }}>
                    Date
                  </th>
                  <th style={{ textAlign: 'left', padding: 'var(--spacing-md)' }}>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {['Math Quiz Completed', 'Science Assignment', 'English Test'].map(
                  (activity, idx) => (
                    <tr
                      key={idx}
                      style={{
                        borderBottom: '1px solid var(--border-color)',
                      }}
                    >
                      <td style={{ padding: 'var(--spacing-md)' }}>{activity}</td>
                      <td style={{ padding: 'var(--spacing-md)' }}>
                        {new Date(Date.now() - idx * 86400000).toLocaleDateString()}
                      </td>
                      <td style={{ padding: 'var(--spacing-md)' }}>
                        <span className="badge badge-success">Completed</span>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
