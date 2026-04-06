import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts';

interface SidebarProps {
  items: Array<{
    label: string;
    href: string;
    icon?: string;
    active?: boolean;
  }>;
  onItemClick?: (href: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ items, onItemClick }) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleNavigate = (href: string) => {
    onItemClick?.(href);
    
    // If navigating to /dashboard, redirect to role-specific dashboard
    if (href === '/dashboard' && user) {
      const dashboardMap: Record<string, string> = {
        'student': '/student-dashboard',
        'teacher': '/teacher-dashboard',
        'parent': '/parent-dashboard',
        'admin': '/admin-dashboard',
      };
      navigate(dashboardMap[user.role] || '/');
    } else {
      navigate(href);
    }
  };

  return (
    <aside className="layout-sidebar">
      <nav style={{ padding: 'var(--spacing-lg)' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {items.map((item) => (
            <li key={item.href} style={{ marginBottom: 'var(--spacing-md)' }}>
              <button
                onClick={() => handleNavigate(item.href)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--spacing-md)',
                  padding: 'var(--spacing-md)',
                  borderRadius: 'var(--border-radius-md)',
                  backgroundColor: item.active
                    ? 'var(--primary-color)'
                    : 'transparent',
                  color: item.active ? 'white' : 'var(--text-primary)',
                  transition: 'all var(--transition-fast)',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  width: '100%',
                  textAlign: 'left',
                }}
              >
                {item.icon && <span style={{ fontSize: '1.2rem' }}>{item.icon}</span>}
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};
