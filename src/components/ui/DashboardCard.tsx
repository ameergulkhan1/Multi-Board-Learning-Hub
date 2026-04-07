import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import { Skeleton } from '../feedback/Skeleton';

interface DashboardCardProps {
  title: string;
  value?: string | number;
  icon?: React.ReactNode;
  isLoading?: boolean;
  trend?: 'up' | 'down';
  trendValue?: string;
  onClick?: () => void;
  variant?: 'default' | 'elevated' | 'outlined';
}

// ============================================
// STYLED CARD COMPONENT
// Professional dashboard card with multiple variants
// ============================================

const CardContainer = styled.div<{ $variant: DashboardCardProps['variant'] }>`
  background-color: ${theme.colors.bg.primary};
  border-radius: ${theme.borderRadius.lg};
  padding: ${theme.spacing.xl};
  transition: all ${theme.transition.base};
  cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};

  ${(props) => {
    switch (props.$variant) {
      case 'elevated':
        return `
          box-shadow: ${theme.shadows.md};
          border: 1px solid ${theme.colors.border.light};
          
          &:hover {
            box-shadow: ${theme.shadows.lg};
            transform: translateY(-2px);
          }
        `;
      case 'outlined':
        return `
          border: 1.5px solid ${theme.colors.border.light};
          
          &:hover {
            border-color: ${theme.colors.primary.main};
            box-shadow: ${theme.shadows.sm};
          }
        `;
      case 'default':
      default:
        return `
          box-shadow: ${theme.shadows.sm};
          border: 1px solid ${theme.colors.border.light};
          
          &:hover {
            box-shadow: ${theme.shadows.md};
          }
        `;
    }
  }}

  &:active {
    transform: translateY(0);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${theme.spacing.lg};
  margin-bottom: ${theme.spacing.lg};
`;

const CardTitleSection = styled.div`
  flex: 1;
`;

const CardTitle = styled.h6`
  margin: 0;
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${theme.colors.text.secondary};
  text-transform: uppercase;
  letter-spacing: ${theme.typography.letterSpacing.tight};
`;

const CardValue = styled.h2`
  margin: ${theme.spacing.md} 0 0;
  font-size: ${theme.typography.fontSize['3xl']};
  font-weight: ${theme.typography.fontWeight.bold};
  color: ${theme.colors.text.primary};
  line-height: ${theme.typography.lineHeight.xs};
`;

const CardIcon = styled.div`
  font-size: 2.5rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  background-color: ${theme.colors.primary.lighter};
  border-radius: ${theme.borderRadius.lg};
  color: ${theme.colors.primary.main};
`;

const CardTrend = styled.div<{ $trend: 'up' | 'down' }>`
  margin-top: ${theme.spacing.lg};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  font-size: ${theme.typography.fontSize.sm};
  font-weight: ${theme.typography.fontWeight.medium};
  color: ${(props) =>
    props.$trend === 'up'
      ? theme.colors.success.main
      : theme.colors.danger.main};
`;

const TrendIcon = styled.span`
  font-size: ${theme.typography.fontSize.lg};
`;

// ============================================
// DASHBOARD CARD COMPONENT
// Displays key metrics with optional trends and icons
// ============================================

export const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  icon,
  isLoading,
  trend,
  trendValue,
  onClick,
  variant = 'default',
}) => {
  if (isLoading) {
    return (
      <CardContainer $variant={variant}>
        <Skeleton height="1rem" count={1} />
        <div style={{ marginTop: theme.spacing.lg }}>
          <Skeleton height="2.5rem" count={1} />
        </div>
        <div style={{ marginTop: theme.spacing.lg }}>
          <Skeleton height="0.875rem" count={1} width="60%" />
        </div>
      </CardContainer>
    );
  }

  return (
    <CardContainer $variant={variant} onClick={onClick}>
      {/* Header with title and icon */}
      <CardHeader>
        <CardTitleSection>
          <CardTitle>{title}</CardTitle>
          <CardValue>{value}</CardValue>
        </CardTitleSection>
        {icon && <CardIcon>{icon}</CardIcon>}
      </CardHeader>

      {/* Trend indicator */}
      {trend && trendValue && (
        <CardTrend $trend={trend}>
          <TrendIcon>{trend === 'up' ? '↑' : '↓'}</TrendIcon>
          <span>{trendValue}</span>
        </CardTrend>
      )}
    </CardContainer>
  );
};

DashboardCard.displayName = 'DashboardCard';
