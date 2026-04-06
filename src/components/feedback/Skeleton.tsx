import React from 'react';

interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  count?: number;
  className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '1rem',
  circle = false,
  count = 1,
  className = '',
}) => {
  return (
    <>
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`skeleton ${className}`}
            style={{
              width,
              height,
              borderRadius: circle ? '50%' : 'var(--border-radius-md)',
              marginBottom: i < count - 1 ? '0.5rem' : '0',
            }}
          />
        ))}
    </>
  );
};
