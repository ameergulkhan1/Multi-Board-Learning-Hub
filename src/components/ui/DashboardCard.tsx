import React from 'react';
import { Skeleton } from '../feedback/Skeleton.tsx';

interface DashboardCardProps {
  title: string;
  value?: string | number;
  icon?: string;
  isLoading?: boolean;
  trend?: 'up' | 'down';
  trendValue?: string;
}

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  isLoading,
  trend,
  trendValue,
}) => {
  if (isLoading) {
    return (
      <div className="card">
        <Skeleton height="1.5rem" count={1} />
        <div style={{ marginTop: 'var(--spacing-md)' }}>
          <Skeleton height="2rem" count={1} />
        </div>
        <div style={{ marginTop: 'var(--spacing-md)' }}>
          <Skeleton height="1rem" count={1} />
        </div>
      </div>
    );
  }

  return (
    <div className="card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <div>
          <h6 style={{ margin: 0, color: 'var(--text-secondary)' }}>{title}</h6>
          <h2 style={{ margin: 'var(--spacing-md) 0 0' }}>{value}</h2>
        </div>
        {icon && <span style={{ fontSize: '2rem' }}>{icon}</span>}
      </div>
      {trend && trendValue && (
        <p
          style={{
            marginTop: 'var(--spacing-md)',
            color: trend === 'up' ? 'var(--success-color)' : 'var(--danger-color)',
          }}
        >
          {trend === 'up' ? '↑' : '↓'} {trendValue}
        </p>
      )}
    </div>
  );
};
